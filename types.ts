
import type React from 'react';

export interface CommandHistory {
  id: number;
  command: string;
  output: React.ReactNode;
}

export interface Skill {
  category: string;
  details: string;
}

export interface Experience {
  role: string;
  company: string;
  dates: string;
  description: string[];
  skills: string;
}

export interface Project {
  name: string;
  description: string[];
  environment?: string;
  skills: string;
}

export interface ResumeData {
  name: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  objective: string;
  education: {
    degree: string;
    school: string;
    dates: string;
  };
  skills: Skill[];
  experience: Experience[];
  virtualInternships: Experience[];
  projects: Project[];
  certifications: string[];
}
