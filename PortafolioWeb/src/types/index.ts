export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  github?: string;
  linkedin?: string;
}

export interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
}

export interface Passion {
  title: string;
  description: string;
  icon: string;
}
