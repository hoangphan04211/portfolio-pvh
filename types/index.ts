export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  features: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface Education {
  school: string;
  major: string;
  period: string;
  gpa: string;
}
