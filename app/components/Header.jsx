import React from 'react';

const Header = () => (
    <header className='flex justify-between items-center text-orange-600 font-medium px-2 lg:px-6  bg-white'>

    <a href='#' className='text-xl text-red-500'>
    <img className=" h-16 w-auto" src="/img/logo.png" alt=""/>
    </a>

    <nav className='hidden md:flex p-5'>
      <ul className='flex md:space-x-4 lg:space-x-10 xl:space-x-20'>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>Bicycle Tours</a></li>
        <li><a href='/'>Bicycle Rental</a></li>
        <li><a href='/'>Pikala Cafe</a></li>
      </ul>
    </nav>
  
  </header>
);
export default Header;