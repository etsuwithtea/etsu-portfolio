import { RefObject } from 'react';

import Carousel from '../Carousel';
import { type Project, type CarouselMediaItem } from '../../types/content';

type ProjectsSectionProps = {
  currentTheme: 'light' | 'dark' | 'doodle';
  projectRef: RefObject<HTMLDivElement | null>;
  projectVisible: boolean;
  projects: Project[];
  expandedTools: Record<number, boolean>;
  onToggleTools: (projectIndex: number) => void;
  onOpenModal: (img: string, alt?: string, type?: CarouselMediaItem['type'], idx?: number, allImages?: CarouselMediaItem[]) => void;
  onAnyModalOpen: () => void;
};

export function ProjectsSection({
  currentTheme,
  projectRef,
  projectVisible,
  projects,
  expandedTools,
  onToggleTools,
  onOpenModal,
  onAnyModalOpen,
}: ProjectsSectionProps) {
  const isDarkMode = currentTheme === 'dark';
  const isDoodleMode = currentTheme === 'doodle';
  return (
    <section
      ref={projectRef}
      id="project"
      className={`w-full flex justify-center py-12 sm:py-16 px-4 sm:px-8 transition-all duration-700 ${
        projectVisible ? 'animate-fade-in-up delay-400' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h2
          className={`text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 transition-all duration-300 hover:scale-105 cursor-default ${
            isDarkMode ? 'text-white hover:text-zinc-100' : isDoodleMode ? 'text-black font-extrabold uppercase' : 'text-gray-900 hover:text-black'
          }`}
        >
          Projects
        </h2>
        <p
          className={`text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base ${
            isDarkMode ? 'text-zinc-400' : isDoodleMode ? 'text-black font-medium' : 'text-gray-600'
          }`}
        >
          A collection of my work spanning web development, UX/UI design, and software applications. Each project represents a learning journey and practical application of my skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full justify-items-center xl:[&:has(>:nth-child(3n+1):last-child)]:justify-items-center xl:[&:has(>:nth-child(3n+2):last-child)]:justify-items-center">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`rounded-xl sm:rounded-2xl border flex flex-col p-4 sm:p-6 transition-all duration-300 hover-lift-soft w-full max-w-sm ${
                isDarkMode
                  ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm shadow-xs hover:shadow-md hover:rotate-1 hover:scale-105'
                  : isDoodleMode
                    ? 'bg-white border-4 border-black rounded-doodle shadow-doodle hover:rotate-1 hover:translate-y-1 hover:shadow-none'
                    : 'bg-white border-gray-200 shadow-xs hover:shadow-md hover:rotate-1 hover:scale-105'
              } ${projectVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={projectVisible ? { animationDelay: `${(600 + index * 100) / 1000}s` } : {}}
            >
              <div className="w-full mb-3 sm:mb-4">
                <Carousel
                  images={project.images}
                  imgClassName="h-40 sm:h-48 w-full object-cover rounded-lg"
                  onAnyModalOpen={onAnyModalOpen}
                  onImageClick={(imgObj, idx, allImages) => {
                    onOpenModal(imgObj.src, imgObj.alt, imgObj.type, idx, allImages);
                  }}
                  currentTheme={currentTheme}
                />
              </div>
              <div className="flex flex-col grow space-y-2 sm:space-y-3">
                <h3 className={`font-semibold text-sm sm:text-base leading-tight line-clamp-2 ${isDarkMode ? 'text-white' : isDoodleMode ? 'text-black font-bold uppercase' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <div
                  className={`text-xs sm:text-sm leading-relaxed grow ${isDarkMode ? 'text-zinc-300' : isDoodleMode ? 'text-black font-medium' : 'text-gray-600'}`}
                  style={{ maxHeight: '4.5rem', overflowY: 'auto' }}
                >
                  {project.desc}
                </div>
                <div className="pt-1 sm:pt-2">
                  <span
                    className={`inline-block px-2 py-1 rounded-sm text-xs font-medium mb-2 sm:mb-3 border ${
                      isDarkMode
                        ? 'bg-zinc-800 text-zinc-500 border-zinc-700'
                        : isDoodleMode
                          ? 'bg-doodle-accent text-black border-2 border-black font-bold'
                          : 'bg-gray-50 text-gray-400 border-gray-200'
                    }`}
                  >
                    {project.role}
                  </span>
                  {project.tools && (
                    <div className="mb-2 sm:mb-3">
                      <div className="flex flex-wrap gap-1">
                        {(expandedTools[index] ? project.tools : project.tools.slice(0, 6)).map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-300 ${
                              isDarkMode
                                ? 'bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 hover:bg-zinc-700 hover:text-white'
                                : isDoodleMode
                                  ? 'bg-white text-black border-2 border-black rounded-doodle shadow-doodle hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none font-bold'
                                  : 'bg-blue-50/80 text-blue-700 border border-blue-100 hover:bg-blue-100/80'
                            }`}
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 6 && (
                          <button
                            onClick={() => onToggleTools(index)}
                            className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 hover:scale-105 ${
                              isDarkMode
                                ? 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:text-white'
                                : isDoodleMode
                                  ? 'bg-doodle-accent text-black border-2 border-black rounded-doodle shadow-doodle hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none font-bold uppercase'
                                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 border border-gray-200'
                            }`}
                            title={expandedTools[index] ? 'Show fewer tools' : `Show all tools (${project.tools.length})`}
                            type="button"
                          >
                            {expandedTools[index] ? 'Show less' : `+${project.tools.length - 6}`}
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    {project.link && project.link.includes('figma.com') && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 shadow-xs hover-lift-soft text-center ${
                          isDarkMode
                            ? 'bg-white text-black hover:bg-gray-200'
                            : isDoodleMode
                              ? 'bg-black text-white hover:bg-doodle-coral border-2 border-black rounded-doodle shadow-doodle'
                              : 'bg-gray-900 text-white hover:bg-black'
                        }`}
                      >
                        View Figma Prototype
                      </a>
                    )}
                    {project.link && !project.link.includes('figma.com') && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 shadow-xs hover-lift-soft text-center ${
                          isDarkMode
                            ? 'bg-white text-black hover:bg-gray-200'
                            : isDoodleMode
                              ? 'bg-black text-white hover:bg-doodle-coral border-2 border-black rounded-doodle shadow-doodle'
                              : 'bg-gray-900 text-white hover:bg-black'
                        }`}
                      >
                        View Website
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 shadow-xs border hover-lift-soft text-center ${
                          isDarkMode
                            ? 'bg-zinc-900 text-white border-zinc-600 hover:bg-zinc-800 animate-rainbow-border'
                            : isDoodleMode
                              ? 'bg-doodle-accent text-black border-4 border-black font-bold uppercase rounded-doodle shadow-doodle'
                              : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50 animate-rainbow-border'
                        }`}
                      >
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
