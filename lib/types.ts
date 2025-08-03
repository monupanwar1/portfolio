export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  repoLink: string;
  techStack: string;
  userId: string;
  createdAt: Date | string;
};

export type User = {
  id: string;
  ownerName: string;
  jobRole: string;
  bio: string;
  aboutBio: string;
  aboutSection: string;
  github: string;
  gmail: string;
  linkedin: string;
  resumeUrl: string;
  createdAt: Date | string;
  projects: Project[];
};

export type UserProps = {
  user: User;
};
