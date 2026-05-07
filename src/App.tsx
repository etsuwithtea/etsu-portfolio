import './index.css';
import { useEffect, useRef, useState } from 'react';

import Navbar from './components/Navbar';
import ImageModal from './components/ImageModal';
import AboutSection from './components/sections/AboutSection';
import EducationSkillsSection from './components/sections/EducationSkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CertificatesSection from './components/sections/CertificatesSection';
import ActivitiesSection from './components/sections/ActivitiesSection';
import ContactSection from './components/sections/ContactSection';
import { ACTIVITIES, CERTIFICATES, PROFILE_IMAGES, PROJECTS, SOCIALS, WORK_EXPERIENCE } from './data/content';
import { useScrollAnimation, useTypingAnimation } from './hooks/animations';
import resumePDF from './assets/Navapan_Suthon_Resume.pdf';
import transcriptPDF from './assets/Navapan_Suthon_Unofficial_Transcript.pdf';
import { getSkillIcon, LANGUAGE_SKILLS, TOOL_SKILLS, AI_SKILLS } from './utils/skills';
import { type CarouselMediaItem } from './types/content';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState('');
  const [modalImages, setModalImages] = useState<CarouselMediaItem[]>([]);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  const [theme, setTheme] = useState<'light' | 'dark' | 'doodle'>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [currentProfileImage, setCurrentProfileImage] = useState(0);
  const profileImages = PROFILE_IMAGES;

  const aboutVisible = true;
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const [educationRef, educationVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [certificateRef, certificateVisible] = useScrollAnimation();
  const [projectRef, projectVisible] = useScrollAnimation();
  const [activityRef, activityVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();

  const [expandedTools, setExpandedTools] = useState<Record<number, boolean>>({});
  const [typingRef, typedText] = useTypingAnimation<HTMLHeadingElement>("Hi I'm Navapan", 100);

  const isDarkMode = theme === 'dark';
  const isDoodleMode = theme === 'doodle';

  const skillBadgeClass = `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
    isDarkMode
      ? 'bg-zinc-800 text-zinc-300 border border-zinc-700/50 hover:bg-zinc-700 hover:text-white'
      : isDoodleMode
        ? 'bg-white text-black border-2 border-black rounded-doodle shadow-doodle hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none font-bold'
        : 'bg-white text-blue-700 border border-blue-100 shadow-sm hover:shadow-md hover:bg-blue-50/50'
  }`;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoaded(true);
      window.setTimeout(() => setShowLoader(false), 500);
    }, 1500);

    const savedTheme = localStorage.getItem('portfolioTheme') as 'light' | 'dark' | 'doodle' | null;
    const initialTheme = savedTheme || 'dark';
    
    setTheme(initialTheme);
    document.documentElement.classList.remove('light', 'dark', 'doodle');
    document.documentElement.classList.add(initialTheme);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      setScrollY(scrollTop);
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleToolsExpansion = (projectIndex: number) => {
    setExpandedTools(prev => ({
      ...prev,
      [projectIndex]: !prev[projectIndex],
    }));
  };

  useEffect(() => {
    const imageRotationInterval = window.setInterval(() => {
      setCurrentProfileImage(prev => (prev + 1) % profileImages.length);
    }, 3000);

    return () => window.clearInterval(imageRotationInterval);
  }, [profileImages.length]);

  const cycleTheme = () => {
    setTheme(current => {
      let next: 'light' | 'dark' | 'doodle';
      if (current === 'light') next = 'dark';
      else if (current === 'dark') next = 'doodle';
      else next = 'light';

      document.documentElement.classList.remove('light', 'dark', 'doodle');
      document.documentElement.classList.add(next);
      localStorage.setItem('portfolioTheme', next);
      return next;
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const openModal = (
    img: string,
    alt = '',
    type?: CarouselMediaItem['type'],
    idx = 0,
    allImages: CarouselMediaItem[] = [],
  ) => {
    const modalItems = allImages.length > 0 ? allImages : [{ src: img, alt, ...(type ? { type } : {}) }];

    setModalImages(modalItems);
    setCurrentModalIndex(allImages.length > 0 ? idx : 0);
    setModalImg(img);
    setModalAlt(alt);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const nextImage = () => {
    if (modalImages.length > 1) {
      const nextIndex = (currentModalIndex + 1) % modalImages.length;
      setCurrentModalIndex(nextIndex);
      const nextImg = modalImages[nextIndex];
      setModalImg(nextImg?.src ?? null);
      setModalAlt(nextImg?.alt ?? '');
    }
  };

  const prevImage = () => {
    if (modalImages.length > 1) {
      const prevIndex = currentModalIndex === 0 ? modalImages.length - 1 : currentModalIndex - 1;
      setCurrentModalIndex(prevIndex);
      const prevImg = modalImages[prevIndex];
      setModalImg(prevImg?.src ?? null);
      setModalAlt(prevImg?.alt ?? '');
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

  return (
    <>
      {showLoader && (
        <div
          className={`fixed inset-0 z-10000 flex items-center justify-center transition-all duration-500 ${
            theme === 'dark' ? 'bg-black' : theme === 'doodle' ? 'bg-doodle-bg' : 'bg-white'
          } ${!isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="text-center">
            <div
              className={`inline-block w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mb-4 ${
                theme === 'dark' ? 'border-white' : 'border-gray-900'
              }`}
            ></div>
            <div
              className={`text-lg font-semibold tracking-wide animate-pulse ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              ETSU Portfolio
            </div>
          </div>
        </div>
      )}

      <div
        className={`min-h-screen transition-colors duration-300 font-sans flex flex-col items-center relative overflow-hidden ${
          theme === 'dark' ? 'bg-black' : theme === 'doodle' ? 'bg-doodle-bg' : 'bg-gray-50'
        }`}
      >
        <div className="fixed inset-0 pointer-events-none z-0">
          <div
            className={`absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl animate-float ${
              isDarkMode
                ? 'opacity-20 bg-linear-to-r from-purple-500 to-blue-500'
                : isDoodleMode
                  ? 'opacity-30 bg-doodle-accent border-4 border-black'
                  : 'opacity-30 bg-linear-to-r from-blue-300 to-purple-300'
            }`}
            style={{
              animationDelay: '0s',
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          ></div>
          <div
            className={`absolute top-40 right-20 w-48 h-48 rounded-full blur-3xl animate-float ${
              isDarkMode
                ? 'opacity-15 bg-linear-to-r from-pink-500 to-orange-500'
                : isDoodleMode
                  ? 'opacity-25 bg-doodle-coral border-4 border-black'
                  : 'opacity-25 bg-linear-to-r from-pink-300 to-orange-300'
            }`}
            style={{
              animationDelay: '2s',
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          ></div>
          <div
            className={`absolute bottom-20 left-1/4 w-56 h-56 rounded-full blur-3xl animate-float ${
              isDarkMode
                ? 'opacity-10 bg-linear-to-r from-green-500 to-teal-500'
                : isDoodleMode
                  ? 'opacity-20 bg-doodle-accent border-4 border-black'
                  : 'opacity-20 bg-linear-to-r from-green-300 to-teal-300'
            }`}
            style={{
              animationDelay: '4s',
              transform: `translateY(${scrollY * 0.08}px)`,
            }}
          ></div>
          <div
            className={`absolute bottom-32 right-1/4 w-40 h-40 rounded-full blur-3xl animate-float ${
              theme === 'dark'
                ? 'opacity-20 bg-linear-to-r from-yellow-500 to-red-500'
                : theme === 'doodle'
                  ? 'opacity-40 bg-linear-to-r from-doodle-accent to-doodle-coral'
                  : 'opacity-30 bg-linear-to-r from-yellow-300 to-red-300'
            }`}
            style={{
              animationDelay: '6s',
              transform: `translateY(${scrollY * 0.12}px)`,
            }}
          ></div>

          <div
            className={`absolute top-1/3 left-1/2 w-72 h-72 rounded-full blur-3xl animate-float ${
              isDarkMode ? 'opacity-5 bg-linear-to-r from-indigo-500 to-purple-500' : isDoodleMode ? 'hidden' : 'opacity-15 bg-linear-to-r from-indigo-200 to-purple-200'
            }`}
            style={{
              animationDelay: '8s',
              transform: `translateY(${scrollY * 0.06}px)`,
            }}
          ></div>
          <div
            className={`absolute bottom-1/2 right-10 w-32 h-32 rounded-full blur-2xl animate-float ${
              isDarkMode ? 'opacity-10 bg-linear-to-r from-rose-500 to-pink-500' : isDoodleMode ? 'hidden' : 'opacity-20 bg-linear-to-r from-rose-200 to-pink-200'
            }`}
            style={{
              animationDelay: '10s',
              transform: `translateY(${scrollY * 0.14}px)`,
            }}
          ></div>

          <div
            className={`absolute top-1/4 left-1/3 w-2 h-2 rounded-full opacity-40 animate-bounce ${
              isDarkMode ? 'bg-white' : isDoodleMode ? 'bg-black' : 'bg-gray-600'
            }`}
            style={{ animationDelay: '0s' }}
          ></div>
          <div
            className={`absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full opacity-35 animate-bounce ${
              isDarkMode ? 'bg-gray-300' : isDoodleMode ? 'bg-black' : 'bg-gray-700'
            }`}
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className={`absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full opacity-30 animate-bounce ${
              isDarkMode ? 'bg-gray-400' : isDoodleMode ? 'bg-black' : 'bg-gray-800'
            }`}
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className={`absolute bottom-1/4 right-1/3 w-2.5 h-2.5 rounded-full opacity-25 animate-bounce ${
              isDarkMode ? 'bg-gray-500' : isDoodleMode ? 'bg-black' : 'bg-gray-600'
            }`}
            style={{ animationDelay: '3s' }}
          ></div>
          <div
            className={`absolute top-1/2 left-1/6 w-1.5 h-1.5 rounded-full opacity-35 animate-bounce ${
              isDarkMode ? 'bg-white' : isDoodleMode ? 'bg-black' : 'bg-gray-700'
            }`}
            style={{ animationDelay: '4s' }}
          ></div>
          <div
            className={`absolute top-3/4 right-1/6 w-1 h-1 rounded-full opacity-30 animate-bounce ${
              isDarkMode ? 'bg-gray-300' : isDoodleMode ? 'bg-black' : 'bg-gray-800'
            }`}
            style={{ animationDelay: '5s' }}
          ></div>

          <div
            className={`absolute inset-0 ${theme === 'dark' ? 'opacity-5' : theme === 'doodle' ? 'opacity-10' : 'opacity-8'}`}
            style={{
              backgroundImage: `radial-gradient(circle, ${theme === 'dark' ? '#ffffff' : theme === 'doodle' ? '#000000' : '#4b5563'} 1px, transparent 1px)`,
              backgroundSize: theme === 'doodle' ? '30px 30px' : '24px 24px',
            }}
          ></div>

          <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-0' : 'opacity-10 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50'}`}></div>
        </div>

        <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-1000 pointer-events-none">
          <div
            className={`h-full transition-all duration-300 ease-out ${
              theme === 'dark'
                ? 'bg-linear-to-r from-purple-500 to-pink-500'
                : theme === 'doodle'
                  ? 'bg-doodle-coral'
                  : 'bg-linear-to-r from-blue-500 to-red-500'
            }`}
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        <Navbar
          currentTheme={theme}
          isLoaded={isLoaded}
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
          onCycleTheme={cycleTheme}
          onNavClick={handleNavClick}
        />

        <AboutSection
          currentTheme={theme}
          aboutRef={aboutRef}
          aboutVisible={aboutVisible}
          profileImages={profileImages}
          currentProfileImage={currentProfileImage}
          typingRef={typingRef}
          typedText={typedText}
          resumePDF={resumePDF}
          transcriptPDF={transcriptPDF}
        />

        <EducationSkillsSection
          currentTheme={theme}
          educationRef={educationRef}
          educationVisible={educationVisible}
          skillsRef={skillsRef}
          skillsVisible={skillsVisible}
          skillBadgeClass={skillBadgeClass}
          getSkillIcon={getSkillIcon}
          languageSkills={LANGUAGE_SKILLS}
          toolSkills={TOOL_SKILLS}
          aiSkills={AI_SKILLS}
          experiences={WORK_EXPERIENCE}
        />

        <ProjectsSection
          currentTheme={theme}
          projectRef={projectRef}
          projectVisible={projectVisible}
          projects={PROJECTS}
          expandedTools={expandedTools}
          onToggleTools={toggleToolsExpansion}
          onOpenModal={openModal}
          onAnyModalOpen={handleAnyModalOpen}
        />

        <CertificatesSection
          currentTheme={theme}
          certificateRef={certificateRef}
          certificateVisible={certificateVisible}
          certificates={CERTIFICATES}
          onOpenModal={openModal}
        />

        <ActivitiesSection
          currentTheme={theme}
          activityRef={activityRef}
          activityVisible={activityVisible}
          activities={ACTIVITIES}
          onAnyModalOpen={handleAnyModalOpen}
          onOpenModal={openModal}
        />

        <ContactSection
          currentTheme={theme}
          contactRef={contactRef}
          contactVisible={contactVisible}
          socials={SOCIALS}
          onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          showBackToTop={showBackToTop}
        />


        <footer
          className={`w-full border-t py-6 sm:py-8 mt-12 sm:mt-16 ${
            theme === 'dark'
              ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm'
              : theme === 'doodle'
                ? 'bg-white border-t-4 border-black'
                : 'bg-gray-50 border-gray-200'
          }`}
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center px-4 sm:px-8">
            <div
              className={`text-center text-xs sm:text-sm ${
                theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
              }`}
            >
              (c) 2025 ETSU. Thx for visiting my portfolio.
            </div>
          </div>
        </footer>
      </div>

      <ImageModal
        open={modalOpen}
        modalImg={modalImg}
        modalAlt={modalAlt}
        modalImages={modalImages}
        currentModalIndex={currentModalIndex}
        onClose={closeModal}
        onPrev={prevImage}
        onNext={nextImage}
        currentTheme={theme}
      />
    </>
  );
}

export default App;
