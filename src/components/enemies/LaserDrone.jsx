import React from 'react';
import ImageWithModal from '../utils/ImageWithModal';
import LaserAttack from './enemies_gifs/Laser_laser_NORMAL.gif';
import LaserTripleEX from './enemies_gifs/Laser_triple_laser_EX.gif';

function LaserDrone() {
  return (
    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
        <h2>The laser drone</h2>
        <div className="w-full h-[2px] bg-gray-500 mt-4 mx-auto opacity-50 md:mb-6">
        </div>
        <p>Laser Attack</p>
        <ImageWithModal src={LaserAttack} alt="Laser Attack" />
        <p>Tension EX: Triple Lasers</p>
        <ImageWithModal src={LaserTripleEX} alt="Laser Triple EX" />
        <p>Will only do this attack in EX mode.</p>
    </div>
  )
}

export default LaserDrone