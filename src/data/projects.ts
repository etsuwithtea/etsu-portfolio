// Project cover images
import p1 from "@/assets/1.png";
import p2 from "@/assets/2.png";
import p3 from "@/assets/3.png";
import p4 from "@/assets/4.png";
import p5 from "@/assets/5.png";
import p6 from "@/assets/6.png";
import p7 from "@/assets/7.png";
import p8 from "@/assets/8.png";
import p9 from "@/assets/9.png";
import p10 from "@/assets/10.png";
import p11 from "@/assets/11.png";
import p12 from "@/assets/12.png";
import p13 from "@/assets/13.png";
import p14 from "@/assets/14.png";
import p15 from "@/assets/15.png";
import p16 from "@/assets/16.png";
import p17 from "@/assets/17.png";

// Project gallery images
import p1_1 from "@/assets/1_1.png";
import p1_2 from "@/assets/1_2.png";
import p1_3 from "@/assets/1_3.png";

import p2_1 from "@/assets/2_1.png";
import p2_2 from "@/assets/2_2.png";

import p3_1 from "@/assets/3_1.png";
import p3_2 from "@/assets/3_2.png";

import p4_video from "@/assets/4_video.mp4";
import p4_1 from "@/assets/4_1.png";
import p4_2 from "@/assets/4_2.png";
import p4_3 from "@/assets/4_3.png";

import p5_1 from "@/assets/5_1.png";

import p6_1 from "@/assets/6_1.png";
import p6_2 from "@/assets/6_2.png";

import p7_video from "@/assets/7_video.mp4";
import p7_1 from "@/assets/7_1.png";

import p8_1 from "@/assets/8_1.png";
import p8_2 from "@/assets/8_2.png";

import p9_1 from "@/assets/9_1.png";

import p10_1 from "@/assets/10_1.png";

import p11_1 from "@/assets/11_1.png";

import p12_1 from "@/assets/12_1.png";
import p12_2 from "@/assets/12_2.png";
import p12_video from "@/assets/12_video.mp4";

import p13_1 from "@/assets/13_1.png";

import p14_1 from "@/assets/14_1.png";

import p15_1 from "@/assets/15_1.png";

import p16_1 from "@/assets/16_1.png";

import p17_1 from "@/assets/17_1.png";

import { type ProjectType } from "@/types";

export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    title: 'Game Career',
    coverImage: p1,
    images: [
      { src: p1, alt: 'OverAll' },
      { src: p1_1, alt: 'Page1' },
      { src: p1_2, alt: 'Page2' },
      { src: p1_3, alt: 'Page3' },
    ],
    desc: 'A playful project for a game company career, designed for fun and developer practice. This project focuses on UI/UX prototyping and is not a production-ready application.',
    role: 'Role : UX/UI Designer & Frontend Developer',
    tools: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Visual Studio Code', 'Git', 'GitHub Pages'],
    github: 'https://github.com/etsuwithtea/mini_proj1',
    category: 'Design',
  },
  {
    id: 2,
    title: 'CupCraft',
    coverImage: p2,
    images: [
      { src: p2, alt: 'OverAll' },
      { src: p2_1, alt: 'Page1'},
      { src: p2_2, alt: 'Page2' },
    ],
    link: 'https://beconet.github.io/CUPCRAFT_PROJECT/login_page.html',
    desc: 'Front-end cafe management system for orders, sales, and analytics. Features admin login, order and inventory management, dashboard analytics, and sales records.',
    role: 'Role : UX/UI Designer',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Figma', 'GitHub Pages', 'Git'],
    github: 'https://github.com/Beconet/CUPCRAFT_PROJECT',
    category: 'Design',
  },
  {
    id: 3,
    title: 'ImMemmo',
    coverImage: p3,
    images: [
      { src: p3, alt: 'OverAll' },
      { src: p3_1, alt: 'Page1' },
      { src: p3_2, alt: 'Page2' },
    ],
    desc: 'A note-taking web application built for practice and experimentation. This local storage-based app allows users to create, manage, and organize notes without requiring a database connection. Features a game-inspired design and user-friendly interface that makes note-taking enjoyable and efficient.',
    role: 'Role : Developer',
    tools: ['ASP.NET', 'GitHub Copilot', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/etsuwithtea/ImMemmo',
    category: 'Development',
  },
  {
    id: 4,
    title: 'Eat Rai Dee',
    coverImage: p4,
    images: [
      { src: p4, alt: 'OverAll' },
      { src: p4_1, alt: 'Page1' },
      { src: p4_2, alt: 'Page2' },
      { src: p4_3, alt: 'Page3' },
      { type: 'video', src: p4_video, alt: 'Video' },
    ],
    link: 'https://www.figma.com/proto/sPzqtp8LxBSMteANT87PAQ/Eat-%E0%B9%84%E0%B8%A3-%E0%B8%94%E0%B8%B5?node-id=205-2034&t=ilVwoi93Evp4Nvz4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=205%3A2034&show-proto-sidebar=1',
    github: 'https://github.com/Jabiby7561/Eatraidee',
    desc: 'Eat Rai Dee is a UX/UI and development project aimed at helping users decide what to eat when they have no idea. Designed in Figma and developed in Java using Apache NetBeans, this was my first project where I learned and applied object-oriented programming. The application randomly suggests food options and displays the result on a kiosk screen.',
    role: 'Role : UX/UI Designer & Main Developer (Java, Apache NetBeans)',
    tools: ['Java', 'Apache NetBeans', 'Figma', 'Git'],
    category: 'Development',
  },
  {
    id: 5,
    title: 'Game Career',
    coverImage: p5,
    images: [
      { src: p5, alt: 'OverAll' },
      { src: p5_1, alt: 'Page1' },
    ],
    desc: 'A web application for browsing and discovering video games. Built with React + Vite, featuring a game grid display, search functionality, sidebar filters, and a favorites system. Integrated with a game API to fetch real-time game data. Users can explore games by categories, view detailed information about each game, and save their favorite games to a favorites list.',
    role: 'Role : Frontend Developer',
    tools: ['React', 'Vite', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Git', 'Node.js', 'Visual Studio Code'],
    github: 'https://github.com/etsuwithtea/game-store',
    category: 'Development',
  },
  {
    id: 6,
    title: 'HR Management',
    coverImage: p6,
    images: [
      { src: p6, alt: 'OverAll' },
      { src: p6_1, alt: 'Page1' },
      { src: p6_2, alt: 'Page2' },
    ],
    desc: 'A comprehensive Human Resource Management System developed during an internship. The system streamlines employee lifecycle management, including personnel records, attendance tracking, and organizational reporting. It features a modern, enterprise-grade interface designed for efficiency and ease of use.',
    role: 'Role : Full-stack Developer (Internship)',
    tools: ['.NET Blazor', 'PostgreSQL', 'Entity Framework Core', '.NET Backend', 'C#', 'Fluent UI'],
    category: 'Fullstack',
  },
  {
    id: 7,
    title: 'Farm2D Simulation Base',
    coverImage: p7,
    images: [
      { src: p7, alt: 'OverAll' },
      { src: p7_1, alt: 'Page1' },
      { type: 'video', src: p7_video, alt: 'Video' },
    ],
    desc: "A 2D top-down pixel art farm simulation game built with Phaser.js and TypeScript. It features custom 8x8 sprite integration, player animations, environmental collisions, and dynamic camera controls. Includes interactive elements like a responsive HUD inventory and NPCs with a seed purchasing economy system.",
    role: 'Role : Game Developer',
    tools: [
      'Phaser.js', 'TypeScript', 'Vite', 'HTML5 Canvas', 'Git', 'GitHub Pages'
    ],
    github: 'https://github.com/etsuwithtea/Farm2d',
    link: 'https://etsuwithtea.github.io/Farm2d/',
    category: 'Game',
  },
  {
    id: 8,
    title: 'Power Transformer Management for EGAT',
    coverImage: p8,
    images: [
      { src: p8, alt: 'OverAll' },
      { src: p8_1, alt: 'Page1' },
      { src: p8_2, alt: 'Page2' },
    ],
    desc: "Remade EGAT's power transformer management web application with a modern UI/UX using Next.js and MongoDB. Integrated and visualized data from more than 100 MongoDB collections for centralized management. Optimized database queries for fast access and reliability to support thousands of transformer records, improving operational efficiency and reporting.",
    role: 'Role : Fullstack Developer (Next.js, MongoDB)',
    tools: [
      'Next.js', 'GitHub Copilot', 'MongoDB', 'React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Visual Studio Code', 'Git', 'Tailwind CSS'
    ],
    category: 'Fullstack',
  },
  {
    id: 9,
    title: 'PawSafe',
    coverImage: p9,
    images: [
      { src: p9, alt: 'OverAll' },
      { src: p9_1, alt: 'Page1' },
    ],
    desc: 'Full-stack web app for pet adoption and lost/found tracking. Built with Vite + React + TypeScript on the frontend and Express + MongoDB on the backend. Supports posting and browsing pets, saving favorites, uploading images with Multer, and real-time chat/notifications via Socket.IO. Structured client/server codebases with environment templates and setup scripts for quick local runs.',
    role: 'Role : Fullstack Developer (React, Express, MongoDB)',
    tools: [
      'React', 'Vite', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Express', 'Node.js', 'MongoDB', 'Multer', 'Socket.IO', 'Git'
    ],
    github: 'https://github.com/etsuwithtea/PawSafe',
    category: 'Fullstack',
  },
  {
    id: 10,
    title: 'GUI-based Python Project: I Have Tickets',
    coverImage: p10,
    images: [
      { src: p10, alt: 'OverAll' },
      { src: p10_1, alt: 'Page1' },
    ],
    desc: 'A Python GUI project developed in my first year using the customtkinter library. The application features a simple ticket management interface with no API integration - everything is handled locally within the app.',
    role: 'Role : Main Developer (Python, customtkinter)',
    tools: ['Python', 'CustomTkinter', 'Tkinter', 'Git'],
    github: 'https://github.com/etsuwithtea/ihavetickets',
    category: 'Development',
  },
  {
    id: 11,
    title: 'mini project xo game (tic tac toe)',
    coverImage: p11,
    images: [
      { src: p11, alt: 'OverAll' },
      { src: p11_1, alt: 'Page1' },
    ],
    desc: 'Interactive XO (Tic Tac Toe) game with multiple board sizes (3x3, 4x4, 5x5) and language switching. Built with Vite + React + Tailwind CSS for a smooth and responsive experience.',
    role: 'Role : Developer',
    tools: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'GitHub Pages', 'Git'],
    github: 'https://github.com/etsuwithtea/xo_game',
    category: 'Development',
  },
  {
    id: 12,
    title: 'BeyondHana',
    coverImage: p12,
    images: [
      { src: p12, alt: 'OverAll' },
      { src: p12_1, alt: 'Page1' },
      { src: p12_2, alt: 'Page2' },
      { type: 'video', src: p12_video, alt: 'Video' },
    ],
    desc: 'Visual novel game developed with .NET MAUI. Thai story, English interface, choice system, custom illustrations, and Android support.',
    role: 'Role : Main Developer & UX/UI Designer',
    tools: ['.NET MAUI', 'C#', 'XAML', 'Visual Studio', 'Android SDK', 'Figma', 'Git'],
    github: 'https://github.com/etsuwithtea/BeyondHana',
    category: 'Game',
  },
  {
    id: 13,
    title: 'DoodleRush',
    coverImage: p13,
    images: [
      { src: p13, alt: 'OverAll' },
      { src: p13_1, alt: 'Page1' },
    ],
    desc: "A modern 2D infinite runner and platformer game featuring procedurally generated levels and a bold Neo-brutalism aesthetic. It incorporates dynamic physics with double-jump mechanics and a session history system to track stars collected and time survived. Optimized for both desktop and mobile play.",
    role: 'Role : Game Developer',
    tools: [
      'Next.js 15', 'React 19', 'Tailwind CSS v4', 'Framer Motion', 'Zustand', 'Lucide React', 'TypeScript', 'Git', 'GitHub Pages'
    ],
    github: 'https://github.com/etsuwithtea/doodlerush',
    link: 'https://etsuwithtea.github.io/doodlerush/',
    category: 'Game',
  },
  {
    id: 14,
    title: 'Travel Buddy',
    coverImage: p14,
    images: [
      { src: p14, alt: 'OverAll' },
      { src: p14_1, alt: 'Page1' },
    ],
    desc: 'Data pending to be added for Travel Buddy project.',
    role: 'Role : Pending',
    tools: ['Pending'],
    category: 'Fullstack',
  },
  {
    id: 15,
    title: 'WhoCanEat',
    coverImage: p15,
    images: [
      { src: p15, alt: 'OverAll' },
      { src: p15_1, alt: 'Page1' },
    ],
    link: 'https://www.figma.com/proto/r4kXWcQ0iGvUdnsoxk4BHi/WhoCanEat?node-id=1-2&p=f&t=YTAx9omK1Krnb1Bw-9&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1',
    desc: `WhoCanEat is a B2B2C e-commerce platform connecting grocery stores with customers, focusing on health and well-being through modern technology. Mission: Develop technology that helps people facing health challenges. Product: A mobile application that saves customers time and money.`,
    role: 'Role : UX/UI Designer',
    tools: ['Figma'],
    category: 'Design',
  },
  {
    id: 16,
    title: 'Cloth E-Commerce',
    coverImage: p16,
    images: [
      { src: p16, alt: 'OverAll' },
      { src: p16_1, alt: 'Page1' },
    ],
    link: 'https://www.figma.com/proto/F0KR84V7gLRwX2bZKg8XA1/Cloth--E-Commerce?node-id=37-3&p=f&t=knOFLvcgd9f9wzZp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=37%3A3',
    desc: 'My first UX/UI project - an e-commerce app prototype designed in Figma while learning the basics of user-centered design.',
    role: 'Role : UX/UI Designer',
    tools: ['Figma', 'User Interface Design'],
    category: 'Design',
  },
  {
    id: 17,
    title: 'Eat Rai Dee (Mobile)',
    coverImage: p17,
    images: [
      { src: p17, alt: 'OverAll' },
      { src: p17_1, alt: 'Page1' },
    ],
    link: 'https://www.figma.com/proto/sPzqtp8LxBSMteANT87PAQ/Eat-%E0%B9%84%E0%B8%A3-%E0%B8%94%E0%B8%B5?node-id=1-228&starting-point-node-id=1%3A228&show-proto-sidebar=1&t=i4zghbmnjlwyEqXa-1',
    desc: 'Eat Rai Dee (Mobile) is a Figma prototype for a mobile app version of the Eat Rai Dee project. The design emphasizes intuitive navigation, playful visuals, and quick interactions tailored for mobile users. Prototype only, no source code.',
    role: 'Role : UX/UI Designer',
    tools: ['Figma'],
    category: 'Design',
  },
];
