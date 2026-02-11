import { TimelineItem } from "@/types/mock-type";
import { Language } from "@/lib/i18n";

const timelineByLanguage: Record<Language, TimelineItem[]> = {
    en: [
        {
            id: 1,
            title: "First Step",
            description:
                "When I was young, my school offered a course about website development. It was a simple course with introductory concepts of HTML5 and CSS3. Since then, I began to feel excited about the world of programming and technology.",
            date: "jun. 2016",
        },
        {
            id: 2,
            title: "Start of My Degree",
            description:
                "In 2021, after finishing high school, I started my degree in Software Engineering and learned about the entire software life cycle and how to make the right decisions about software architecture. College was a place where I grew a lot, not only as a professional but also as a person.",
            date: "mar. 2021",
        },
        {
            id: 3,
            title: "Waves of Change and Decisions",
            description:
                "In college, there were many projects and groups to join in order to improve skills and even become a scholarship student. Among these opportunities, I became a member of the Programa de Educação Tutorial (PET) at my institution, and this was one of my best decisions in college. There, I mainly developed soft skills, which are very important to me today. During my time in PET, I also received an offer to start my internship.",
            date: "apr. 2022",
        },
        {
            id: 4,
            title: "My First Internship in IT",
            description:
                "At the end of 2023, I started an internship at Up Value Solutions as a Frontend Developer. This experience made me grow and improve my technical knowledge as a Software Developer. I worked on projects for the industry, health, and engineering sectors, learning how these areas work, how to solve problems, simplify processes, and automate manual tasks.",
            date: "dec. 2023",
        },
        {
            id: 5,
            title: "First Steps With Backend Technologies",
            description:
                "In mid-2024, I started learning more about databases and backend development, especially Node.js and Express. I had always wanted to learn them because I believed they would be the next step after mastering frontend technologies. At first, it was difficult, but over time I became comfortable using them.",
            date: "jun. 2024",
        },
        {
            id: 6,
            title: "Promoted to Full Stack Developer",
            description:
                "After learning the full stack and working on different projects at the company, I was promoted to Full Stack Developer. With this, I received more responsibility and started visiting clients to better understand their problems, gaining a new perspective on how I could help them. Today, I am able to make decisions and speak more confidently about architecture and technologies.",
            date: "mar. 2025",
        },
        {
            id: 7,
            title: "Finished My Degree",
            description:
                "Finally, I finished my degree and officially became a Software Engineer. Today, I can see how important every stage of software development is, and how much I use what I learned in college in real-world situations. In my first contact with clients to elicit requirements, I was able to put learned methods and techniques into practice.",
            date: "aug. 2025",
        },
        {
            id: 8,
            title: "Next Steps",
            description:
                "After everything I have been through, I believe this is only the beginning, and there is still a lot to learn and achieve. My next goal is to start a Postgraduate Specialization in Cybersecurity.",
            date: "2026",
        },
    ],
    pt: [
        {
            id: 1,
            title: "Primeiros passos",
            description:
                "Quando eu era criança, minha escola ofereceu um curso sobre desenvolvimento de sites. Era um curso simples com conceitos introdutórios de HTML5 e CSS3. Desde então, comecei a me sentir animado com o mundo da programação e da tecnologia.",
            date: "jun. 2016",
        },
        {
            id: 2,
            title: "Início da graduação",
            description:
                "Em 2021, após terminar o ensino médio, iniciei minha graduação em Engenharia de Software e aprendi sobre todo o ciclo de vida do software e como tomar decisões corretas sobre arquitetura. A faculdade foi um lugar onde cresci muito, não só profissionalmente, mas também como pessoa.",
            date: "mar. 2021",
        },
        {
            id: 3,
            title: "Mudanças e decisões",
            description:
                "Na faculdade, existiam muitos projetos e grupos para participar a fim de melhorar habilidades e até se tornar bolsista. Entre essas oportunidades, me tornei membro do Programa de Educação Tutorial (PET) da minha instituição, e essa foi uma das melhores decisões da faculdade. Lá, desenvolvi principalmente soft skills, que são muito importantes hoje. Durante meu tempo no PET, também recebi a oferta para iniciar meu estágio.",
            date: "abr. 2022",
        },
        {
            id: 4,
            title: "Meu primeiro estágio em TI",
            description:
                "No final de 2023, iniciei um estágio na Up Value Solutions como Desenvolvedor Frontend. Essa experiência me fez crescer e melhorar meu conhecimento técnico como desenvolvedor. Trabalhei em projetos para os setores de indústria, saúde e engenharia, aprendendo como essas áreas funcionam, como resolver problemas, simplificar processos e automatizar tarefas manuais.",
            date: "dez. 2023",
        },
        {
            id: 5,
            title: "Primeiros passos com backend",
            description:
                "Em meados de 2024, comecei a aprender mais sobre bancos de dados e desenvolvimento backend, especialmente Node.js e Express. Sempre quis aprender essas tecnologias porque acreditava que seriam o próximo passo após dominar o frontend. No início foi difícil, mas com o tempo fiquei confortável em utilizá-las.",
            date: "jun. 2024",
        },
        {
            id: 6,
            title: "Promovido a Full Stack Developer",
            description:
                "Após trabalhar em diferentes projetos na empresa, fui promovido a Full Stack Developer. Com isso, passei a ter mais responsabilidade e comecei a visitar clientes para entender melhor seus problemas, ganhando uma nova perspectiva sobre como poderia ajudar. Hoje consigo tomar decisões e falar com mais confiança sobre arquitetura e tecnologias.",
            date: "mar. 2025",
        },
        {
            id: 7,
            title: "Formatura",
            description:
                "Finalmente concluí minha graduação e oficialmente me tornei Engenheiro de Software. Hoje consigo ver como cada etapa do desenvolvimento de software é importante e quanto utilizo o que aprendi na faculdade em situações reais. No meu primeiro contato com clientes para levantamento de requisitos, consegui colocar em prática métodos e técnicas aprendidas.",
            date: "ago. 2025",
        },
        {
            id: 8,
            title: "Próximos passos",
            description:
                "Depois de tudo o que vivi, acredito que isso é apenas o começo e ainda há muito para aprender e conquistar. Meu próximo objetivo é iniciar uma pós-graduação em Cibersegurança.",
            date: "2026",
        },
    ],
};

export const getTimelineItems = (language: Language) => timelineByLanguage[language];