import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import H2Heading from '../utils/H2Heading';
import HorizontalLine from '../utils/HorizontalLine';
import BatterBatSwing from './enemies_gifs/Batter_bat_swing_NORMAL.gif';
import BatterEX from './enemies_gifs/Batter_EX.gif';
import BatterKick from './enemies_gifs/Batter_kick_NORMAL.gif';

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
            tensionEx: false,
            imgSrc: BatterEX,
            imgAlt: 'Batter EX',
            description: []
          },
        ];

  return (
    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
        <H1Heading enemyName='Shinagawa tribe (Batter)' />
        <HorizontalLine />

        <Grid gridBlocks={NonTensionAtks} />

        <HorizontalLine />
        <H2Heading enemyAttack='Tension Ex:' tensionEx='true' />

        <Grid gridBlocks={TensionAtks} />

        {/* <p>Will only do this attack in EX mode.</p>  what do you mean by this?
        like if there's a tension atk with no this, they will do this atk out of tension as well?*/}
    </div>
  )
}

export default ShinagawaTribeBatter