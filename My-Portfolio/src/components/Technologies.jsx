import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { DiMysql, DiPhp, DiLaravel, DiJavascript1, DiCss3, DiGit } from 'react-icons/di';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity :0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity :0, x: -100}} transition={{duration:1.5}} className='flex flex-wrap place-items-center justify-center gap-4'>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiCss3 className='text-5xl text-cyan-400' />
        </motion.div>
        <motion.div variants={iconVariants(2.0)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-5xl text-blue-500' />
        </motion.div>
        <motion.div variants={iconVariants(1.8)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiMysql className='text-5xl text-yellow-500' />
        </motion.div>
        <motion.div variants={iconVariants(2.3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiPhp className='text-5xl text-purple-500' />
        </motion.div>
        <motion.div variants={iconVariants(2.1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiLaravel className='text-5xl text-red-600' />
        </motion.div>
        <motion.div variants={iconVariants(2.7)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiJavascript1 className='text-5xl text-yellow-300' />
        </motion.div>
        <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiGit className='text-5xl text-orange-600' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
