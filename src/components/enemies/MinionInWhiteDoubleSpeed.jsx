import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import HorizontalLine from '../utils/HorizontalLine';
import MinionDoubleAndJumpEX from './enemies_gifs/webp/Minion_double_and_jump_EX.webp';
import MinionDoubleSwing from './enemies_gifs/webp/Minion_double_NORMAL.webp';
import MinionStandaloneJumpEX from './enemies_gifs/webp/Minion_standalone_jump_EX.webp';

function MinionInWhiteDoubleSpeed() {
  
  const NonTensionAtks = [
          {
            enemyAtk: 'Double Swing',
            tensionEx: false,
            center:true,
            imgSrc: MinionDoubleSwing,
            imgAlt: 'Minion Double Swing',
            description: []
          },
        ];
  const TensionAtks = [
          {
            enemyAtk: 'Standalone Jump',
            tensionEx: true,
            imgSrc: MinionStandaloneJumpEX,
            imgAlt: 'Minion Standalone Jump EX',
            description: []
          },
          {
            enemyAtk: 'Double Swing & Jump',
            tensionEx: false,
            imgSrc: MinionDoubleAndJumpEX,
            imgAlt: 'Minion Double and Jump EX',
            description: []
          },
        ];

  return (
    <div className='flex flex-col flex-wrap max-h-full w-full pb-5 items-center justify-start text-white'>
        <H1Heading enemyName='Minion in White (Double Speed)' />
        <HorizontalLine />

        <Grid gridBlocks={NonTensionAtks} />
        
        <Grid gridBlocks={TensionAtks} />

    </div>
  )
}

export default MinionInWhiteDoubleSpeed