import { JSX, RefObject } from 'react';
import { type WorkExperience } from '../../types/content';

type EducationSkillsSectionProps = {
  currentTheme: 'light' | 'dark' | 'doodle';
  educationRef: RefObject<HTMLDivElement | null>;
  educationVisible: boolean;
  skillsRef: RefObject<HTMLDivElement | null>;
  skillsVisible: boolean;
  skillBadgeClass: string;
  getSkillIcon: (skill: string, theme?: 'light' | 'dark' | 'doodle') => JSX.Element;
  languageSkills: readonly string[];
  toolSkills: readonly string[];
  aiSkills: readonly string[];
  experiences: WorkExperience[];
};

export function EducationSkillsSection({
  currentTheme,
  educationRef,
  educationVisible,
  skillsRef,
  skillsVisible,
  skillBadgeClass,
  getSkillIcon,
  languageSkills,
  toolSkills,
  aiSkills,
  experiences,
}: EducationSkillsSectionProps) {
  const isDarkMode = currentTheme === 'dark';
  const isDoodleMode = currentTheme === 'doodle';
  return (
    <section
      ref={educationRef}
      id="education"
      className={`scroll-mt-32 w-full flex justify-center py-12 sm:py-16 px-4 sm:px-8 transition-all duration-700 ${
        educationVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-full max-w-7xl flex flex-col items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div
            className={`rounded-2xl sm:rounded-3xl border shadow-xs p-6 sm:p-8 transition-all duration-300 hover-lift-soft z-10 ${
              isDarkMode
                ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm'
                : isDoodleMode
                  ? 'bg-white border-4 border-black rounded-doodle shadow-doodle hover:rotate-1'
                  : 'bg-white border-gray-200'
            }`}
          >
            <div className="relative z-10">
              <h2
                className={`text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 transition-all duration-300 hover:scale-105 cursor-default ${
                  isDarkMode ? 'text-white hover:text-zinc-100' : 'text-gray-900 hover:text-black'
                }`}
              >
                Education
              </h2>

              <div className="relative">
                <div className={`absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 ${isDarkMode ? 'bg-zinc-600' : 'bg-gray-300'}`}></div>

                <div className="space-y-4 sm:space-y-6">
                  <div
                    className={`relative rounded-lg sm:rounded-xl p-4 sm:p-6 ml-8 sm:ml-12 border-l-2 sm:border-l-4 transition-all duration-300 hover-lift-soft group ${
                      isDarkMode
                        ? 'bg-zinc-800/60 border-zinc-400 backdrop-blur-sm hover:bg-zinc-800/80 hover:border-zinc-300'
                        : isDoodleMode
                          ? 'bg-doodle-accent border-l-black border-2 border-black rounded-doodle shadow-doodle hover:translate-x-1 hover:translate-y-1 hover:shadow-none'
                          : 'bg-gray-50 border-gray-900 hover:bg-gray-100 hover:shadow-lg'
                    } ${educationVisible ? 'animate-fade-in-left delay-400' : 'opacity-0'}`}
                  >
                    <div
                      className={`absolute -left-10 sm:-left-14 top-4 sm:top-6 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 shadow-xs transition-all duration-300 group-hover:scale-125 group-hover:shadow-md ${
                        isDarkMode ? 'bg-zinc-400 border-zinc-800 group-hover:bg-zinc-300' : 'bg-gray-900 border-white group-hover:bg-black'
                      }`}
                    ></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                      <h3 className={`text-base sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Bangkok University</h3>
                      <span
                        className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full border self-start ${
                          isDarkMode
                            ? 'bg-zinc-800 text-zinc-300 border-zinc-700 animate-rainbow-border'
                            : isDoodleMode
                              ? 'bg-doodle-accent text-black border-2 border-black rounded-doodle shadow-doodle font-bold uppercase'
                              : 'bg-gray-50 text-gray-400 border-gray-200 animate-rainbow-border'
                        }`}
                      >
                        2022 - Present
                      </span>
                    </div>
                    <p className={`text-sm sm:text-base font-medium mb-1 ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>Computer Science</p>
                    <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                      School of Information Technology and Innovation
                    </p>
                  </div>

                  <div
                    className={`relative rounded-lg sm:rounded-xl p-4 sm:p-6 ml-8 sm:ml-12 border-l-2 sm:border-l-4 transition-all duration-300 hover-lift-soft group ${
                      isDarkMode
                        ? 'bg-zinc-800/60 border-zinc-500 backdrop-blur-sm hover:bg-zinc-800/80 hover:border-zinc-400'
                        : isDoodleMode
                          ? 'bg-white border-l-black border-2 border-black rounded-doodle shadow-doodle hover:translate-x-1 hover:translate-y-1 hover:shadow-none font-medium'
                          : 'bg-gray-50 border-gray-600 hover:bg-gray-100 hover:shadow-lg'
                    } ${educationVisible ? 'animate-fade-in-left delay-600' : 'opacity-0'}`}
                  >
                    <div
                      className={`absolute -left-10 sm:-left-14 top-4 sm:top-6 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 shadow-xs transition-all duration-300 group-hover:scale-125 group-hover:shadow-md ${
                        isDarkMode ? 'bg-zinc-500 border-zinc-800 group-hover:bg-zinc-400' : 'bg-gray-600 border-white group-hover:bg-gray-800'
                      }`}
                    ></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                      <h3 className={`text-base sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Thammasat Klongluang
                        <br />
                        Wittayakom School
                      </h3>
                      <span
                        className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full self-start ${
                          isDarkMode ? 'text-zinc-300 bg-zinc-700' : 'text-gray-600 bg-gray-200'
                        }`}
                      >
                        2019 - 2022
                      </span>
                    </div>
                    <p className={`text-sm sm:text-base font-medium ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>High School</p>
                    <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>Science-Math Program</p>
                  </div>
                </div>

                {/* Work Experience Integration */}
                <div id="experience" className="mt-10 sm:mt-12">
                  <h2
                    className={`text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 transition-all duration-300 hover:scale-105 cursor-default ${
                      isDarkMode ? 'text-white hover:text-zinc-100' : 'text-gray-900 hover:text-black'
                    }`}
                  >
                    Work Experience
                  </h2>

                  <div className="relative">
                    <div className={`absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 ${isDarkMode ? 'bg-zinc-600' : 'bg-gray-300'}`}></div>

                    <div className="space-y-4 sm:space-y-6">
                      {experiences.map((exp, index) => (
                        <div
                          key={index}
                          className={`relative rounded-lg sm:rounded-xl p-4 sm:p-6 ml-8 sm:ml-12 border-l-2 sm:border-l-4 transition-all duration-300 hover-lift-soft group ${
                            isDarkMode
                              ? 'bg-zinc-800/60 border-zinc-500 backdrop-blur-sm hover:bg-zinc-800/80 hover:border-zinc-400'
                              : isDoodleMode
                                ? 'bg-doodle-accent border-l-black border-4 border-black rounded-doodle shadow-doodle hover:translate-x-1 hover:translate-y-1 hover:shadow-none'
                                : 'bg-gray-50 border-gray-600 hover:bg-gray-100 hover:shadow-lg'
                          } ${educationVisible ? 'animate-fade-in-left delay-400' : 'opacity-0'}`}
                          style={{ animationDelay: `${700 + index * 100}ms` }}
                        >
                          <div
                            className={`absolute -left-10 sm:-left-14 top-4 sm:top-6 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 shadow-xs transition-all duration-300 group-hover:scale-125 group-hover:shadow-md ${
                              isDarkMode ? 'bg-zinc-500 border-zinc-800 group-hover:bg-zinc-400' : 'bg-gray-600 border-white group-hover:bg-gray-800'
                            }`}
                          ></div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                            <h3 className={`text-base sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.company}</h3>
                            <span
                              className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full border self-start ${
                                isDarkMode
                                  ? 'bg-zinc-800 text-zinc-300 border-zinc-700 animate-rainbow-border'
                                  : isDoodleMode
                                    ? 'bg-doodle-accent text-black border-2 border-black rounded-doodle shadow-doodle font-bold uppercase'
                                    : 'bg-gray-50 text-gray-400 border-gray-200 animate-rainbow-border'
                              }`}
                            >
                              {exp.period}
                            </span>
                          </div>
                          <p className={`text-sm sm:text-base font-medium mb-1 ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>{exp.role}</p>
                          <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={skillsRef}
            id="skills"
            className={`rounded-2xl sm:rounded-3xl border shadow-xs p-6 sm:p-8 transition-all duration-300 hover-lift-soft z-10 ${
              isDarkMode
                ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm'
                : isDoodleMode
                  ? 'bg-white border-4 border-black rounded-doodle shadow-doodle'
                  : 'bg-white border-gray-200'
            } ${skillsVisible ? 'animate-fade-in-up delay-200' : 'opacity-0 translate-y-10'}`}
          >
            <div className="relative z-10 w-full flex flex-col items-center">
              <h2
                className={`text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 animate-bounceIn transition-all duration-300 hover:scale-105 cursor-default ${
                  isDarkMode ? 'text-white hover:text-zinc-100' : 'text-gray-900 hover:text-black'
                }`}
              >
                Skills
              </h2>
              <div className="w-full space-y-6 sm:space-y-8">
                <div
                  className={`flex flex-col items-center text-center transition-all duration-700 ${
                    skillsVisible ? 'animate-fade-in-left delay-600' : 'opacity-0'
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

                <div
                  className={`flex flex-col items-center text-center transition-all duration-700 ${
                    skillsVisible ? 'animate-fade-in-right delay-800' : 'opacity-0'
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

                <div
                  className={`flex flex-col items-center text-center transition-all duration-700 ${
                    skillsVisible ? 'animate-fade-in-left delay-1000' : 'opacity-0'
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
        </div>
      </div>
    </section>
  );
}

export default EducationSkillsSection;
