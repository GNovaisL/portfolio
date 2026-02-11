"use client";

import MenuHamburger from "@/assets/menu-hambuguer";

interface NavOption {
    name: string;
    link: string;
}

interface MobileHeaderProps {
    options: NavOption[];
    currentSection: string;
    isMenuOpen: boolean;
    onToggleMenu: () => void;
    onSelect: (section: string) => void;
}

const MobileHeader = ({
    options,
    currentSection,
    isMenuOpen,
    onToggleMenu,
    onSelect,
}: MobileHeaderProps) => {
    return (
        <div className="md:hidden fixed top-4 left-3 z-30">
            <button
                type="button"
                aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                aria-expanded={isMenuOpen}
                onClick={onToggleMenu}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-background/85 border border-foreground/15 backdrop-blur-lg transition-colors text-foreground/90"
            >
                <MenuHamburger isOpen={isMenuOpen} className="w-7 h-7" />
            </button>

            <nav
                className={`absolute left-0 top-[calc(100%+0.65rem)] min-w-56 rounded-2xl border border-foreground/10 bg-background/95 backdrop-blur-xl shadow-xl shadow-black/25 overflow-hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
                aria-hidden={!isMenuOpen}
            >
                <ul className="p-2 flex flex-col gap-1">
                    {options.map((option) => (
                        <li key={option.link}>
                            <a
                                href={option.link}
                                className={`block px-3 py-2 rounded-xl text-foreground/90 font-semibold transition-all duration-300 bg-clip-text w-fit text-start bg-linear-to-r from-primary to-secondary ${option.link === `#${currentSection}` ? "text-transparent" : "hover:text-transparent"}`}
                                onClick={() => onSelect(option.link.replace("#", ""))}
                            >
                                {option.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default MobileHeader;
