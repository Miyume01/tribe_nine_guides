import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import HorizontalLine from '../utils/HorizontalLine';
import BatterBatSwing from './enemies_gifs/webp/Batter_bat_swing_NORMAL.webp';
import BatterEX from './enemies_gifs/webp/Batter_EX.webp';
import BatterKick from './enemies_gifs/webp/Batter_kick_NORMAL.webp';

function ShinagawaTribeBatter() {

  const NonTensionAtks = [
          {
            enemyAtk: 'Kick',
            tensionEx: false,
            imgSrc: BatterKick,
            imgAlt: 'Batter Kick',
            description: []
          },
          {
            enemyAtk: 'Bat Swing',
            tensionEx: false,
            imgSrc: BatterBatSwing,
            imgAlt: 'Batter Bat Swing',
            description: []
          },
        ];
  const TensionAtks = [
          {
            enemyAtk: 'Triple Swing',
            tensionEx: true,
            center: true,
            imgSrc: BatterEX,
            imgAlt: 'Batter EX',
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
        <H1Heading enemyName='Shinagawa tribe (Batter)' />
        <HorizontalLine />

        <Grid gridBlocks={NonTensionAtks} />

        <Grid gridBlocks={TensionAtks} />

        {/* <p>Will only do this attack in EX mode.</p>  what do you mean by this?
        like if there's a tension atk with no this, they will do this atk out of tension as well?*/}
    </div>
  )
}

export default ShinagawaTribeBatter