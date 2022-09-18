import mockupCalc from '../assets/images/mockup-calc.png';
import mockupp from '../assets/images/mockup-pizza.png';

interface Project {
    id: number;
    preview: string | undefined;
    title: string;
    about: string;
    status: boolean;
    link: {
        repository: string,
        deploy: string | null;
    }
}

export const Projects: Project[] = [
    {
        id: 0,
        preview: mockupCalc,
        title: "Calculadora de IMC",
        about: "CRA | CSS Modules",
        status: true,
        link: {
            repository: "https://github.com/caiquedv/portfolio_react-calc-imc",
            deploy: "https://caiquedv.github.io/portfolio_react-calc-imc/"
        }
    },
    {
        id: 1,
        preview: mockupp,
        title: "Galeria JSONPlaceholder",
        about: "Vite | Tailwind | Axios | React Router Dom",
        status: true,
        link: {
            repository: "https://github.com/caiquedv/jsonplaceholder-axios-gallery/",
            deploy: "https://caiquedv.github.io/jsonplaceholder-axios-gallery/"
        }
    },
    {
        id: 2,
        preview: undefined,
        title: "Jogo da Memória",
        about: "Vite | Styled Components",
        status: true,
        link: {
            repository: "https://github.com/caiquedv/portfolio_vite-memory-game/",
            deploy: "https://caiquedv.github.io/portfolio_vite-memory-game/"
        }
    },
    {
        id: 3,
        preview: undefined,
        title: "Clone da OLX",
        about: "Vite | Styled Components | Redux | React Router Dom",
        status: false,
        link: {
            repository: "https://github.com/caiquedv/react_inspired-olx/",
            deploy: null
        }
    },
    {
        id: 4,
        preview: undefined,
        title: "Lista de Tarefas",
        about: "Vite | Styled Components",
        status: true,
        link: {
            repository: "https://github.com/caiquedv/to-do_list_reactjs/",
            deploy: "https://caiquedv.github.io/to-do_list_reactjs/"
        }
    },
    {
        id: 5,
        preview: undefined,
        title: "Sistema de Finanças Pessoais",
        about: "Vite | Styled Components",
        status: true,
        link: {
            repository: "https://github.com/caiquedv/expanse-tracker_reactjs/",
            deploy: "https://caiquedv.github.io/expanse-tracker_reactjs/"
        }
    },
    {
        id: 6,
        preview: undefined,
        title: "Galeria de Fotos",
        about: "Vite | Styled Components | Firebase",
        status: true,
        link: {
            repository: "https://github.com/caiquedv/gallery_react/",
            deploy: "https://caiquedv.github.io/gallery_react/"
        }
    },
    {
        id: 7,
        preview: undefined,
        title: "Jogo estilo RPG",
        about: "Vite | Styled Components",
        status: false,
        link: {
            repository: "https://github.com/caiquedv/rpg_reactjs/",
            deploy: "https://caiquedv.github.io/rpg_reactjs/"
        }
    },
    {
        id: 8,
        preview: undefined,
        title: "Formulário Multi-Etapas",
        about: "Vite | Styled Components | React Router Dom",
        status: true,
        link: {
            repository: "https://github.com/caiquedv/multiform-reactjs/",
            deploy: "https://caiquedv.github.io/multiform-reactjs/"
        }
    },
    {
        id: 9,
        preview: undefined,
        title: "Portfólio ReactJS",
        about: "Vite | Tailwind",
        status: true,
        link: {
            repository: "https://github.com/caiquedv/portfolio-reactjs/",
            deploy: null
        }
    },
];