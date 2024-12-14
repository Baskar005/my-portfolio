import project1 from "../assets/assets/projects/project-1.jpg";
import project2 from "../assets/assets/projects/project-2.jpg";
import project3 from "../assets/assets/projects/project-3.jpg";
import project4 from "../assets/assets/projects/project-4.jpg";
import { motion } from 'framer-motion';
 const PROJECTS = [
    {
      title: "E-Commerce Website",
      image: project1,
      description:
        "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      image: project2,
      description:
        "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
      technologies: ["HTML", "CSS", "Angular", "Firebase"],
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["HTML", "CSS", "React", "Bootstrap"],
    },
    {
      title: "Blogging Platform",
      image: project4,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    },
  ];
  
  export const CONTACT = {
    address: "767 Fifth Avenue, New York, NY 10153 ",
    phoneNo: "+12 4555 666 00 ",
    email: "me@example.com",
  };
  

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>{PROJECTS.map((project,index)=>(
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:0.5}} className="w-full lg:w-1/4 text-justify">
            <img src={project.image} alt={project.title} width={150} height={150} className="mb-6 rounded"/>
            </motion.div >
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className="w-full max-w-xl lg;3/4 text-justify">
                <h6 className="mb-2 font-semibold">
                    {project.title}
                </h6>
                <p className="mb-4 text-neutral-400">
                    {project.description}
                </p>
                {project.technologies.map((tech,index)=>(
                    <span key={index} className="mr-2 rounded bg-neutral-900px-2 py-1 text-sm font-medium text-purple-900 text-justify">
                        {tech}
                    </span>
                ))}
            </motion.div>
        </div>
    ))}
        </div>
    </div>
    
  )
}

export default Projects