export type ProjectProps = {
  title: string;
  tech: string;
  image:string;
  url:string;
  description: string;
  linkedin: string;
  github: string;
  
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
  projects: ProjectProps[];
};

export type UserProps = {
  user: User;
};
