export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  duration: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
