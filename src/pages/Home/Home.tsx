import React from 'react';
import authorImg from "../../assets/author.png";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { fadeDown } from '../../animation/animation';
import logos from '../../assets/data/logos.json';
import { Link } from 'react-router-dom';
import BioModel from '../../components/BioModel/BioModel';
import PyramidModel from '../../components/PyramidModel/PyramidModel';
import DodecahedronModel from '../../components/DodecahedronModel/Dodecahedron';




const Home: React.FC = () => {
  return (
    <main className='bg-white dark:bg-black'>
      <section className='w-full relative h-[600px] gradient pt-10 border-y-2'>
      
        <div className='w-2/3  mx-auto h-[600px] flex justify-between'>  
          <motion.div 
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={fadeDown.transition}
            className='w-full h-4/6 flex flex-col justify-between text-white'>
            <div className='mt-8'>
              <p>&gt; Frontend</p>
              <p>&gt; Backend</p>
              <p>&gt; Web-design</p>
            </div>
            <div className='text-white'>
              <h2 className='text-[2.3vw] font-bold text-white'>
                <Typewriter
                  words={[`Hi I'm Pavel Pichugin!`, `I'm Fullstack Developer`]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <p className='text-[1.90vw]'>Welcome to my</p>
              <h3 className='text-[2.15vw] font-bold mb-8'>Portfolio-site</h3>
              <Link to="/contact" className='duration-300 ease-in border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-16 mt-4'>Contact</Link>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={fadeDown.transition}
            className=''>
            <motion.img 
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={fadeDown.transition}
            className='rounded-xl absolute right-[15%] bottom-0 w-auto h-[90%]' src={authorImg} alt="Pavel Pichugin" />
          </motion.div>
        </div>
      </section>
      
      {/* Секция Skills */}
      <section className='w-full h-full pt-10'>
        <div className='w-2/3 mx-auto'>
        <motion.h3 
        variants={fadeDown}
        initial="initial"
        animate="animate"
        transition={fadeDown.transition}
        className='text-[2vw] font-semibold mb-6'>
          Skills
        </motion.h3>
      <motion.div 
      variants={fadeDown}
      initial="initial"
      animate="animate"
      transition={fadeDown.transition}
      className="overflow-hidden gradient rounded whitespace-nowrap py-4 mb-8">
      <motion.div
        className="flex gap-10"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
      >
        {[...logos, ...logos].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="logo"
            className="h-12 w-auto object-contain 
             transition duration-300"
          />
        ))}
      </motion.div>
    </motion.div>
          <motion.div 
          variants={fadeDown}
          initial="initial"
          animate="animate"
          transition={fadeDown.transition}
          className='grid grid-cols-2 gap-8'>
            {/* Frontend */}
            <div className='gradient p-6 rounded-sm flex flex-col justify-between'>
              <h4 className='mb-1 text-lg font-medium text-white'>
                Frontend
              </h4>
              <p className='py-4 text-gray-400 text-sm'>I layout the site, worked out the logic, connected frontend to api, developed forms with validation, used redux to store global states.</p>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div className='bg-sky-400 h-2 rounded-full' style={{ width: '90%' }}></div>
                </div>
              
            </div>

            {/* Backend */}
            <div className='gradient p-6 rounded-sm flex flex-col justify-between'>
              <h4 className='mb-1 text-lg font-medium text-white'>Backend</h4>
              <p className='py-4 text-gray-400 text-sm'>Developed APIs, designed structure, wrote documentation, connected backend to database, created microservices using message brokers.</p>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div className='bg-sky-400 h-2 rounded-full' style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Design */}
            <div className='gradient p-6 rounded-sm flex flex-col justify-between'>
              <h4 className='mb-1 text-lg font-medium text-white'>Web-Design</h4>
              <p className='py-4 text-gray-400 text-sm'>Created design mockups in figma, worked out roadmap layout for apps, created custom icons, and developed responsive design for mobile devices, tablets, laptops, and large screens.</p>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div className='bg-sky-400 h-2 rounded-full' style={{ width: '70%' }}></div>
              </div>
            </div>

            {/* Database */}
            <div className='gradient p-6 rounded-sm flex flex-col justify-between'>
              <h4 className='mb-1 text-lg font-medium text-white'>Database</h4>
              <p className='py-4 text-gray-400 text-sm'>I connected database to backend, created database via docker, wrote sql and no-sql queries to database, used orm to connect to database.</p>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div className='bg-sky-400 h-2 rounded-full' style={{ width: '80%' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Секция Why choose me */}
      <section className="w-full h-full pt-20 pb-20">
        <div className="w-2/3 mx-auto">
          <motion.h3
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={fadeDown.transition}
            className="text-[2vw] font-semibold mb-10 text-black dark:text-white"
          >
            Why choose me
          </motion.h3>

          <motion.div
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={fadeDown.transition}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {/* Надёжность */}
            <div className="gradient p-6 rounded-sm flex flex-col justify-between items-center">
              <h4 className="mb-2 text-2xl font-medium text-white">Reliable</h4>
              <PyramidModel/>
              <p className="py-4 text-gray-400 text-sm">
                I meet deadlines, write clean and maintainable code, and always test before deploying.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-sky-400 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            {/* Коммуникация */}
            <div className="gradient p-6 rounded-sm flex flex-col justify-between items-center">
              <h4 className="mb-2 text-2xl font-medium text-white">Communicative</h4>
              <BioModel />
              <p className="py-4 text-gray-400 text-sm">
                I maintain clear communication with clients and teams using modern collaboration tools.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-sky-400 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Постоянное развитие */}
            <div className="gradient p-6 rounded-sm flex flex-col justify-between items-center">
              <h4 className="mb-2 text-2xl font-medium text-white">Always Learning</h4>
              <DodecahedronModel/>
              <p className="py-4 text-gray-400 text-sm">
                I stay up to date with the latest technologies, frameworks, and best practices.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-sky-400 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



    </main>
  )
}

export default Home
