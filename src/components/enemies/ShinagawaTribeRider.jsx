import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import HorizontalLine from '../utils/HorizontalLine';
import RiderCharge from './enemies_gifs/Rider_charge_NORMAL.gif';
import RiderFart from './enemies_gifs/Rider_fart_NORMAL.gif';
import RiderJumpEX from './enemies_gifs/Rider_jump_EX.gif';
function ShinagawaTribeRider() {

  const NonTensionAtks = [
          {
            enemyAtk: 'Charge',
            tensionEx: false,
            imgSrc: RiderCharge,
            imgAlt: 'Rider Charge',
            description: []
          },
          {
            enemyAtk: 'Gas (Fart)',
            tensionEx: false,
            imgSrc: RiderFart,
            imgAlt: 'Rider Fart',
            description: []
          },
        ];
  const TensionAtks = [
          {
            enemyAtk: 'Jump',
            tensionEx: true,
            center: true,
            imgSrc: RiderJumpEX,
            imgAlt: 'Rider Jump EX',
            description: []
          },
        ];

  return (
    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
        <H1Heading enemyName='Shinagawa tribe (Rider)' />
        <HorizontalLine />

        <Grid gridBlocks={NonTensionAtks} />

        <Grid gridBlocks={TensionAtks} />
    </div>
  )
}

export default ShinagawaTribeRider