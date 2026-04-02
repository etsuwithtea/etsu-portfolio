import { JSX } from 'react';

export const LANGUAGE_SKILLS = [
  'Python',
  'C#',
  'Java',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'ASP.NET',
  'HTML, CSS, JavaScript',
  'SQL',
] as const;

export const TOOL_SKILLS = [
  'Figma',
  'Tailwind CSS',
  'Vite',
  'Redux Toolkit',
  'Git, GitHub',
  'GitHub Copilot',
  'MongoDB',
  'Bootstrap',
  'Phaser.js',
  'Socket.IO',
  'Apache NetBeans',
  '.NET MAUI',
  'Visual Studio Code',
  'Visual Studio 2022',
] as const;

export const getSkillIcon = (skill: string, theme: 'light' | 'dark' | 'doodle' = 'light'): JSX.Element => {
  const isDarkMode = theme === 'dark';
  const isDoodleMode = theme === 'doodle';
  const iconMap: Record<string, JSX.Element> = {
    Python: <i className="fab fa-python text-blue-500"></i>,
    'C#': <i className="fas fa-code text-green-600"></i>,
    Java: <i className="fab fa-java text-orange-600"></i>,
    TypeScript: <i className="fab fa-js text-blue-600"></i>,
    React: <i className="fab fa-react text-blue-400"></i>,
    'Next.js': <i className={`fab fa-react ${isDarkMode ? 'text-white' : isDoodleMode ? 'text-black' : 'text-zinc-900'}`}></i>,
    'Node.js': <i className="fab fa-node-js text-green-500"></i>,
    Express: <i className={`fas fa-server ${isDarkMode ? 'text-zinc-400' : isDoodleMode ? 'text-black' : 'text-zinc-700'}`}></i>,
    'ASP.NET': <i className="fas fa-desktop text-purple-600"></i>,
    'HTML, CSS, JavaScript': <i className="fab fa-html5 text-orange-500"></i>,
    SQL: <i className="fas fa-database text-blue-600"></i>,
    Figma: <i className="fab fa-figma text-purple-500"></i>,
    'Tailwind CSS': <i className="fab fa-css3 text-cyan-500"></i>,
    Vite: <i className="fas fa-bolt text-yellow-400"></i>,
    'Redux Toolkit': <i className="fas fa-layer-group text-purple-500"></i>,
    'Git, GitHub': <i className={`fab fa-github ${isDarkMode ? 'text-white' : isDoodleMode ? 'text-black' : 'text-gray-800'}`}></i>,
    'GitHub Copilot': <i className="fas fa-robot text-blue-400"></i>,
    MongoDB: <i className="fas fa-leaf text-green-600"></i>,
    Bootstrap: <i className="fab fa-bootstrap text-purple-600"></i>,
    'Phaser.js': <i className="fas fa-gamepad text-orange-500"></i>,
    'Socket.IO': <i className={`fas fa-plug ${isDarkMode ? 'text-white' : isDoodleMode ? 'text-black' : 'text-gray-900'}`}></i>,
    'Apache NetBeans': <i className="fas fa-code text-blue-600"></i>,
    '.NET MAUI': <i className="fas fa-mobile-alt text-purple-600"></i>,
    'Visual Studio Code': <i className="fas fa-code text-blue-500"></i>,
    'Visual Studio 2022': <i className="fas fa-laptop-code text-purple-700"></i>,
  };

  return iconMap[skill] ?? <i className="fas fa-check-circle text-green-500"></i>;
};
