import type { SocialInfo, IconComponent } from "@/types";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export const PERSONAL_INFO = {
  name: "etsuwithtea",
  nickname: "est",
  role: "Frontend Dev | UX/UI Design",
  bio: "CS Graduate & Frontend Developer specializing in TypeScript and User-Centric Design. Dedicated to transforming complex visual concepts into clean, functional, and high-performance web applications",
  age: "21 years old",
  status: "Fresh Graduate (Computer Science)",
  interests: "Modern Web Tech, Interactive Design, Creative Coding",
  quote: "I am dedicated to creating intuitive digital experiences that simplify life and empower users."
};

export const SOCIALS: SocialInfo[] = [
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/navapan-suthon-5245a3384' },
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/etsuwithtea' },
  { name: 'GitHub', icon: 'github', url: 'https://github.com/etsuwithtea' },
];

/** Maps social `icon` string keys to their React icon components */
export const SOCIAL_ICON_MAP: Record<string, IconComponent> = {
  linkedin: CiLinkedin,
  facebook: CiFacebook,
  github: FaGithub,
};