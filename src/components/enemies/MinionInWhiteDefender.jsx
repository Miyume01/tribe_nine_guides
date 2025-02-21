import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import HorizontalLine from '../utils/HorizontalLine';
import ShielderBatSwing from './enemies_gifs/webp/Shielder_bat_swing.webp';
import ShielderDoubleBashEX from './enemies_gifs/webp/Shielder_double_bash_EX.webp';
import ShielderShieldBash from './enemies_gifs/webp/Shielder_double_bash_NORMAL.webp';

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
              tensionEx: true,
              center: true,
              imgSrc: ShielderDoubleBashEX,
              imgAlt: 'Shielder Double Bash EX',
              description: [
                {text: 'Will only do ', normalText: true, underlineText: true},
                {text: 'this ', boldText: true, underlineText: true},
                {text: 'attack in ', normalText: true, underlineText: true},
                {text: 'EX ', tensionText: true, semiBoldText: true, underlineText: true},
                {text: 'mode.', normalText: true, semiBoldText: true, underlineText: true},
              ]
            },
          ];

  return (
    <div className='flex flex-col flex-wrap max-h-full w-full pb-5 items-center justify-start text-white'>
        <H1Heading enemyName='Minion in White (Defender)'/>
        <HorizontalLine />

        <Grid gridBlocks={NonTensionAtks} />

        <Grid gridBlocks={TensionAtks} />
    </div>
  )
}

export default MinionInWhiteDefender