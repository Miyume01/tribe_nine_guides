import React from 'react';
import H2Heading from '../components/utils/H2Heading';
import ImageWithModal from '../components/utils/ImageWithModal';
import FubukiClap from "./Fubuki_clap.gif";

function Homepage() {
  return (
    <div className='flex flex-col flex-wrap h-full w-[80%] pb-5 items-center justify-start text-white
      bg-middle-background'>
      <div className='mt-10 mb-5'>
        <H2Heading enemyAttack = 'Good luck and have fun.'/>
      </div>
      <ImageWithModal src={FubukiClap} alt='gif of Fubuki Clapping' />
    </div>
  )
}

export default Homepage