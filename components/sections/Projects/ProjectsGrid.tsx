"use client"

import { Project } from "@/types/project-type"
import { ProjectCard } from "./ProjectCard"
import { useMediaQuery } from "react-responsive"

interface ProjectsGridProps {
    projects: Project[]
    onOpenModal: (project: Project) => void
}

export const ProjectsGrid = ({ projects, onOpenModal }: ProjectsGridProps) => {
    const canHover = useMediaQuery({ query: "(hover: hover) and (pointer: fine)" })

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onOpenModal={onOpenModal}
                    canHover={canHover}
                />
            ))}
        </div>
    )
}
