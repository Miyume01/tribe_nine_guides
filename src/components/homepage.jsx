import React from 'react';
import H2Heading from '../components/utils/H2Heading';
import FubukiClap from "./Fubuki_clap.gif";
import FancyHeading from './utils/FancyHeading';

function Homepage() {
  return (
    <div className='flex flex-col flex-wrap h-full w-[80%] md:w-[70%] pb-5 items-center justify-start text-white
      bg-middle-background'>
        <FancyHeading text='Hello'/>
        <H2Heading enemyAttack = 'Good luck and have fun.' center='true'/>
      <img src={FubukiClap} alt='gif of Fubuki Clapping' className='h-[317px] w-[269] md:h-[634px] md:w-[538px]'/>
    </div>
  )
}

export default Homepage