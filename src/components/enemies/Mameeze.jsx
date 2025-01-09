import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import H2Heading from '../utils/H2Heading';
import HorizontalLine from '../utils/HorizontalLine';
import MameezeJump from './enemies_gifs/Mameeze_jump_NORMAL.gif';
import MameezeSpin from './enemies_gifs/Mameeze_spin.gif';
import MameezeTripleJumpEX from './enemies_gifs/Mameeze_Triple_Jump.gif';
import MameezeZyzz from './enemies_gifs/Mameeze_Zyzz.png';

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
        description: [
          {text: 'If this attack is deflected, all consecutive spin attacks will be followed by a jump.', normalText: true, underlineText: true},
        ]
      },
    ];

    const TensionAtks = [
        {
          enemyAtk: 'Triple Jump',
          tensionEx: false,
          imgSrc: MameezeTripleJumpEX,
          imgAlt: 'Mameeze Triple Jump EX',
          description: [
            {text: 'Single Jumps become Triple Jumps.', normalText: true},
          ]
        },
      ];

  return (
    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
        <H1Heading enemyName='Mameeze'/>
        <HorizontalLine />
        
        <Grid gridBlocks={NonTensionAtks}/>

        <HorizontalLine />
        <H2Heading enemyAttack='Tension Ex:' tensionEx='true'/>

        <Grid gridBlocks={TensionAtks} />
    </div>
  )
}

export default Mameeze