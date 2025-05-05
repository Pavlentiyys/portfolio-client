import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';

interface MenuItem {
    name: string;
    link: string;
}

const MenuItem: React.FC<MenuItem> = ({ name, link }) => {
  return (
    <>
    <Link to={link}>
        <motion.li 
        className='text-[20px] font-bold p-3 after:duration-300 text-black hover:text-white dark:hover:text-black dark:text-white  duration-300 delay-300 hover:bg-black dark:hover:bg-white relative before:absolute before:h-1 before:w-0 hover:before:w-full before:bg-black dark:before:bg-white before:duration-300 before:bottom-[50px] before:left-0 after:absolute after:h-1 after:bottom-0 after:right-0 after:w-0 hover:after:w-full after:bg-black dark:after:bg-white dark:bg-black cursor-pointer'>
            { name }
        </motion.li>
    </Link>
    </>
  )
}

export default MenuItem
