"use client"

import { AnimatePresence, motion, useReducedMotion, Transition } from "motion/react"
import { useEffect } from "react"
import Image from "next/image"
import { Project } from "@/types/project-type"
import { useLanguage } from "@/providers/LanguageProvider"

interface ProjectModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    const { t } = useLanguage()
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    if (!project) return null

    const overlayTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }
    const modalTransition = shouldReduceMotion
        ? { duration: 0 }
        : { type: "spring", damping: 30, stiffness: 260 }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={overlayTransition}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-background/80"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 12 }}
                        transition={modalTransition as Transition<any>}
                        className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto no-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="relative rounded-3xl border shadow-xl max-w-6xl mx-auto bg-background border-foreground/15"
                            style={{ contentVisibility: "auto", containIntrinsicSize: "400px 600px" }}
                        >
                            <button
                                onClick={onClose}
                                className="absolute cursor-pointer top-4 right-2 z-10 w-10 h-10 rounded-full flex items-center justify-center text-foreground/60 transition-colors bg-background hover:bg-foreground/10 hover:text-foreground"
                                aria-label="Fechar modal do projeto"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="p-6 md:p-12">
                                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
                                        quality={70}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t via-transparent to-transparent from-background" />
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                                        {project.title}
                                    </h2>
                                    <p className="text-md leading-relaxed mb-8 text-foreground/75">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">{t.projects.technologies}</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.stack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 rounded-lg text-sm bg-background text-foreground border border-foreground/15"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {(project.link || project.github) && (
                                    <div className="flex gap-4">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-3 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm bg-primary text-white"
                                            >
                                                {t.projects.viewProject}
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center rounded-lg p-[1.4px] text-sm bg-foreground/20 hover:bg-linear-to-r hover:from-primary hover:to-secondary"
                                            >
                                                <span className="px-3 py-2 rounded-[6px] font-medium text-center w-full bg-background text-foreground">
                                                    {t.projects.viewCode}
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
