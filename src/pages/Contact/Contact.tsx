// src/pages/Contact.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeDown } from '../../animation/animation';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы, например fetch или emailjs
    console.log(formData);
  };

  return (
    <main className="bg-white dark:bg-black min-h-screen">
      <section className="w-full h-[900px] gradient pt-10 border-y-2 overflow-hidden ">
        <div className="w-11/12 md:w-3/5 mx-auto flex flex-col items-center gap-12">
          <motion.div
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={fadeDown.transition}
            className="text-white w-full"
          >
            <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
            <p className="text-gray-300 text-center mb-10">
              If you’d like to work together or just say hi, feel free to reach out using the form below.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid gap-6 bg-white/10 p-8 rounded-xl border backdrop-blur-sm shadow-lg"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="p-3 rounded-md bg-white/20 text-white border border-gray-300 focus:outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="p-3 rounded-md bg-white/20 text-white border border-gray-300 focus:outline-none"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-300">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="p-3 rounded-md bg-white/20 text-white border border-gray-300 focus:outline-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
