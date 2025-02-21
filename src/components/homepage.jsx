import React from 'react';
import FubukiClap from "./Fubuki_clap.gif";
import H1Heading from './utils/H1Heading';
import OldDescriptionBlock from './utils/OldDescriptionBlock';

function Homepage() {
  return (
    <div className='flex flex-col flex-wrap max-h-full w-full mobile:w-[80%] md:w-[70%] pb-5 items-center justify-start text-white
      mobile:bg-black mobile:bg-opacity-50 mobile:round-tl-br'>
        <div className='md:mt-4'><H1Heading enemyName = 'Hello and welcome' center='true'/></div>
        <OldDescriptionBlock descriptionParts={[
          {text: "This is a small website containing the data I've gathered and compiled to share with players in order to help them have a smoother experience in the game. Good luck and have fun.", normalText: true },
        ]} centerText='true' />
      <img src={FubukiClap} alt='gif of Fubuki Clapping' className='h-[317px] w-[269px] md:h-[634px] md:w-[538px] mt-4'/>
    </div>
  )
}

export default Homepage