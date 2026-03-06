export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string; // for video, optional poster image
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
  /** Short tagline for hero right column, e.g. "I design beautifully simple things..." */
  heroTagline?: string;
  /** Years of experience for hero, e.g. 10 */
  yearsExperience?: number;
  /** Phone number for header, e.g. "+001 (313) 345 678" */
  phone?: string;
  /** Certification label for hero badge, e.g. "IDF CERTIFIED PROFESSIONAL UI/UX DESIGNER" */
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
