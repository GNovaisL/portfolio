'use client'
import { motion } from "motion/react";
import { Icons } from "@/components/ui/Icons/Icons";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "@/providers/LanguageProvider";

export const Hero = () => {
    const paralaxRef = useRef(null);
    const { t, language } = useLanguage();

    return (
        <section className="relative pt-28 pb-14 px-6 sm:px-10 md:pb-40 md:pt-80 md:px-40 antialiased overflow-x-clip min-h-[52vh] md:min-h-[60vh]">
            <div className="relative z-10 flex flex-col items-center gap-2">
                <motion.h1
                    className="text-3xl font-poppins main-gradient text-center w-fit mx-auto sm:text-6xl md:text-7xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {t.hero.name}
                </motion.h1>
                <motion.h2
                    className="text-lg sm:text-xl md:text-2xl font-niramit text-foreground text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <TypeAnimation
                        key={language}
                        wrapper="span"
                        sequence={[t.hero.role]}
                    />
                </motion.h2>
            </div>
            <Icons paralaxRef={paralaxRef} />
        </section>
    )
}