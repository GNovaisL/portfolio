export type Language = "en" | "pt";

export const defaultLanguage: Language = "pt";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  pt: "PT",
};

export const translations = {
  en: {
    nav: {
      about: "About",
      stack: "Stack",
      career: "Career",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      name: "Gabriel Novais",
      role: "Full Stack Developer at Realize Software",
    },
    about: {
      title: "About me",
      imageAlt: "Picture of the developer",
      thumbnailAlt: "Thumbnail",
      description:
        "Hello, I'm Gabriel Novais. I have a degree in Software Engineering and currently work as a Full Stack Developer. My focus is building systems that truly work, combining the agility of React on the frontend with the efficiency of Node.js on the backend. I love challenging myself, learning as much as I can along the way, and sharing my knowledge with others.",
    },
    stack: {
      title: "My Stack",
      progressLabel: "Knowledge level",
      cards: [
        {
          title: "Frontend",
          description:
            "I started my professional career as a Frontend Developer using React and Typescript. Since I was a kid programming has been part of my life. In primary school, I joined a course about HTML and CSS and from then on I decided to pursue this area. I built landing pages to train myself and started my internship as a Frontend Developer, where I spent one year before being promoted to Full Stack Developer.",
          percent: 90,
        },
        {
          title: "Backend",
          description:
            "During college I needed to create a website for the program I worked on. I built the entire software and, on the backend, I used Node.js, PostgreSQL, and Prisma ORM. The database stored data about the project, events, actions, and program members.",
          percent: 75,
        },
        {
          title: "Databases",
          description:
            "Today I prefer PostgreSQL as my main relational database. I also use MongoDB because most systems I build at my current job are for industry and use IoT to receive data from machines via MQTT, so we store this data in MongoDB.",
          percent: 80,
        },
        {
          title: "DevOps & Infrastructure",
          description:
            "I have always worked with Git and GitHub for version control and also with VPS hosting to deploy applications using Docker, ensuring security and great performance.",
          percent: 60,
        },
      ],
    },
    career: {
      title: "Career",
    },
    projects: {
      title: "Projects",
      technologies: "Technologies",
      viewProject: "View Project",
      viewCode: "View Code",
    },
    footer: {
      title: "Contact",
      tagline: "Built with a focus on creating systems that work.",
      ariaContacts: "Contact",
    },
    accessibility: {
      toggleLanguage: "Change language",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      stack: "Stack",
      career: "Carreira",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      name: "Gabriel Novais",
      role: "Desenvolvedor Full Stack na Realize Software",
    },
    about: {
      title: "Sobre mim",
      imageAlt: "Foto do desenvolvedor",
      thumbnailAlt: "Miniatura",
      description:
        "Olá, me chamo Gabriel Novais. Sou graduado em Engenharia de Software e atualmente trabalho como Desenvolvedor Full Stack. Meu foco é construir sistemas que funcionam de verdade, unindo a agilidade do React no frontend com a eficiência do Node.js no backend. Gosto de me desafiar, aprendendo o máximo que posso no caminho e repassando meu conhecimento para outras pessoas.",
    },
    stack: {
      title: "Minha Stack",
      progressLabel: "Nível de conhecimento",
      cards: [
        {
          title: "Frontend",
          description:
            "Iniciei minha carreira profissional como Desenvolvedor Frontend utilizando React e TypeScript. Desde pequeno a programação faz parte da minha vida. No ensino fundamental participei de um curso de HTML e CSS e, a partir dali, decidi seguir nessa área. Criei landing pages para treinar e comecei meu estágio como Desenvolvedor Frontend, onde fiquei um ano até ser promovido a Full Stack.",
          percent: 90,
        },
        {
          title: "Backend",
          description:
            "Durante a faculdade, precisei criar um site para o programa em que trabalhei. Desenvolvi todo o software e, no backend, utilizei Node.js, PostgreSQL e Prisma ORM. O banco de dados armazenava informações sobre o projeto, eventos, ações e membros do programa.",
          percent: 75,
        },
        {
          title: "Bancos de Dados",
          description:
            "Hoje prefiro o PostgreSQL como meu banco relacional principal. Também utilizo MongoDB porque a maioria dos sistemas que desenvolvo no meu trabalho atual é para a indústria e usa IoT para receber dados das máquinas via MQTT, então armazenamos esses dados no MongoDB.",
          percent: 80,
        },
        {
          title: "DevOps & Infraestrutura",
          description:
            "Sempre trabalhei com Git e GitHub para controle de versão e também com hospedagem em VPS para publicar aplicações usando Docker, garantindo segurança e ótima performance.",
          percent: 60,
        },
      ],
    },
    career: {
      title: "Carreira",
    },
    projects: {
      title: "Projetos",
      technologies: "Tecnologias",
      viewProject: "Ver Projeto",
      viewCode: "Ver Código",
    },
    footer: {
      title: "Contato",
      tagline: "Construído com foco em criar sistemas que funcionam.",
      ariaContacts: "Contato",
    },
    accessibility: {
      toggleLanguage: "Alterar idioma",
    },
  },
} as const;
