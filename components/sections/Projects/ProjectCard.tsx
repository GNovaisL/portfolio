"use client"

import { motion, MotionValue, TargetAndTransition, useReducedMotion } from "motion/react"
import Image from "next/image"
import { Project } from "@/types/project-type"
import { useRef } from "react"

interface ProjectCardProps {
    project: Project
    index: number
    onOpenModal: (project: Project) => void
    canHover: boolean
}

export const ProjectCard = ({ project, index, onOpenModal, canHover }: ProjectCardProps) => {
    const cardRef = useRef<HTMLButtonElement>(null)
    const shouldReduceMotion = useReducedMotion()

    const initial = shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }
    const inView = { opacity: 1, y: 0, scale: 1 }
    const transition = shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }
    const hoverAnimation = !shouldReduceMotion && canHover
        ? { scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 25 } }
        : {}

    return (
        <motion.button
            type="button"
            ref={cardRef}
            initial={initial}
            whileInView={inView}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
            whileHover={hoverAnimation as TargetAndTransition}
            onClick={() => onOpenModal(project)}
            className="group cursor-pointer relative text-left w-full"
            style={{ contentVisibility: "auto", containIntrinsicSize: "400px 480px" }}
            aria-label={`Abrir detalhes do projeto ${project.title}`}
        >
            <div className="relative rounded-2xl overflow-hidden bg-background/90 border border-foreground/10 shadow-lg shadow-foreground/10 h-full flex flex-col">
                <div className="relative h-48 md:h-64 overflow-hidden">
                    <motion.div
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            quality={70}
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:bg-linear-to-r group-hover:text-transparent
                    group-hover:bg-clip-text
                    group-hover:to-primary
                    group-hover:from-secondary
                    w-fit transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.slice(0, 3).map((tech, idx) => (
                            <motion.span
                                key={idx}
                                whileHover={!shouldReduceMotion && canHover ? { scale: 1.05 } : {}}
                                className="px-3 py-1 text-xs rounded-full bg-foreground/5 text-foreground/80 border border-foreground/10"
                            >
                                {tech}
                            </motion.span>
                        ))}
                        {project.stack.length > 3 && (
                            <span className="px-3 py-1 text-xs rounded-full bg-foreground/5 text-foreground/80 border border-foreground/10">
                                +{project.stack.length - 3}
                            </span>
                        )}
                    </div>

                    {project.metrics && project.metrics.length > 0 && (
                        <div className="mt-auto space-y-1">
                            {project.metrics.slice(0, 2).map((metric, idx) => (
                                <p key={idx} className="text-xs text-foreground/60">
                                    {metric}
                                </p>
                            ))}
                        </div>
                    )}
                </div>

                <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(122, 29, 253, 0.1), transparent 50%)"
                    }}
                />
            </div>
        </motion.button>
    )
}
