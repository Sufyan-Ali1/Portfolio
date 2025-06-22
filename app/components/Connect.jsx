'use client'
import { motion } from 'motion/react';
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Connect = () => {
  return (
    
    <motion.div 
    initial={{x:-50,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:1.2 ,duration:0.6}}
    className="flex justify-center space-x-6 mt-4">
      <motion.a

        whileHover={{scale:1.2}}
        transition={{duration:0.3}}
        href="https://www.linkedin.com/in/sufyan-ali"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black text-4xl"
      >
        <FaLinkedin />
      </motion.a>
      <motion.a

        whileHover={{scale:1.2}}
        transition={{duration:0.3}}
        href="https://github.com/Sufyan-Ali1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black text-4xl"
      >
        <FaGithub />
      </motion.a>
      <motion.a
        whileHover={{scale:1.2}}
        transition={{duration:0.3}}
        href="https://www.instagram.com/sufyan578"
        target="_blank"
        className="text-black text-4xl"
      >
        <FaInstagram />
      </motion.a>
    </motion.div>
  );
};

export default Connect;
