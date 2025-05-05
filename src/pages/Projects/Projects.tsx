// src/pages/Projects.tsx

import React, { useEffect, useState } from 'react';
import trainyAiImg from '../../assets/trainyai.jpeg';
import nexoraAiImg from '../../assets/nexoraAi.png';
import agendaAiImg from '../../assets/agendaAi.jpeg';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeDownClass = (delay = 0) => `
    transform transition-all duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}
    ${delay ? `delay-${delay}` : ''}
  `;

  const projects = [
    {
      name: 'Nexora AI',
      description:
        'An intelligent analytics platform that helps businesses automate workflows and make data-driven decisions. Powered by machine learning and scalable backend architecture.',
      image: nexoraAiImg,
    },
    {
      name: 'Agenda AI',
      description:
        'A smart scheduling assistant that uses AI to optimize your daily routine, prioritize tasks, and increase personal productivity with intuitive UX.',
      image: agendaAiImg,
    },
    {
      name: 'Trainy AI',
      description:
        'An AI-driven learning platform that creates personalized educational paths based on user preferences and learning pace. Ideal for self-learners and institutions.',
      image: trainyAiImg,
    },
  ];

  return (
    <main className="pb-10 bg-white dark:bg-black">
      {/* Introduction Section */}
      <section className="w-full relative min-h-[600px] gradient pt-10 border-y-2 overflow-hidden">
        <div className="w-11/12 md:w-4/5 mx-auto flex flex-col items-center gap-10 text-white">
          <div className={`text-center max-w-3xl ${fadeDownClass()}`}>
            <h2 className="text-4xl font-bold mb-4">💻 My Projects</h2>
            <p className="text-gray-300 text-lg mb-4">
              Here are some of the projects I've worked on — from AI-powered platforms to productivity tools.
            </p>
            <p className="text-gray-300 text-lg">
              Each project represents a challenge solved with modern technologies and clean architecture. Through these experiences, I've sharpened my skills in frontend, backend, and intelligent systems design.
            </p>
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="w-full py-20 border-t-2">
        <div className="w-11/12 md:w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md p-6 rounded-xl border border-gray-400 dark:border-white shadow-xl hover:scale-105 transition-transform duration-300 ${fadeDownClass(100)}`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-fit rounded-lg mb-4 border border-white"
              />
              <h4 className="text-xl font-semibold text-white mb-2">{project.name}</h4>
              <p className="text-black dark:text-gray-300 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
