"use client"

import { AnimatePresence, motion } from "motion/react";
import { MobileIllustration, PcIllustration, ReactIllustration, SqlIllustration } from "@/assets";
import { useEffect, useState } from "react";
import { useLanguage } from "@/providers/LanguageProvider";

export const About = () => {
    const [actualPicture, setActualPicture] = useState<number>(0);
    const [isMobile, setIsMobile] = useState(false);
    const { t, language } = useLanguage();
    

    const handleDownloadCV = () => {
        const cv = language === "en" ? "@/assets/Resume - Gabriel Novais.pdf" : "@/assets/Currículo - Gabriel Novais.pdf";
        const link = document.createElement("a");
        link.href = cv;
        link.download = language === "en" ? "Resume - Gabriel Novais.pdf" : "Currículo - Gabriel Novais.pdf";
        link.click();
    }

    const images = [
        ReactIllustration,
        SqlIllustration,
        MobileIllustration,
        PcIllustration
    ]

    const passImage = (picture_number: number) => {
        if ((picture_number + actualPicture) >= images.length)
            setActualPicture((actualPicture + picture_number) - images.length)
        else setActualPicture(actualPicture + picture_number);
    }

    const calcPicNumber = (key: number) => {
        return (actualPicture + key) >= images.length
            ? (actualPicture + key) - images.length
            : actualPicture + key;
    }

    // Avanço automático das imagens em telas mobile
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const updateMobileState = () => setIsMobile(mediaQuery.matches);
        updateMobileState();
        mediaQuery.addEventListener("change", updateMobileState);

        return () => {
            mediaQuery.removeEventListener("change", updateMobileState);
        };
    }, []);

    useEffect(() => {
        if (!isMobile) return;
        const interval = setInterval(() => {
            setActualPicture((prev) => (prev + 1) >= images.length ? 0 : prev + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, [isMobile, images.length]);

    return (
        <section id="about" className="relative pt-20 pb-10 px-10 md:pb-20 md:pt-40 md:px-40 antialiased overflow-x-clip">
            <motion.h2
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="font-semibold text-2xl font-poppins text-center main-gradient w-fit mx-auto sm:text-4xl md:text-5xl"
            >
                {t.about.title}
            </motion.h2>
            <div className="relative flex flex-col md:flex-row gap-5 items-center py-6 md:py-12">
                <div className="flex flex-col gap-4 max-w-180 text-center md:text-left">
                    <p className="font-niramit text-sm sm:text-[1rem] md:text-xl">
                        {t.about.description}
                    </p>
                    <div className="flex justify-center gap-4">
                        <motion.button
                            className="font-niramit text-sm sm:text-md bg-gray-800 text-white sm:px-4 sm:py-2 py-1 px-2 rounded-full cursor-pointer hover:bg-gray-700 transition-colors duration-300"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            onClick={handleDownloadCV}
                        >Download CV</motion.button>
                        <motion.a
                            href="https://www.linkedin.com/in/gnovaisl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-md font-niramit flex items-center gap-2 border-2 sm:px-4 sm:py-2 py-1 px-2 border-foreground/50 rounded-full cursor-pointer hover:border-blue-500 transition-colors duration-300 hover:text-blue-500"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            {t.about.linkedinButton}
                            <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "16" : "24"} height={isMobile ? "16" : "24"} viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden>
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </motion.a>
                    </div>
                </div>
                <div className="relative cursor-pointer flex justify-end w-50 h-40 md:w-200 md:h-80 overflow-hidden grayscale-0 md:grayscale hover:grayscale-0 transition-all duration-500">
                    <AnimatePresence mode="popLayout">
                        {/* inset-0 garante que as imagens fiquem sobrepostas durante a troca */}
                        <motion.img
                            key={calcPicNumber(0)}
                            src={images[actualPicture].src}
                            alt={t.about.imageAlt}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="inset-0 object-cover w-full h-full drop-shadow-xl rounded-lg"
                        />
                    </AnimatePresence>
                </div>
                {!isMobile && (
                    <div className="hidden md:flex flex-col justify-between h-full w-32 gap-4">
                        {[1, 2, 3].map((offset) => (
                            <div
                                key={offset}
                                className="flex-1 cursor-pointer flex justify-end w-30 h-20 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 rounded-lg"
                                onClick={() => passImage(offset)}
                            >
                                <AnimatePresence mode="popLayout">
                                    <motion.img
                                        key={calcPicNumber(offset)}
                                        src={images[calcPicNumber(offset)].src}
                                        alt={`${t.about.thumbnailAlt} ${offset}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="inset-0 object-cover w-full h-full"
                                    />
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}