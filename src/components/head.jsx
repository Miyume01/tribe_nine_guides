import React from 'react';
import Logo from './head/logo';
import navTabs from './navTabs';
import Navbar from './utils/navbar';
function Head() {

    return(
        <div className='flex flex-row relative max-w-full justify-between items-center bg-black z-10'>
            <div className='max-w-60 px-5 ml-10 py-2'><Logo /></div>
            <div className='md:w-5/6 px-5 order-first md:order-none'><Navbar navTabs={navTabs}/></div>
        </div>
    )
}

export default Head