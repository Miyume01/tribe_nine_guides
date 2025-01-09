import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import H2Heading from '../utils/H2Heading';
import HorizontalLine from '../utils/HorizontalLine';
import HammerSlam from './enemies_gifs/Hammer_slam_NORMAL.gif';
import HammerTripleEX from './enemies_gifs/Hammer_triple_EX.gif';

function ShinagawaTribeHammer() {

  const NonTensionAtks = [
          {
            enemyAtk: 'Hammer Slam',
            tensionEx: false,
            imgSrc: HammerSlam,
            imgAlt: 'Hammer Slam',
            description: []
          },
        ];
  const TensionAtks = [
          {
            enemyAtk: 'Triple Spin',
            tensionEx: false,
            imgSrc: HammerTripleEX,
            imgAlt: 'BHammer Triple EX',
            description: []
          },
        ];

  return (
    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
      <H1Heading enemyName='Shinagawa tribe (Hammer)' />
      <HorizontalLine />

      <Grid gridBlocks={NonTensionAtks} />

      <HorizontalLine />
      <H2Heading enemyAttack='Tension Ex:' tensionEx='true' />
      
      <Grid gridBlocks={TensionAtks} />
    </div>
  )
}

export default ShinagawaTribeHammer