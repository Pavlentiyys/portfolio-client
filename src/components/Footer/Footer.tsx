import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 border-t border-black dark:border-white bg-white dark:bg-black py-8">
      <div className="w-2/3 mx-auto flex flex-col items-center gap-4">
        <h3 className="text-[2vw] font-semibold text-black dark:text-white">🔗 Let's Connect</h3>
        
        <div className="flex gap-6 text-black dark:text-white">
          <a href="https://github.com/Pavlentiyys" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 flex items-center gap-2">
            <FaGithub className="text-3xl" />
            <span>Pavlentiyys</span>
          </a>
          <a href="https://www.linkedin.com/in/pavel-pichugin-765b7530b/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 flex items-center gap-2">
            <FaLinkedin className="text-3xl" />
            <span>Pavel Pichugin</span>
          </a>
          <a href="mailto:pashpichug@mail.ru" className="hover:text-sky-400 flex items-center gap-2">
            <FaEnvelope className="text-3xl" />
            <span>pashpichug@mail.ru</span>
          </a>
        </div>

        <p className="mt-6 text-center text-[1vw] text-black dark:text-white">© {new Date().getFullYear()} Pavel Pichugin. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
