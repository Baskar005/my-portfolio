import { motion } from 'framer-motion';

export const CONTACT = {
    address: "doorNo-314,Neerpalani 1ST colony,Viralimalai[TK],Pudukkottai[DT].",
    phoneNo: "9345090314",
    email: "baskarpichaikkannu@gmail.com",
  };
  

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1  whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className='my-10 text-center text-4xl '>Get in Touch</motion.h1>
      <div className='text-center tracking-tighter'>
        <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='my-4 flex flex-col text-lg'>
        {CONTACT.address}
        </motion.p>
        <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className="my-4 text-lg">
            {CONTACT.phoneNo}
        </motion.p>
        <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className="boder-b text-lg">
            {CONTACT.email}
        </motion.p>
      </div>
    </div>
  )
}

export default Contact
