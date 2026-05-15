import type { SkillType } from "@/types";
import {
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiNodedotjs,
  SiMongodb, SiFigma, SiGit, SiGithubcopilot, SiOpenai, SiNuxt,
  SiBlazor, SiDotnet, SiClaude, SiGooglegemini, SiDocker,
  SiPostgresql, SiLine, SiGoogle, SiPython, SiApachenetbeanside,
  SiJavascript, SiAndroidstudio, SiJetbrains, SiVite, SiRedux,
  SiExpress, SiBootstrap, SiSocketdotio, SiGithubpages, SiHtml5,
  SiFramer
} from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import { FaJava, FaCss3 } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

export const SKILLS: SkillType[] = [
  // Languages
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Languages" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Languages" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Languages" },
  { name: "Java", icon: FaJava, color: "#007396", category: "Languages" },
  { name: "C#", icon: TbBrandCSharp, color: "#239120", category: "Languages" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26", category: "Languages" },
  { name: "CSS", icon: FaCss3, color: "#1572B6", category: "Languages" },
  // Frontend
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Nuxt.js", icon: SiNuxt, color: "#00DC82", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "Blazor", icon: SiBlazor, color: "#5C2D91", category: "Frontend" },
  { name: "LINE Mini App", icon: SiLine, color: "#00C300", category: "Frontend" },
  { name: ".NET MAUI", icon: SiDotnet, color: "#512BD4", category: "Frontend" },
  { name: "Vite", icon: SiVite, color: "#646CFF", category: "Frontend" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC", category: "Frontend" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", category: "Frontend" },
  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Backend" },
  { name: ".NET Backend", icon: SiDotnet, color: "#512BD4", category: "Backend" },
  { name: "Entity Framework", icon: FiDatabase, color: "#512BD4", category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Backend" },
  { name: "Express", icon: SiExpress, color: "#000000", category: "Backend" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "#010101", category: "Backend" },
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
  { name: "Visual Studio Code", icon: SiGithubpages, color: "#007ACC", category: "Tools" },
  { name: "Visual Studio", icon: SiDotnet, color: "#5C2D91", category: "Tools" },
  { name: "GitHub Pages", icon: SiGithubpages, color: "#222222", category: "Tools" },
  { name: "Phaser.js", icon: SiJavascript, color: "#8B4513", category: "Tools" },
  { name: "Zustand", icon: SiReact, color: "#443E38", category: "Tools" },
  { name: "Antigravity", icon: SiGoogle, color: "#4285F4", category: "Tools" },
  // AI
  { name: "Copilot", icon: SiGithubcopilot, color: "#000000", category: "AI" },
  { name: "ChatGPT", icon: SiOpenai, color: "#10A37F", category: "AI" },
  { name: "Gemini", icon: SiGooglegemini, color: "#8E75B2", category: "AI" },
  { name: "Claude Code", icon: SiClaude, color: "#D97757", category: "AI" },
  
  // Variations for matching in projects (no category to hide from main list)
  { name: ".NET Blazor", icon: SiBlazor, color: "#5C2D91" },
  { name: "Entity Framework Core", icon: FiDatabase, color: "#512BD4" },
  { name: ".NET Backend", icon: SiDotnet, color: "#512BD4" },
  { name: ".NET Core", icon: SiDotnet, color: "#512BD4" },
  { name: "React 19", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js 15", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS v4", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Lucide React", icon: SiReact, color: "#61DAFB" },
  { name: "Fluent UI", icon: SiDotnet, color: "#0078D4" },
  { name: "ASP.NET", icon: SiDotnet, color: "#512BD4" },
  { name: "HTML5 Canvas", icon: SiHtml5, color: "#E34F26" },
  { name: "Android SDK", icon: SiAndroidstudio, color: "#3DDC84" },
  { name: "XAML", icon: SiDotnet, color: "#512BD4" },
  { name: "CustomTkinter", icon: SiPython, color: "#3776AB" },
  { name: "Tkinter", icon: SiPython, color: "#3776AB" },
  { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#000000" },
];
