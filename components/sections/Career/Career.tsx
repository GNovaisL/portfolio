"use client";

import { StickyWithTrail } from "@/components/ui/StickyTrail/StickyTrail";
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";

export const Career = () => {
    const { t } = useLanguage();

    return (
        <section
            id="career"
            className="relative py-10 px-4 md:py-20 md:px-10 lg:px-40 antialiased overflow-x-clip bg-background"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font-semibold font-niramit text-center text-2xl sm:text-4xl md:text-5xl main-gradient w-fit mx-auto mb-5 md:mb-0"
            >
                {t.career.title}
            </motion.h2>

            <div className="max-w-lg md:max-w-3xl mx-auto">
                <StickyWithTrail />
            </div>
        </section>
    );
};
