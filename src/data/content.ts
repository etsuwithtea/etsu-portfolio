import { type Activity, type Certificate, type Project, type SocialLink, type WorkExperience } from '../types/content';

import mainProfile from '../assets/mainprofile.jpg';
import mainProfile2 from '../assets/mainprofile_2.jpg';
import certificateAwsCloudFoundations from '../assets/certificates/AWS_Cloud Foundations.png';
import certificateCoursera from '../assets/certificates/certificate_coursera.png';
import certificateCyberawareness from '../assets/certificates/certificate_cyber_awareness.png';
import certificateCybersecurity from '../assets/certificates/certificate-cybersecurity.png';
import ecom_project1 from '../assets/ecommerce/prototype_cloth_e_commerce_1.png';
import ecom_project2 from '../assets/ecommerce/prototype_cloth_e_commerce_2.png';
import ecom_project3 from '../assets/ecommerce/prototype_cloth_e_commerce_3.png';
import ecom_project4 from '../assets/ecommerce/prototype_cloth_e_commerce_4.png';
import ecom_project5 from '../assets/ecommerce/prototype_cloth_e_commerce_5.png';
import ecom_project6 from '../assets/ecommerce/prototype_cloth_e_commerce_6.png';
import ecom_project7 from '../assets/ecommerce/prototype_cloth_e_commerce_7.png';
import eat_rai_dee_project1 from '../assets/eat_rai_dee/eat_rai_dee_1.png';
import eat_rai_dee_project2 from '../assets/eat_rai_dee/eat_rai_dee_2.png';
import eat_rai_dee_project3 from '../assets/eat_rai_dee/eat_rai_dee_3.png';
import eat_rai_dee_project4 from '../assets/eat_rai_dee/eat_rai_dee_4.png';
import eat_rai_dee_project5 from '../assets/eat_rai_dee/eat_rai_dee_5.png';
import eat_rai_dee_project6 from '../assets/eat_rai_dee/eat_rai_dee_6.png';
import eat_rai_dee_project7 from '../assets/eat_rai_dee/eat_rai_dee_7.png';
import eat_rai_dee_project8 from '../assets/eat_rai_dee/eat_rai_dee_8.png';
import eat_rai_dee_project9 from '../assets/eat_rai_dee/eat_rai_dee_9.png';
import eat_rai_dee_project10 from '../assets/eat_rai_dee/eat_rai_dee_10.png';
import eat_rai_dee_video from '../assets/eat_rai_dee/eat_rai_dee_video.mp4';
import eat_rai_dee_project1_mobile from '../assets/eat_rai_dee/mobile/eat_rai_dee_1_mobile.png';
import eat_rai_dee_project2_mobile from '../assets/eat_rai_dee/mobile/eat_rai_dee_2_mobile.png';
import eat_rai_dee_project3_mobile from '../assets/eat_rai_dee/mobile/eat_rai_dee_3_mobile.png';
import eat_rai_dee_project4_mobile from '../assets/eat_rai_dee/mobile/eat_rai_dee_4_mobile.png';
import eat_rai_dee_project5_mobile from '../assets/eat_rai_dee/mobile/eat_rai_dee_5_mobile.png';
import eat_rai_dee_project6_mobile from '../assets/eat_rai_dee/mobile/eat_rai_dee_6_mobile.png';
import eat_rai_dee_project7_mobile from '../assets/eat_rai_dee/mobile/eat_rai_dee_7_mobile.png';
import eat_rai_dee_project8_mobile from '../assets/eat_rai_dee/mobile/eat_rai_dee_8_mobile.png';
import eat_rai_dee_project9_mobile from '../assets/eat_rai_dee/mobile/eat_rai_dee_9_mobile.png';
import beyondhana_1 from '../assets/beyondhana/beyondhana_1.png';
import beyondhana_2 from '../assets/beyondhana/beyondhana_2.png';
import beyondhana_3 from '../assets/beyondhana/beyondhana_3.png';
import beyondhana_4 from '../assets/beyondhana/beyondhana_4.png';
import beyondhana_5 from '../assets/beyondhana/beyondhana_5.png';
import beyondhana_6 from '../assets/beyondhana/beyondhana_6.png';
import beyondhana_7 from '../assets/beyondhana/beyondhana_7.png';
import beyondhana_8 from '../assets/beyondhana/beyondhana_8.png';
import beyondhana_video from '../assets/beyondhana/beyondhana_video.mp4';
import egat1 from '../assets/egat/egat1.png';
import egat2 from '../assets/egat/egat2.png';
import egat3 from '../assets/egat/egat3.png';
import egat4 from '../assets/egat/egat4.png';
import egat5 from '../assets/egat/egat5.png';
import egat6 from '../assets/egat/egat6.png';
import egat7 from '../assets/egat/egat7.png';
import pawsafeAdoption from '../assets/PawSafe/AdoptionPage.jpeg';
import pawsafeBookmark from '../assets/PawSafe/BookMarkPage.jpeg';
import pawsafeHome from '../assets/PawSafe/HomePage.jpeg';
import pawsafeLostPet from '../assets/PawSafe/LostPetPage.jpeg';
import pawsafeMyPost from '../assets/PawSafe/MyPostPage.jpeg';
import portfolio_1 from '../assets/portfolio_web/portfolio_web_1.png';
import portfolio_2 from '../assets/portfolio_web/portfolio_web_2.png';
import portfolio_3 from '../assets/portfolio_web/portfolio_web_3.png';
import portfolio_4 from '../assets/portfolio_web/portfolio_web_4.png';
import xo_1 from '../assets/xo_game/xo_1.png';
import xo_2 from '../assets/xo_game/xo_2.png';
import xo_3 from '../assets/xo_game/xo_3.png';
import xo_4 from '../assets/xo_game/xo_4.png';
import ihaveticket_1 from '../assets/ihaveticket/ihaveticket_1.png';
import ihaveticket_2 from '../assets/ihaveticket/ihaveticket_2.png';
import ihaveticket_3 from '../assets/ihaveticket/ihaveticket_3.png';
import ihaveticket_4 from '../assets/ihaveticket/ihaveticket_4.png';
import ihaveticket_5 from '../assets/ihaveticket/ihaveticket_5.png';
import whocaneat_1 from '../assets/whocaneat/whocateat_1.png';
import whocaneat_2 from '../assets/whocaneat/whocateat_2.png';
import whocaneat_3 from '../assets/whocaneat/whocateat_3.png';
import whocaneat_4 from '../assets/whocaneat/whocateat_4.png';
import whocaneat_5 from '../assets/whocaneat/whocateat_5.png';
import whocaneat_6 from '../assets/whocaneat/whocateat_6.png';
import whocaneat_7 from '../assets/whocaneat/whocateat_7.png';
import whocaneat_8 from '../assets/whocaneat/whocateat_8.png';
import whocaneat_9 from '../assets/whocaneat/whocateat_9.png';
import whocaneat_10 from '../assets/whocaneat/whocateat_10.png';
import whocaneat_11 from '../assets/whocaneat/whocateat_11.png';
import whocaneat_12 from '../assets/whocaneat/whocateat_12.png';
import gamecompany_career1 from '../assets/gamecompany_career/gamecompany_career1.png';
import gamecompany_career2 from '../assets/gamecompany_career/gamecompany_career2.png';
import gamecompany_career3 from '../assets/gamecompany_career/gamecompany_career3.png';
import gamecompany_career4 from '../assets/gamecompany_career/gamecompany_career4.png';
import bu_x_india_1 from '../assets/bu_x_india/bu_x_india_embassy_1.webp';
import bu_x_india_2 from '../assets/bu_x_india/bu_x_india_embassy_2.jpg';
import bu_x_india_3 from '../assets/bu_x_india/bu_x_india_embassy_3.webp';
import bu_x_india_4 from '../assets/bu_x_india/bu_x_india_embassy_4.webp';
import bu_x_kait_1 from '../assets/bu_x_kait/bu_x_kait_1.webp';
import bu_x_kait_2 from '../assets/bu_x_kait/bu_x_kait_2.jpg';
import bu_x_kait_3 from '../assets/bu_x_kait/bu_x_kait_3.jpg';
import bu_x_kait_4 from '../assets/bu_x_kait/bu_x_kait_4.webp';
import bu_x_kait_5 from '../assets/bu_x_kait/bu_x_kait_5.jpg';
import ImMemo_1 from '../assets/ImMemmo/ImMemo_1.png';
import ImMemo_2 from '../assets/ImMemmo/ImMemo_2.png';
import ImMemo_3 from '../assets/ImMemmo/ImMemo_3.png';
import ImMemo_4 from '../assets/ImMemmo/ImMemo_4.png';
import gamestore_1 from '../assets/game-store/mini-proj2_game-store_screenshot_1_home.jpeg';
import gamestore_2 from '../assets/game-store/mini-proj2_game-store_screenshot_1_sidebar.jpeg';
import gamestore_3 from '../assets/game-store/mini-proj2_game-store_screenshot_2_about.jpeg';
import gamestore_4 from '../assets/game-store/mini-proj2_game-store_screenshot_3_clearfavorites.jpeg';
import gamestore_5 from '../assets/game-store/mini-proj2_game-store_screenshot_3_favorites.jpeg';
import gamestore_6 from '../assets/game-store/mini-proj2_game-store_screenshot_4_gamedetail.png';
import gamestore_7 from '../assets/game-store/mini-proj2_game-store_screenshot_5_gamedeveloper.png';
import farm2d_video from '../assets/farm2d/Farm2d.mp4';
import farm2d_1 from '../assets/farm2d/Farm2d_1.jpeg';
import farm2d_2 from '../assets/farm2d/Farm2d_2.jpeg';
import farm2d_3 from '../assets/farm2d/Farm2d_3.jpeg';
import doodlerush_1 from '../assets/doodlerush/doodlerush_1.jpeg';
import doodlerush_2 from '../assets/doodlerush/doodlerush_2.jpeg';
import doodlerush_3 from '../assets/doodlerush/doodlerush_3.jpeg';
import doodlerush_video from '../assets/doodlerush/doodlerush_video.mp4';

export const PROFILE_IMAGES = [mainProfile, mainProfile2];

export const SOCIALS: SocialLink[] = [
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/navapan-suthon-5245a3384' },
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/etsuwithtea' },
  { name: 'GitHub', icon: 'github', url: 'https://github.com/etsuwithtea' },
];

export const ACTIVITIES: Activity[] = [
  {
    title: 'International Seminar: BU x KAIT 2025',
    date: '20/02/2025',
    description:
      'Attended an international seminar organized as a collaboration between Bangkok University and Kanazawa Institute of Technology (KAIT), Japan. The seminar featured world-class speakers discussing AI and network technologies, providing valuable insights into global technology trends and copyright challenges in AI implementation.',
    highlights: [
      'International academic seminar collaboration between Bangkok University and Kanazawa Institute of Technology (KAIT), Japan',
      'Featured Prof. Masahiro SAKAI presenting "Navigating Generative AI Use in Japan"',
      'Focused on AI/network technologies and the copyright landscape in generative AI',
      'Enhanced understanding of international perspectives on AI technology implementation',
    ],
    images: [
      { src: bu_x_kait_1, alt: 'BU x KAIT seminar opening' },
      { src: bu_x_kait_2, alt: 'Prof. Masahiro SAKAI presentation' },
      { src: bu_x_kait_3, alt: 'AI and copyright discussion' },
      { src: bu_x_kait_4, alt: 'International collaboration showcase' },
      { src: bu_x_kait_5, alt: 'Student participation and Q&A' },
    ],
  },
  {
    title: 'BU x Embassy of India: Knowledge Sharing',
    date: '30/01/2025',
    description:
      'School of Information Technology and Innovation organized the BU x Embassy of India: Knowledge Sharing project, a collaboration between Bangkok University and the Embassy of India in Thailand, to provide students with opportunities to learn and exchange perspectives about technology and innovation from international experts.',
    highlights: [
      'Collaboration between Bangkok University and Embassy of India in Thailand',
      'Technology and innovation knowledge sharing with international experts',
      'Guest speakers including Ms. Paulomi Tripathi, Mr. Gurmeet Singh, and Mr. Nagaraj Prasadh',
      'Topics covered: Indian technology and innovation, digital industry role, and technology business development',
    ],
    images: [
      { src: bu_x_india_1, alt: 'BU x Embassy of India opening ceremony' },
      { src: bu_x_india_2, alt: 'Guest speakers presentation' },
      { src: bu_x_india_3, alt: 'Knowledge sharing session' },
      { src: bu_x_india_4, alt: 'Networking session with students' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Power Transformer Management for EGAT',
    images: [
      { src: egat1, alt: 'EGAT Transformer Management Login' },
      { src: egat2, alt: 'EGAT Transformer Management Dashboard' },
      { src: egat3, alt: 'EGAT MongoDB Collections Overview' },
      { src: egat4, alt: 'EGAT Query Performance Optimization' },
      { src: egat5, alt: 'EGAT Advanced Reporting System' },
      { src: egat6, alt: 'EGAT User Interface Design' },
      { src: egat7, alt: 'EGAT Database Management' },
    ],
    desc: "Remade EGAT's power transformer management web application with a modern UI/UX using Next.js and MongoDB. Integrated and visualized data from more than 100 MongoDB collections for centralized management. Optimized database queries for fast access and reliability to support thousands of transformer records, improving operational efficiency and reporting.",
    role: 'Role : Fullstack Developer (Next.js, MongoDB)',
    tools: [
      'Next.js',
      'GitHub Copilot',
      'MongoDB',
      'React',
      'JavaScript',
      'Node.js',
      'CSS',
      'HTML',
      'Visual Studio Code',
      'Git',
      'Tailwind CSS',
    ],
    isPrototype: false,
  }, 
  {
    title: 'DoodleRush',
    images: [
      { type: 'video', src: doodlerush_video, alt: 'DoodleRush Demo Video' },
      { src: doodlerush_1, alt: 'DoodleRush Gameplay 1' },
      { src: doodlerush_2, alt: 'DoodleRush Gameplay 2' },
      { src: doodlerush_3, alt: 'DoodleRush Gameplay 3' },
    ],
    desc: "A modern 2D infinite runner and platformer game featuring procedurally generated levels and a bold Neo-brutalism aesthetic. It incorporates dynamic physics with double-jump mechanics and a session history system to track stars collected and time survived. Optimized for both desktop and mobile play.",
    role: 'Role : Game Developer',
    tools: [
      'Next.js 15',
      'React 19',
      'Tailwind CSS v4',
      'Framer Motion',
      'Zustand',
      'Lucide React',
      'TypeScript',
      'Git',
      'GitHub Pages',
    ],
    github: 'https://github.com/etsuwithtea/doodlerush',
    link: 'https://etsuwithtea.github.io/doodlerush/',
    isPrototype: false,
  },
   {
    title: 'Farm2D Simulation Base',
    images: [
      { type: 'video', src: farm2d_video, alt: 'Farm2D Demo Video' },
      { src: farm2d_1, alt: 'Farm2D Gameplay 1' },
      { src: farm2d_2, alt: 'Farm2D Gameplay 2' },
      { src: farm2d_3, alt: 'Farm2D Gameplay 3' },
    ],
    desc: "A 2D top-down pixel art farm simulation game built with Phaser.js and TypeScript. It features custom 8x8 sprite integration, player animations, environmental collisions, and dynamic camera controls. Includes interactive elements like a responsive HUD inventory and NPCs with a seed purchasing economy system.",
    role: 'Role : Game Developer',
    tools: [
      'Phaser.js',
      'TypeScript',
      'Vite',
      'HTML5 Canvas',
      'Git',
      'GitHub Pages'
    ],
    github: 'https://github.com/etsuwithtea/Farm2d',
    link: 'https://etsuwithtea.github.io/Farm2d/',
    isPrototype: false,
  },
    
  {
    title: 'BeyondHana',
    images: [
      { type: 'video', src: beyondhana_video, alt: 'BeyondHana Demo Video' },
      { src: beyondhana_1, alt: 'BeyondHana Title' },
      { src: beyondhana_2, alt: 'BeyondHana Main Menu' },
      { src: beyondhana_3, alt: 'BeyondHana Start Game' },
      { src: beyondhana_4, alt: 'BeyondHana Load Game' },
      { src: beyondhana_5, alt: 'BeyondHana Setting' },
      { src: beyondhana_6, alt: 'BeyondHana Story' },
      { src: beyondhana_7, alt: 'BeyondHana Choice' },
      { src: beyondhana_8, alt: 'BeyondHana Ending' },
    ],
    desc: 'Visual novel game developed with .NET MAUI. Thai story, English interface, choice system, custom illustrations, and Android support.',
    role: 'Role : Main Developer & UX/UI Designer',
    tools: ['.NET MAUI', 'C#', 'XAML', 'Visual Studio', 'Android SDK', 'Figma', 'Git'],
    github: 'https://github.com/etsuwithtea/BeyondHana',
    isPrototype: false,
  },
  {
    title: 'PawSafe',
    images: [
      { src: pawsafeHome, alt: 'PawSafe home feed' },
      { src: pawsafeAdoption, alt: 'PawSafe adoption listings' },
      { src: pawsafeLostPet, alt: 'PawSafe lost pet board' },
      { src: pawsafeMyPost, alt: 'PawSafe my posts management' },
      { src: pawsafeBookmark, alt: 'PawSafe saved pets collection' },
    ],
    desc: 'Full-stack web app for pet adoption and lost/found tracking. Built with Vite + React + TypeScript on the frontend and Express + MongoDB on the backend. Supports posting and browsing pets, saving favorites, uploading images with Multer, and real-time chat/notifications via Socket.IO. Structured client/server codebases with environment templates and setup scripts for quick local runs.',
    role: 'Role : Fullstack Developer (React, Express, MongoDB)',
    tools: [
      'React',
      'Vite',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Express',
      'Node.js',
      'MongoDB',
      'Multer',
      'Socket.IO',
      'Git',
    ],
    github: 'https://github.com/etsuwithtea/PawSafe',
    isPrototype: false,
  },
  {
    title: 'Game Store',
    images: [
      { src: gamestore_1, alt: 'Game Store - Home' },
      { src: gamestore_2, alt: 'Game Store - Sidebar' },
      { src: gamestore_3, alt: 'Game Store - About' },
      { src: gamestore_4, alt: 'Game Store - Clear Favorites' },
      { src: gamestore_5, alt: 'Game Store - Favorites' },
      { src: gamestore_6, alt: 'Game Store - Game Detail' },
      { src: gamestore_7, alt: 'Game Store - Game Developer' },
    ],
    desc: 'A web application for browsing and discovering video games. Built with React + Vite, featuring a game grid display, search functionality, sidebar filters, and a favorites system. Integrated with a game API to fetch real-time game data. Users can explore games by categories, view detailed information about each game, and save their favorite games to a favorites list.',
    role: 'Role : Frontend Developer',
    tools: ['React', 'Vite', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Git', 'Node.js', 'Visual Studio Code'],
    github: 'https://github.com/etsuwithtea/game-store',
    isPrototype: false,
  },
  {
    title: 'ImMemmo',
    images: [
      { src: ImMemo_1, alt: 'ImMemmo - Note Taking Interface' },
      { src: ImMemo_2, alt: 'ImMemmo - Note Management' },
      { src: ImMemo_3, alt: 'ImMemmo - Note Organization' },
      { src: ImMemo_4, alt: 'ImMemmo - Local Storage Features' },
    ],
    desc: 'A note-taking web application built for practice and experimentation. This local storage-based app allows users to create, manage, and organize notes without requiring a database connection. Features a game-inspired design and user-friendly interface that makes note-taking enjoyable and efficient.',
    role: 'Role : Developer',
    tools: ['ASP.NET', 'GitHub Copilot', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/etsuwithtea/ImMemmo',
    isPrototype: false,
  },
  {
    title: 'gamecompany career web',
    images: [
      { src: gamecompany_career1, alt: 'Landing page with game company branding' },
      { src: gamecompany_career2, alt: 'Job detail page' },
      { src: gamecompany_career3, alt: 'Job apply form' },
      { src: gamecompany_career4, alt: 'Contact page' },
    ],
    desc: 'A playful prototype for a game company career web, designed for fun and developer practice. This project focuses on UI/UX prototyping and is not a production-ready application.',
    role: 'Role : UX/UI Designer & Frontend Developer',
    tools: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Visual Studio Code', 'Git', 'GitHub Pages'],
    github: 'https://github.com/etsuwithtea/mini_proj1',
    isPrototype: true,
  },

  {
    title: 'Eat Rai Dee',
    images: [
      { type: 'video', src: eat_rai_dee_video, alt: 'Eat Rai Dee kiosk video' },
      { src: eat_rai_dee_project1, alt: 'Eat Rai Dee screen 1' },
      { src: eat_rai_dee_project2, alt: 'Eat Rai Dee screen 2' },
      { src: eat_rai_dee_project3, alt: 'Eat Rai Dee screen 3' },
      { src: eat_rai_dee_project4, alt: 'Eat Rai Dee screen 4' },
      { src: eat_rai_dee_project5, alt: 'Eat Rai Dee screen 5' },
      { src: eat_rai_dee_project6, alt: 'Eat Rai Dee screen 6' },
      { src: eat_rai_dee_project7, alt: 'Eat Rai Dee screen 7' },
      { src: eat_rai_dee_project8, alt: 'Eat Rai Dee screen 8' },
      { src: eat_rai_dee_project9, alt: 'Eat Rai Dee screen 9' },
      { src: eat_rai_dee_project10, alt: 'Eat Rai Dee screen 10' },
    ],
    link: 'https://www.figma.com/proto/sPzqtp8LxBSMteANT87PAQ/Eat-%E0%B9%84%E0%B8%A3-%E0%B8%94%E0%B8%B5?node-id=205-2034&t=ilVwoi93Evp4Nvz4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=205%3A2034&show-proto-sidebar=1',
    github: 'https://github.com/Jabiby7561/Eatraidee',
    desc: 'Eat Rai Dee is a UX/UI and development project aimed at helping users decide what to eat when they have no idea. Designed in Figma and developed in Java using Apache NetBeans, this was my first project where I learned and applied object-oriented programming. The application randomly suggests food options and displays the result on a kiosk screen.',
    role: 'Role : UX/UI Designer & Main Developer (Java, Apache NetBeans)',
    tools: ['Java', 'Apache NetBeans', 'Figma', 'Git'],
    isPrototype: true,
  },
  {
    title: 'ETSU Portfolio Website',
    images: [
      { src: portfolio_1, alt: 'Portfolio home' },
      { src: portfolio_2, alt: 'Portfolio about' },
      { src: portfolio_3, alt: 'Portfolio projects' },
      { src: portfolio_4, alt: 'Portfolio mobile view' },
    ],
    link: 'https://etsuwithtea.github.io/etsu-portfolio/',
    desc: 'Personal portfolio website built with React + Vite, styled with Tailwind CSS, and hosted on GitHub Pages. Designed and developed to showcase my projects, skills, and certificates in a modern, responsive layout.',
    role: 'Role : Developer (with GitHub Copilot assistance)',
    tools: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'GitHub Pages', 'Git', 'GitHub Copilot'],
    isPrototype: false,
  },
  {
    title: 'CupCraft Cafe Management System',
    images: [
      { src: 'https://github.com/user-attachments/assets/2263413f-0b04-4a32-84e0-6c72a25aca11', alt: 'CupCraft Admin Login Page' },
      { src: 'https://github.com/user-attachments/assets/cc2d3545-e14c-4bc9-8ffd-1d79fbb20be3', alt: 'CupCraft Order & Inventory Management' },
      { src: 'https://github.com/user-attachments/assets/1d9230e7-f2f1-402f-adff-ecec866d6772', alt: 'CupCraft Order Details' },
      { src: 'https://github.com/user-attachments/assets/febcd33d-f679-40a7-8650-06ed1a4f7cfb', alt: 'CupCraft Receipt Print' },
      { src: 'https://github.com/user-attachments/assets/c1370c22-081a-4e22-b970-25d0b7b30c6c', alt: 'CupCraft Dashboard Analytics' },
      { src: 'https://github.com/user-attachments/assets/7b524ed4-e0f5-4a80-a829-185020b7cc1c', alt: 'CupCraft Sales Records' },
    ],
    link: 'https://beconet.github.io/CUPCRAFT_PROJECT/login_page.html',
    desc: 'Front-end cafe management system for orders, sales, and analytics. Features admin login, order and inventory management, dashboard analytics, and sales records.',
    role: 'Role : UX/UI Designer',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Figma', 'GitHub Pages', 'Git'],
    github: 'https://github.com/Beconet/CUPCRAFT_PROJECT',
    isPrototype: false,
  },
  {
    title: 'WhoCanEat',
    images: [
      { src: whocaneat_1, alt: 'WhoCanEat - Home' },
      { src: whocaneat_2, alt: 'WhoCanEat - Menu' },
      { src: whocaneat_3, alt: 'WhoCanEat - Product Filter' },
      { src: whocaneat_4, alt: 'WhoCanEat - Product List' },
      { src: whocaneat_5, alt: 'WhoCanEat - Grocery Store' },
      { src: whocaneat_6, alt: 'WhoCanEat - Health Menu' },
      { src: whocaneat_7, alt: 'WhoCanEat - PharmaFlow' },
      { src: whocaneat_8, alt: 'WhoCanEat - Deals' },
      { src: whocaneat_9, alt: 'WhoCanEat - Self Pickup' },
      { src: whocaneat_10, alt: 'WhoCanEat - Market Analysis' },
      { src: whocaneat_11, alt: 'WhoCanEat - SWOT' },
      { src: whocaneat_12, alt: 'WhoCanEat - Financials' },
    ],
    link: 'https://www.figma.com/proto/r4kXWcQ0iGvUdnsoxk4BHi/WhoCanEat?node-id=1-2&p=f&t=YTAx9omK1Krnb1Bw-9&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1',
    desc: `WhoCanEat is a B2B2C e-commerce platform connecting grocery stores with customers, focusing on health and well-being through modern technology.

Mission: Develop technology that helps people facing health challenges by enhancing care experiences and improving access to resources.

Product: A mobile application that saves customers time and money by managing and filtering products, supporting all types of grocery businesses to increase transactions.

Target Market: Thai customers who want to shop efficiently and conveniently, especially those with limited time.

Goal: Become a partner with grocery stores, retailers, and hospitals nationwide.`,
    role: 'Role : UX/UI Designer',
    tools: ['Figma'],
    isPrototype: true,
  },
  {
    title: 'Cloth E-Commerce',
    images: [
      { src: ecom_project1, alt: 'Cloth E-Commerce cover 1' },
      { src: ecom_project2, alt: 'Cloth E-Commerce cover 2' },
      { src: ecom_project3, alt: 'Cloth E-Commerce cover 3' },
      { src: ecom_project4, alt: 'Cloth E-Commerce cover 4' },
      { src: ecom_project5, alt: 'Cloth E-Commerce cover 5' },
      { src: ecom_project6, alt: 'Cloth E-Commerce cover 6' },
      { src: ecom_project7, alt: 'Cloth E-Commerce cover 7' },
    ],
    link: 'https://www.figma.com/proto/F0KR84V7gLRwX2bZKg8XA1/Cloth--E-Commerce?node-id=37-3&p=f&t=knOFLvcgd9f9wzZp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=37%3A3',
    desc: 'My first UX/UI project - an e-commerce app prototype designed in Figma while learning the basics of user-centered design.',
    role: 'Role : UX/UI Designer',
    tools: ['Figma', 'User Interface Design'],
    isPrototype: true,
  },
  {
    title: 'GUI-based Python Project: I Have Tickets',
    images: [
      { src: ihaveticket_1, alt: 'I Have Tickets - Main Screen' },
      { src: ihaveticket_2, alt: 'I Have Tickets - Ticket List' },
      { src: ihaveticket_3, alt: 'I Have Tickets - Add Ticket' },
      { src: ihaveticket_4, alt: 'I Have Tickets - Edit Ticket' },
      { src: ihaveticket_5, alt: 'I Have Tickets - Delete Ticket' },
    ],
    desc: 'A Python GUI project developed in my first year using the customtkinter library. The application features a simple ticket management interface with no API integration - everything is handled locally within the app.',
    role: 'Role : Main Developer (Python, customtkinter)',
    tools: ['Python', 'CustomTkinter', 'Tkinter', 'Git'],
    github: 'https://github.com/etsuwithtea/ihavetickets',
    isPrototype: false,
  },
  {
    title: 'Eat Rai Dee (Mobile)',
    images: [
      { src: eat_rai_dee_project1_mobile, alt: 'Eat Rai Dee mobile 1' },
      { src: eat_rai_dee_project2_mobile, alt: 'Eat Rai Dee mobile 2' },
      { src: eat_rai_dee_project3_mobile, alt: 'Eat Rai Dee mobile 3' },
      { src: eat_rai_dee_project4_mobile, alt: 'Eat Rai Dee mobile 4' },
      { src: eat_rai_dee_project5_mobile, alt: 'Eat Rai Dee mobile 5' },
      { src: eat_rai_dee_project6_mobile, alt: 'Eat Rai Dee mobile 6' },
      { src: eat_rai_dee_project7_mobile, alt: 'Eat Rai Dee mobile 7' },
      { src: eat_rai_dee_project8_mobile, alt: 'Eat Rai Dee mobile 8' },
      { src: eat_rai_dee_project9_mobile, alt: 'Eat Rai Dee mobile 9' },
    ],
    link: 'https://www.figma.com/proto/sPzqtp8LxBSMteANT87PAQ/Eat-%E0%B9%84%E0%B8%A3-%E0%B8%94%E0%B8%B5?node-id=1-228&starting-point-node-id=1%3A228&show-proto-sidebar=1&t=i4zghbmnjlwyEqXa-1',
    desc: 'Eat Rai Dee (Mobile) is a Figma prototype for a mobile app version of the Eat Rai Dee project. The design emphasizes intuitive navigation, playful visuals, and quick interactions tailored for mobile users. Prototype only, no source code.',
    role: 'Role : UX/UI Designer',
    tools: ['Figma'],
    isPrototype: true,
  },
  {
    title: 'mini project xo game (tic tac toe)',
    images: [
      { src: xo_1, alt: 'XO Game 3x3 Board' },
      { src: xo_2, alt: 'XO Game 4x4 Board' },
      { src: xo_3, alt: 'XO Game 5x5 Board' },
      { src: xo_4, alt: 'XO Game Thai Interface' },
    ],
    desc: 'Interactive XO (Tic Tac Toe) game with multiple board sizes (3x3, 4x4, 5x5) and language switching. Built with Vite + React + Tailwind CSS for a smooth and responsive experience.',
    role: 'Role : Developer',
    tools: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'GitHub Pages', 'Git'],
    github: 'https://github.com/etsuwithtea/xo_game',
    isPrototype: false,
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: 'AWS Academy Graduate - Cloud Foundations',
    desc: 'AWS Academy - Nov 24, 2025 - 20 hours',
    image: certificateAwsCloudFoundations,
    link: 'https://www.credly.com/go/0OKA0x1Z',
  },
  {
    title: 'Customer Service with Python: Build a Chatbot using ChatGPT',
    desc: 'Coursera Project Network - Apr 18, 2025',
    image: certificateCoursera,
    link: 'https://coursera.org/verify/FRCJ9CQKZLIB',
  },
  {
    title: 'Basic Cybersecurity',
    desc: 'MOOC NCSA Thailand - Aug 31, 2024',
    image: certificateCybersecurity,
    link: '',
  },
  {
    title: 'Cybersecurity Awareness',
    desc: 'DGA & TDGA Thailand - Oct 20, 2023',
    image: certificateCyberawareness,
    link: 'https://portal.apps.go.th/edoc/signature/verify?DocumentID=ce7f5759-c6a9-48ce-8ddd-93ef706e801b',
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'codehard.co.th',
    role: 'Intern Web Developer',
    period: '2026 Q1',
    description: 'Professional internship focused on frontend and backend web development using modern frameworks.',
  },
];
