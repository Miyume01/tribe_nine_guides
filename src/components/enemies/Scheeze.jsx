import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import HorizontalLine from '../utils/HorizontalLine';
import ScheezeBump from './enemies_gifs/Scheeze_bump.gif';
import ScheezeCharge from './enemies_gifs/Scheeze_charge_NORMAL.gif';

function Scheeze() {

  const NonTensionAtks = [
        {
          enemyAtk: 'Charge',
          tensionEx: false,
          imgSrc: ScheezeCharge,
          imgAlt: 'Scheeze Charge',
          description: []
        },
        {
          enemyAtk: 'Bump',
          tensionEx: false,
          imgSrc: ScheezeBump,
          imgAlt: 'Scheeze Bump',
          description: [
            {text: 'Attacks in tension EX do not change', tensionText: true, underlineText: true},
          ]
        },
      ];

  return (
    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
        <H1Heading enemyName='Scheeze' />
        <HorizontalLine />

        <Grid gridBlocks={NonTensionAtks}/>
    </div>
  )
}

export default Scheeze