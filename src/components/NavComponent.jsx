import React from 'react';

const NavComponent = () => {
  return (
    <nav className="flex justify-between items-center bg-[#f1efef] h-20 border-b-1 border-gray-300 box-border-none pl-2 pr-2 mb-14 md:mb-4 md:pl-20 md:pr-20">
        <div className="logo flex justify-start items-center ml-2 md:ml-4">
            <a href="/"><img className='w-14 h-14' src="https://via.placeholder.com/50" alt=""/></a>
            <span className='hidden md:flex ml-4'>数码看板</span>
        </div>
        <div className="search flex justify-start">
            <input type="text" placeholder=" 搜索" className="focus:outline-none sm:w-40 md:w-60 h-10 shadow-slate-100 rounded-sm" />
            <button className="flex text-white justify-center items-center w-14 h-10 bg-zinc-400 rounded border-1 border-green-400">搜索</button>
        </div>
        <div className="avatar flex justify-end items-center mr-2">
            <a href="/" className='profile hidden md:flex'>VVCHEN</a>
            <img className='w-14 h-14 rounded-full border-2 border-[#fff ] mx-1' src='https://via.placeholder.com/50' alt="头像" />
            <ul className='flex-col w-20 shadow-md bg-zinc-100 rounded-sm absolute right-2 top-20 md:right-20 hidden'>
                <li className='w-20 h-10 flex justify-center items-center hover:bg-zinc-200 cursor-pointer'>主页</li>
                <li className='w-20 h-10 flex justify-center items-center hover:bg-zinc-200 cursor-pointer'>退出</li>
            </ul>
        </div>
    </nav>
  );
};

export default NavComponent;