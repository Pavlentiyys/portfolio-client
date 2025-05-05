import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { MdOutlineDarkMode } from "react-icons/md";
import { FaRegSun } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Эта функция будет вызываться при клике
  const handleClick = () => {
    console.log('--- Theme Toggle Clicked ---'); // <-- Проверяем, был ли клик
    console.log('Current theme before toggle:', theme); // <-- Проверяем текущую тему перед переключением
    toggleTheme(); // Вызываем функцию переключения
  };

  return (
    <button
      onClick={handleClick} // <-- Используйте handleClick здесь
      className="py-2 px-3 rounded border-2 border-gray-800 dark:border-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white duration-200"
    >
      {theme === 'light' ? 
      <>
        <MdOutlineDarkMode className='text-[30px] text-black cursor-pointer hover:text-white'/>
      </> : 
      <>
        <FaRegSun className='text-[30px] text-white cursor-pointer hover:text-black'/>
      </>}
    </button>
  );
};

export default ThemeToggle;