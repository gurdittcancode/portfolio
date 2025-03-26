import {
    docker,
    git,
    javascript,
    mongodb,
    nextjs,
    postgres,
    react,
    tailwind,
    typescript,
    drizzle,
} from "./assets";

export const RESUME_URL =
    "https://drive.google.com/file/d/1037Vex82VC2y0vlwWg9EI53D91sn45kl/view?usp=sharing";

export const PROJECTS = [
    {
        name: "bleepkart",
        link: "https://bleepkart-ecommerce.vercel.app",
        github: "https://github.com/gurdittcancode/bleepkart-ecommerce",
        tech: ["next.js", "postgres", "shadcn", "typescript"],
        description:
            "ecommerce website with support for anonymous carts with an attractive ui. supports  google oauth and merging anonymous cart with account cart",
    },
    {
        name: "blog app",
        link: "",
        github: "https://github.com/gurdittcancode?tab=repositories&q=mern-blog&type=&language=&sort=",
        tech: ["mern"],
        description:
            "full-stack blogging application with auth built from scratch using jwt",
    },
    {
        name: "hyggex page clone",
        link: "https://hyggex-internship-task.vercel.app/",
        github: "https://github.com/gurdittcancode/hyggex-internship-task",
        tech: ["react.js", "tailwindcss", "figma"],
        description:
            "clone of a flash card page of hyggex as part of their internship task",
    },
    {
        name: "weather app",
        link: "https://weather-app-six-rho-55.vercel.app/",
        github: "https://github.com/gurdittcancode/react-weather-app",
        tech: ["react.js", "tailwindcss", "docker"],
        description:
            "react weather application built using openweather api. it has attrative styling and semantic symbols. the application is dockerized as well",
    },
];

export const EXPERIENCES = [
    {
        position: "swe intern",
        placeOfWork: "tata 1mg",
        tenure: "jan 2025 - present",
        description:
            "frontend engineer in the health-records team. created a dashboard that reduces the task of resolving on-calls from an effort of 2-3 people, to basically a couple of button clicks. collborating with the product and design team to quickly design and ship features.",
    },
    {
        position: "sde intern",
        placeOfWork: "hyresnap",
        tenure: "june 2024 - sept 2024",
        description:
            "spearheaded the task of integrating recruiterflow ats with our services. built features with Next.js, Redux Toolkit, RTK Query, and Typescript. worked with bug support team to fix bugs in real-time. created api routes and functions in flask for mongodb databases",
    },
];

export const TECHNOLOGIES = [
    {
        name: "JavaScript",
        icon: javascript,
    },

    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React.js",
        icon: react,
    },
    {
        name: "PostgreSQL",
        icon: postgres,
    },
    {
        name: "TailwindCSS",
        icon: tailwind,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Next.js",
        icon: nextjs,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "Drizzle",
        icon: drizzle,
    },
];
