import { RefObject } from 'react';

type AboutSectionProps = {
  isDarkMode: boolean;
  aboutRef: RefObject<HTMLDivElement>;
  aboutVisible: boolean;
  profileImages: string[];
  currentProfileImage: number;
  typingRef: RefObject<HTMLHeadingElement>;
  typedText: string;
  resumePDF: string;
  transcriptPDF: string;
};

export function AboutSection({
  isDarkMode,
  aboutRef,
  aboutVisible,
  profileImages,
  currentProfileImage,
  typingRef,
  typedText,
  resumePDF,
  transcriptPDF,
}: AboutSectionProps) {
  return (
    <section
      ref={aboutRef}
      id="about"
      className={`w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-8 transition-all duration-1000 relative z-10 ${
        aboutVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
      }`}
    >
      <div
        className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 ${
          aboutVisible ? 'animate-fade-in-left delay-300' : 'opacity-0 -translate-x-10'
        }`}
      >
        <div className="relative group">
          <div className="absolute -inset-4 bg-linear-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full opacity-15 blur-xl group-hover:opacity-25 transition-all duration-500 animate-pulse"></div>
          <div className="absolute -inset-2 bg-linear-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-all duration-500"></div>

          <div className="relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 sm:border-l-4 border-t-2 sm:border-t-4 border-gray-400 rounded-tl-lg opacity-60"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 sm:border-r-4 border-t-2 sm:border-t-4 border-gray-500 rounded-tr-lg opacity-60"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 sm:border-l-4 border-b-2 sm:border-b-4 border-gray-500 rounded-bl-lg opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 sm:border-r-4 border-b-2 sm:border-b-4 border-gray-600 rounded-br-lg opacity-60"></div>

            <img
              src={profileImages[currentProfileImage]}
              alt="Profile"
              width="400"
              height="400"
              loading="eager"
              fetchPriority="high"
              className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl bg-white hover-lift-soft animate-float border-2 sm:border-4 border-white/40 group-hover:scale-105 transition-all duration-1000 relative z-10"
              style={{ objectPosition: 'center 20%' }}
            />

            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-tr from-transparent via-white/5 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"></div>

            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-4 h-4 sm:w-6 sm:h-6 bg-gray-600 rounded-full border-2 sm:border-4 border-white shadow-lg z-30">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-500 rounded-full mx-auto mt-0.5"></div>
            </div>
          </div>

          <div
            className="absolute top-1/4 -left-6 sm:-left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full opacity-40 animate-bounce"
            style={{ animationDelay: '0s' }}
          ></div>
          <div
            className="absolute top-1/3 -right-4 sm:-right-6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-500 rounded-full opacity-40 animate-bounce"
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className="absolute bottom-1/3 -left-4 sm:-left-6 w-1 h-1 bg-gray-400 rounded-full opacity-40 animate-bounce"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute bottom-1/4 -right-6 sm:-right-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full opacity-40 animate-bounce"
            style={{ animationDelay: '1.5s' }}
          ></div>
        </div>
      </div>

      <div
        className={`flex-1 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ${
          aboutVisible ? 'animate-fade-in-right delay-500' : 'opacity-0 translate-x-10'
        }`}
      >
        <h1
          ref={typingRef}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 sm:mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          <span className="inline-block">
            {typedText}
            <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>|</span>
          </span>
        </h1>
        <p className={`text-base sm:text-lg mb-2 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          My friends call me est(etsu)
        </p>
        <div className={`text-sm sm:text-base mb-6 max-w-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          A Computer Science student passionate about Frontend Development, Software Development and UX/UI Design. I love creating digital experiences that are both intuitive and engaging.
          <br />
          <br />
          I'm always curious about how to improve things - whether through cleaner code, better design, or smoother user flow.
          <br />
          <br />
          When I'm not coding, you'll find me watching anime or reading manga. Let's create something awesome together!
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-lg w-full">
          <div
            className={`rounded-lg p-3 sm:p-4 border transition-all duration-300 hover-lift-soft hover:shadow-md group ${
              isDarkMode
                ? 'bg-zinc-900/60 border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-900/80 hover:border-zinc-600/70'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:shadow-lg'
            }`}
          >
            <div
              className={`text-xs sm:text-sm mb-1 transition-colors duration-300 ${
                isDarkMode ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-gray-600 group-hover:text-gray-700'
              }`}
            >
              Age
            </div>
            <div
              className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-white group-hover:text-zinc-100' : 'text-gray-900 group-hover:text-black'
              }`}
            >
              21 years old
            </div>
          </div>
          <div
            className={`rounded-lg p-3 sm:p-4 border transition-all duration-300 hover-lift-soft hover:shadow-md group ${
              isDarkMode
                ? 'bg-zinc-900/60 border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-900/80 hover:border-zinc-600/70'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:shadow-lg'
            }`}
          >
            <div
              className={`text-xs sm:text-sm mb-1 transition-colors duration-300 ${
                isDarkMode ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-gray-600 group-hover:text-gray-700'
              }`}
            >
              Status
            </div>
            <div
              className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-white group-hover:text-zinc-100' : 'text-gray-900 group-hover:text-black'
              }`}
            >
              4th Year Student
            </div>
          </div>
          <div
            className={`rounded-lg p-3 sm:p-4 border transition-all duration-300 hover-lift-soft hover:shadow-md group ${
              isDarkMode
                ? 'bg-zinc-900/60 border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-900/80 hover:border-zinc-600/70'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:shadow-lg'
            }`}
          >
            <div
              className={`text-xs sm:text-sm mb-1 transition-colors duration-300 ${
                isDarkMode ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-gray-600 group-hover:text-gray-700'
              }`}
            >
              Interests
            </div>
            <div
              className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-white group-hover:text-zinc-100' : 'text-gray-900 group-hover:text-black'
              }`}
            >
              Gaming, Design , Coding
            </div>
          </div>
        </div>

        <div
          className={`text-xs sm:text-sm mb-6 sm:mb-8 max-w-lg leading-relaxed italic ${
            isDarkMode ? 'text-zinc-400' : 'text-gray-600'
          }`}
        >
          "I enjoy creating simple digital solutions that make life a little easier for others."
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 ${
            aboutVisible ? 'animate-fade-in-up delay-900' : 'opacity-0'
          }`}
        >
          <a
            href="#contact"
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium text-sm transition-all duration-300 hover-lift-soft text-center ${
              isDarkMode ? 'bg-white text-black hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            Contact
          </a>
          <a
            href="#project"
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium text-sm transition-all duration-300 shadow-xs border animate-rainbow-border hover-lift-soft text-center ${
              isDarkMode ? 'bg-zinc-900 text-white border-zinc-700 hover:bg-zinc-800' : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50'
            }`}
          >
            View Work
          </a>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 transition-all duration-700 ${
            aboutVisible ? 'animate-fade-in-up delay-1000' : 'opacity-0'
          }`}
        >
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 shadow-xs border hover-lift-soft text-center flex items-center justify-center gap-1.5 ${
              isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
            View Resume
          </a>
          <a
            href={transcriptPDF}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 shadow-xs border hover-lift-soft text-center flex items-center justify-center gap-1.5 ${
              isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-600 hover:bg-zinc-700' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
            View Transcript
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
