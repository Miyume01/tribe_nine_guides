import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import HorizontalLine from '../utils/HorizontalLine';
import MameezeZyzz from './enemies_gifs/Mameeze_Zyzz.png';
import MameezeJump from './enemies_gifs/webp/Mameeze_jump_NORMAL.webp';
import MameezeSpin from './enemies_gifs/webp/Mameeze_spin.webp';
import MameezeSpinParry from './enemies_gifs/webp/Mameeze_spin_parry_NORMAL2.webp';
import MameezeTripleJumpEX from './enemies_gifs/webp/Mameeze_Triple_Jump.webp';

function Mameeze() {

  const NonTensionAtks = [
      {
        enemyAtk: 'Jump',
        tensionEx: false,
        imgSrc: MameezeJump,
        imgAlt: 'Mameeze Jump',
        description: []
      },
      {
        enemyAtk: 'Zyzz posing ✨',
        tensionEx: false,
        imgSrc: MameezeZyzz,
        imgAlt: 'Mameeze Zyzz',
        description: []
      },
      {
        enemyAtk: 'Spin',
        tensionEx: false,
        imgSrc: MameezeSpin,
        imgAlt: 'Mameeze Spin',
        centerText: true,
        description: [
          {text: 'If the spin is deflected, all consecutive spin attacks will be followed by a jump.', boldText: true, underlineText: true}
        ]
      },
      {
        enemyAtk: '',
        tensionEx: false,
        imgSrc: MameezeSpinParry,
        imgAlt: 'Mameeze Spin Parry',
      },
    ];

    const TensionAtks = [
        {
          enemyAtk: 'Triple Jump',
          tensionEx: true,
          center: true,
          imgSrc: MameezeTripleJumpEX,
          imgAlt: 'Mameeze Triple Jump EX',
          description: [
            {text: 'Single Jumps become Triple Jumps.', normalText: true},
          ]
        },
      ];

  return (
    <div className='flex flex-col flex-wrap max-h-full w-full pb-5 items-center justify-start text-white'>
        <H1Heading enemyName='Mameeze'/>
        <HorizontalLine />
        
        <Grid gridBlocks={NonTensionAtks}/>

        <Grid gridBlocks={TensionAtks} />
    </div>
  )
}

export default Mameeze