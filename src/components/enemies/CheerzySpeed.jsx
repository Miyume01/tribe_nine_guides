import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import H2Heading from '../utils/H2Heading';
import HorizontalLine from '../utils/HorizontalLine';
import ImageWithModal from '../utils/ImageWithModal';
import CheerzyLungeAndChargeEX from './enemies_gifs/Cheerzy_lunge_and_charge_NORMAL.gif';
import CheerzyLungeNormal from './enemies_gifs/Cheerzy_lunge_NORMAL.gif';
import CheerzySpin from './enemies_gifs/Cheerzy_spin.gif';
import DescriptionBlock from '../utils/DescriptionBlock';

function Cheerzy() {

    const NonTensionAtks = [
            {
              enemyAtk: 'Lunge',
              tensionEx: false,
              imgSrc: CheerzyLungeNormal,
              imgAlt: 'Cheerzy Lunge Normal',
              description: []
            },
            {
              enemyAtk: 'Spin',
              tensionEx: false,
              imgSrc: CheerzySpin,
              imgAlt: 'Cheerzy Spin',
              description: []
            },
          ];
    const TensionAtks = [
            {
              enemyAtk: 'Lunge & Spin',
              tensionEx: false,
              imgSrc: CheerzyLungeAndChargeEX,
              imgAlt: 'Cheerzy Lunge and Charge EX',
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

<div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
  <H1Heading enemyName='Cheerzy (Speed)'/>
  <HorizontalLine />

  <DescriptionBlock descriptionParts={[
      {text: 'Outside of ', normalText: true, semiBoldText: true},
      {text: 'EX ', tensionText: true, semiBoldText: true},
      {text: 'mode', tensionText: true, semiBoldText: true},
      {text: ' will fall over after an attack.', normalText: true, semiBoldText: true},
    ]} />

  <Grid gridBlocks={NonTensionAtks} />

  <H2Heading enemyAttack='Tension Ex:' tensionEx='true' />

  <Grid gridBlocks={TensionAtks} />
</div>
  );
}

export default Cheerzy