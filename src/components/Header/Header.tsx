import React from 'react'

const Header: React.FC = () => {
  return (
    <div className='w-full h-40'>
        <div className='w-8/9 mx-auto py-8 flex justify-between items-center'>
        <h2 className='text-3xl font-bold'>Mirceya</h2>
        <nav>
            <ul className='flex gap-6'>
                <li className='text-lg after:duration-300 relative after:absolute after:h-0.5 after:bottom-[-6px] after:right-0 after:w-0 hover:after:w-full after:bg-white cursor-pointer'>Home</li>
                <li className='text-lg after:duration-300 relative after:absolute after:h-0.5 after:bottom-[-6px] after:right-0 after:w-0 hover:after:w-full after:bg-white cursor-pointer'>About</li>
                <li className='text-lg after:duration-300 relative after:absolute after:h-0.5 after:bottom-[-6px] after:right-0 after:w-0 hover:after:w-full after:bg-white cursor-pointer'>Projects</li>
                <li className='text-lg after:duration-300 relative after:absolute after:h-0.5 after:bottom-[-6px] after:right-0 after:w-0 hover:after:w-full after:bg-white cursor-pointer'>Contact</li>
            </ul>
        </nav>
        </div>
    </div>
  )
}

export default Header;
