import React from 'react';

const SidebarComponent = () => {
  return (
    <div className='sidebar flex-col'>
        <ul className='flex-col justify-center items-center text-sm w-20 md:text-md md:w-60 border-2 rounded-xl'>
          <li className='flex justify-center items-center h-10 hover:bg-stone-300 border-b-2 truncate cursor-pointer'>Mate 60 Pro</li>
          <li className='flex justify-center items-center h-10 hover:bg-stone-300 border-b-2 truncate cursor-pointer'>Mate 50</li>
          <li className='flex justify-center items-center h-10 hover:bg-stone-300 border-b-2 truncate cursor-pointer'>Mate 40</li>
          <li className='flex justify-center items-center h-10 hover:bg-stone-300 border-b-2 truncate cursor-pointer'>Mate X3</li>
          <li className='flex justify-center items-center h-10 hover:bg-stone-300 border-b-2 truncate cursor-pointer'>Mate 40 Pro</li>
          <li className='flex justify-center items-center h-10 hover:bg-stone-300 border-b-2 truncate cursor-pointer'>Mate 40 Pro+</li>
          <li className='flex justify-center items-center h-10 hover:bg-stone-300 border-b-2 truncate cursor-pointer'>Mate 40 RS</li>
          <li className='flex justify-center items-center h-10 hover:bg-stone-300 border-b-2 truncate cursor-pointer'>Mate 40 RS Pro</li>
          <li className='flex justify-center items-center h-10 hover:bg-stone-300 border-b-2 truncate cursor-pointer'>Mate 40 RS Pro+</li>
        </ul>
    </div>
  );
};

export default SidebarComponent;