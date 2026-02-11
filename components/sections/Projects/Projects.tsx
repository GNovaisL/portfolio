"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "motion/react"
import { getProjects } from "@/lib/data/projects-mock"
import { Project } from "@/types/project-type"
import { ProjectsGrid } from "./ProjectsGrid"
import { ProjectModal } from "./ProjectModal"
import { useLanguage } from "@/providers/LanguageProvider"

export const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { language, t } = useLanguage()

    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const projects = useMemo(() => getProjects(language), [language])

    useEffect(() => {
        if (!selectedProject) return
        const updatedProject = projects.find((p) => p.id === selectedProject.id)
        if (updatedProject) {
            setSelectedProject(updatedProject)
        }
    }, [projects, selectedProject])

    const handleOpenModal = (project: Project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setTimeout(() => setSelectedProject(null), 300)
    }

    return (
        <section
            id="projects"
            ref={containerRef}
            className="relative py-10 px-10 md:py-20 md:px-40 antialiased overflow-x-clip bg-linear-to-b from-background to-(--background-alt)"
        >
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-semibold text-2xl font-poppins main-gradient w-fit mx-auto mb-10 sm:text-4xl md:text-5xl"
            >
                {t.projects.title}
            </motion.h2>

            <ProjectsGrid
                projects={projects}
                onOpenModal={handleOpenModal}
            />

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    )
}
