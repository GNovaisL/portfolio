import { SVGProps } from "react";

interface MenuHamburgerProps extends SVGProps<SVGSVGElement> {
    isOpen: boolean;
    color?: string;
}

export default function MenuHamburger({
    isOpen,
    color = "currentColor",
    ...props
}: MenuHamburgerProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <line
                x1="5"
                y1="6"
                x2="19"
                y2="6"
                stroke={color}
                strokeWidth="2.25"
                strokeLinecap="round"
                style={{
                    transformOrigin: "12px 12px",
                    transform: isOpen ? "translateY(4px) translateX(-4px) rotate(45deg)" : "translateY(0px) rotate(0deg)",
                    transition: "transform 280ms ease",
                }}
            />
            <line
                x1="5"
                y1="12"
                x2="19"
                y2="12"
                stroke={color}
                strokeWidth="2.25"
                strokeLinecap="round"
                style={{
                    opacity: isOpen ? 0 : 1,
                    transition: "opacity 180ms ease",
                }}
            />
            <line
                x1="5"
                y1="18"
                x2="19"
                y2="18"
                stroke={color}
                strokeWidth="2.25"
                strokeLinecap="round"
                style={{
                    transformOrigin: "12px 12px",
                    transform: isOpen ? "translateY(-4.7px) translateX(-4px) rotate(-45deg)" : "translateY(0px) rotate(0deg)",
                    transition: "transform 280ms ease",
                }}
            />
        </svg>
    );
}
