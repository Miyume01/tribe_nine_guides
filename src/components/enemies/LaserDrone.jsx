import React from 'react';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import H2Heading from '../utils/H2Heading';
import HorizontalLine from '../utils/HorizontalLine';
import ImageWithModal from '../utils/ImageWithModal';
import LaserAttack from './enemies_gifs/Laser_laser_NORMAL.gif';
import LaserTripleEX from './enemies_gifs/Laser_triple_laser_EX.gif';

function LaserDrone() {
  const NonTensionAtks = [
    {
      enemyAtk: 'Laser Attack',
      tensionEx: false,
      imgSrc: LaserAttack,
      imgAlt: 'Laser Attack',
      description: []
    },
    {
      enemyAtk: 'Triple Lasers',
      tensionEx: true,
      imgSrc: LaserTripleEX,
      imgAlt: 'Laser Triple EX',
      description: [
{text: 'Will only do ', normalText: true, underlineText: true},
{text: 'this ', boldText: true, underlineText: true},
{text: 'attack in ', normalText: true, underlineText: true},
{text: 'EX ', tensionText: true, semiBoldText: true, underlineText: true},
{text: 'mode.', normalText: true, semiBoldText: true, underlineText: true},
      ]
    },

  ];

const TensionAtks = [
    
  ];


  return (
<div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
  <H1Heading enemyName='The Laser Drone'/>
  <HorizontalLine />

  <Grid gridBlocks={NonTensionAtks} />

    </div>
  )
}

export default LaserDrone