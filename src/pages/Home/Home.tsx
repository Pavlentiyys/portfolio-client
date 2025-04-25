import React from 'react';
import authorImg from "../../assets/author.png";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { fadeDown } from '../../animation/animation';
import logos from '../../assets/data/logos.json';




const Home: React.FC = () => {
  return (
    <main>
      <section className='w-full h-full gradient pt-10 border-y-2'>
      
        <div className='w-2/3 mx-auto flex justify-between'>  
          <motion.div 
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={fadeDown.transition}
            className='w-full h- flex flex-col justify-start gap-20'>
            <div className='mt-8'>
              <p>&gt; Frontend</p>
              <p>&gt; Backend</p>
              <p>&gt; Web-design</p>
            </div>
            <div>
              <h2 className='text-[2.3vw] font-bold'>
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
              <h3 className='text-[2.15vw] font-bold'>Portfolio-site</h3>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={fadeDown.transition}
            className=''>
            <img className='rounded-xl w-[1000px] h-auto' src={authorImg} alt="Pavel Pichugin" />
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
              <h4 className='mb-1 text-lg font-medium'>
                Frontend
              </h4>
              <p className='py-4 text-gray-400 text-sm'>I layout the site, worked out the logic, connected frontend to api, developed forms with validation, used redux to store global states.</p>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div className='bg-sky-400 h-2 rounded-full' style={{ width: '90%' }}></div>
                </div>
              
            </div>

            {/* Backend */}
            <div className='gradient p-6 rounded-sm flex flex-col justify-between'>
              <h4 className='mb-1 text-lg font-medium'>Backend</h4>
              <p className='py-4 text-gray-400 text-sm'>Developed APIs, designed structure, wrote documentation, connected backend to database, created microservices using message brokers.</p>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div className='bg-sky-400 h-2 rounded-full' style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Design */}
            <div className='gradient p-6 rounded-sm flex flex-col justify-between'>
              <h4 className='mb-1 text-lg font-medium'>Web-Design</h4>
              <p className='py-4 text-gray-400 text-sm'>Created design mockups in figma, worked out roadmap layout for apps, created custom icons, and developed responsive design for mobile devices, tablets, laptops, and large screens.</p>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div className='bg-sky-400 h-2 rounded-full' style={{ width: '70%' }}></div>
              </div>
            </div>

            {/* Database */}
            <div className='gradient p-6 rounded-sm flex flex-col justify-between'>
              <h4 className='mb-1 text-lg font-medium'>Database</h4>
              <p className='py-4 text-gray-400 text-sm'>I connected database to backend, created database via docker, wrote sql and no-sql queries to database, used orm to connect to database.</p>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div className='bg-sky-400 h-2 rounded-full' style={{ width: '80%' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Секция Experience */}
      <section className='w-full h-full pt-10'>
        <div className='w-2/3 mx-auto'>
          <h3 className='text-[2vw] font-semibold mb-6'>Experience</h3>
          <div className='flex justify-center gap-40'>
          <div className="relative">
            <div className="w-1 rounded-full bg-white absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0">
              {/* линия будет по центру */}
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col justify-between h-90 py-4">
              {/* круги по центру линии */}
              <div className="size-8 bg-white rounded-full m-8"></div>
              <div className="size-8 bg-white rounded-full m-8"></div>
              <div className="size-8 bg-white rounded-full m-8"></div>
            </div>
          </div>

            <div className='flex flex-col justify-between'>
              <div className='gradient p-8 m-4 rounded'>
                <h5>Higher College Innovative Eurasian University</h5>
              </div>
              <div className='gradient p-8 m-4 rounded'>
                <h5>Center Geron</h5>
              </div>
              <div className='gradient p-8 m-4 rounded'>
                <h5>Higher  Innovative Eurasian University</h5>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
