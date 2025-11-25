import { RefObject } from 'react';

import { type Certificate } from '../../types/content';

type CertificatesSectionProps = {
  isDarkMode: boolean;
  certificateRef: RefObject<HTMLDivElement>;
  certificateVisible: boolean;
  certificates: Certificate[];
  onOpenModal: (img: string, alt?: string) => void;
};

export function CertificatesSection({
  isDarkMode,
  certificateRef,
  certificateVisible,
  certificates,
  onOpenModal,
}: CertificatesSectionProps) {
  return (
    <section
      ref={certificateRef}
      id="certificate"
      className={`scroll-mt-32 w-full flex justify-center py-12 sm:py-16 px-4 sm:px-8 transition-all duration-700 ${
        certificateVisible ? 'animate-fade-in-up delay-300' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h2
          className={`text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 transition-all duration-300 hover:scale-105 cursor-default ${
            isDarkMode ? 'text-white hover:text-zinc-100' : 'text-gray-900 hover:text-black'
          }`}
        >
          Certificates
        </h2>
        <p
          className={`text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base ${
            isDarkMode ? 'text-zinc-400' : 'text-gray-600'
          }`}
        >
          Professional certifications and achievements that validate my skills and commitment to continuous learning in technology and cybersecurity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full justify-items-center xl:[&:has(>:nth-child(3n+1):last-child)]:justify-items-center xl:[&:has(>:nth-child(3n+2):last-child)]:justify-items-center">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.title}
              className={`rounded-xl sm:rounded-2xl border shadow-xs p-4 sm:p-6 flex flex-col hover:shadow-md transition-all duration-300 hover-lift-soft hover:rotate-1 hover:scale-105 w-full max-w-sm ${
                isDarkMode ? 'bg-zinc-900/40 border-zinc-700/50 backdrop-blur-sm' : 'bg-white border-gray-200'
              } ${certificateVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={certificateVisible ? { animationDelay: `${(500 + index * 200) / 1000}s` } : {}}
            >
              <div className="w-full flex justify-center mb-3 sm:mb-4">
                <button
                  type="button"
                  onClick={() => onOpenModal(certificate.image, certificate.title)}
                  className="focus:outline-hidden group w-full"
                  aria-label={`View certificate: ${certificate.title}`}
                  style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    width="280"
                    height="200"
                    loading="lazy"
                    decoding="async"
                    className={`rounded-lg w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-200 cursor-zoom-in border ${
                      isDarkMode ? 'border-zinc-600' : 'border-gray-100'
                    }`}
                  />
                </button>
              </div>
              <div className="flex flex-col grow space-y-2 sm:space-y-3">
                <h3 className={`text-sm sm:text-base font-semibold leading-tight line-clamp-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {certificate.title}
                </h3>
                <p className={`text-xs sm:text-sm grow ${isDarkMode ? 'text-zinc-300' : 'text-gray-600'}`}>{certificate.desc}</p>
                <div className="pt-1 sm:pt-2">
                  {certificate.link ? (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 shadow-xs hover-lift-soft inline-block ${
                        isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-black'
                      }`}
                    >
                      Verify Certificate
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm text-gray-400">No verification available</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
