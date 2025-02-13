import React from 'react';
import Logo from './head/logo';
import navTabs from './navTabs';
import HorizontalLine from './utils/HorizontalLine';
import Navbar from './utils/navbar';
function Head() {

    return(
        <div className='flex flex-col'>
            <div className='flex flex-row relative max-h-36 max-w-full justify-between items-center bg-black z-10'>
                <div className='max-w-64 ml-6 mx-2 h-16 flex'><Logo /></div>
                <div className='lg:w-5/6 px-5 lg:order-none overflow-hidden'><Navbar navTabs={navTabs}/></div>
            </div>
            <HorizontalLine color='blue' opacity={100} width='100%' marginBottom='' marginTop='' height='4.6px'/>
        </div>
    )
}

export default Head