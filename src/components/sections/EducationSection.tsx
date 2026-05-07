import { RefObject } from 'react';
import { type WorkExperience } from '../../types/content';

type EducationSectionProps = {
  currentTheme: 'light' | 'dark' | 'doodle';
  educationRef: RefObject<HTMLDivElement | null>;
  educationVisible: boolean;
  experiences: WorkExperience[];
};

export function EducationSection({
  currentTheme,
  educationRef,
  educationVisible,
  experiences,
}: EducationSectionProps) {
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
      <div className="w-full max-w-5xl flex flex-col items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Education Card */}
          <div
            className={`rounded-2xl sm:rounded-3xl border shadow-xs p-6 sm:p-8 transition-all duration-300 hover-lift-soft z-10 ${
              isDarkMode
                ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm'
                : isDoodleMode
                  ? 'bg-white border-4 border-black rounded-doodle shadow-doodle'
                  : 'bg-white border-gray-200'
            }`}
          >
            <h2
              className={`text-lg sm:text-xl font-bold mb-6 transition-all duration-300 hover:scale-105 cursor-default ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Education
            </h2>

            <div className="relative pl-6 border-l-2 border-zinc-600 space-y-8">
              {/* BU */}
              <div className="relative">
                <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-sm"></div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <h3 className={`text-sm sm:text-base font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Bangkok University</h3>
                    <span className="text-[10px] sm:text-xs font-medium text-zinc-400">2022 - Present</span>
                  </div>
                  <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>Computer Science</p>
                  <p className={`text-[10px] sm:text-xs ${isDarkMode ? 'text-zinc-500' : 'text-gray-500'}`}>School of IT & Innovation</p>
                </div>
              </div>

              {/* T.K.W. */}
              <div className="relative">
                <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-zinc-400 border-2 border-white shadow-sm"></div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <h3 className={`text-sm sm:text-base font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Thammasat Klongluang</h3>
                    <span className="text-[10px] sm:text-xs font-medium text-zinc-400">2019 - 2022</span>
                  </div>
                  <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>High School</p>
                  <p className={`text-[10px] sm:text-xs ${isDarkMode ? 'text-zinc-500' : 'text-gray-500'}`}>Science-Math Program</p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience Card */}
          <div
            id="experience"
            className={`rounded-2xl sm:rounded-3xl border shadow-xs p-6 sm:p-8 transition-all duration-300 hover-lift-soft z-10 ${
              isDarkMode
                ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm'
                : isDoodleMode
                  ? 'bg-white border-4 border-black rounded-doodle shadow-doodle'
                  : 'bg-white border-gray-200'
            }`}
          >
            <h2
              className={`text-lg sm:text-xl font-bold mb-6 transition-all duration-300 hover:scale-105 cursor-default ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Work Experience
            </h2>

            <div className="relative pl-6 border-l-2 border-zinc-600 space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <h3 className={`text-sm sm:text-base font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.company}</h3>
                      <span className="text-[10px] sm:text-xs font-medium text-zinc-400">{exp.period}</span>
                    </div>
                    <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>{exp.role}</p>
                    <p className={`text-[10px] sm:text-xs ${isDarkMode ? 'text-zinc-500' : 'text-gray-500'}`}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
