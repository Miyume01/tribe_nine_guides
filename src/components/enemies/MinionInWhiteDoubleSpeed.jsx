import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import H2Heading from '../utils/H2Heading';
import HorizontalLine from '../utils/HorizontalLine';
import MinionDoubleAndJumpEX from './enemies_gifs/Minion_double_and_jump_EX.gif';
import MinionDoubleSwing from './enemies_gifs/Minion_double_NORMAL.gif';
import MinionStandaloneJumpEX from './enemies_gifs/Minion_standalone_jump_EX.gif';

function MinionInWhiteDoubleSpeed() {
  
  const NonTensionAtks = [
          {
            enemyAtk: 'Double Swing',
            tensionEx: false,
            imgSrc: MinionDoubleSwing,
            imgAlt: 'Minion Double Swing',
            description: []
          },
        ];
  const TensionAtks = [
          {
            enemyAtk: 'Standalone Jump',
            tensionEx: false,
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
    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
        <H1Heading enemyName='Minion in White (Double Speed)' />
        <HorizontalLine />

        <Grid gridBlocks={NonTensionAtks} />

        <HorizontalLine />
        <H2Heading enemyAttack='Tension Ex:' tensionEx='true' />
        <Grid gridBlocks={TensionAtks} />

    </div>
  )
}

export default MinionInWhiteDoubleSpeed