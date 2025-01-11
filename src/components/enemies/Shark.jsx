import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import H2Heading from '../utils/H2Heading';
import HorizontalLine from '../utils/HorizontalLine';
import SharkWhirlpool from './enemies_gifs/Shark+whirlpool.gif';
import SharkDiveInOutParry from './enemies_gifs/Shark_dive_in-out_parry.gif';
import SharkDiveInOut from './enemies_gifs/Shark_dive_in_out2.gif';
import SharkFinAttack from './enemies_gifs/Shark_fin_attack.gif';
import SharkWaterLaser from './enemies_gifs/Shark_laser.gif';
import SharkTailSwipe from './enemies_gifs/Shark_tail_swipe_NORMAL.gif';
import SharkTornadoBombs from './enemies_gifs/Shark_Tornado_Bombs.gif';
import SharkTornadoBombsExplode from './enemies_gifs/Shark_Tornado_Bombs_explode.gif';
import SharkTripleBite from './enemies_gifs/Shark_triple_bite_NORMAL.gif';
import SharkWhirlpoolP3 from './enemies_gifs/Shark_whirlpool_p3.gif';

function Shark() {

    const NonTensionAtks = [
      {
        enemyAtk: 'Triple Bite',
        tensionEx: false,
        imgSrc: SharkTripleBite,
        imgAlt: 'Shark Triple Bite',
        description: []
      },
      {
        enemyAtk: 'Tail Swipe',
        tensionEx: false,
        imgSrc: SharkTailSwipe,
        imgAlt: 'Shark Tail Swipe',
        description: []
      },
      {
        enemyAtk: 'Water Laser',
        tensionEx: false,
        imgSrc: SharkWaterLaser,
        imgAlt: 'Shark Water Laser',
        description: [
          {text: 'Signified by the boss swimming backwards. The hitbox of the water orb is a bit bigger than it looks.', normalText: true},
        ]
      },
      {
        enemyAtk: 'Fin Attack',
        tensionEx: false,
        imgSrc: SharkFinAttack,
        imgAlt: 'Shark Fin Attack',
        description: [
          {text: 'It is possible to get hit by the water circles.', normalText: true}
        ]
      },
      {
        enemyAtk: 'Tornado Bombs',
        tensionEx: false,
        imgSrc: SharkTornadoBombs,
        imgAlt: 'Shark Tornado Bombs',
        description: [
          {text: 'The charge can be dodged/deflected. There will be approximately 12 seconds of a damage phase after the S.H.A.R.K eats the bomb.', normalText: true}
        ]
      },
      {
        enemyAtk: '',
        tensionEx: false,
        imgSrc: SharkTornadoBombsExplode,
        imgAlt: 'Shark Tornado Bombs Explode',
        description: [
          {text: 'The leftover bombs will create water tornadoes upon explosion.', normalText: true}
        ]
      },
      {
        enemyAtk: 'Double Dive',
        tensionEx: false,
        imgSrc: SharkDiveInOut,
        imgAlt: 'Shark Dive In and Out',
        description: [
          {text: 'A new attack that gets added at 3 health bars. Signified by the music going silent and non-controlled teammates stopping moving.', normalText: true}
        ]
      },
      {
        enemyAtk: '',
        tensionEx: false,
        imgSrc: SharkDiveInOutParry,
        imgAlt: 'Shark Dive In and Out Parry',
        description: [
          {text: 'If the dive out is deflected, the boss doesn’t stagger, so the second attack will still need to be dodged/deflected.', normalText: true, underlineText: true},
        ]
      },
    ];
  const TensionAtks = [
      {
        enemyAtk: 'Whirlpool',
        tensionEx: false,
        imgSrc: SharkWhirlpool,
        imgAlt: 'Shark Whirlpool',
        description: [
          {text: 'Does this attack as soon as the ', normalText: true, underlineText: true},
          {text: 'EX ', tensionText: true, underlineText: true},
          {text: 'mode starts. ', normalText: true, underlineText: true},
          {text: 'The water circles last for the entirety of the ', normalText: true},
          {text: 'EX ', tensionText: true, tenstionText: true},
          {text: "mode's duration.", normalText: true},
        ]
      },
      {
        enemyAtk: 'Water Tornado',
        tensionEx: false,
        imgSrc: SharkWhirlpoolP3,
        imgAlt: 'Shark Whirlpool Phase 3',
        description: [
          {text: 'This entire sequence lasts for the ~¾ths of the ', normalText: true},
          {text: 'EX ', tensionText: true, tenstionText: true},
          {text: "mode's duration. ", normalText: true},
          {text: "At 3 health bars, the Whirlpool becomes a Water tornado. The water circles' speed is greatly accelerated. At the end of the sequence the boss will perform a Dive attack on the operating character.", normalText: true},
        ]
      },
    ];

  return (
    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
        <H1Heading enemyName='S.H.A.R.K' />
        <HorizontalLine />
        
        <Grid gridBlocks={NonTensionAtks}/>

        {/* need to manually add the double dive for now because of the image in between */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 px-6">
          <div className='flex flex-col items-center gap-4'>
            <div className='m-2'><H2Heading enemyAttack='Double Dive'/></div>
            <ImageWithModal src={SharkDiveInOut} alt='Shark Dive In and Out' />
            <span>
              <DescriptionBlock descriptionParts={[
                {text: 'A new attack that gets added at 3 health bars', normalText: true}
                ]}
              />
              <img src={SharkP3} alt='Shark Phase 3' id='shark-p3' className=''/>
              <DescriptionBlock descriptionParts={[
                {text: 'Signified by the music going silent and non-controlled teammates stopping moving.', normalText: true}
                ]}
              />
            </span>
          </div>
          <div>
            <ImageWithModal src={SharkDiveInOutParry} alt='Shark Dive In and Out Parry' />
            <DescriptionBlock descriptionParts={[
                {text: 'If the dive out is deflected, the boss doesn’t stagger, so the second attack will still need to be dodged/deflected.', normalText: true}
                ]}
              />
          </div>
        </div> */}

        <HorizontalLine />
        <H2Heading enemyAttack='Tension Ex:' tensionEx='true'/>
        
        <Grid gridBlocks={TensionAtks}/>
    </div>
  )
}

export default Shark