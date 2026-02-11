"use client"

import { Project } from "@/types/project-type"
import { ProjectCard } from "./ProjectCard"

interface ProjectsGridProps {
    projects: Project[]
    onOpenModal: (project: Project) => void
}

export const ProjectsGrid = ({ projects, onOpenModal }: ProjectsGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onOpenModal={onOpenModal}
                />
            ))}
        </div>
    )
}
