import React from 'react';
import Attacker from './comp_monsters/Attacker.png';
import Healer from './comp_monsters/Healer.png';
import Shielder from './comp_monsters/Shielder.png';
import Supporter from './comp_monsters/Supporter.png';
import Tank from './comp_monsters/Tank.png';
import Technician from './comp_monsters/Technician.png';
import SuggestedSetForCharacters from './suggestedCharcterSet';
import DescriptionBlock from './utils/DescriptionBlock';
// import FancyTable2 from './utils/FancyTable2';
import H1Heading from './utils/H1Heading';
import H2Heading from './utils/H2Heading';
import HorizontalLine from './utils/HorizontalLine';
import NormalTable2 from './utils/NormalTable2';
function CompMonsters() {
  return (
    <div className='flex flex-col flex-wrap h-full w-[80%] md:w-[70%] pb-5 items-center justify-start text-white
      bg-black bg-opacity-50 round-tl-br'>
        <H1Heading enemyName='Compatible Monsters' />

      <DescriptionBlock descriptionParts={[
        {text: ' Current sets as of Open Beta Test (OBT):', normalText: true, underlineText: true},
      ]}/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5" id='comp-monsters'>
          <img src={Supporter} alt="Supporter" />
          <img src={Tank} alt="Tank" />
          <img src={Technician} alt="Technician" />
          <img src={Shielder} alt="Shielder" />
          <img src={Attacker} alt="Attacker" />
          <img src={Healer} alt="Healer" />
      </div>

      <div className='w-full px-2'><H2Heading enemyAttack='Suggested sets for characters:' center='true'/></div>
      <HorizontalLine />

      {/* <FancyTable2 tableData={SuggestedSetForCharacters} gridCols={5} gridGap={0} /> */}
      <NormalTable2 tableData={SuggestedSetForCharacters} />

      <HorizontalLine />
        <DescriptionBlock descriptionParts={[
          {text: 'As the developers have said, the game offers the freedom of playing however the player ', normalText: true, italicText: true},
          {text: 'prefers; hence, depending on preferences, one could run an attack set on Kazuki or Hyakuichitaro.', normalText: true, italicText: true},
        ]} setWidth='80%'/>
    </div>
  );
}

export default CompMonsters;