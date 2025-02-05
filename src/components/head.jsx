import React from 'react';
import Logo from './head/logo';
import navTabs from './navTabs';
import HorizontalLine from './utils/HorizontalLine';
import Navbar from './utils/navbar';
function Head() {

    return(
        <div className='flex flex-col'>
            <div className='flex flex-row relative max-w-full justify-between items-center bg-black z-10'>
                <div className='max-w-80 mx-2'><Logo /></div>
                <div className='lg:w-5/6 px-5 order-first lg:order-none'><Navbar navTabs={navTabs}/></div>
            </div>
            {/* <div className='w-full h-1px bg-'></div> */}
            <HorizontalLine color='blue' opacity={100} width='100%' marginBottom='' marginTop=''/>
        </div>
    )
}

export default Head