import React from 'react';
import { motion } from 'framer-motion';
import { fadeDown } from '../../animation/animation';

const About: React.FC = () => {
  return (
    <main className='bg-white dark:bg-black'>

      <section className='w-full relative min-h-[600px] gradient pt-10 border-y-2 overflow-hidden'>
        <div className='w-11/12 md:w-4/5 mx-auto flex flex-col lg:flex-row justify-center items-center gap-12'>
          <motion.div 
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={fadeDown.transition}
            className='lg:w-2/3 text-white'
          >
            <h2 className='text-4xl font-bold mb-6 text-center'>About Me</h2>
            <div className="grid gap-6">
              <div className="flex border p-6 rounded-lg backdrop-blur-sm shadow-md">
                <p className="text-gray-300 text-lg">
                  I'm <span className="text-white font-semibold">Pavel Pichugin</span>, a Computer Science student at <span className="text-white font-semibold">Toraighyrov University</span> in Pavlodar, Kazakhstan. I’m passionate about how systems work and how software can change the world.
                </p>
              </div>
              <div className="border p-6 rounded-lg backdrop-blur-sm shadow-md">
                <p className="text-gray-300 text-lg">
                  I’m interested in <span className="text-white">Frontend</span>, <span className="text-white">Backend</span>, <span className="text-white">Mobile Development</span>, and <span className="text-white">DevOps</span> — everything that builds the foundation of great digital products.
                </p>
              </div>
              <div className="border p-6 rounded-lg backdrop-blur-sm shadow-md">
                <p className="text-gray-300 text-lg">
                  My ambition is to become a highly skilled software engineer and retire by the age of 30 by creating useful, scalable, and profitable projects.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
      
      {/* Interests */}
      <section className="w-full py-20 border-y-2">
        <div className="w-2/3 mx-auto">
          <motion.h3
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={fadeDown.transition}
            className="text-[2vw] font-semibold mb-10 text-black dark:text-white"
          >
            Interests
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[1vw]">
            <div className="gradient p-5 rounded-xl border border-white shadow-lg w-full">
              <h4 className="text-lg font-semibold text-white mb-2">Frontend Development</h4>
              <p className="text-gray-300">Building engaging and responsive user interfaces using React and modern UI tools.</p>
            </div>

            <div className="gradient p-5 rounded-xl border border-white shadow-lg w-full">
              <h4 className="text-lg font-semibold text-white mb-2">Backend Development</h4>
              <p className="text-gray-300">Designing scalable server-side logic and APIs using Node.js and databases like PostgreSQL.</p>
            </div>

            <div className="gradient p-5 rounded-xl border border-white shadow-lg w-full">
              <h4 className="text-lg font-semibold text-white mb-2">DevOps</h4>
              <p className="text-gray-300">Automating deployments, containerizing apps with Docker, and setting up CI/CD pipelines.</p>
            </div>

            <div className="gradient p-5 rounded-xl border border-white shadow-lg w-full">
              <h4 className="text-lg font-semibold text-white mb-2">Mobile Development</h4>
              <p className="text-gray-300">Creating cross-platform mobile applications using frameworks like React Native or Flutter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section className="w-full py-14 gradient border-y">
        <div className="w-2/3 mx-auto">
          <motion.h3
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={fadeDown.transition}
            className="text-[2vw] font-semibold mb-10 text-white"
          >
            Hobbies
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-[300px] gap-6 text-[1vw]">
            <div className="gradient flex flex-col gap-10 p-5 rounded-xl border border-white shadow-lg">
              <h4 className="text-3xl font-semibold text-white mb-2 ">🎮 Gaming</h4>
              <p className="text-gray-300">I enjoy playing video games in my free time — it helps me unwind, compete, and explore new worlds.</p>
          </div>

            <div className="gradient flex flex-col gap-10 p-5 rounded-xl border border-white shadow-lg">
              <h4 className="text-3xl font-semibold text-white mb-2">👨‍💻 Coding</h4>
              <p className="text-gray-300">Building things with code is not just my profession but also a passion. I love experimenting with new tech and frameworks.</p>
            </div>

            <div className="gradient flex flex-col gap-10 p-5 rounded-xl border border-white shadow-lg">
              <h4 className="text-3xl font-semibold text-white mb-2">🍥 Anime</h4>
              <p className="text-gray-300">Anime is my go-to for storytelling, style, and inspiration. It's more than entertainment — it's a whole world.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Goals */}
      {/* Professional Goals */}
      <section className="w-full py-14">
        <div className="w-2/3 mx-auto">
          <motion.h3
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={fadeDown.transition}
            className="text-[2vw] font-semibold mb-6 text-black dark:text-white"
          >
            🎯 Professional Goals
          </motion.h3>

          <div className="gradient p-6 rounded-xl border border-white shadow-lg">
            <p className="text-gray-300 text-[1vw] leading-relaxed">
              My ultimate goal is to become a highly-skilled and independent software engineer capable of building scalable, impactful, and innovative digital solutions across web, mobile, and cloud platforms. I aim to gain enough experience and financial freedom to retire by the age of 30 and focus on passion projects, mentoring, and contributing to open-source. For me, success means flexibility, creativity, and meaningful impact — not just titles or salaries.
            </p>
          </div>
        </div>
      </section>


    </main>
  );
};

export default About;
