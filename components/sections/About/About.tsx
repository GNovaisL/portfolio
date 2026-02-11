"use client"

import { AnimatePresence, motion } from "motion/react";
import { MobileIllustration, PcIllustration, ReactIllustration, SqlIllustration } from "@/assets";
import { useEffect, useState } from "react";
import { useLanguage } from "@/providers/LanguageProvider";

export const About = () => {
    const [actualPicture, setActualPicture] = useState<number>(0);
    const [isMobile, setIsMobile] = useState(false);
    const { t } = useLanguage();

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
                <p className="font-niramit text-sm sm:text-[1rem] md:text-xl max-w-180 text-center md:text-left">
                    {t.about.description}
                </p>
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