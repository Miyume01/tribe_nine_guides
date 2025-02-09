import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import HorizontalLine from '../utils/HorizontalLine';
import SharkWhirlpool from './enemies_gifs/Shark+whirlpool.gif';
import SharkDiveInOutParry from './enemies_gifs/Shark_dive_in-out_parry.gif';
import SharkDiveInOut from './enemies_gifs/Shark_dive_in_out2.gif';
import SharkFinAttack from './enemies_gifs/Shark_fin_attack.gif';
// import SharkWaterLaser from './enemies_gifs/Shark_laser.gif';
import SharkP3 from './enemies_gifs/Shark_P3.png';
import SharkTailSwipe from './enemies_gifs/Shark_tail_swipe_NORMAL.gif';
// import SharkTornadoBombs from './enemies_gifs/Shark_Tornado_Bombs.gif';
import SharkTornadoBombsExplode from './enemies_gifs/Shark_Tornado_Bombs_explode.gif';
import SharkTripleBite from './enemies_gifs/Shark_triple_bite_NORMAL.gif';
// import SharkWhirlpoolP3 from './enemies_gifs/Shark_whirlpool_p3.gif';
import SharkTornadoBombs from './enemies_gifs/TornadoBombsNORMAL-video.mp4';
import SharkWaterLaser from './enemies_gifs/WaterlaserNORMAL-video.mp4';
import SharkWhirlpoolP3 from './enemies_gifs/watertornadoEXlight-video.mp4';

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
        isVideo: true,
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
          {text: 'It is possible to get hit by the water circles.', normalText: true, underlineText: true},
        ]
      },
      {
        enemyAtk: 'Tornado Bombs',
        tensionEx: false,
        imgSrc: SharkTornadoBombs,
        imgAlt: 'Shark Tornado Bombs',
        isVideo: true,
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
        enemyAtk: 'Dive',
        tensionEx: false,
        imgSrc: SharkDiveInOut,
        imgAlt: 'Shark Dive In and Out',
        description: [
          {text: 'A new attack that gets added at 3 health bars.', normalText: true},
          {src: SharkP3, alt: 'Shark Phase 3', isImage: true, wMobile: '80px', hMobile: 'auto', wDesktop: '100px', hDesktop: 'auto'},
          {text: 'Signified by the music going silent and non-controlled teammates stopping moving.'}
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
        tensionEx: true,
        imgSrc: SharkWhirlpool,
        imgAlt: 'Shark Whirlpool',
        description: [
          {text: 'Does this attack as soon as the ', normalText: true, underlineText: true},
          {text: 'EX ', tensionText: true, underlineText: true},
          {text: 'mode starts. ', normalText: true, underlineText: true},
          {text: 'The water circles last for the entirety of the ', normalText: true},
          {text: 'EX ', tensionText: true, tenstionText: true},
          {text: "mode's duration. ", normalText: true},
          {text: 'If the player stands inside the whirlpool, there’s a small chance to get damaged & get knocked down.', normalText: true},
        ]
      },
      {
        enemyAtk: 'Water Tornado',
        tensionEx: false,
        imgSrc: SharkWhirlpoolP3,
        imgAlt: 'Shark Whirlpool Phase 3',
        isVideo: true,
        description: [
          {text: 'This entire sequence lasts for the ~¾ths of the ', normalText: true},
          {text: 'EX ', tensionText: true, tenstionText: true},
          {text: "mode's duration. ", normalText: true},
          {text: "At 3 health bars ", normalText: true},
          {src: SharkP3, alt: 'Shark Phase 3', isImage: true, wMobile: '80px', hMobile: 'auto', wDesktop: '100px', hDesktop: 'auto'},
          {text: " the Whirlpool becomes a Water tornado. The water circles' speed is greatly accelerated. At the end of the sequence the boss will perform a Dive attack on the operating character.", normalText: true},
        ]
      },
    ];

  return (
    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
        <H1Heading enemyName='S.H.A.R.K' />
        <HorizontalLine />
        
        <Grid gridBlocks={NonTensionAtks}/>
        
        <Grid gridBlocks={TensionAtks}/>
    </div>
  )
}

export default Shark