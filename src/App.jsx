import './index.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

// Importing images and assets
import mainProfile from './assets/mainprofile.jpg';
import mainProfile_2 from './assets/mainprofile_2.jpg';

// Importing PDF documents
import resumePDF from './assets/Navapan_Suthon_Resume.pdf';
import transcriptPDF from './assets/Navapan_Suthon_Unofficial_Transcript.pdf';

// Importing certificates
import certificateCoursera from './assets/certificates/certificate_coursera.png';
import certificateCybersecurity from './assets/certificates/certificate-cybersecurity.png';
import certificateCyberawareness from './assets/certificates/certificate_cyber_awareness.png';

// ecommerce project images
import ecom_project1 from './assets/ecommerce/prototype_cloth_e_commerce_1.png';
import ecom_project2 from './assets/ecommerce/prototype_cloth_e_commerce_2.png';
import ecom_project3 from './assets/ecommerce/prototype_cloth_e_commerce_3.png';
import ecom_project4 from './assets/ecommerce/prototype_cloth_e_commerce_4.png';
import ecom_project5 from './assets/ecommerce/prototype_cloth_e_commerce_5.png';
import ecom_project6 from './assets/ecommerce/prototype_cloth_e_commerce_6.png';
import ecom_project7 from './assets/ecommerce/prototype_cloth_e_commerce_7.png';

// eat rai dee project images
import eat_rai_dee_project1 from './assets/eat_rai_dee/eat_rai_dee_1.png';
import eat_rai_dee_project2 from './assets/eat_rai_dee/eat_rai_dee_2.png';
import eat_rai_dee_project3 from './assets/eat_rai_dee/eat_rai_dee_3.png';
import eat_rai_dee_project4 from './assets/eat_rai_dee/eat_rai_dee_4.png';
import eat_rai_dee_project5 from './assets/eat_rai_dee/eat_rai_dee_5.png';
import eat_rai_dee_project6 from './assets/eat_rai_dee/eat_rai_dee_6.png';
import eat_rai_dee_project7 from './assets/eat_rai_dee/eat_rai_dee_7.png';
import eat_rai_dee_project8 from './assets/eat_rai_dee/eat_rai_dee_8.png';
import eat_rai_dee_project9 from './assets/eat_rai_dee/eat_rai_dee_9.png';
import eat_rai_dee_project10 from './assets/eat_rai_dee/eat_rai_dee_10.png';

// Importing video for Eat Rai Dee project
import eat_rai_dee_video from './assets/eat_rai_dee/eat_rai_dee_video.mp4';

// Importing mobile versions of Eat Rai Dee project images
import eat_rai_dee_project1_mobile from './assets/eat_rai_dee/mobile/eat_rai_dee_1_mobile.png';
import eat_rai_dee_project2_mobile from './assets/eat_rai_dee/mobile/eat_rai_dee_2_mobile.png';
import eat_rai_dee_project3_mobile from './assets/eat_rai_dee/mobile/eat_rai_dee_3_mobile.png';
import eat_rai_dee_project4_mobile from './assets/eat_rai_dee/mobile/eat_rai_dee_4_mobile.png';
import eat_rai_dee_project5_mobile from './assets/eat_rai_dee/mobile/eat_rai_dee_5_mobile.png';
import eat_rai_dee_project6_mobile from './assets/eat_rai_dee/mobile/eat_rai_dee_6_mobile.png';
import eat_rai_dee_project7_mobile from './assets/eat_rai_dee/mobile/eat_rai_dee_7_mobile.png';
import eat_rai_dee_project8_mobile from './assets/eat_rai_dee/mobile/eat_rai_dee_8_mobile.png';
import eat_rai_dee_project9_mobile from './assets/eat_rai_dee/mobile/eat_rai_dee_9_mobile.png';

// Importing the Carousel component
import Carousel from './components/Carousel.jsx';

// Importing BeyondHana project images
import beyondhana_1 from './assets/beyondhana/beyondhana_1.png';
import beyondhana_2 from './assets/beyondhana/beyondhana_2.png';
import beyondhana_3 from './assets/beyondhana/beyondhana_3.png';
import beyondhana_4 from './assets/beyondhana/beyondhana_4.png';
import beyondhana_5 from './assets/beyondhana/beyondhana_5.png';
import beyondhana_6 from './assets/beyondhana/beyondhana_6.png';
import beyondhana_7 from './assets/beyondhana/beyondhana_7.png';
import beyondhana_8 from './assets/beyondhana/beyondhana_8.png';


// Importing egat project images
import egat1 from './assets/egat/egat1.png';
import egat2 from './assets/egat/egat2.png';
import egat3 from './assets/egat/egat3.png';
import egat4 from './assets/egat/egat4.png';
import egat5 from './assets/egat/egat5.png';
import egat6 from './assets/egat/egat6.png';
import egat7 from './assets/egat/egat7.png';

// Importing video for BeyondHana project
import beyondhana_video from './assets/beyondhana/beyondhana_video.mp4';

// portfolio website images
import portfolio_1 from './assets/portfolio_web/portfolio_web_1.png';
import portfolio_2 from './assets/portfolio_web/portfolio_web_2.png';
import portfolio_3 from './assets/portfolio_web/portfolio_web_3.png';
import portfolio_4 from './assets/portfolio_web/portfolio_web_4.png';

// Importing xo game images
import xo_1 from './assets/xo_game/xo_1.png';
import xo_2 from './assets/xo_game/xo_2.png';
import xo_3 from './assets/xo_game/xo_3.png';
import xo_4 from './assets/xo_game/xo_4.png';

// importing ihaveticket images
import ihaveticket_1 from './assets/ihaveticket/ihaveticket_1.png';
import ihaveticket_2 from './assets/ihaveticket/ihaveticket_2.png';
import ihaveticket_3 from './assets/ihaveticket/ihaveticket_3.png';
import ihaveticket_4 from './assets/ihaveticket/ihaveticket_4.png';
import ihaveticket_5 from './assets/ihaveticket/ihaveticket_5.png';

// Importing WhoCanEat project images
import whocaneat_1 from './assets/whocaneat/whocateat_1.png';
import whocaneat_2 from './assets/whocaneat/whocateat_2.png';
import whocaneat_3 from './assets/whocaneat/whocateat_3.png';
import whocaneat_4 from './assets/whocaneat/whocateat_4.png';
import whocaneat_5 from './assets/whocaneat/whocateat_5.png';
import whocaneat_6 from './assets/whocaneat/whocateat_6.png';
import whocaneat_7 from './assets/whocaneat/whocateat_7.png';
import whocaneat_8 from './assets/whocaneat/whocateat_8.png';
import whocaneat_9 from './assets/whocaneat/whocateat_9.png';
import whocaneat_10 from './assets/whocaneat/whocateat_10.png';
import whocaneat_11 from './assets/whocaneat/whocateat_11.png';
import whocaneat_12 from './assets/whocaneat/whocateat_12.png';

// Importing gamecompany career project images
import gamecompany_career1 from './assets/gamecompany_career/gamecompany_career1.png';
import gamecompany_career2 from './assets/gamecompany_career/gamecompany_career2.png';
import gamecompany_career3 from './assets/gamecompany_career/gamecompany_career3.png';
import gamecompany_career4 from './assets/gamecompany_career/gamecompany_career4.png';

// Importing BU x India activity images
import bu_x_india_1 from './assets/bu_x_india/bu_x_india_embassy_1.webp';
import bu_x_india_2 from './assets/bu_x_india/bu_x_india_embassy_2.jpg';
import bu_x_india_3 from './assets/bu_x_india/bu_x_india_embassy_3.webp';
import bu_x_india_4 from './assets/bu_x_india/bu_x_india_embassy_4.webp';

// Importing BU x KAIT activity images
import bu_x_kait_1 from './assets/bu_x_kait/bu_x_kait_1.webp';
import bu_x_kait_2 from './assets/bu_x_kait/bu_x_kait_2.jpg';
import bu_x_kait_3 from './assets/bu_x_kait/bu_x_kait_3.jpg';
import bu_x_kait_4 from './assets/bu_x_kait/bu_x_kait_4.webp';
import bu_x_kait_5 from './assets/bu_x_kait/bu_x_kait_5.jpg';

// Importing ImMemmo project images
import ImMemo_1 from './assets/ImMemmo/ImMemo_1.png';
import ImMemo_2 from './assets/ImMemmo/ImMemo_2.png';
import ImMemo_3 from './assets/ImMemmo/ImMemo_3.png';
import ImMemo_4 from './assets/ImMemmo/ImMemo_4.png';

const SOCIALS = [
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/navapan-suthon-5245a3384' },
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/etsuwithtea' },
  { name: 'GitHub', icon: 'github', url: 'https://github.com/etsuwithtea' },
];

const ACTIVITIES = [
  {
  title: 'International Seminar: BU x KAIT 2025',
  date: '20/02/2025',
    description: 'Attended an international seminar organized as a collaboration between Bangkok University and Kanazawa Institute of Technology (KAIT), Japan. The seminar featured world-class speakers discussing AI and Network technologies, providing valuable insights into global technology trends and copyright challenges in AI implementation.',
    highlights: [
      'International academic seminar collaboration between Bangkok University and Kanazawa Institute of Technology (KAIT), Japan',
      'Featured Prof. Masahiro SAKAI presenting "Navigating Generative AI Use in Japan: Our Challenges from \'not\' to \'with\' within the Unique Copyright Landscape"',
      'Focused on AI/Network technologies and copyright landscape in generative AI',
      'Enhanced understanding of international perspectives on AI technology implementation'
    ],
    images: [
      { src: bu_x_kait_1, alt: 'BU x KAIT seminar opening' },
      { src: bu_x_kait_2, alt: 'Prof. Masahiro SAKAI presentation' },
      { src: bu_x_kait_3, alt: 'AI and copyright discussion' },
      { src: bu_x_kait_4, alt: 'International collaboration showcase' },
      { src: bu_x_kait_5, alt: 'Student participation and Q&A' },
    ]
  },
  {
    title: 'BU x Embassy of India: Knowledge Sharing',
    date: '30/01/2025',
    description: 'School of Information Technology and Innovation organized the "BU x Embassy of India: Knowledge Sharing" project, a collaboration between Bangkok University and the Embassy of India in Thailand, to provide students with opportunities to learn and exchange perspectives about technology and innovation from international experts.',
    highlights: [
      'Collaboration between Bangkok University and Embassy of India in Thailand',
      'Technology and innovation knowledge sharing with international experts',
      'Guest speakers including Ms. Paulomi Tripathi (Deputy Chief of Mission), Mr. Gurmeet Singh (Executive Director, Electronics & Computer Software Export Promotion Council), and Mr. Nagaraj Prasadh (Country Head, Intellect Design Arena)',
      'Topics covered: Indian technology and innovation, digital industry role, technology business development, networking and career opportunities'
    ],
    images: [
      { src: bu_x_india_1, alt: 'BU x Embassy of India opening ceremony' },
      { src: bu_x_india_2, alt: 'Guest speakers presentation' },
      { src: bu_x_india_3, alt: 'Knowledge sharing session' },
      { src: bu_x_india_4, alt: 'Networking session with students' },
    ]
  },
];

const PROJECTS = [
  {
    title: 'Power Transformer Management for EGAT (current in progress)',
    images: [
      { src: egat1, alt: 'EGAT Transformer Management Login' },
      { src: egat2, alt: 'EGAT Transformer Management Dashboard' },
      { src: egat3, alt: 'EGAT MongoDB Collections Overview' },
      { src: egat4, alt: 'EGAT Query Performance Optimization' },
      { src: egat5, alt: 'EGAT Advanced Reporting System' },
      { src: egat6, alt: 'EGAT User Interface Design' },
      { src: egat7, alt: 'EGAT Database Management' },
    ],
    desc: 'Remade EGAT’s power transformer management web application with a modern UI/UX using Next.js and MongoDB. Integrated and visualized data from over 100+ MongoDB collections for centralized management. Optimized database queries for fast access and reliability, supporting thousands of transformer records. Improved operational efficiency and user satisfaction with advanced insights and reporting.',
    role: 'Role : Fullstack Developer (Next.js, MongoDB)',
    tools: ['Next.js', 'GitHub Copilot', 'MongoDB', 'React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Visual Studio Code', 'Git', 'Tailwind CSS'],
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
    desc: 'Visual Novel game developed with .NET MAUI. Thai story, English interface, choice system, custom illustrations, and Android support.',
    role: 'Role : Main Developer & UX/UI Designer ',
    tools: ['.NET MAUI', 'C#', 'XAML', 'Visual Studio', 'Android SDK', 'Figma', 'Git'],
    github: 'https://github.com/etsuwithtea/BeyondHana',
    isPrototype: false,
  },
  {
    title: 'Eat Rai Dee',
    images: [
      { type: 'video', src: eat_rai_dee_video, alt: '' },
      { src: eat_rai_dee_project1, alt: '' },
      { src: eat_rai_dee_project2, alt: '' },
      { src: eat_rai_dee_project3, alt: '' },
      { src: eat_rai_dee_project4, alt: '' },
      { src: eat_rai_dee_project5, alt: '' },
      { src: eat_rai_dee_project6, alt: '' },
      { src: eat_rai_dee_project7, alt: '' },
      { src: eat_rai_dee_project8, alt: '' },
      { src: eat_rai_dee_project9, alt: '' },
      { src: eat_rai_dee_project10, alt: '' },
    ],
    link: 'https://www.figma.com/proto/sPzqtp8LxBSMteANT87PAQ/Eat-%E0%B9%84%E0%B8%A3-%E0%B8%94%E0%B8%B5?node-id=205-2034&t=ilVwoi93Evp4Nvz4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=205%3A2034&show-proto-sidebar=1',
    github: 'https://github.com/Jabiby7561/Eatraidee',
    desc: 'Eat Rai Dee is a UX/UI and development project aimed at helping users decide what to eat when they have no idea. Designed in Figma and developed in Java using Apache NetBeans, this was my first project where I learned and applied Object-Oriented Programming (OOP). The application randomly suggests food options and displays the result on a kiosk screen. I was responsible for both the user interface design and the core programming logic.',
    role: 'Role : UX/UI Designer & Main Developer (Java, Apache NetBeans)',
    tools: ['Java', 'Apache NetBeans', 'Figma', 'Git'],
    isPrototype: true,
  },
  {
    title: 'ETSU Portfolio Website',
    images: [
      { src: portfolio_1, alt: '' },
      { src: portfolio_2, alt: '' },
      { src: portfolio_3, alt: '' },
      { src: portfolio_4, alt: '' },
    ],
    link: 'https://etsuwithtea.github.io/etsu-portfolio/',
    desc: 'Personal portfolio website built with React + Vite, styled with Tailwind CSS, and hosted on GitHub Pages. Designed and developed to showcase my projects, skills, and certificates in a modern, responsive layout.',
    role: 'Role : Developer (with GitHub Copilot assistance)',
    tools: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'GitHub Pages', 'Git', 'GitHub Copilot'],
    isPrototype: false,
  },
  {
    title: 'CupCraft Café Management System',
    images: [
      { src: 'https://github.com/user-attachments/assets/2263413f-0b04-4a32-84e0-6c72a25aca11', alt: 'CupCraft Admin Login Page' },
      { src: 'https://github.com/user-attachments/assets/cc2d3545-e14c-4bc9-8ffd-1d79fbb20be3', alt: 'CupCraft Order & Inventory Management' },
      { src: 'https://github.com/user-attachments/assets/1d9230e7-f2f1-402f-adff-ecec866d6772', alt: 'CupCraft Order Details' },
      { src: 'https://github.com/user-attachments/assets/febcd33d-f679-40a7-8650-06ed1a4f7cfb', alt: 'CupCraft Receipt Print' },
      { src: 'https://github.com/user-attachments/assets/c1370c22-081a-4e22-b970-25d0b7b30c6c', alt: 'CupCraft Dashboard Analytics' },
      { src: 'https://github.com/user-attachments/assets/7b524ed4-e0f5-4a80-a829-185020b7cc1c', alt: 'CupCraft Sales Records' },
    ],
    link: 'https://beconet.github.io/CUPCRAFT_PROJECT/login_page.html',
    desc: 'Front-end café management system for order, sales, and analytics. Features admin login, order/inventory management, dashboard analytics, and sales records.',
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
    desc: `WhoCanEat is a B2B2C e-commerce platform connecting grocery stores with customers, focusing on health and well-being through modern technology.\n\nMission: To develop innovative technology that helps people facing health challenges by enhancing care experiences and improving access to resources.\n\nProduct: A mobile application that saves customers time and money by managing and filtering products, supporting all types of grocery businesses to increase transactions.\n\nTarget Market: Thai customers who want to shop efficiently and conveniently, especially those with limited time.\n\nGoal: To become a partner with grocery stores, retailers, and hospitals nationwide.`,
    role: 'Role : UX/UI Designer',
    tools: ['Figma'],
    isPrototype: true,
  },
  {
    title: 'Cloth E-Commerce',
    images: [
      { src: ecom_project1, alt: '' },
      { src: ecom_project2, alt: '' },
      { src: ecom_project3, alt: '' },
      { src: ecom_project4, alt: '' },
      { src: ecom_project5, alt: '' },
      { src: ecom_project6, alt: '' },
      { src: ecom_project7, alt: '' },
    ],
    link: 'https://www.figma.com/proto/F0KR84V7gLRwX2bZKg8XA1/Cloth--E-Commerce?node-id=37-3&p=f&t=knOFLvcgd9f9wzZp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=37%3A3',
    desc: 'My first UX/UI project — an e-commerce app prototype designed in Figma while learning the basics of user-centered design.',
    role: 'Role : UX/UI Designer',
    tools: ['Figma', 'User Interface Design'],
    isPrototype: true,
  },
  {
    title: 'GUI-based Python Project: "I Have Tickets"',
    images: [
      { src: ihaveticket_1, alt: 'I Have Tickets - Main Screen' },
      { src: ihaveticket_2, alt: 'I Have Tickets - Ticket List' },
      { src: ihaveticket_3, alt: 'I Have Tickets - Add Ticket' },
      { src: ihaveticket_4, alt: 'I Have Tickets - Edit Ticket' },
      { src: ihaveticket_5, alt: 'I Have Tickets - Delete Ticket' },
    ],
    desc: 'A Python GUI project developed in my first year using the customtkinter library. The application features a simple ticket management interface with no API integration—everything is handled locally within the app. I was responsible for the entire design and development process as the main developer.',
    role: 'Role : Main Developer (Python, customtkinter)',
    tools: ['Python', 'CustomTkinter', 'Tkinter', 'Git'],
    github: 'https://github.com/etsuwithtea/ihavetickets',
    isPrototype: false,
  },
  {
    title: 'Eat Rai Dee (Mobile)',
    images: [
      { src: eat_rai_dee_project1_mobile, alt: '' },
      { src: eat_rai_dee_project2_mobile, alt: '' },
      { src: eat_rai_dee_project3_mobile, alt: '' },
      { src: eat_rai_dee_project4_mobile, alt: '' },
      { src: eat_rai_dee_project5_mobile, alt: '' },
      { src: eat_rai_dee_project6_mobile, alt: '' },
      { src: eat_rai_dee_project7_mobile, alt: '' },
      { src: eat_rai_dee_project8_mobile, alt: '' },
      { src: eat_rai_dee_project9_mobile, alt: '' },
    ],
    link: 'https://www.figma.com/proto/sPzqtp8LxBSMteANT87PAQ/Eat-%E0%B9%84%E0%B8%A3-%E0%B8%94%E0%B8%B5?node-id=1-228&starting-point-node-id=1%3A228&show-proto-sidebar=1&t=i4zghbmnjlwyEqXa-1',
    desc: 'Eat Rai Dee (Mobile) is a Figma prototype for a mobile app version of the Eat Rai Dee project. This version focuses on a modern, user-friendly mobile experience for helping users decide what to eat. The design emphasizes intuitive navigation, playful visuals, and quick interactions tailored for mobile users. (Prototype only, no source code)',
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
    desc: 'Interactive XO (Tic Tac Toe) game with multiple board sizes (3x3, 4x4, 5x5) and language switching feature. Built with Vite + React + Tailwind CSS for a smooth and responsive gaming experience.',
    role: 'Role : Developer',
    tools: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'GitHub Pages', 'Git'],
    github: 'https://github.com/etsuwithtea/xo_game',
    isPrototype: false,
  },
];

const CERTIFICATES = [
  {
    title: 'Customer Service with Python: Build a Chatbot using ChatGPT',
    desc: 'Coursera Project Network · Apr 18, 2025',
    image: certificateCoursera,
    link: 'https://coursera.org/verify/FRCJ9CQKZLIB',
  },
  {
    title: 'Basic Cybersecurity',
    desc: 'MOOC NCSA Thailand · Aug 31, 2024',
    image: certificateCybersecurity,
    link: '', 
  },
  {
    title: 'Cybersecurity Awareness',
    desc: 'DGA & TDGA Thailand · Oct 20, 2023',
    image: certificateCyberawareness,
    link: 'https://portal.apps.go.th/edoc/signature/verify?DocumentID=ce7f5759-c6a9-48ce-8ddd-93ef706e801b',
  },
];


// Custom hook for scroll animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current;
    
    // Check if element is already in viewport on mount
    const checkInitialVisibility = () => {
      if (currentRef) {
        const rect = currentRef.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Consider element visible if it's in the viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          setIsVisible(true);
          return true;
        }
      }
      return false;
    };

    // Check initial visibility immediately
    if (checkInitialVisibility()) {
      return; // If already visible, don't set up observer
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible];
};

// Custom hook for typing animation - starts immediately if element is visible
const useTypingAnimation = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [shouldStart, setShouldStart] = useState(false);
  const ref = useRef();

  useEffect(() => {
    // Start typing animation immediately on component mount
    setShouldStart(true);}, []);

  useEffect(() => {
    if (shouldStart) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    }
  }, [shouldStart, text, speed]);

  return [ref, displayedText];
};

// Helper function to get icon for skills
const getSkillIcon = (skill, isDarkMode = false) => {
  const iconMap = {
    'Python': <i className="fab fa-python text-blue-500"></i>,
    'C#': <i className="fas fa-code text-green-600"></i>,
    'Java': <i className="fab fa-java text-orange-600"></i>,
    'Node.js': <i className="fab fa-node-js text-green-500"></i>,
    'HTML, CSS, JavaScript': <i className="fab fa-html5 text-orange-500"></i>,
    'SQL': <i className="fas fa-database text-blue-600"></i>,
    'Figma': <i className="fab fa-figma text-purple-500"></i>,
    'Git, GitHub': <i className={`fab fa-github ${isDarkMode ? 'text-white' : 'text-gray-800'}`}></i>,
    'MongoDB': <i className="fas fa-leaf text-green-600"></i>,
    'Apache NetBeans': <i className="fas fa-code text-blue-600"></i>,
    '.NET MAUI': <i className="fas fa-mobile-alt text-purple-600"></i>,
    'Visual Studio Code': <i className="fas fa-code text-blue-500"></i>,
    'Visual Studio 2022': <i className="fas fa-laptop-code text-purple-700"></i>
  };

  return iconMap[skill] || <i className="fas fa-check-circle text-green-500"></i>;
};

function App() {
  // Modal state for certificate popup
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [modalAlt, setModalAlt] = useState('');
  const [modalImages, setModalImages] = useState([]);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation states
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  
  // Scroll progress state
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Profile image rotation state
  const [currentProfileImage, setCurrentProfileImage] = useState(0);
  const profileImages = [mainProfile, mainProfile_2];
  
  // About section is always visible (above the fold)
  const aboutVisible = true;
  const aboutRef = useRef();
  
  // Other scroll animation refs
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [certificateRef, certificateVisible] = useScrollAnimation();
  const [projectRef, projectVisible] = useScrollAnimation();
  const [activityRef, activityVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();
  
  // Expanded tools state for each project
  const [expandedTools, setExpandedTools] = useState({});
  
  // Typing animation - start immediately when page loads
  const [typingRef, typedText] = useTypingAnimation("Hi I'm Navapan", 100);

  useEffect(() => {
    // Loading sequence
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setShowLoader(false), 500); // Hide loader after animations start
    }, 1500); // Show loader for 1.5 seconds
    
    // Check for saved dark mode preference
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    return () => clearTimeout(timer);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      setScrollY(scrollTop);
      
      // Show back to top button after scrolling 300px
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle tools expansion for specific project
  const toggleToolsExpansion = (projectIndex) => {
    setExpandedTools(prev => ({
      ...prev,
      [projectIndex]: !prev[projectIndex]
    }));
  };

  // Profile image rotation effect
  useEffect(() => {
    const imageRotationInterval = setInterval(() => {
      setCurrentProfileImage(prev => (prev + 1) % profileImages.length);
    }, 3000); // เปลี่ยนรูปทุก 4 วินาที

    return () => clearInterval(imageRotationInterval);
  }, [profileImages.length]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation click handler
  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };
  // openModal: set alt text for modal only (no title displayed)
  const openModal = (img, alt, type, idx, allImages = []) => {
    setModalImages(allImages.length > 0 ? allImages : [{ src: img, alt: alt || '' }]);
    setCurrentModalIndex(idx || 0);
    setModalImg(img);
    setModalAlt(''); // No title displayed in modal
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const nextImage = () => {
    if (modalImages.length > 1) {
      const nextIndex = (currentModalIndex + 1) % modalImages.length;
      setCurrentModalIndex(nextIndex);
      const nextImg = modalImages[nextIndex];
      setModalImg(nextImg.type === 'video' ? nextImg.src : nextImg.src);
    }
  };

  const prevImage = () => {
    if (modalImages.length > 1) {
      const prevIndex = currentModalIndex === 0 ? modalImages.length - 1 : currentModalIndex - 1;
      setCurrentModalIndex(prevIndex);
      const prevImg = modalImages[prevIndex];
      setModalImg(prevImg.type === 'video' ? prevImg.src : prevImg.src);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
    setModalAlt('');
    setModalImages([]);
    setCurrentModalIndex(0);
    document.body.style.overflow = '';
  };

  const handleAnyModalOpen = () => {
    if (modalOpen) closeModal();
  };

  return (<>
    {/* Loading Screen */}
    {showLoader && (
      <div className={`fixed inset-0 z-[10000] flex items-center justify-center transition-all duration-500 ${isDarkMode ? 'bg-black' : 'bg-white'} ${!isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="text-center">
          <div className={`inline-block w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mb-4 ${isDarkMode ? 'border-white' : 'border-gray-900'}`}></div>
          <div className={`text-lg font-semibold tracking-wide animate-pulse ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            ETSU Portfolio
          </div>
        </div>
      </div>
    )}
      
    <div className={`min-h-screen transition-colors duration-300 font-sans flex flex-col items-center relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Orbs with Parallax */}
        <div 
          className={`absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl animate-float ${isDarkMode ? 'opacity-20 bg-gradient-to-r from-purple-500 to-blue-500' : 'opacity-30 bg-gradient-to-r from-blue-300 to-purple-300'}`} 
          style={{
            animationDelay: '0s',
            transform: `translateY(${scrollY * 0.1}px)`
          }}></div>
        <div 
          className={`absolute top-40 right-20 w-48 h-48 rounded-full blur-3xl animate-float ${isDarkMode ? 'opacity-15 bg-gradient-to-r from-pink-500 to-orange-500' : 'opacity-25 bg-gradient-to-r from-pink-300 to-orange-300'}`} 
          style={{
            animationDelay: '2s',
            transform: `translateY(${scrollY * 0.15}px)`
          }}></div>
        <div 
          className={`absolute bottom-20 left-1/4 w-56 h-56 rounded-full blur-3xl animate-float ${isDarkMode ? 'opacity-10 bg-gradient-to-r from-green-500 to-teal-500' : 'opacity-20 bg-gradient-to-r from-green-300 to-teal-300'}`} 
          style={{
            animationDelay: '4s',
            transform: `translateY(${scrollY * 0.08}px)`
          }}></div>
        <div 
          className={`absolute bottom-32 right-1/4 w-40 h-40 rounded-full blur-3xl animate-float ${isDarkMode ? 'opacity-20 bg-gradient-to-r from-yellow-500 to-red-500' : 'opacity-30 bg-gradient-to-r from-yellow-300 to-red-300'}`} 
          style={{
            animationDelay: '6s',
            transform: `translateY(${scrollY * 0.12}px)`
          }}></div>
        
        {/* Additional decorative elements for light mode */}
        <div 
          className={`absolute top-1/3 left-1/2 w-72 h-72 rounded-full blur-3xl animate-float ${isDarkMode ? 'opacity-5 bg-gradient-to-r from-indigo-500 to-purple-500' : 'opacity-15 bg-gradient-to-r from-indigo-200 to-purple-200'}`} 
          style={{
            animationDelay: '8s',
            transform: `translateY(${scrollY * 0.06}px)`
          }}
        ></div>
        <div 
          className={`absolute bottom-1/2 right-10 w-32 h-32 rounded-full blur-2xl animate-float ${isDarkMode ? 'opacity-10 bg-gradient-to-r from-rose-500 to-pink-500' : 'opacity-20 bg-gradient-to-r from-rose-200 to-pink-200'}`} 
          style={{
            animationDelay: '10s',
            transform: `translateY(${scrollY * 0.14}px)`
          }}
        ></div>
        
        {/* Floating Particles */}
        <div className={`absolute top-1/4 left-1/3 w-2 h-2 rounded-full opacity-40 animate-bounce ${isDarkMode ? 'bg-white' : 'bg-gray-600'}`} style={{animationDelay: '0s'}}></div>
        <div className={`absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full opacity-35 animate-bounce ${isDarkMode ? 'bg-gray-300' : 'bg-gray-700'}`} style={{animationDelay: '1s'}}></div>
        <div className={`absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full opacity-30 animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-800'}`} style={{animationDelay: '2s'}}></div>
        <div className={`absolute bottom-1/4 right-1/3 w-2.5 h-2.5 rounded-full opacity-25 animate-bounce ${isDarkMode ? 'bg-gray-500' : 'bg-gray-600'}`} style={{animationDelay: '3s'}}></div>
        <div className={`absolute top-1/2 left-1/6 w-1.5 h-1.5 rounded-full opacity-35 animate-bounce ${isDarkMode ? 'bg-white' : 'bg-gray-700'}`} style={{animationDelay: '4s'}}></div>
        <div className={`absolute top-3/4 right-1/6 w-1 h-1 rounded-full opacity-30 animate-bounce ${isDarkMode ? 'bg-gray-300' : 'bg-gray-800'}`} style={{animationDelay: '5s'}}></div>
        
        {/* Grid Pattern */}
        <div className={`absolute inset-0 ${isDarkMode ? 'opacity-5' : 'opacity-8'}`} style={{
          backgroundImage: `radial-gradient(circle, ${isDarkMode ? '#ffffff' : '#4b5563'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Subtle gradient overlay for light mode */}
        <div className={`absolute inset-0 ${isDarkMode ? 'opacity-0' : 'opacity-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}></div>
      </div>
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[1000] pointer-events-none">
        <div 
          className={`h-full transition-all duration-300 ease-out ${isDarkMode ? 'bg-gradient-to-r from-purple-500 via-pink-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 via-orange-500 to-red-500'}`}
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      {/* Navbar */}
      <nav className={`navbar-fallback fixed top-3 sm:top-6 left-3 sm:left-6 right-3 sm:right-6 w-auto max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 z-50 rounded-xl sm:rounded-2xl border shadow-lg transition-all duration-500 hover-lift-soft ${isDarkMode ? 'bg-zinc-900 bg-opacity-70 border-zinc-700 border-opacity-60 dark' : 'bg-white bg-opacity-95 border-gray-200'} ${isLoaded ? 'animate-slideInDown' : 'opacity-0 -translate-y-full'}`} style={{backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)'}}>
        <div className="flex items-center">
          <span className={`font-bold text-xl sm:text-2xl tracking-tight select-none transition-all duration-700 hover-wiggle ${isDarkMode ? 'text-white' : 'text-gray-900'} ${isLoaded ? 'animate-fadeInLeft delay-300' : ''}`}>
            ETSU
          </span>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Navigation Links - Desktop */}
          <ul className={`hidden md:flex gap-4 lg:gap-8 text-sm font-medium transition-all duration-700 ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'} ${isLoaded ? 'animate-fadeInRight delay-500' : ''}`}>
            <li><a href="#about" className={`transition-all duration-300 hover-scale-105 hover:animate-rainbow-text ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'}`} onClick={e => {
              e.preventDefault();
              handleNavClick('about');
            }}>About</a></li>
            <li><a href="#skills" className={`transition-all duration-300 hover-scale-105 hover:animate-rainbow-text ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'}`} onClick={e => {
              e.preventDefault();
              handleNavClick('skills');
            }}>Skills</a></li>
            <li><a href="#project" className={`transition-all duration-300 hover-scale-105 hover:animate-rainbow-text ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'}`} onClick={e => {
              e.preventDefault();
              handleNavClick('project');
            }}>Project</a></li>
            <li><a href="#certificate" className={`transition-all duration-300 hover-scale-105 hover:animate-rainbow-text ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'}`} onClick={e => {
              e.preventDefault();
              handleNavClick('certificate');
            }}>Certificate</a></li>
            <li><a href="#activity" className={`transition-all duration-300 hover-scale-105 hover:animate-rainbow-text ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'}`} onClick={e => {
              e.preventDefault();
              handleNavClick('activity');
            }}>Activity</a></li>
            <li><a href="#contact" className={`transition-all duration-300 hover-scale-105 hover:animate-rainbow-text ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'}`} onClick={e => {
              e.preventDefault();
              handleNavClick('contact');
            }}>Contact</a></li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${isDarkMode ? 'text-zinc-300 hover:text-white hover:bg-zinc-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
            aria-label="Toggle menu">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </button>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`relative p-2 rounded-lg sm:rounded-xl transition-all duration-300 hover-scale-105 ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-gray-100 hover:bg-gray-200'} ${isLoaded ? 'animate-fadeInRight delay-700' : 'opacity-0'}`}
            aria-label="Toggle dark mode">
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
              {/* Sun Icon */}
              <svg 
                className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 animate-rainbow-text ${isDarkMode ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
                fill="none" 
                stroke="#000"
                strokeWidth="2" 
                viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              
              {/* Moon Icon */}
              <svg 
                className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 animate-rainbow-text ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`}
                fill="none" 
                stroke="#fff"
                strokeWidth="2" 
                viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-16 sm:top-20 left-3 right-3 z-[998] md:hidden transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className={`rounded-xl border shadow-lg backdrop-blur-md ${isDarkMode ? 'bg-zinc-900/90 border-zinc-700/60' : 'bg-white/95 border-gray-200'}`}>
          <ul className="flex flex-col p-4 space-y-2">
            <li><a href="#about" className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:animate-rainbow-text ${isDarkMode ? 'text-zinc-300 hover:text-white hover:bg-zinc-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} onClick={e => {
              e.preventDefault();
              handleNavClick('about');
            }}>About</a></li>
            <li><a href="#skills" className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:animate-rainbow-text ${isDarkMode ? 'text-zinc-300 hover:text-white hover:bg-zinc-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} onClick={e => {
              e.preventDefault();
              handleNavClick('skills');
            }}>Skills</a></li>
            <li><a href="#project" className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:animate-rainbow-text ${isDarkMode ? 'text-zinc-300 hover:text-white hover:bg-zinc-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} onClick={e => {
              e.preventDefault();
              handleNavClick('project');
            }}>Project</a></li>
            <li><a href="#certificate" className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:animate-rainbow-text ${isDarkMode ? 'text-zinc-300 hover:text-white hover:bg-zinc-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} onClick={e => {
              e.preventDefault();
              handleNavClick('certificate');
            }}>Certificate</a></li>
            <li><a href="#activity" className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:animate-rainbow-text ${isDarkMode ? 'text-zinc-300 hover:text-white hover:bg-zinc-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} onClick={e => {
              e.preventDefault();
              handleNavClick('activity');
            }}>Activity</a></li>
            <li><a href="#contact" className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:animate-rainbow-text ${isDarkMode ? 'text-zinc-300 hover:text-white hover:bg-zinc-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} onClick={e => {
              e.preventDefault();
              handleNavClick('contact');
            }}>Contact</a></li>
          </ul>
        </div>
      </div>

      {/* About Section */}
      <section ref={aboutRef} id="about" className={`w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-8 transition-all duration-1000 relative z-10 ${aboutVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
        {/* Left: Main Profile Image */}
        <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 ${aboutVisible ? 'animate-fadeInLeft delay-300' : 'opacity-0 -translate-x-10'}`}>
          <div className="relative group">
            {/* Gradient Background Rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full opacity-15 blur-xl group-hover:opacity-25 transition-all duration-500 animate-pulse"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-all duration-500"></div>
            
            {/* Main Profile Container */}
            <div className="relative">
              {/* Decorative Corner Elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 sm:border-l-4 border-t-2 sm:border-t-4 border-gray-400 rounded-tl-lg opacity-60"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 sm:border-r-4 border-t-2 sm:border-t-4 border-gray-500 rounded-tr-lg opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 sm:border-l-4 border-b-2 sm:border-b-4 border-gray-500 rounded-bl-lg opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 sm:border-r-4 border-b-2 sm:border-b-4 border-gray-600 rounded-br-lg opacity-60"></div>
              
              {/* Profile Image */}
              <img 
                src={profileImages[currentProfileImage]} 
                alt="Profile" 
                width="400" 
                height="400" 
                loading="eager"
                fetchPriority="high"
                className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl bg-white hover-lift-soft animate-float border-2 sm:border-4 border-white/40 group-hover:scale-105 transition-all duration-1000 relative z-10" 
                style={{objectPosition: 'center 20%'}} />
              
              {/* Shine Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-transparent via-white/5 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"></div>
              
              {/* Status Indicator */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-4 h-4 sm:w-6 sm:h-6 bg-gray-600 rounded-full border-2 sm:border-4 border-white shadow-lg z-30">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-500 rounded-full mx-auto mt-0.5"></div>
              </div>
            </div>
            
            {/* Floating Particles */}
            <div className="absolute top-1/4 -left-6 sm:-left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-1/3 -right-4 sm:-right-6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-500 rounded-full opacity-40 animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/3 -left-4 sm:-left-6 w-1 h-1 bg-gray-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 -right-6 sm:-right-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
        {/* Right: About Me Title & Info */}
        <div className={`flex-1 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ${aboutVisible ? 'animate-fadeInRight delay-500' : 'opacity-0 translate-x-10'}`}>
          <h1 ref={typingRef} className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="inline-block">
              {typedText}<span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>|</span>
            </span>
          </h1>
          <p className={`text-base sm:text-lg mb-2 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            My friends call me est(etsu)
          </p>
          <div className={`text-sm sm:text-base mb-6 max-w-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            A Computer Science student passionate about Frontend Development, Software Development and UX/UI Design. I love creating digital experiences that are both intuitive and engaging.
            <br /><br />
            I'm always curious about how to improve things—whether through cleaner code, better design, or smoother user flow.
            <br /><br />
            When I'm not coding, you'll find me watching anime or reading manga. Let's create something awesome together!
          </div>
          
          {/* Personal Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-lg w-full">
            <div className={`rounded-lg p-3 sm:p-4 border transition-all duration-300 hover-lift-soft hover:shadow-md group ${isDarkMode ? 'bg-zinc-900/60 border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-900/80 hover:border-zinc-600/70' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:shadow-lg'}`}>
              <div className={`text-xs sm:text-sm mb-1 transition-colors duration-300 ${isDarkMode ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-gray-600 group-hover:text-gray-700'}`}>Age</div>
              <div className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white group-hover:text-zinc-100' : 'text-gray-900 group-hover:text-black'}`}>21 years old</div>
            </div>
            <div className={`rounded-lg p-3 sm:p-4 border transition-all duration-300 hover-lift-soft hover:shadow-md group ${isDarkMode ? 'bg-zinc-900/60 border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-900/80 hover:border-zinc-600/70' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:shadow-lg'}`}>
              <div className={`text-xs sm:text-sm mb-1 transition-colors duration-300 ${isDarkMode ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-gray-600 group-hover:text-gray-700'}`}>Status</div>
              <div className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white group-hover:text-zinc-100' : 'text-gray-900 group-hover:text-black'}`}>4th Year Student</div>
            </div>
            <div className={`rounded-lg p-3 sm:p-4 border transition-all duration-300 hover-lift-soft hover:shadow-md group ${isDarkMode ? 'bg-zinc-900/60 border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-900/80 hover:border-zinc-600/70' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:shadow-lg'}`}>
              <div className={`text-xs sm:text-sm mb-1 transition-colors duration-300 ${isDarkMode ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-gray-600 group-hover:text-gray-700'}`}>Interests</div>
              <div className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white group-hover:text-zinc-100' : 'text-gray-900 group-hover:text-black'}`}>Gaming, Design , Coding</div>
            </div>
          </div>
          
          <div className={`text-xs sm:text-sm mb-6 sm:mb-8 max-w-lg leading-relaxed italic ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
            "I enjoy creating simple digital solutions that make life a little easier for others."
          </div>

          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 ${aboutVisible ? 'animate-fadeInUp delay-900' : 'opacity-0'}`}>
            <a href="#contact" className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium text-sm transition-all duration-300 hover-lift-soft text-center ${isDarkMode ? 'bg-white text-black hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>Contact</a>
            <a href="#project" className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium text-sm transition-all duration-300 shadow-sm border animate-rainbow-border hover-lift-soft text-center ${isDarkMode ? 'bg-zinc-900 text-white border-zinc-700 hover:bg-zinc-800' : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50'}`}>View Work</a>
          </div>
          
          {/* Download Section */}
          <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 transition-all duration-700 ${aboutVisible ? 'animate-fadeInUp delay-1000' : 'opacity-0'}`}>
            <a 
              href={resumePDF} 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 shadow-sm border hover-lift-soft text-center flex items-center justify-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'}`}
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              View Resume
            </a>
            <a 
              href={transcriptPDF} 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 shadow-sm border hover-lift-soft text-center flex items-center justify-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'}`}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              View Transcript
            </a>
          </div>
        </div>
      </section>

      {/* Education & Skills Section */}
      <section ref={aboutRef} id="education" className={`scroll-mt-32 w-full flex justify-center py-12 sm:py-16 px-4 sm:px-8 transition-all duration-700 ${aboutVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Education Section */}
            <div className={`rounded-2xl sm:rounded-3xl border shadow-sm p-6 sm:p-8 transition-all duration-700 hover-lift-soft hover:shadow-lg z-10 ${isDarkMode ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-900/60' : 'bg-white border-gray-200 hover:shadow-xl'}`}>
              <div className="relative z-10">
                <h2 className={`text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 transition-all duration-300 hover:scale-105 cursor-default ${isDarkMode ? 'text-white hover:text-zinc-100' : 'text-gray-900 hover:text-black'}`}>Education</h2>
                
                <div className="relative">
                  {/* Timeline Line */}
                  <div className={`absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 ${isDarkMode ? 'bg-zinc-600' : 'bg-gray-300'}`}></div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {/* University - Current */}
                    <div className={`relative rounded-lg sm:rounded-xl p-4 sm:p-6 ml-8 sm:ml-12 border-l-2 sm:border-l-4 transition-all duration-300 hover-lift-soft hover:shadow-md group ${isDarkMode ? 'bg-zinc-800/60 border-zinc-400 backdrop-blur-sm hover:bg-zinc-800/80 hover:border-zinc-300' : 'bg-gray-50 border-gray-900 hover:bg-gray-100 hover:shadow-lg'} ${aboutVisible ? 'animate-fadeInLeft delay-400' : 'opacity-0'}`}>
                      {/* Timeline Dot */}
                      <div className={`absolute -left-10 sm:-left-14 top-4 sm:top-6 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 shadow-sm transition-all duration-300 group-hover:scale-125 group-hover:shadow-md ${isDarkMode ? 'bg-zinc-400 border-zinc-800 group-hover:bg-zinc-300' : 'bg-gray-900 border-white group-hover:bg-black'}`}></div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <h3 className={`text-base sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Bangkok University</h3>
                        <span className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full border animate-rainbow-border self-start ${isDarkMode ? 'text-white bg-zinc-900 border-zinc-600' : 'text-gray-900 bg-white border-gray-200'}`}>2022 – Present</span>
                      </div>
                      <p className={`text-sm sm:text-base font-medium mb-1 ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>Computer Science</p>
                      <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>School of Information Technology and Innovation</p>
                    </div>

                    {/* High School */}
                    <div className={`relative rounded-lg sm:rounded-xl p-4 sm:p-6 ml-8 sm:ml-12 border-l-2 sm:border-l-4 transition-all duration-300 hover-lift-soft hover:shadow-md group ${isDarkMode ? 'bg-zinc-800/60 border-zinc-500 backdrop-blur-sm hover:bg-zinc-800/80 hover:border-zinc-400' : 'bg-gray-50 border-gray-600 hover:bg-gray-100 hover:shadow-lg'} ${aboutVisible ? 'animate-fadeInLeft delay-600' : 'opacity-0'}`}>
                      {/* Timeline Dot */}
                      <div className={`absolute -left-10 sm:-left-14 top-4 sm:top-6 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 shadow-sm transition-all duration-300 group-hover:scale-125 group-hover:shadow-md ${isDarkMode ? 'bg-zinc-500 border-zinc-800 group-hover:bg-zinc-400' : 'bg-gray-600 border-white group-hover:bg-gray-800'}`}></div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <h3 className={`text-base sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Thammasat Klongluang<br />Wittayakom School</h3>
                        <span className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full self-start ${isDarkMode ? 'text-zinc-300 bg-zinc-700' : 'text-gray-600 bg-gray-200'}`}>2019 –2022</span>
                      </div>
                      <p className={`text-sm sm:text-base font-medium ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>High School</p>
                      <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>Science-Math Program</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div ref={skillsRef} id="skills" className={`rounded-2xl sm:rounded-3xl border shadow-sm p-6 sm:p-8 transition-all duration-700 hover-lift-soft z-10 ${isDarkMode ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm' : 'bg-white border-gray-200'} ${skillsVisible ? 'animate-fadeInUp delay-200' : 'opacity-0 translate-y-10'}`}>
              <div className="relative z-10 w-full flex flex-col items-center">
                <h2 className={`text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 animate-bounceIn transition-all duration-300 hover:scale-105 cursor-default ${isDarkMode ? 'text-white hover:text-zinc-100' : 'text-gray-900 hover:text-black'}`}>Skills</h2>
                <div className="w-full space-y-6 sm:space-y-8">
                  {/* Languages */}
                  <div className={`flex flex-col items-center text-center transition-all duration-700 ${skillsVisible ? 'animate-fadeInLeft delay-600' : 'opacity-0'}`}>
                    <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Languages</h3>
                    <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>Programming languages I enjoy working with</p>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 stagger-animation">
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover-scale-105 flex items-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'}`}>
                        {getSkillIcon('Python', isDarkMode)}
                        Python
                      </span>
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover-scale-105 flex items-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'}`}>
                        {getSkillIcon('C#', isDarkMode)}
                        C#
                      </span>
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover-scale-105 flex items-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'}`}>
                        {getSkillIcon('Java', isDarkMode)}
                        Java
                      </span>
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover-scale-105 flex items-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'}`}>
                        {getSkillIcon('Node.js', isDarkMode)}
                        Node.js
                      </span>
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover-scale-105 flex items-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'}`}>
                        {getSkillIcon('HTML, CSS, JavaScript', isDarkMode)}
                        HTML, CSS, JavaScript
                      </span>
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover-scale-105 flex items-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'}`}>
                        {getSkillIcon('SQL', isDarkMode)}
                        SQL
                      </span>
                    </div>
                  </div>
                  {/* Tools */}
                  <div className={`flex flex-col items-center text-center transition-all duration-700 ${skillsVisible ? 'animate-fadeInRight delay-800' : 'opacity-0'}`}>
                    <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Tools</h3>
                    <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>Tools I use regularly for development</p>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 stagger-animation">
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover-scale-105 flex items-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'}`}>
                        {getSkillIcon('Figma', isDarkMode)}
                        Figma
                      </span>
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover-scale-105 flex items-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'}`}>
                        {getSkillIcon('Git, GitHub', isDarkMode)}
                        Git, GitHub
                      </span>
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover-scale-105 flex items-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'}`}>
                        {getSkillIcon('MongoDB', isDarkMode)}
                        MongoDB
                      </span>
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover-scale-105 flex items-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'}`}>
                        {getSkillIcon('Apache NetBeans', isDarkMode)}
                        Apache NetBeans
                      </span>
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover-scale-105 flex items-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'}`}>
                        {getSkillIcon('.NET MAUI', isDarkMode)}
                        .NET MAUI
                      </span>
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover-scale-105 flex items-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'}`}>
                        {getSkillIcon('Visual Studio Code', isDarkMode)}
                        Visual Studio Code
                      </span>
                      <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border hover-scale-105 flex items-center gap-1.5 ${isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'}`}>
                        {getSkillIcon('Visual Studio 2022', isDarkMode)}
                        Visual Studio 2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modal Popup for certificate image (rendered with portal) */}
      {modalOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
          aria-modal="true"
          role="dialog">
          <div
            className="relative max-w-4xl w-[90vw] max-h-[90vh] flex flex-col items-center animate-fadeInUp"
            onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 rounded-full p-2 shadow-lg focus:outline-none z-10 border border-white/20 transition-colors duration-300"
              aria-label="Close"
              type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            {/* Previous Button */}
            {modalImages.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 rounded-full p-3 shadow-lg focus:outline-none z-10 border border-white/20 transition-colors duration-300"
                aria-label="Previous image"
                type="button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>
            )}

            {/* Next Button */}
            {modalImages.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 rounded-full p-3 shadow-lg focus:outline-none z-10 border border-white/20 transition-colors duration-300"
                aria-label="Next image"
                type="button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            )}

            {/* Image Counter */}
            {modalImages.length > 1 && (
              <div className="absolute top-2 left-2 bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/20">
                {currentModalIndex + 1} / {modalImages.length}
              </div>
            )}

            {/* Image/Video Content */}
            {modalImg && modalImg.endsWith('.mp4') ? (
              <div className="rounded-xl overflow-hidden" style={{borderRadius: '0.75rem'}}>
                <video
                  src={modalImg}
                  controls
                  autoPlay
                  className="w-full h-auto object-contain max-h-[80vh]"
                  style={{maxWidth: '100%', display: 'block'}}>
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="rounded-xl overflow-hidden" style={{borderRadius: '0.75rem'}}>
                <img
                  src={modalImg}
                  alt={modalAlt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-h-[80vh]"
                  style={{display: 'block'}}
                />
              </div>
            )}
          </div>
        </div>,
        document.body
      )}


      {/* Project Section with Carousel and Video (if available) */}
      <section ref={projectRef} id="project" className={`w-full flex justify-center py-12 sm:py-16 px-4 sm:px-8 transition-all duration-700 ${projectVisible ? 'animate-fadeInUp delay-400' : 'opacity-0 translate-y-10'}`}>
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 transition-all duration-300 hover:scale-105 cursor-default ${isDarkMode ? 'text-white hover:text-zinc-100' : 'text-gray-900 hover:text-black'}`}>Projects</h2>
          <p className={`text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>A collection of my work spanning web development, UX/UI design, and software applications. Each project represents a learning journey and practical application of my skills.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full justify-items-center [&:has(>:nth-child(3n+1):last-child)]:xl:justify-items-center [&:has(>:nth-child(3n+2):last-child)]:xl:justify-items-center">
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className={`rounded-xl sm:rounded-2xl border shadow-sm flex flex-col p-4 sm:p-6 hover:shadow-md transition-all duration-300 hover-lift-soft hover:rotate-1 hover:scale-105 w-full max-w-sm ${isDarkMode ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm' : 'bg-white border-gray-200'} ${projectVisible ? `animate-fadeInUp delay-${600 + i * 100}` : 'opacity-0'}`}>
                <div className="w-full mb-3 sm:mb-4">
                  <Carousel
                    images={p.images}
                    link={p.link}
                    title={p.title}
                    imgClassName="h-40 sm:h-48 w-full object-cover rounded-lg"
                    onAnyModalOpen={handleAnyModalOpen}
                    onImageClick={(imgObj, idx, allImages) => {
                      openModal(imgObj.src, imgObj.alt, imgObj.type, idx, allImages);
                    }}
                  />
                </div>
                <div className="flex flex-col flex-grow space-y-2 sm:space-y-3">
                  <h3 className={`font-semibold text-sm sm:text-base leading-tight line-clamp-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{p.title}</h3>
                  <div className={`text-xs sm:text-sm leading-relaxed flex-grow ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'}`} style={{maxHeight:'4.5rem',overflowY:'auto'}}>{p.desc}</div>
                  <div className="pt-1 sm:pt-2">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 sm:mb-3 border ${isDarkMode ? 'bg-zinc-800 text-zinc-500 border-zinc-700' : 'bg-gray-50 text-gray-400 border-gray-200'}`}>{p.role}</span>
                    {p.tools && (
                      <div className="mb-2 sm:mb-3">
                        <div className="flex flex-wrap gap-1">
                          {(expandedTools[i] ? p.tools : p.tools.slice(0, 6)).map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-300 ${
                                isDarkMode 
                                  ? 'bg-zinc-700/80 text-zinc-300 hover:bg-zinc-600' 
                                  : 'bg-blue-50/80 text-blue-700 hover:bg-blue-100'
                              }`}>
                              {tool}
                            </span>
                          ))}
                          {p.tools.length > 6 && (
                            <button
                              onClick={() => toggleToolsExpansion(i)}
                              className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 hover:scale-105 ${
                                isDarkMode 
                                  ? 'bg-zinc-600 text-zinc-300 hover:bg-zinc-500' 
                                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                              }`}
                              title={expandedTools[i] ? 'ดูน้อยลง' : `ดู tools ทั้งหมด (${p.tools.length})`}>
                              {expandedTools[i] ? '−' : `+${p.tools.length - 6}`}
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                      {p.link && p.link.includes('figma.com') && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm hover-lift-soft text-center ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-black'}`}>View Figma Prototype →</a>
                      )}
                      {p.link && !p.link.includes('figma.com') && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm hover-lift-soft text-center ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-black'}`}>View Website →</a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm border animate-rainbow-border hover-lift-soft text-center ${isDarkMode ? 'bg-zinc-900 text-white border-zinc-600 hover:bg-zinc-800' : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50'}`}>View Source Code →</a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certificate Section */}
      <section ref={certificateRef} id="certificate" className={`scroll-mt-32 w-full flex justify-center py-12 sm:py-16 px-4 sm:px-8 transition-all duration-700 ${certificateVisible ? 'animate-fadeInUp delay-300' : 'opacity-0 translate-y-10'}`}>
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 transition-all duration-300 hover:scale-105 cursor-default ${isDarkMode ? 'text-white hover:text-zinc-100' : 'text-gray-900 hover:text-black'}`}>Certificates</h2>
          <p className={`text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>Professional certifications and achievements that validate my skills and commitment to continuous learning in technology and cybersecurity.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full justify-items-center [&:has(>:nth-child(3n+1):last-child)]:xl:justify-items-center [&:has(>:nth-child(3n+2):last-child)]:xl:justify-items-center">
            {CERTIFICATES.map((c, i) => (
              <div key={c.title} className={`rounded-xl sm:rounded-2xl border shadow-sm p-4 sm:p-6 flex flex-col hover:shadow-md transition-all duration-300 hover-lift-soft hover:rotate-1 hover:scale-105 w-full max-w-sm ${isDarkMode ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm' : 'bg-white border-gray-200'} ${certificateVisible ? `animate-fadeInUp delay-${500 + i * 200}` : 'opacity-0'}`}>
                <div className="w-full flex justify-center mb-3 sm:mb-4">
                  <button
                    type="button"
                    onClick={() => openModal(c.image, c.title)}
                    className="focus:outline-none group w-full"
                    aria-label={`View certificate: ${c.title}`}
                    style={{background: 'none', border: 'none', padding: 0, margin: 0}}>
                    <img
                      src={c.image}
                      alt={c.title}
                      width="280"
                      height="200"
                      loading="lazy"
                      decoding="async"
                      className={`rounded-lg w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-200 cursor-zoom-in border ${isDarkMode ? 'border-zinc-600' : 'border-gray-100'}`}
                    />
                  </button>
                </div>
                <div className="flex flex-col flex-grow space-y-2 sm:space-y-3">
                  <h3 className={`text-sm sm:text-base font-semibold leading-tight line-clamp-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{c.title}</h3>
                  <p className={`text-xs sm:text-sm flex-grow ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'}`}>{c.desc}</p>
                  <div className="pt-1 sm:pt-2">
                    {c.link ? (
                      <a href={c.link} target="_blank" rel="noopener noreferrer" className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm hover-lift-soft inline-block ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-black'}`}>Verify Certificate →</a>
                    ) : (
                      <span className="text-xs sm:text-sm text-gray-400">No verification available</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Section */}
      <section
        ref={activityRef}
        id="activity"
        className={`scroll-mt-32 w-full flex justify-center py-12 sm:py-16 px-4 sm:px-8 transition-all duration-700 ${activityVisible ? 'animate-fadeInUp delay-350' : 'opacity-0 translate-y-10'}`}>
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 transition-all duration-300 hover:scale-105 cursor-default ${isDarkMode ? 'text-white hover:text-zinc-100' : 'text-gray-900 hover:text-black'}`}>Activities</h2>
          <p className={`text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>International seminars and knowledge sharing activities that enhanced my global perspective in technology and innovation.</p>

          {/* Responsive grid: 1 column on mobile, 2 columns on sm+ */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {ACTIVITIES.map((activity, index) => (
                <div
                  key={activity.title}
                  className={`rounded-xl sm:rounded-2xl border shadow-sm transition-all duration-300 hover-lift-soft ${isDarkMode ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm' : 'bg-white border-gray-200'} ${activityVisible ? `animate-fadeInUp delay-${600 + index * 300}` : 'opacity-0'}`}>
                  <div className="p-6 sm:p-8">
                    {/* Activity Header */}
                    <div className="mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <h3 className={`text-lg sm:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{activity.title}</h3>
                        <span className={`text-sm font-medium px-3 py-1 rounded-full border bg-black text-white`}>
                          {activity.date}
                        </span>
                      </div>
                      <p className={`text-xs sm:text-sm leading-relaxed max-h-20 sm:max-h-24 overflow-hidden ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'}`}>
                        {activity.description}
                      </p>
                    </div>

                    {/* Activity Images */}
                    <div className="mb-6 w-full">
                      <Carousel
                        images={activity.images}
                        title={activity.title}
                        imgClassName="h-40 sm:h-48 md:h-56 w-full object-cover rounded-lg"
                        onAnyModalOpen={handleAnyModalOpen}
                        onImageClick={(imgObj, idx, allImages) => {
                        openModal(imgObj.src, imgObj.alt, imgObj.type, idx, allImages);}}/>
                    </div>

                    {/* Activity Highlights */}
                    <div>
                      <h4 className={`text-base sm:text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Key Highlights</h4>
                      <ul className="space-y-2">
                        {activity.highlights.map((highlight, hlIndex) => (
                          <li key={hlIndex} className={`flex items-start gap-2 text-sm ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'}`}>
                            <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section ref={contactRef} id="contact" className={`w-full max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-8 transition-all duration-700 ${contactVisible ? 'animate-fadeInUp delay-500' : ''}`}>
        <h2 className={`text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 transition-all duration-300 hover:scale-105 cursor-default ${isDarkMode ? 'text-white hover:text-zinc-100' : 'text-gray-900 hover:text-black'}`}>Contact</h2>
        <div className={`rounded-xl sm:rounded-2xl border shadow-sm p-6 sm:p-8 transition-all duration-500 hover-lift-soft ${isDarkMode ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm' : 'bg-white border-gray-200'} ${contactVisible ? 'animate-fadeInUp delay-700' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Left Column - Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className={`flex items-center gap-3 sm:gap-4 transition-all duration-300 ${contactVisible ? 'animate-fadeInLeft delay-900' : ''}`}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-gray-100">
                  <svg className="text-gray-700 w-4 h-4 sm:w-[18px] sm:h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <div className={`text-sm sm:text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Navapan Suthon</div>
                  <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'}`}>My friends call me est(etsu)</div>
                </div>
              </div>
              
              <div className={`flex items-center gap-3 sm:gap-4 transition-all duration-300 ${contactVisible ? 'animate-fadeInLeft delay-1000' : ''}`}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-gray-100">
                  <svg className="text-gray-700 w-4 h-4 sm:w-[18px] sm:h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className={`text-sm sm:text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Phone</div>
                  <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'}`}>0960159077</div>
                </div>
              </div>
            </div>

            {/* Right Column - Email Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className={`flex items-center gap-3 sm:gap-4 transition-all duration-300 ${contactVisible ? 'animate-fadeInRight delay-1100' : ''}`}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-gray-100">
                  <svg className="text-gray-700 w-4 h-4 sm:w-[18px] sm:h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className={`text-sm sm:text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contacted Email</div>
                  <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'}`}>navapan.suthon@gmail.com</div>
                </div>
              </div>
              
              <div className={`flex items-center gap-3 sm:gap-4 transition-all duration-300 ${contactVisible ? 'animate-fadeInRight delay-1200' : ''}`}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-gray-100">
                  <svg className="text-gray-700 w-4 h-4 sm:w-[18px] sm:h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className={`text-sm sm:text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>University Email</div>
                  <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'}`}>navapan.suth@bumail.net</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links Section */}
          <div className={`mt-6 sm:mt-8 pt-6 sm:pt-8 border-t ${isDarkMode ? 'border-zinc-700/50' : 'border-gray-200'}`}>
            <h3 className={`text-lg font-semibold text-center mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Connect with me</h3>
            <div className={`flex justify-center gap-4 sm:gap-6 transition-all duration-700 ${contactVisible ? 'animate-fadeInUp delay-1300' : ''}`}>
              {SOCIALS.map((s, index) => (
                <a 
                  key={s.name} 
                  href={s.url} 
                  className={`transition-all duration-300 hover-scale-105 hover-rotate p-3 rounded-lg ${isDarkMode ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
                  style={{fontSize:'1.25rem'}} 
                  aria-label={s.name}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className="sr-only">{s.name}</span>
                  {s.icon === 'linkedin' && <svg width="24" height="24" className="sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>}
                  {s.icon === 'facebook' && <svg width="24" height="24" className="sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>}
                  {s.icon === 'github' && <svg width="24" height="24" className="sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.17.58.68.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`w-full border-t py-6 sm:py-8 mt-12 sm:mt-16 ${isDarkMode ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-4xl mx-auto flex flex-col items-center px-4 sm:px-8">
          <div className={`text-center text-xs sm:text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>© 2025 ETSU. Thx for visiting My portfolio.</div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-3 sm:p-4 rounded-full hover:shadow-lg transition-all duration-500 z-50 shadow-md hover-lift-soft animate-float ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} ${isDarkMode ? 'bg-white text-black hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-black'}`}
        aria-label="Back to Top">
        <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 13V7M10 7L6 11M10 7L14 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
    
    </>
  );
}

export default App;
