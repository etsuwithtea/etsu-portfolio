import { JSX, RefObject } from 'react';

type SkillsSectionProps = {
  currentTheme: 'light' | 'dark' | 'doodle';
  skillsRef: RefObject<HTMLDivElement | null>;
  skillsVisible: boolean;
  skillBadgeClass: string;
  getSkillIcon: (skill: string, theme?: 'light' | 'dark' | 'doodle') => JSX.Element;
  languageSkills: readonly string[];
  toolSkills: readonly string[];
  aiSkills: readonly string[];
};

export function SkillsSection({
  currentTheme,
  skillsRef,
  skillsVisible,
  skillBadgeClass,
  getSkillIcon,
  languageSkills,
  toolSkills,
  aiSkills,
}: SkillsSectionProps) {
  const isDarkMode = currentTheme === 'dark';
  const isDoodleMode = currentTheme === 'doodle';

  return (
    <section
      id="skills"
      ref={skillsRef}
      className={`scroll-mt-32 w-full flex justify-center py-12 sm:py-16 px-4 sm:px-8 transition-all duration-700 ${
        skillsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-full max-w-7xl flex flex-col items-center">
        <h2
          className={`text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 transition-all duration-300 hover:scale-105 cursor-default ${
            isDarkMode ? 'text-white hover:text-zinc-100' : 'text-gray-900 hover:text-black'
          }`}
        >
          My Expertise
        </h2>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Languages Card */}
          <div
            className={`rounded-2xl sm:rounded-3xl border shadow-xs p-6 sm:p-8 transition-all duration-300 hover-lift-soft z-10 ${
              isDarkMode
                ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm'
                : isDoodleMode
                  ? 'bg-white border-4 border-black rounded-doodle shadow-doodle'
                  : 'bg-white border-gray-200'
            } ${skillsVisible ? 'animate-fade-in-up delay-200' : 'opacity-0 translate-y-10'}`}
          >
            <div
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                skillsVisible ? 'animate-fade-in-left delay-400' : 'opacity-0'
              }`}
            >
              <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Languages</h3>
              <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                Programming languages I enjoy working with
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 stagger-animation">
                {languageSkills.map(skill => (
                  <span key={skill} className={skillBadgeClass}>
                    {getSkillIcon(skill, currentTheme)}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Card */}
          <div
            className={`rounded-2xl sm:rounded-3xl border shadow-xs p-6 sm:p-8 transition-all duration-300 hover-lift-soft z-10 ${
              isDarkMode
                ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm'
                : isDoodleMode
                  ? 'bg-white border-4 border-black rounded-doodle shadow-doodle'
                  : 'bg-white border-gray-200'
            } ${skillsVisible ? 'animate-fade-in-up delay-400' : 'opacity-0 translate-y-10'}`}
          >
            <div
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                skillsVisible ? 'animate-fade-in-right delay-600' : 'opacity-0'
              }`}
            >
              <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Tools</h3>
              <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                Tools I use regularly for development
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 stagger-animation">
                {toolSkills.map(tool => (
                  <span key={tool} className={skillBadgeClass}>
                    {getSkillIcon(tool, currentTheme)}
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* AI Tools Card */}
          <div
            className={`rounded-2xl sm:rounded-3xl border shadow-xs p-6 sm:p-8 transition-all duration-300 hover-lift-soft z-10 ${
              isDarkMode
                ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm'
                : isDoodleMode
                  ? 'bg-white border-4 border-black rounded-doodle shadow-doodle'
                  : 'bg-white border-gray-200'
            } ${skillsVisible ? 'animate-fade-in-up delay-600' : 'opacity-0 translate-y-10'}`}
          >
            <div
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                skillsVisible ? 'animate-fade-in-left delay-800' : 'opacity-0'
              }`}
            >
              <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>AI Tools</h3>
              <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                AI-powered tools that enhance my workflow
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 stagger-animation">
                {aiSkills.map(aiTool => (
                  <span key={aiTool} className={skillBadgeClass}>
                    {getSkillIcon(aiTool, currentTheme)}
                    {aiTool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
