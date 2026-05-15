import type { ComponentType, CSSProperties } from "react";

/** Icon component type used across skill displays */
export type IconComponent = ComponentType<{
  size?: number;
  className?: string;
  style?: CSSProperties;
  color?: string;
}>;

export interface ProjectImage {
  type?: 'video' | 'image';
  src: string;
  alt: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ProjectType {
  id: number;
  title: string;
  images: ProjectImage[];
  desc: string;
  role: string;
  tools: string[];
  github?: string;
  link?: string;
  coverImage: string;
  category: "Development" | "Design" | "Game" | "Fullstack";
  process?: ProcessStep[];
}

export interface SkillType {
  name: string;
  icon?: IconComponent;
  color?: string;
  category?: 'Frontend' | 'Backend' | 'Design' | 'AI' | 'Tools' | 'Languages';
}

export interface SocialInfo {
  name: string;
  icon: string;
  url: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
  desc?: string;
}

export interface WorkItem {
  company: string;
  role: string;
  period: string;
  desc?: string;
}

export interface Certificate {
  title: string;
  desc: string;
  image: string;
  link: string;
}
