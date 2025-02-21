import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import HorizontalLine from '../utils/HorizontalLine';
import HammerSlam from './enemies_gifs/webp/Hammer_slam_NORMAL.webp';
import HammerTripleEX from './enemies_gifs/webp/Hammer_triple_EX.webp';

function ShinagawaTribeHammer() {

  const NonTensionAtks = [
          {
            enemyAtk: 'Hammer Slam',
            tensionEx: false,
            imgSrc: HammerSlam,
            imgAlt: 'Hammer Slam',
            description: []
          },
          {
            enemyAtk: 'Triple Spin',
            tensionEx: true,
            imgSrc: HammerTripleEX,
            imgAlt: 'Hammer Triple EX',
            description: []
          },
        ];

  return (
    <div className='flex flex-col flex-wrap max-h-full w-full pb-5 items-center justify-start text-white'>
      <H1Heading enemyName='Shinagawa tribe (Hammer)' />
      <HorizontalLine />

      <Grid gridBlocks={NonTensionAtks} />
    </div>
  )
}

export default ShinagawaTribeHammer