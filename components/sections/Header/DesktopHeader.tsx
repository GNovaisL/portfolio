"use client";

interface NavOption {
    name: string;
    link: string;
}

interface DesktopHeaderProps {
    options: NavOption[];
    currentSection: string;
    onSelect: (section: string) => void;
}

const DesktopHeader = ({ options, currentSection, onSelect }: DesktopHeaderProps) => {
    return (
        <header className="hidden md:block font-niramit fixed top-6 left-1/2 -translate-x-1/2 py-3 px-8 bg-background/70 border border-foreground/10 rounded-full backdrop-blur-lg z-20">
            <ul className="flex items-center justify-center gap-4 w-auto">
                {options.map((option) => (
                    <li key={option.link} className="shrink-0">
                        <a
                            href={option.link}
                            className={`text-foreground/90 font-semibold cursor-pointer transition-all duration-300 bg-clip-text bg-linear-to-r from-primary to-secondary text-xl hover:text-transparent whitespace-nowrap ${option.link === `#${currentSection}` ? "text-transparent font-bold" : ""}`}
                            onClick={() => onSelect(option.link.replace("#", ""))}
                        >
                            {option.name}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default DesktopHeader;
