import { motion } from "framer-motion";
import { useTranslation, type Language } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  const handleToggle = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div
      className="fixed top-6 right-6 z-50 flex items-center bg-[#0A0A0A]/50 backdrop-blur-xl border border-white/5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)] rounded-full p-1 select-none pointer-events-auto"
      style={{ border: "1px solid var(--alpha-light-10)" }}
    >
      <div className="relative flex items-center gap-0.5">
        {(["en", "th"] as Language[]).map((lang) => {
          const isActive = language === lang;
          return (
            <button
              key={lang}
              onClick={() => handleToggle(lang)}
              className="relative px-3.5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase transition-colors duration-300 focus:outline-hidden cursor-pointer"
              style={{
                color: isActive ? "var(--color-base)" : "var(--alpha-light-50)",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="active-lang"
                  className="absolute inset-0 bg-white rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{lang}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
