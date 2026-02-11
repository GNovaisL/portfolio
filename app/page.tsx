"use client"
import { About } from "@/components/sections/About/About";
import { Career } from "@/components/sections/Career/Career";
import Header from "@/components/sections/Header/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";
import { Stack } from "@/components/sections/Stack/Stack";
import { Technologies } from "@/components/sections/Technologies/Technologies";
import { Footer } from "@/components/sections/Footer/Footer";
import { useLanguage } from "@/providers/LanguageProvider";
import { languageLabels } from "@/lib/i18n";

export default function Home() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <>
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={t.accessibility.toggleLanguage}
        className="fixed flex items-center justify-center top-4 right-3 md:top-6 md:right-4 transition-colors border border-foreground/20 rounded-full cursor-pointer z-20 group p-[0.5px] hover:bg-linear-to-r hover:from-primary hover:to-secondary"
      >
        <span className="px-3 py-1 text-xs md:text-sm font-semibold text-foreground/80 bg-background/80 rounded-full">
          {language === "en" ? languageLabels.pt : languageLabels.en}
        </span>
      </button>
      <Header />
      <Hero />
      <About />
      <Stack />
      <Technologies />
      <Career />
      <Projects />
      <Footer />
    </>
  );
}
