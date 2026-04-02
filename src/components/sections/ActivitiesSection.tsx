import { RefObject } from 'react';

import Carousel from '../Carousel';
import { type Activity, type CarouselMediaItem } from '../../types/content';

type ActivitiesSectionProps = {
  currentTheme: 'light' | 'dark' | 'doodle';
  activityRef: RefObject<HTMLDivElement | null>;
  activityVisible: boolean;
  activities: Activity[];
  onAnyModalOpen: () => void;
  onOpenModal: (img: string, alt?: string, type?: CarouselMediaItem['type'], idx?: number, allImages?: CarouselMediaItem[]) => void;
};

export function ActivitiesSection({
  currentTheme,
  activityRef,
  activityVisible,
  activities,
  onAnyModalOpen,
  onOpenModal,
}: ActivitiesSectionProps) {
  const isDarkMode = currentTheme === 'dark';
  const isDoodleMode = currentTheme === 'doodle';
  return (
    <section
      ref={activityRef}
      id="activity"
      className={`scroll-mt-32 w-full flex justify-center py-12 sm:py-16 px-4 sm:px-8 transition-all duration-700 ${
        activityVisible ? 'animate-fade-in-up delay-350' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h2
          className={`text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 transition-all duration-300 hover:scale-105 cursor-default ${
            isDarkMode ? 'text-white hover:text-zinc-100' : isDoodleMode ? 'text-black font-extrabold uppercase' : 'text-gray-900 hover:text-black'
          }`}
        >
          Activities
        </h2>
        <p
          className={`text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base ${
            isDarkMode ? 'text-zinc-400' : isDoodleMode ? 'text-black font-medium' : 'text-gray-600'
          }`}
        >
          International seminars and knowledge sharing activities that enhanced my global perspective in technology and innovation.
        </p>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className={`rounded-xl sm:rounded-2xl border transition-all duration-300 hover-lift-soft ${
                  isDarkMode
                    ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm shadow-xs hover:shadow-md hover:rotate-1 hover:scale-105'
                    : isDoodleMode
                      ? 'bg-white border-4 border-black rounded-doodle shadow-doodle hover:rotate-1 hover:translate-y-1 hover:shadow-none'
                      : 'bg-white border-gray-200 shadow-xs hover:shadow-md hover:rotate-1 hover:scale-105'
                } ${activityVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={activityVisible ? { animationDelay: `${(600 + index * 300) / 1000}s` } : {}}
              >
                <div className="p-6 sm:p-8">
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <h3 className={`text-lg sm:text-xl font-bold ${isDarkMode ? 'text-white' : isDoodleMode ? 'text-black font-bold uppercase' : 'text-gray-900'}`}>{activity.title}</h3>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full border ${isDoodleMode ? 'bg-doodle-coral text-black border-2 border-black font-bold' : 'bg-black text-white'}`}>{activity.date}</span>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed max-h-20 sm:max-h-24 overflow-hidden ${isDarkMode ? 'text-zinc-300' : isDoodleMode ? 'text-black font-medium' : 'text-gray-600'}`}>
                      {activity.description}
                    </p>
                  </div>

                  <div className="mb-6 w-full">
                    <Carousel
                      images={activity.images}
                      imgClassName="h-40 sm:h-48 md:h-56 w-full object-cover rounded-lg"
                      onAnyModalOpen={onAnyModalOpen}
                      onImageClick={(imgObj, idx, allImages) => {
                        onOpenModal(imgObj.src, imgObj.alt, imgObj.type, idx, allImages);
                      }}
                      currentTheme={currentTheme}
                    />
                  </div>

                  <div>
                    <h4 className={`text-base sm:text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : isDoodleMode ? 'text-black font-bold' : 'text-gray-900'}`}>Key Highlights</h4>
                    <ul className="space-y-2">
                      {activity.highlights.map((highlight, hlIndex) => (
                        <li key={hlIndex} className={`flex items-start gap-2 text-sm ${isDarkMode ? 'text-zinc-300' : isDoodleMode ? 'text-black font-medium' : 'text-gray-600'}`}>
                          <span className={`shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${isDarkMode ? 'bg-blue-400' : isDoodleMode ? 'bg-black border border-black' : 'bg-blue-500'}`}></span>
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
  );
}

export default ActivitiesSection;
