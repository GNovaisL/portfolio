"use client"

import { motion, AnimatePresence } from "motion/react"
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

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 backdrop-blur-md z-50 bg-background/80"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto no-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative rounded-3xl border shadow-2xl max-w-6xl mx-auto bg-background border-foreground/15">
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={onClose}
                                className="absolute cursor-pointer top-4 right-2 z-10 w-10 h-10 rounded-full flex items-center justify-center text-foreground/60 transition-colors bg-background hover:bg-foreground/10 hover:text-foreground"
                                aria-label="Fechar modal do projeto"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>

                            <div className="p-6 md:p-12">
                                <motion.div
                                    layoutId={`project-image-${project.id}`}
                                    className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t via-transparent to-transparent from-background" />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                                        {project.title}
                                    </h2>
                                    <p className="text-md leading-relaxed mb-8 text-foreground/75">
                                        {project.description}
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-8"
                                >
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">{t.projects.technologies}</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.stack.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.4 + idx * 0.05 }}
                                                whileHover={{ scale: 1.1 }}
                                                className="px-2 py-1 rounded-lg text-sm bg-background text-foreground border border-foreground/15"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="flex gap-4"
                                >
                                    {project.link && (
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-3 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm bg-primary text-white"
                                        >
                                            {t.projects.viewProject}
                                        </motion.a>
                                    )}
                                    {project.github && (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center justify-center rounded-lg p-[1.4px] text-sm bg-foreground/20 hover:bg-linear-to-r hover:from-primary hover:to-secondary"
                                        >
                                            <span className="px-3 py-2 rounded-[6px] font-medium text-center w-full bg-background text-foreground">
                                                {t.projects.viewCode}
                                            </span>
                                        </motion.a>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
