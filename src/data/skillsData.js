import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiRedux , SiTailwindcss} from "react-icons/si";

export const skills = [
    {
        id: 1,
        name: "HTML",
        description: "Lenguaje de marcas para estructurar contenido web.",
        icon: FaHtml5,
    },
    {
        id: 2,
        name: "CSS",
        description: "Lenguaje de estilos para diseñar y maquetar sitios web.",
        icon: FaCss3Alt,
    },
    {
        id: 3,
        name: "Tailwind",
        description: "Framework CSS para diseños personalizados y responsivos eficientes.",
        icon: SiTailwindcss,
    },
    {
        id: 4,
        name: "JavaScript",
        description: "Lenguaje de programación para desarrollar sitios web interactivos.",
        icon: FaJsSquare,
    },
    {
        id: 5,
        name: "React",
        description: "Librería para construir interfaces de usuario.",
        icon: FaReact,
    },
    {
        id: 6,
        name: "Redux",
        description: "Librería para gestionar el estado global de una aplicación.",
        icon: SiRedux,
    },
    {
        id: 7,
        name: "Git",
        description: "Sistema de control de versiones para administrar cambios en el código.",
        icon: FaGitAlt,
    },
    {
        id: 8,
        name: "GitHub",
        description: "Plataforma para alojar y colaborar en proyectos de software.",
        icon: FaGithub,
    },
];