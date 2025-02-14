import React from 'react';
import H2Heading from '../components/utils/H2Heading';
import FubukiClap from "./Fubuki_clap.gif";

function Homepage() {
  return (
    <div className='flex flex-col flex-wrap h-full w-[80%] md:w-[70%] pb-5 items-center justify-center text-white
      bg-black bg-opacity-50 round-tl-br'>
        <H2Heading enemyAttack = 'Good luck and have fun.' center='true'/>
      <img src={FubukiClap} alt='gif of Fubuki Clapping' className='h-[317px] w-[269px] md:h-[634px] md:w-[538px] mt-4'/>
    </div>
  )
}

export default Homepage