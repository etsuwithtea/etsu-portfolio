import type { SkillType } from "@/types";
import {
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiNodedotjs,
  SiMongodb, SiFigma, SiGit, SiGithubcopilot, SiOpenai, SiNuxt,
  SiBlazor, SiDotnet, SiClaude, SiGooglegemini, SiDocker,
  SiPostgresql, SiLine, SiGoogle, SiPython, SiApachenetbeanside,
  SiJavascript, SiAndroidstudio, SiJetbrains
} from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

export const SKILLS: SkillType[] = [
  // Languages
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Languages" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Languages" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Languages" },
  { name: "Java", icon: FaJava, color: "#007396", category: "Languages" },
  { name: "C#", icon: TbBrandCSharp, color: "#239120", category: "Languages" },
  // Frontend
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Nuxt.js", icon: SiNuxt, color: "#00DC82", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "Blazor", icon: SiBlazor, color: "#5C2D91", category: "Frontend" },
  { name: "LINE Mini App", icon: SiLine, color: "#00C300", category: "Frontend" },
  { name: ".NET MAUI", icon: SiDotnet, color: "#512BD4", category: "Frontend" },
  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Backend" },
  { name: ".NET Backend", icon: SiDotnet, color: "#512BD4", category: "Backend" },
  { name: "Entity Framework", icon: FiDatabase, color: "#512BD4", category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Backend" },
  // Design
  { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "Design" },
  { name: "Figma Make", icon: SiFigma, color: "#EA312B", category: "Design" },
  { name: "Claude Design", icon: SiClaude, color: "#D97757", category: "Design" },
  { name: "Google Stitch", icon: SiGoogle, color: "#4285F4", category: "Design" },
  // Tools
  { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "Tools" },
  { name: "Apache NetBeans", icon: SiApachenetbeanside, color: "#1B6AC6", category: "Tools" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84", category: "Tools" },
  { name: "Rider", icon: SiJetbrains, color: "#000000", category: "Tools" },
  { name: "Antigravity", icon: SiGoogle, color: "#4285F4", category: "Tools" },
  // AI
  { name: "Copilot", icon: SiGithubcopilot, color: "#000000", category: "AI" },
  { name: "ChatGPT", icon: SiOpenai, color: "#10A37F", category: "AI" },
  { name: "Gemini", icon: SiGooglegemini, color: "#8E75B2", category: "AI" },
  { name: "Claude Code", icon: SiClaude, color: "#D97757", category: "AI" },

];
