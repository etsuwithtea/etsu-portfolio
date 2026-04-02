import { RefObject } from 'react';

import { type SocialLink } from '../../types/content';

type ContactSectionProps = {
  currentTheme: 'light' | 'dark' | 'doodle';
  contactRef: RefObject<HTMLDivElement | null>;
  contactVisible: boolean;
  socials: SocialLink[];
  onBackToTop?: () => void;
  showBackToTop?: boolean;
};

const renderSocialIcon = (icon: string) => {
  if (icon === 'linkedin') {
    return (
      <svg width="24" height="24" className="sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  if (icon === 'facebook') {
    return (
      <svg width="24" height="24" className="sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }
  if (icon === 'github') {
    return (
      <svg width="24" height="24" className="sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.17.58.68.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
      </svg>
    );
  }
  return null;
};

export function ContactSection({ currentTheme, contactRef, contactVisible, socials, onBackToTop, showBackToTop }: ContactSectionProps) {
  const isDarkMode = currentTheme === 'dark';
  const isDoodleMode = currentTheme === 'doodle';
  return (
    <>
      <section
        ref={contactRef}
        id="contact"
        className={`w-full max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-8 transition-all duration-700 ${
          contactVisible ? 'animate-fade-in-up delay-500' : ''
        }`}
      >
        <h2
          className={`text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 transition-all duration-300 hover:scale-105 cursor-default ${
            isDarkMode ? 'text-white hover:text-zinc-100' : isDoodleMode ? 'text-black font-extrabold uppercase' : 'text-gray-900 hover:text-black'
          }`}
        >
          Contact
        </h2>
        <div
          className={`rounded-xl sm:rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover-lift-soft ${
            isDarkMode
              ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm shadow-xs hover:shadow-md hover:rotate-1 hover:scale-105'
              : isDoodleMode
                ? 'bg-white border-4 border-black rounded-doodle shadow-doodle hover:rotate-1 hover:translate-y-1 hover:shadow-none'
                : 'bg-white border-gray-200 shadow-xs hover:shadow-md hover:rotate-1 hover:scale-105'
          } ${contactVisible ? 'animate-fade-in-up delay-700' : ''}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <div
                className={`flex items-center gap-3 sm:gap-4 transition-all duration-300 ${
                  contactVisible ? 'animate-fade-in-left delay-900' : ''
                }`}
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${isDoodleMode ? 'bg-doodle-accent border-2 border-black rounded-doodle' : 'bg-gray-100'}`}>
                  <svg className={`${isDoodleMode ? 'text-black' : 'text-gray-700'} w-4 h-4 sm:w-[18px] sm:h-[18px]`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <div className={`text-sm sm:text-base font-semibold ${isDarkMode ? 'text-white' : isDoodleMode ? 'text-black font-bold uppercase' : 'text-gray-900'}`}>Navapan Suthon</div>
                  <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-zinc-300' : isDoodleMode ? 'text-black font-medium' : 'text-gray-600'}`}>My friends call me est(etsu)</div>
                </div>
              </div>

              <div
                className={`flex items-center gap-3 sm:gap-4 transition-all duration-300 ${
                  contactVisible ? 'animate-fade-in-left delay-1000' : ''
                }`}
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${isDoodleMode ? 'bg-doodle-coral border-2 border-black rounded-doodle' : 'bg-gray-100'}`}>
                  <svg className={`${isDoodleMode ? 'text-black' : 'text-gray-700'} w-4 h-4 sm:w-[18px] sm:h-[18px]`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className={`text-sm sm:text-base font-semibold ${isDarkMode ? 'text-white' : isDoodleMode ? 'text-black font-bold uppercase' : 'text-gray-900'}`}>Phone</div>
                  <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-zinc-300' : isDoodleMode ? 'text-black font-medium' : 'text-gray-600'}`}>0960159077</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div
                className={`flex items-center gap-3 sm:gap-4 transition-all duration-300 ${
                  contactVisible ? 'animate-fade-in-right delay-1100' : ''
                }`}
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${isDoodleMode ? 'bg-doodle-accent border-2 border-black rounded-doodle' : 'bg-gray-100'}`}>
                  <svg className={`${isDoodleMode ? 'text-black' : 'text-gray-700'} w-4 h-4 sm:w-[18px] sm:h-[18px]`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className={`text-sm sm:text-base font-semibold ${isDarkMode ? 'text-white' : isDoodleMode ? 'text-black font-bold uppercase' : 'text-gray-900'}`}>Contacted Email</div>
                  <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-zinc-300' : isDoodleMode ? 'text-black font-medium' : 'text-gray-600'}`}>navapan.suthon@gmail.com</div>
                </div>
              </div>

              <div
                className={`flex items-center gap-3 sm:gap-4 transition-all duration-300 ${
                  contactVisible ? 'animate-fade-in-right delay-1200' : ''
                }`}
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${isDoodleMode ? 'bg-doodle-coral border-2 border-black rounded-doodle' : 'bg-gray-100'}`}>
                  <svg className={`${isDoodleMode ? 'text-black' : 'text-gray-700'} w-4 h-4 sm:w-[18px] sm:h-[18px]`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className={`text-sm sm:text-base font-semibold ${isDarkMode ? 'text-white' : isDoodleMode ? 'text-black font-bold uppercase' : 'text-gray-900'}`}>University Email</div>
                  <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-zinc-300' : isDoodleMode ? 'text-black font-medium' : 'text-gray-600'}`}>navapan.suth@bumail.net</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-6 sm:mt-8 pt-6 sm:pt-8 border-t ${isDarkMode ? 'border-zinc-700/50' : 'border-gray-200'}`}>
            <h3 className={`text-lg font-semibold text-center mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Connect with me</h3>
            <div className={`flex justify-center gap-4 sm:gap-6 transition-all duration-700 ${contactVisible ? 'animate-fade-in-up delay-1300' : ''}`}>
              {socials.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`transition-all duration-300 hover-scale-105 hover-rotate p-3 rounded-lg ${
                    isDarkMode ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800' : isDoodleMode ? 'text-black hover:bg-doodle-accent border-2 border-black rounded-doodle shadow-doodle' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  style={{ fontSize: '1.25rem' }}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.name}</span>
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {onBackToTop && (
        <button
          onClick={onBackToTop}
          className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-3 sm:p-4 rounded-full hover:shadow-lg transition-all duration-500 z-50 shadow-md hover-lift-soft animate-float ${
            showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          } ${isDarkMode ? 'bg-white text-black hover:bg-gray-100' : isDoodleMode ? 'bg-doodle-accent text-black border-2 border-black rounded-doodle shadow-doodle hover:bg-doodle-coral' : 'bg-gray-900 text-white hover:bg-black'}`}
          aria-label="Back to Top"
          type="button"
        >
          <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13V7M10 7L6 11M10 7L14 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </>
  );
}

export default ContactSection;
