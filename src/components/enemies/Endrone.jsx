import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import HorizontalLine from '../utils/HorizontalLine';
import EndroneDoubleCombo from './enemies_gifs/Endrone_double_combo_NORMAL.gif';
import EndroneRockets from './enemies_gifs/Endrone_rockets.gif';
import EndroneTripleCombo from './enemies_gifs/Endrone_Triple_Combo.gif';
import EndroneTripleEX from './enemies_gifs/Endrone_triple_EX.gif';
import EndroneTripleNormal from './enemies_gifs/Endrone_triple_NORMAL.gif';
function Endrone() {

  const NonTensionAtks = [
      {
        enemyAtk: 'Double Attack',
        tensionEx: false,
        imgSrc: EndroneDoubleCombo,
        imgAlt: 'Endrone Double Combo',
        description: []
      },
      {
        enemyAtk: '½ + Ground Slam',
        tensionEx: false,
        imgSrc: EndroneTripleNormal,
        imgAlt: 'Endrone Triple Normal',
        description: [
          {text: "Sometimes Endrone might do the ground slam twice. It may be due to deflecting his double attack earlier in the fight(?). The attack can be identified by Endrone skipping the second swing. ", normalText: true},
          {text: "Swing > (skip) > ground > slam > ground > slam", boldText: true, blueText: true},
        ]
      },
      {
        enemyAtk: 'Triple Combo',
        tensionEx: false,
        imgSrc: EndroneTripleCombo,
        imgAlt: 'Endrone Triple Combo',
        description: []
      },
      {
        enemyAtk: 'Rockets',
        tensionEx: false,
        imgSrc: EndroneRockets,
        imgAlt: 'Endrone Rockets',
        description: [
          {text: 'Signified by the boss sliding backwards.', normalText: true}
        ]
      }
    ];

    const TensionAtks = [
          {
            enemyAtk: 'Blade Spin + Rockets + Ground Slam',
            tensionEx: true,
            center: true,
            imgSrc: EndroneTripleEX,
            imgAlt: 'Endrone Triple EX',
            description: []
          },
        ];

  return (
    <div className='flex flex-col flex-wrap max-h-full w-full pb-5 items-center justify-start text-white'>
        <H1Heading enemyName='Endrone'/>
        <HorizontalLine />

        <Grid gridBlocks={NonTensionAtks} />

        <Grid gridBlocks={TensionAtks} />

    </div>
  )
}

export default Endrone