import { motion } from 'framer-motion';
import React from 'react'
import { fadeDown } from '../../animation/animation';
import menuItems from '../../assets/data/menu.json';
import MenuItem from '../MenuItem/MenuItem';

const Header: React.FC = () => {
  return (
    <div className='w-full h-auto'>
        <div className='w-2/3 mx-auto py-8 flex justify-between items-center'>
        <motion.h2 
          variants={fadeDown}
          initial="initial"
          animate="animate"
          transition={fadeDown.transition}
        className='text-[2vw] font-bold'>
           👨‍💻 Mirceya
        </motion.h2>
        <nav>
            <motion.ul 
              variants={fadeDown}
              initial="initial"
              animate="animate"
              transition={fadeDown.transition}
                className='flex gap-6'>
                {menuItems.map((item) => {
                    return <MenuItem name={item.title} link={item.link}/>
                })}
            </motion.ul>
        </nav>
        </div>
    </div>
  )
}

export default Header;
