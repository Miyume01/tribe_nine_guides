import React from 'react';
import DescriptionBlock from '../utils/DescriptionBlock';
import Grid from '../utils/Grid';
import H1Heading from '../utils/H1Heading';
import H2Heading from '../utils/H2Heading';
import HorizontalLine from '../utils/HorizontalLine';
import PenaltyAerialStrikeEX from './enemies_gifs/Penalty_aerial strike_EX_mode_start.gif';
import PenaltyAerialStrikeTiming from './enemies_gifs/Penalty_aerial_strike_timing_ENOKI.gif';
import PenaltyCrane from './enemies_gifs/Penalty_crane_NORMAL.gif';
import PenaltyLeftRightJump from './enemies_gifs/Penalty_left_right_jump_NORMAL.gif';
import PenaltyRocketShotCraneSpin from './enemies_gifs/Penalty_Rocket_Shot_Crane_Spin.gif';
import PenaltySpin from './enemies_gifs/Penalty_spin_NORMAL.gif';
import PenaltyTripleRocketShotCraneSpin from './enemies_gifs/Penalty_Triple_Rocket_Shot _Crane_Spin.gif';

function DeathPenalty() {

  const NonTensionAtks = [
    {
      enemyAtk: 'Standalone Crane Spin',
      tensionEx: false,
      imgSrc: PenaltyCrane,
      imgAlt: 'Standalone Crane Spin',
      description: []
    },
    {
      enemyAtk: '360° Spin',
      tensionEx: false,
      imgSrc: PenaltySpin,
      imgAlt: '360° Spin',
      description: []
    },
    {
      enemyAtk: 'Left, Right, Jump',
      tensionEx: false,
      imgSrc: PenaltyLeftRightJump,
      imgAlt: 'Left, Right, Jump',
      description: [
        {text: 'The jump is a targeted attack, so running away from the spot where the boss jumped up won’t avoid it.', normalText: true},
      ]
    },
    {
      enemyAtk: 'Rocket Shot + Crane Spin',
      tensionEx: false,
      imgSrc: PenaltyRocketShotCraneSpin,
      imgAlt: 'Rocket Shot + Crane Spin',
      description: [
        {text: 'Signified by the boss sliding backwards. The rocket will have a circle glow. It will glow 2 times, on the 3rd one - dodge.', normalText: true}
      ]
    }
  ];

  const TensionAtks = [
    {
      enemyAtk: 'Aerial Strike',
      tensionEx: false,
      imgSrc: PenaltyAerialStrikeEX,
      imgAlt: 'Aerial Strike',
      description: [
        {text: 'Does this as soon as it enters ', normalText: true, underlineText: true},
        {text: 'EX ', tensionText: true, underlineText: true},
        {text: 'mode. The aerial attacks will last until the end of ', normalText: true, underlineText: true},
        {text: 'EX ', tensionText: true, underlineText: true},
        {text: 'mode.', normalText: true, underlineText: true},
      ]
    },
    {
      enemyAtk: 'Aerial Strike dodge timing',
      tensionEx: false,
      imgSrc: PenaltyAerialStrikeTiming,
      imgAlt: 'Aerial Strike dodge timing',
      description: [
        {text: 'The zones will flash yellow twice, dodge ~0.3 seconds after.', normalText: true}
      ]
    },
    {
      enemyAtk: 'Triple Rocket Shot + Crane Spin',
      tensionEx: false,
      imgSrc: PenaltyTripleRocketShotCraneSpin,
      imgAlt: 'Triple Rocket Shot + Crane Spin',
      description: [
        {text: 'Does 3 rocket shots instead of 1 in ', normalText: true},
        {text: 'EX ', tensionText: true, underlineText: true},
        {text: 'mode.', normalText: true, underlineText: true},
        {text: 'It’s possible to outrun the shots by sprinting.', normalText: true},
      ]
    },
  ];

  return (
    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
        <H1Heading enemyName='Death Penalty'/>
        <HorizontalLine />
        <DescriptionBlock descriptionParts={[
          {text: 'It is strongly advised to use the', normalText: true, underlineText: true},
          {text: ' Ace Vision ', blueText: true, underlineText: true, boldText: true},
          {text: ' tension card for this fight.', normalText: true, underlineText: true},
        ]}/>

        <Grid gridBlocks={NonTensionAtks} />

        <HorizontalLine />
        <H2Heading enemyAttack='Tension EX:' tensionEx='true'/>

        <Grid gridBlocks={TensionAtks} />
    </div>
  )
}

export default DeathPenalty