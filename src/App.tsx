import { useState } from "react";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { HeroCard } from "@/components/sections/HeroCard";
import { WorkCard } from "@/components/sections/WorkCard";
import { AboutCard } from "@/components/sections/AboutCard";
import { ContactCard } from "@/components/sections/ContactCard";
import { ProjectDetailCard } from "@/components/sections/ProjectDetailCard";
import { SkillsDetailCard } from "@/components/sections/SkillsDetailCard";
import { AnimatePresence } from "framer-motion";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import type { ProjectType } from "@/types";

type CardId = "hero" | "work" | "about" | "contact" | null;

function App() {
  const [activeCard, setActiveCard] = useState<CardId>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Toggle active card and reset related state
  const handleSetActiveCard = (card: CardId) => {
    setActiveCard(card);
    if (card !== "work") {
      setSelectedProject(null);
    }
    if (card !== "hero") {
      setShowAllSkills(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-12 px-4 md:px-8 relative"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-fg)" }}
    >
      <GrainOverlay />
      
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-black tracking-tighter text-center">
          <span className="text-[10px] font-bold tracking-[0.4em] block uppercase text-center mb-2 opacity-40 font-sans">Portfolio of</span>
          ETSUWITHTEA
        </h1>
      </header>

      {/* Main Grid Content */}
      <main className="w-full flex justify-center relative">
        <BentoGrid>
          <HeroCard
            isActive={activeCard === "hero"}
            onClick={() => handleSetActiveCard(activeCard === "hero" ? null : "hero")}
            onShowAllSkills={() => setShowAllSkills(true)}
          />

          <WorkCard
            isActive={activeCard === "work"}
            onClick={() => handleSetActiveCard(activeCard === "work" ? null : "work")}
            onSelectProject={setSelectedProject}
            selectedProjectId={selectedProject?.id}
          />

          <AnimatePresence mode="popLayout">
            {selectedProject && (
              <ProjectDetailCard
                key="project-detail"
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
            {showAllSkills && (
              <SkillsDetailCard
                key="skills-detail"
                onClose={() => setShowAllSkills(false)}
              />
            )}
          </AnimatePresence>

          <AboutCard
            isActive={activeCard === "about"}
            onClick={() => handleSetActiveCard(activeCard === "about" ? null : "about")}
          />

          <ContactCard
            isActive={activeCard === "contact"}
            onClick={() => handleSetActiveCard(activeCard === "contact" ? null : "contact")}
          />
        </BentoGrid>
      </main>
    </div>
  );
}

export default App;
