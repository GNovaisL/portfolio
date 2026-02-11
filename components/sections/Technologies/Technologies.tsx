"use client"

import { motion } from "motion/react";
import Image from "next/image";
import {
    DockerIcon,
    GitHubIcon,
    GitIcon,
    MongoDbIcon,
    NextIcon,
    NodeIcon,
    PostgresqlIcon,
    ReactIcon,
    TailwindIcon,
    TypescriptIcon,
} from "@/assets/index";

export const Technologies = () => {
    const Stack = [
        { src: ReactIcon, alt: "react" },
        { src: TypescriptIcon, alt: "typescript" },
        { src: NodeIcon, alt: "nodejs" },
        { src: TailwindIcon, alt: "tailwindcss" },
        { src: NextIcon, alt: "nextjs" },
        { src: PostgresqlIcon, alt: "postgresql" },
        { src: MongoDbIcon, alt: "mongodb" },
        { src: DockerIcon, alt: "docker" },
        { src: GitIcon, alt: "git" },
        { src: GitHubIcon, alt: "github" },
        { src: ReactIcon, alt: "react" },
        { src: TypescriptIcon, alt: "typescript" },
        { src: NodeIcon, alt: "nodejs" },
        { src: TailwindIcon, alt: "tailwindcss" },
        { src: NextIcon, alt: "nextjs" },
        { src: PostgresqlIcon, alt: "postgresql" },
        { src: MongoDbIcon, alt: "mongodb" },
        { src: DockerIcon, alt: "docker" },
        { src: GitIcon, alt: "git" },
        { src: GitHubIcon, alt: "github" },
    ];

    return (
        <div className="relative -top-8 md:-top-12 bg-purple-200/20 bg-linear-to-br from-white/10 to-transparent backdrop-blur-md shadow-lg shadow-foreground/10 overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background: "linear-gradient(to right, var(--gradient-edge) 0%, transparent 10%, transparent 90%, var(--gradient-edge) 100%)",
                }}
            />
            <motion.div
                className="flex items-center gap-10 md:gap-20 py-4"
                animate={{
                    translateX: '-50%',
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
            >
                {Stack.map((s, key) => (
                    <Image className="w-7 sm:w-10 md:w-15" src={s.src} alt={s.alt} key={key} />
                ))}
            </motion.div>
        </div>
    )
}
