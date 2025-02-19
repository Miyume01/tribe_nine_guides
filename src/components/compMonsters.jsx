import React from 'react';
import Attacker from './comp_monsters/Attacker.png';
import Healer from './comp_monsters/Healer.png';
import Shielder from './comp_monsters/Shielder.png';
import Supporter from './comp_monsters/Supporter.png';
import Tank from './comp_monsters/Tank.png';
import Technician from './comp_monsters/Technician.png';
import SuggestedSetForCharacters from './suggestedCharcterSet';
import DescriptionBlock from './utils/DescriptionBlock';
import H1Heading from './utils/H1Heading';
import H2Heading from './utils/H2Heading';
import HorizontalLine from './utils/HorizontalLine';
import NormalTable2 from './utils/NormalTable2';
import OldDescriptionBlock from './utils/OldDescriptionBlock';
function CompMonsters() {
  return (
    <div className='flex flex-col flex-wrap max-h-full w-full mobile:w-[80%] md:w-[70%] pb-5 items-center justify-start text-white
      mobile:bg-black mobile:bg-opacity-50 mobile:round-tl-br'>
        <div className='md:mt-4'><H1Heading enemyName='Compatible Monsters' /></div>

      <DescriptionBlock
        descriptionParts={[
          {text: ' Current sets as of Open Beta Test (OBT):', normalText: true, underlineText: true}
          ]}
        centerText='true'
        />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-4 md:gap-2 gap-1 m-2 object-contain" id='comp-monsters'>
          <img src={Supporter} alt="Supporter" />
          <img src={Tank} alt="Tank" />
          <img src={Technician} alt="Technician" />
          <img src={Shielder} alt="Shielder" />
          <img src={Attacker} alt="Attacker" />
          <img src={Healer} alt="Healer" />
      </div>
      
      <H2Heading enemyAttack='Suggested sets for characters:' center='true'/>
      <HorizontalLine />

      <NormalTable2 tableData={SuggestedSetForCharacters} />

      <HorizontalLine />
      <div className='xl:w-[90%] md:w-[80%] w-[90%] pl-2'>
        <OldDescriptionBlock descriptionParts={[
          {text: 'As the developers have said, the game offers the freedom of playing however the player ', normalText: true, italicText: true},
          {text: 'prefers; hence, depending on preferences, one could run an attack set on Kazuki or Hyakuichitaro.', normalText: true, italicText: true},
        ]}
        />
      </div>
    </div>
  );
}

export default CompMonsters;