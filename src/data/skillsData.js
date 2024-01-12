import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaSass

} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiJavascript, SiSupabase } from "react-icons/si";



import { Nextjs } from './Nextjs'

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
    id: 11,
    name: "Sass",
    description:
      "Sass es el lenguaje de extensión CSS de nivel profesional más maduro, estable y potente del mundo.",
    icon: FaSass,
  },
  {
    id: 3,
    name: "Tailwind",
    description:
      "Framework CSS para diseños personalizados y responsivos eficientes.",
    icon: SiTailwindcss,
  },
  {
    id: 4,
    name: "JavaScript",
    description:
      "Lenguaje de programación para desarrollar sitios web interactivos.",
    icon: SiJavascript,
  },
  {
    id: 5,
    name: "React",
    description: "Librería para construir interfaces de usuario.",
    icon: FaReact,
  },
  {
    id: 7,
    name: "Redux",
    description: "Librería para gestionar el estado global de una aplicación.",
    icon: SiRedux,
  },
  {
    id: 8,
    name: "Git",
    description:
      "Sistema de control de versiones para administrar cambios en el código.",
    icon: FaGitAlt,
  },
  {
    id: 9,
    name: "GitHub",
    description: "Plataforma para alojar y colaborar en proyectos de software.",
    icon: FaGithub,
  },
  {
    id: 6,
    name: "Supabase",
    description:
      "Supabase es una alternativa de código abierto a Firebase.",
    icon: SiSupabase,
  },
  {
    id: 10,
    name: "Figma",
    description: "Plataforma para colaborar y diseñar en equipo.",
    icon: FaFigma,
  },
];