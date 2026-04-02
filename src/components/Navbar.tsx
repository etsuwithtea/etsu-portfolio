type NavbarProps = {
  currentTheme: 'light' | 'dark' | 'doodle';
  isLoaded: boolean;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCycleTheme: () => void;
  onNavClick: (sectionId: string) => void;
};

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Project' },
  { id: 'certificate', label: 'Certificate' },
  { id: 'activity', label: 'Activity' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({
  currentTheme,
  isLoaded,
  isMobileMenuOpen,
  onToggleMobileMenu,
  onCycleTheme,
  onNavClick,
}: NavbarProps) {
  const isDarkMode = currentTheme === 'dark';
  const isDoodleMode = currentTheme === 'doodle';

  const navLinkClasses = `transition-all duration-300 hover-scale-105 hover:animate-rainbow-text ${
    isDarkMode ? 'hover:text-white' : isDoodleMode ? 'hover:text-doodle-coral font-bold' : 'hover:text-gray-900'
  }`;
  const navLinks = NAV_LINKS.map(link => (
    <li key={link.id}>
      <a
        href={`#${link.id}`}
        className={navLinkClasses}
        onClick={event => {
          event.preventDefault();
          onNavClick(link.id);
        }}
      >
        {link.label}
      </a>
    </li>
  ));

  return (
    <>
      <nav
        className={`navbar-fallback fixed top-3 sm:top-6 left-3 sm:left-6 right-3 sm:right-6 w-auto max-w-5xl mx-auto flex items-center justify-between px-2 sm:px-6 py-1.5 sm:py-3 z-999 rounded-md sm:rounded-2xl border shadow-lg transition-all duration-500 hover-lift-soft ${
          isDarkMode
            ? 'bg-zinc-900 bg-opacity-70 border-zinc-700 border-opacity-60 dark'
            : isDoodleMode
              ? 'bg-white border-4 border-black border-opacity-100 rounded-doodle doodle'
              : 'bg-white bg-opacity-95 border-gray-200'
        } ${isLoaded ? 'animate-slide-in-down' : 'opacity-0 -translate-y-full'}`}
        style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      >
        <div className="flex items-center">
          <span
            className={`font-bold text-base sm:text-2xl tracking-tight select-none transition-all duration-700 hover-wiggle ${
              isDarkMode ? 'text-white' : isDoodleMode ? 'text-black font-extrabold rotate-[-2deg]' : 'text-gray-900'
            } ${isLoaded ? 'animate-fade-in-left delay-300' : ''}`}
          >
            ETSU
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <ul
            className={`desktop-nav gap-4 lg:gap-8 text-sm font-medium transition-all duration-700 ${
              isDarkMode ? 'text-zinc-300' : isDoodleMode ? 'text-black' : 'text-gray-600'
            } ${isLoaded ? 'animate-fade-in-right delay-500' : ''}`}
          >
            {navLinks}
          </ul>

          <button
            onClick={onToggleMobileMenu}
            className={`mobile-nav-btn p-1.5 rounded-md transition-all duration-300 relative z-1000 border-2 ${
              isDarkMode
                ? 'text-zinc-300 hover:text-white hover:bg-zinc-800 border-zinc-600'
                : isDoodleMode
                  ? 'text-black border-black hover:bg-doodle-accent'
                  : 'text-gray-900 hover:text-gray-900 hover:bg-gray-100 border-gray-300'
            }`}
            aria-label="Toggle menu"
            style={{ minWidth: '36px', minHeight: '36px' }}
            type="button"
          >
            {isMobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                className="mx-auto"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                className="mx-auto"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

          <button
            onClick={onCycleTheme}
            className={`relative p-1 rounded-md sm:p-2 sm:rounded-xl transition-all duration-300 hover-scale-105 ${
              isDarkMode
                ? 'bg-zinc-800 hover:bg-zinc-700'
                : isDoodleMode
                  ? 'bg-doodle-accent border-2 border-black border-opacity-100 hover:bg-doodle-coral'
                  : 'bg-gray-100 hover:bg-gray-200'
            } ${isLoaded ? 'animate-fade-in-right delay-700' : 'opacity-0'}`}
            aria-label="Cycle theme"
            type="button"
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
              {currentTheme === 'light' && (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}

              {currentTheme === 'dark' && (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}

              {currentTheme === 'doodle' && (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.5 1.5" />
                  <path d="M2 2l1.5 7.5" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 z-997 lg:hidden backdrop-blur-sm" onClick={onToggleMobileMenu} />
      )}

      <div
        className={`fixed top-[calc(12px+2rem+25px)] sm:top-[calc(24px+2.5rem+8px)] right-3 sm:right-6 z-998 lg:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div
          className={`rounded-lg border shadow-lg backdrop-blur-md max-h-[calc(100vh-120px)] overflow-y-auto w-auto min-w-[140px] ${
            isDarkMode
              ? 'bg-zinc-900/90 border-zinc-700/60'
              : isDoodleMode
                ? 'bg-white border-2 border-black'
                : 'bg-white/95 border-gray-200'
          }`}
        >
          <ul className="flex flex-col p-2 space-y-1">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`block px-4 py-2 rounded-md text-xs font-medium transition-all duration-300 hover:animate-rainbow-text text-right whitespace-nowrap ${
                    isDarkMode
                      ? 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                      : isDoodleMode
                        ? 'text-black hover:text-doodle-coral hover:bg-doodle-accent border-b border-black last:border-0'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={event => {
                    event.preventDefault();
                    onNavClick(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
