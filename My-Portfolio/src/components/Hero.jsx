import React from 'react';
import Profile from "../assets/assets/img1.jpg";
import { motion } from "framer-motion";

const container =(delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay},
  }
})
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className="flex flex-wrap">
        <div className='w-full lg:w-1/2'>
        <div className='flex flex-col item-center lg:items-start'>
            <motion.h1 variants={container(0.5)} initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>Baskar P</motion.h1>
            <motion.span  variants={container(1)} initial="hidden" animate="visible" className='bg-gradient-to-tr from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                Full Stack  Developer
            </motion.span>
            <motion.p variants={container(1.5)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter text-justify text-lg'>
            Baskar's passion lies in building impactful software solutions that improve people's lives. Driven by an innate curiosity and love for technology, Baskar is constantly exploring new frameworks, tools, and methodologies to stay ahead of the curve. The desire to create intuitive and efficient user experiences fuels Baskar's dedication to continuous learning and growth. Whether solving complex problems, contributing to open-source projects, or mentoring others, Baskar finds joy in the creative process of development and the opportunity to make meaningful contributions to both the team and the broader tech community.
            </motion.p>
        </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} src={Profile} alt="" className="rounded-lg"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
