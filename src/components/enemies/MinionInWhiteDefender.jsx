import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import H2Heading from '../utils/H2Heading';
import HorizontalLine from '../utils/HorizontalLine';
import ShielderBatSwing from './enemies_gifs/Shielder_bat_swing.gif';
import ShielderDoubleBashEX from './enemies_gifs/Shielder_double_bash_EX.gif';
import ShielderShieldBash from './enemies_gifs/Shielder_double_bash_NORMAL.gif';

function MinionInWhiteDefender() {

    const NonTensionAtks = [
            {
              enemyAtk: 'Shield Bash',
              tensionEx: false,
              imgSrc: ShielderShieldBash,
              imgAlt: 'Shielder Shield Bash',
              description: []
            },
            {
              enemyAtk: 'Bat Swing',
              tensionEx: false,
              imgSrc: ShielderBatSwing,
              imgAlt: 'Shielder Bat Swing',
              description: []
            },
          ];
    const TensionAtks = [
            {
              enemyAtk: 'Double Shield Bash',
              tensionEx: false,
              imgSrc: ShielderDoubleBashEX,
              imgAlt: 'Shielder Double Bash EX',
              description: []
            },
          ];

  return (
    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
        <H1Heading enemyName='Minion in White (Defender)'/>
        <HorizontalLine />

        <Grid gridBlocks={NonTensionAtks} />

        <HorizontalLine />
        <H2Heading enemyAttack='Tension Ex:' tensionEx='true' />

        <Grid gridBlocks={TensionAtks} />
    </div>
  )
}

export default MinionInWhiteDefender