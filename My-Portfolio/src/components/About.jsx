import React from 'react'
import aboutImg from "../assets/assets/about.jpg";
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
      <div className='flex flex-wrap'>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:0.5}} className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex items-center justify-center'>
            <img className='rounded-2xl' src={aboutImg} alt="" />
        </div>
        </motion.div>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:0.5}} className='w-full lg:w-1/2'>
        <div className='flex justify-center lg:justify-start text-justify'>
            <p className='my-2 max-w-xl py-6 text-lg'> Baskar is an accomplished full-stack developer with a rich background in building dynamic, scalable, and user-centric web applications. With expertise in technologies like React, Next.js, Node.js, and various databases, Baskar combines technical skills with an innovative mindset to deliver high-quality solutions. Baskar has experience leading development teams, ensuring project requirements are met on time, and fostering a collaborative environment to bring out the best in each team member. Constantly curious and driven by a passion for technology, Baskar enjoys keeping up with the latest advancements in the industry, continuously expanding skills, and contributing to open-source projects. Outside of coding, Baskar enjoys staying active, exploring new technologies, and connecting with the developer community to share knowledge and inspire others.</p>
        </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
