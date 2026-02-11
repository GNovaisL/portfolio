import { Project } from "@/types/project-type";
import { NewsletterProject, OnePieceProject, PetProject, QrCodeProject } from "@/assets";
import { Language } from "@/lib/i18n";

const projectsByLanguage: Record<Language, Project[]> = {
    en: [
        {
            id: "1",
            title: "PET Website",
            description:
                "Website for the Programa de Educação Tutorial (PET) at my institution. The website was made to share PET's projects and activities with the community.",
            image: PetProject,
            stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
            metrics: [],
            link: "#",
            github: "#",
        },
        {
            id: "2",
            title: "One Piece Project",
            description:
                "This project was made as part of a course taught by Dev em Dobro. The course was about creating a website based on anime One Piece and practice my skills.",
            image: OnePieceProject,
            stack: ["HTML", "CSS", "JavaScript"],
            metrics: [],
            link: "https://gnovaisl.github.io/One-Piece-Website/",
            github: "https://github.com/GNovaisL/One-Piece-Website",
        },
        {
            id: "3",
            title: "Newsletter - Frontend Mentor",
            description:
                "This project was made as part of a challenge from Frontend Mentor. The challenge was about creating a newsletter subscription page with form validation.",
            image: NewsletterProject,
            stack: ["HTML", "CSS", "JavaScript"],
            metrics: [],
            link: "https://gnovaisl.github.io/Newsletter-sign-up/",
            github: "https://github.com/GNovaisL/Newsletter-sign-up",
        },
        {
            id: "4",
            title: "QR Code Generator",
            description:
                "This project was made as part of a challenge from Frontend Mentor. The challenge was about creating a page with a responsive design.",
            image: QrCodeProject,
            stack: ["HTML", "CSS", "JavaScript"],
            metrics: [],
            link: "https://gnovaisl.github.io/QRcode-Front-end-Mentor/",
            github: "https://github.com/GNovaisL/QRcode-Front-end-Mentor",
        },
    ],
    pt: [
        {
            id: "1",
            title: "PET Website",
            description:
                "Website completo para o Programa de Educação Tutorial (PET) da minha instituição. O site foi feito para compartilhar os projetos e atividades do PET com a comunidade.",
            image: PetProject,
            stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
            metrics: [],
            link: "#",
            github: "#",
        },
        {
            id: "2",
            title: "One Piece Project",
            description:
                "Projeto feito como parte de um curso ministrado pelo Dev em Dobro. O curso foi sobre criar um site baseado no anime One Piece e praticar minhas habilidades.",
            image: OnePieceProject,
            stack: ["HTML", "CSS", "JavaScript"],
            metrics: [],
            link: "https://gnovaisl.github.io/One-Piece-Website/",
            github: "https://github.com/GNovaisL/One-Piece-Website",
        },
        {
            id: "3",
            title: "Newsletter - Frontend Mentor",
            description: "Projeto feito como parte de um desafio do Frontend Mentor. O desafio foi sobre criar uma página de inscrição em newsletter com funcionalidades de validação de formulário.",
            image: NewsletterProject,
            stack: ["HTML", "CSS", "JavaScript"],
            metrics: [],
            link: "https://gnovaisl.github.io/Newsletter-sign-up/",
            github: "https://github.com/GNovaisL/Newsletter-sign-up",
        },
        {
            id: "4",
            title: "QR Code Generator",
            description: "Projeto feito como parte de um desafio do Frontend Mentor. O desafio foi sobre criar uma tela totalmente responsiva.",
            image: QrCodeProject,
            stack: ["HTML", "CSS", "JavaScript"],
            metrics: [],
            link: "https://gnovaisl.github.io/QRcode-Front-end-Mentor/",
            github: "https://github.com/GNovaisL/QRcode-Front-end-Mentor",
        },
    ],
};

export const getProjects = (language: Language) => projectsByLanguage[language];
