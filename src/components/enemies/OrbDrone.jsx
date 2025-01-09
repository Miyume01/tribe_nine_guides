import React from 'react';
import ImageWithModal from '../utils/ImageWithModal';
import TripleOrbs from './enemies_gifs/orbEXclosedodge-ezgif.com-video-to-gif-converter.gif';
import BulletHell from './enemies_gifs/orbsnonEXdodge-ezgif.com-video-to-gif-converter.gif';

function OrbDrone() {
  return (
    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
        <h2>The orb drone</h2>
        <div className="w-full h-[2px] bg-gray-500 mt-4 mx-auto opacity-50 md:mb-6">
        </div>
        <p>Triple Orbs</p>
        <ImageWithModal src={TripleOrbs} alt="Triple Orbs" />
        <p>Tension EX: Bullet Hell</p>
        <ImageWithModal src={BulletHell} alt="Bullet Hell" />
        <p>Will only do this attack in EX mode.</p>
    </div>
  )
}

export default OrbDrone