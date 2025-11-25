import { JSX } from 'react';

export const LANGUAGE_SKILLS = ['Python', 'C#', 'Java', 'Node.js', 'HTML, CSS, JavaScript', 'SQL'] as const;
export const TOOL_SKILLS = [
  'Figma',
  'Git, GitHub',
  'MongoDB',
  'Apache NetBeans',
  '.NET MAUI',
  'Visual Studio Code',
  'Visual Studio 2022',
] as const;

export const getSkillIcon = (skill: string, isDarkMode = false): JSX.Element => {
  const iconMap: Record<string, JSX.Element> = {
    Python: <i className="fab fa-python text-blue-500"></i>,
    'C#': <i className="fas fa-code text-green-600"></i>,
    Java: <i className="fab fa-java text-orange-600"></i>,
    'Node.js': <i className="fab fa-node-js text-green-500"></i>,
    'HTML, CSS, JavaScript': <i className="fab fa-html5 text-orange-500"></i>,
    SQL: <i className="fas fa-database text-blue-600"></i>,
    Figma: <i className="fab fa-figma text-purple-500"></i>,
    'Git, GitHub': <i className={`fab fa-github ${isDarkMode ? 'text-white' : 'text-gray-800'}`}></i>,
    MongoDB: <i className="fas fa-leaf text-green-600"></i>,
    'Apache NetBeans': <i className="fas fa-code text-blue-600"></i>,
    '.NET MAUI': <i className="fas fa-mobile-alt text-purple-600"></i>,
    'Visual Studio Code': <i className="fas fa-code text-blue-500"></i>,
    'Visual Studio 2022': <i className="fas fa-laptop-code text-purple-700"></i>,
  };

  return iconMap[skill] ?? <i className="fas fa-check-circle text-green-500"></i>;
};
