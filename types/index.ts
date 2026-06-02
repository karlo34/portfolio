export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  media: ProjectMedia;
  demoUrl?: string;
  githubUrl?: string;
  tags?: string[];
};

export type Profile = {
  name: string;
  tagline: string;
  bio: string;
  longBio?: string;
  heroTagline?: string;
  yearsExperience?: number;
  phone?: string;
  certification?: string;
  image: string;
  skills?: string[];
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "code" | "paint" | "api" | "mobile";
};
