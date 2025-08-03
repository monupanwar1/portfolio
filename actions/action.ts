// actions.ts
'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { v4 as uuid } from 'uuid'; // Ensure uuid is imported

// Assuming you have your Cloudinary configuration setup in '@/lib/cloudinary'
// For example, '@/lib/cloudinary.ts' might look like this:
// import { v2 as cloudinary } from 'cloudinary';
// cloudinary.config({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME, api_key: process.env.CLOUDINARY_API_KEY, api_secret: process.env.CLOUDINARY_API_SECRET });
// export { cloudinary };
import { cloudinary } from '@/lib/cloudinary';

// Assuming your Prisma client is initialized in '@/lib/db'
// For example, '@/lib/db.ts' might look like this:
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// export { prisma };
import { prisma } from '@/lib/db';


// export aysnc function getData(){

// }

export async function addData(formData: FormData) {
  try {
    console.log('Received formData:', formData);

    const ownerName = formData.get('ownerName') as string;
    const jobRole = formData.get('jobRole') as string;
    const bio = formData.get('bio') as string;
    const gmail = formData.get('gmail') as string;
    // Corrected: Use 'githubLink' and 'LinkedinLink' from client form
    const github = formData.get('githubLink') as string;
    const linkedin = formData.get('LinkedinLink') as string;
    const aboutBio = formData.get('aboutBio') as string;
    const aboutSection = formData.get('aboutSection') as string;

    const resumeFile = formData.get('resume') as File;

    // --- Handle Resume Upload ---
    let resumeUrl: string | undefined = undefined;
    if (resumeFile && typeof resumeFile !== 'string' && resumeFile.size > 0) {
      const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());
      try {
        const resumeUpload = await new Promise<any>((resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              {
                folder: 'resumes',
                public_id: uuid(),
                resource_type: 'raw', // Important for non-image uploads like PDFs
              },
              (err, result) => {
                if (err) return reject(err);
                resolve(result);
              },
            )
            .end(resumeBuffer);
        });
        resumeUrl = resumeUpload.secure_url;
      } catch (uploadError: any) {
        console.error('Error uploading resume to Cloudinary:', uploadError);
        // Do not throw, but report error for this part if user can proceed without resume
        return { error: `Failed to upload resume: ${uploadError.message}` };
      }
    }

    // --- Check or Create User ---
    // Ensure the gmail is unique and exists or create a new user
    let user = await prisma.user.findUnique({ where: { gmail } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          ownerName,
          jobRole,
          bio,
          gmail,
          github,
          linkedin,
          aboutBio,
          aboutSection,
          resumeUrl,
        },
      });
      console.log('New user created:', user.id);
    } else {
      // Optionally update existing user data if needed (e.g., resumeUrl might change)
      user = await prisma.user.update({
        where: { gmail },
        data: {
          ownerName,
          jobRole,
          bio,
          github,
          linkedin,
          aboutBio,
          aboutSection,
          // Only update resumeUrl if a new one was uploaded
          ...(resumeUrl && { resumeUrl }),
        },
      });
      console.log('Existing user updated:', user.id);
    }

    // --- Handle Multiple Projects ---
    const projectsToCreate = [];
    // Iterate through formData to find all project-related fields
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('projectTitle-')) {
        const projectId = key.split('-')[1]; // Extract the dynamic ID
        const projectIndex = projectsToCreate.findIndex(
          (p) => p.id === projectId,
        );

        if (projectIndex === -1) {
          projectsToCreate.push({
            id: projectId,
            title: value as string,
            techStack: formData.get(`projectTechStack-${projectId}`) as string,
            description: formData.get(
              `projectDescription-${projectId}`,
            ) as string,
            repoLink: formData.get(`projectrepo-${projectId}`) as string, // Corrected name
            imageFile: formData.get(`projectImages-${projectId}`) as File, // Corrected name
          });
        }
      }
    }

    const createdProjects = [];
    for (const projectData of projectsToCreate) {
      const { id, title, techStack, description, repoLink, imageFile } =
        projectData;

      if (!imageFile || typeof imageFile === 'string' || imageFile.size === 0) {
        console.warn(
          `Project ${title} is missing an image or image is empty. Skipping project image upload.`,
        );
        // You might want to return an error or handle this more gracefully
        // For now, we'll continue without an image for this project if not provided
        // or ensure `imageUrl` is null.
      }

      let imageUrl: string | null = null;
      if (imageFile && typeof imageFile !== 'string' && imageFile.size > 0) {
        try {
          const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
          const imageUpload = await new Promise<any>((resolve, reject) => {
            cloudinary.uploader
              .upload_stream(
                { folder: 'projects', public_id: uuid() },
                (err, result) => {
                  if (err) return reject(err);
                  resolve(result);
                },
              )
              .end(imageBuffer);
          });
          imageUrl = imageUpload.secure_url;
        } catch (uploadError: any) {
          console.error(
            `Error uploading image for project "${title}" to Cloudinary:`,
            uploadError,
          );
          // Decide how to handle this: skip project, set imageUrl to null, or throw error
        }
      }

      const project = await prisma.project.create({
        data: {
          userId: user.id,
          title,
          techStack,
          description,
          repoLink,
          imageUrl, // This will be null if upload failed or no image provided
        },
      });
      createdProjects.push(project);
    }

    revalidatePath('/'); // Revalidate the cache for the root path

    return { success: true, user, projects: createdProjects };
  } catch (error: any) {
    console.error('Error in addData server action:', error);
    // Return a more specific error message based on the error type if possible
    return { error: `Failed to add data: ${error.message}` };
  }
}
export async function getAllProjects() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        user: true, // Include the user who owns the project
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { success: true, projects };
  } catch (error: any) {
    console.error('Error fetching all projects:', error);
    return { error: `Failed to fetch all project data: ${error.message}` };
  }
}
export async function getAllData() {
  try {
    const users = await prisma.user.findMany({
      include: {
        projects: true, 
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { success: true, users };
  } catch (error: any) {
    console.error('Error fetching all project:', error);
    return { error: `Failed to fetch all user data: ${error.message}` };
  }
}