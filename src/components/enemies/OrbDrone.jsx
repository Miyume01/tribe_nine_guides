import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import HorizontalLine from '../utils/HorizontalLine';
import TripleOrbs from './enemies_gifs/orbEXclosedodge-ezgif.com-video-to-gif-converter.gif';
import BulletHell from './enemies_gifs/orbsnonEXdodge-ezgif.com-video-to-gif-converter.gif';

function OrbDrone() {

    const NonTensionAtks = [
      {
        enemyAtk: 'Triple Orbs',
        tensionEx: false,
        imgSrc: TripleOrbs,
        imgAlt: 'Triple Orbs',
        description: []
      },
      {
        enemyAtk: 'Bullet Hell',
        tensionEx: true,
        imgSrc: BulletHell,
        imgAlt: 'Bullet Hell',
        description: [
          {text: 'Will only do ', normalText: true, underlineText: true},
          {text: 'this ', boldText: true, underlineText: true},
          {text: 'attack in ', normalText: true, underlineText: true},
          {text: 'EX ', tensionText: true, semiBoldText: true, underlineText: true},
          {text: 'mode.', normalText: true, semiBoldText: true, underlineText: true},
        ]
      },
    ]
  return (

    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
      <H1Heading enemyName='The Orb Drone'/>
      <HorizontalLine />

      <Grid gridBlocks={NonTensionAtks} />
  
    </div>
  )
}
export default OrbDrone