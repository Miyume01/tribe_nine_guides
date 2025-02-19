import React from 'react';
import FubukiClap from "./Fubuki_clap.gif";
import H1Heading from './utils/H1Heading';

function Homepage() {
  return (
    <div className='flex flex-col flex-wrap max-h-full w-full mobile:w-[80%] md:w-[70%] pb-5 items-center justify-start text-white
      mobile:bg-black mobile:bg-opacity-50 mobile:round-tl-br'>
        <div className='md:mt-4'><H1Heading enemyName = 'Good luck and have fun.' center='true'/></div>
      <img src={FubukiClap} alt='gif of Fubuki Clapping' className='h-[317px] w-[269px] md:h-[634px] md:w-[538px] mt-4'/>
    </div>
  )
}

export default Homepage