import React from 'react';
import logo from "../assets/assets/logo4.jpg";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} className='mx-2 w-20 rounded-md' alt="Kevin Rush Logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Baskar005" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/baskar_the_black_05/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.me/9345090314" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
