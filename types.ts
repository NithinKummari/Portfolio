
export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  linkedinDisplay: string;
}

export interface EducationEntry {
  degree: string;
  major: string;
  institution: string;
  years: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillsData {
  technical: SkillCategory[];
  soft: string[];
}

export interface ExperienceEntry {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface ProjectEntry {
  name: string;
  description: string[];
  techStack?: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  careerObjective: string;
  education: EducationEntry[];
  skills: SkillsData;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  certifications: string[];
  declaration: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}
