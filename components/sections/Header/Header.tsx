"use client"

import { useState, useEffect } from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
    const [currentSection, setCurrentSection] = useState(() => {
        if (typeof window === "undefined") return "";
        return window.location.href.split("#")[1] || "";
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const sectionIds = ["about", "stack", "career", "projects", "contact"];
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => Boolean(section));

        if (!sections.length) return;

        const updateCurrentSection = () => {
            const activationLine = window.innerHeight * 0.35;
            let bestId = sectionIds[0];
            let bestTop = -Infinity;

            sections.forEach((section) => {
                const top = section.getBoundingClientRect().top;
                if (top <= activationLine && top > bestTop) {
                    bestTop = top;
                    bestId = section.id;
                }
            });

            setCurrentSection((prev) => (prev === bestId ? prev : bestId));
        };

        const frame = window.requestAnimationFrame(updateCurrentSection);
        window.addEventListener("scroll", updateCurrentSection, { passive: true });
        window.addEventListener("resize", updateCurrentSection);
        window.addEventListener("hashchange", updateCurrentSection);

        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("scroll", updateCurrentSection);
            window.removeEventListener("resize", updateCurrentSection);
            window.removeEventListener("hashchange", updateCurrentSection);
        };
    }, []);

    useEffect(() => {
        const closeMenuOnDesktop = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", closeMenuOnDesktop);
        return () => window.removeEventListener("resize", closeMenuOnDesktop);
    }, []);

    const options = [
        {
            name: t.nav.about,
            link: "#about",
        },
        {
            name: t.nav.stack,
            link: "#stack",
        },
        {
            name: t.nav.career,
            link: "#career",
        },
        {
            name: t.nav.projects,
            link: "#projects",
        },
        {
            name: t.nav.contact,
            link: "#contact",
        },
    ];

    const handleSelectOption = (section: string) => {
        setCurrentSection(section);
        setIsMenuOpen(false);
    };

    return (
        <>
            <DesktopHeader
                options={options}
                currentSection={currentSection}
                onSelect={handleSelectOption}
            />
            <MobileHeader
                options={options}
                currentSection={currentSection}
                isMenuOpen={isMenuOpen}
                onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
                onSelect={handleSelectOption}
            />
        </>
    )
}

export default Header;

