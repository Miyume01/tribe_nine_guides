import React from 'react';
import Logo from './head/logo';
import navTabs from './navTabs';
import HorizontalLine from './utils/HorizontalLine';
import Navbar from './utils/navbar';
function Head() {

    return(
        <div className='fixed top-0 left-0 w-full z-30'>
            <div className='flex flex-col relative w-full'>
                <div className='flex flex-row relative max-h-36 w-full justify-between items-center bg-black'>
                    <div className='max-w-64 ml-2 md:ml-6 mx-2 h-16 flex'><Logo /></div>
                    <div className='xl:w-[80%] max-xl:px-4 xl:order-none overflow-hidden'><Navbar navTabs={navTabs}/></div>
                </div>
                <HorizontalLine color='blue' opacity={100} width='100%' marginBottom='' marginTop='' height='4.6px'/>
            </div>
        </div>
    )
}

export default Head