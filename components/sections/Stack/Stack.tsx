import { motion } from "motion/react";
import { StackCards } from "../../../components/ui/StackCards/StackCards";
import { useLanguage } from "@/providers/LanguageProvider";

export const Stack = () => {
    const { t } = useLanguage();
    const cards = t.stack.cards;

    return (
        <section id="stack" className="relative py-10 px-10 md:py-20 md:px-40 antialiased overflow-x-clip bg-linear-to-b from-background to-(--background-alt)">
            <motion.h2
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="font-semibold text-2xl font-poppins text-center main-gradient w-fit mx-auto mb-10 sm:text-4xl md:text-5xl"
            >
                {t.stack.title}
            </motion.h2>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {cards.slice(0, 2).map((card) => (
                    <StackCards
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        percent={card.percent}
                        progressLabel={t.stack.progressLabel}
                    />
                ))}
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                {cards.slice(2).map((card) => (
                    <StackCards
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        percent={card.percent}
                        progressLabel={t.stack.progressLabel}
                    />
                ))}
            </div>
        </section>
    )
}