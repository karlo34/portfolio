import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Store",
    description: "Front-end of an online store with cart and checkout pages. Built with Medusa and Next.js. Features include product listing, shopping cart, and responsive design. The project is still in development and will be updated with more features soon.",
    media: {
      type: "video",
      src: "/projects/Internship_Agilo.mp4",
      alt: "E-Commerce platform screenshot",
    },
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/karlo34/agiloInternship",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "project-2",
    title: "Dalmatian roots",
    description: "Real life project that helps tourists experince Dalmatian wine and liquir culture and small family businesses to be seen. Built with React and Node.js, featuring real-time updates and a responsive design.",
    media: {
      type: "image",
      src: "/projects/dalmatianRoots.png",
      alt: "Task manager demo",
    },
    demoUrl: "https://dalmatian-roots.vercel.app/",
    tags: ["React", "Node.js", "Mapbox"],
  },
  {
    id: "project-3",
    title: "Web AR",
    description: "Fun project which is still in development. It explors interacting with 3D objects in the browser using WebAR. Built with Three.js and plain HTML and CSS, it features real-time rendering and intuitive controls.",
    media: {
      type: "image",
      src: "/projects/webAR.png",
      alt: "Portfolio website preview",
    },
    demoUrl: "https://web-ar-two-navy.vercel.app/",
    githubUrl: "https://github.com/karlo34/webAR",
    tags: ["HTML", "CSS", "Javascipt", "Three.js"],
  },
];
