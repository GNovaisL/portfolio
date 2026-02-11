"use client"

import { useRef, useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getTimelineItems } from "@/lib/data/career-mock";
import { VerifyScreenSize } from "@/lib/utils";
import { useLanguage } from "@/providers/LanguageProvider";

export function StickyWithTrail() {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);
    const [containerTop, setContainerTop] = useState(0);
    const [firstOffset, setFirstOffset] = useState(0);
    const [lastOffset, setLastOffset] = useState(0);
    const { language } = useLanguage();
    const timelineItems = useMemo(() => getTimelineItems(language), [language]);

    const { scrollY } = useScroll();
    const { isTablet, isMobileL } = VerifyScreenSize();
    const isSmDown = isTablet;

    useEffect(() => {
        const updateMeasurements = () => {
            if (!containerRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const containerAbsoluteTop = containerRect.top + window.scrollY;

            setContainerTop(containerAbsoluteTop);

            const items = itemRefs.current.filter(Boolean);
            if (items.length > 0) {
                const firstRect = items[0].getBoundingClientRect();
                const lastRect =
                    items[items.length - 1].getBoundingClientRect();

                const firstCenter =
                    firstRect.top + window.scrollY + firstRect.height / 2;
                const lastCenter =
                    lastRect.top + window.scrollY + lastRect.height / 2;

                setFirstOffset(firstCenter - containerAbsoluteTop);
                setLastOffset(lastCenter - containerAbsoluteTop);
            }
        };

        updateMeasurements();
        window.addEventListener("resize", updateMeasurements);

        // Pequeno delay para garantir que o layout está pronto
        const timeout = setTimeout(updateMeasurements, 100);

        return () => {
            window.removeEventListener("resize", updateMeasurements);
            clearTimeout(timeout);
        };
    }, [timelineItems]);

    // Círculo sempre acompanha o centro da tela enquanto percorre a timeline,
    // parando exatamente no último marcador
    const circleTop = useTransform(scrollY, (y) => {
        if (!containerTop && !firstOffset && !lastOffset) return 0;

        const viewportCenter = y + window.innerHeight / 2;
        const relativeToContainer = viewportCenter - containerTop;

        const min = firstOffset - (isMobileL ? 140 : 98);
        const max = lastOffset - (isMobileL ? 130 : 90 );

        if (relativeToContainer < min) return min;
        if (relativeToContainer > max) return max;
        return relativeToContainer;
    });
    // A trilha começa no primeiro marcador e cresce até a posição atual do círculo
    const trailHeight = useTransform(circleTop, (currentTop) => {
        const height = currentTop - firstOffset + (isMobileL ? 140 : 110);
        return height < 0 ? 0 : height;
    });

    return (
        <div ref={containerRef} className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-muted rounded-full" />

            <motion.div
                className="absolute left-2 md:left-8 w-1 bg-linear-to-b from-primary via-accent to-secondary rounded-full origin-top z-11"
                style={{
                    top: firstOffset - (isMobileL ? 124 : 80),
                    height: trailHeight,
                }}
            />

            <motion.div
                className="absolute -left-2 md:left-4 w-9 h-9 z-12"
                style={{
                    top: circleTop,
                }}
            >
                <div className="w-full h-full rounded-full bg-linear-to-br from-primary to-secondary shadow-lg shadow-primary/30 border-4 border-background flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background animate-pulse" />
                </div>
            </motion.div>

            <div className="pl-10 space-y-10 py-6 md:pl-20 md:space-y-32 md:py-8">
                {timelineItems.map((item, index) => (
                    <motion.div
                        ref={(el) => {
                            if (el) {
                                itemRefs.current[index] = el;
                            }
                        }}
                        key={item.id}
                        initial={{ opacity: 0, x: isSmDown ? 100 : 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true, margin: isSmDown ? "0px" : "-100px" }}
                        className="relative"
                    >
                        <div className="absolute -left-8 md:-left-12 top-4 w-6 md:w-8 h-0.5 bg-linear-to-r from-primary/90 to-transparent" />

                        <div className="absolute -left-9 md:-left-13 top-2.5 w-3 h-3 rounded-full bg-muted border-2 border-primary/20" />

                        <div
                            className="relative inline-block p-0.5 overflow-hidden rounded-lg group"
                        >
                            <div
                                className={`absolute rounded-lg bg-foreground/10 inset-0 group-hover:bg-linear-to-br group-hover:from-primary group-hover:to-secondary transition-colors`}
                            />
                            <div className="bg-background backdrop-blur-sm rounded-lg p-6">
                                <span className="text-xs md:text-sm font-medium text-foreground font-inter">{item.date}</span>
                                <h3 className="text-md md:text-xl font-bold text-foreground mt-1 font-poppins">{item.title}</h3>
                                <p className="text-sm md:text-base text-muted-foreground mt-1 md:mt-2 font-niramit">{item.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
