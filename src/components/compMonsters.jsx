import React from 'react';
import ImageWithModal from '../components/utils/ImageWithModal';
import Attacker from './comp_monsters/Attacker.png';
import Healer from './comp_monsters/Healer.png';
import Shielder from './comp_monsters/Shielder.png';
import Supporter from './comp_monsters/Supporter.png';
import Tank from './comp_monsters/Tank.png';
import Technician from './comp_monsters/Technician.png';
import DescriptionBlock from './utils/DescriptionBlock';
import H1Heading from './utils/H1Heading';
import H2Heading from './utils/H2Heading';
import HorizontalLine from './utils/HorizontalLine';

function CompMonsters() {
  return (
    <div className='flex flex-col flex-wrap h-full w-[80%] pb-5 items-center justify-start text-white
      bg-middle-background'>

      <div className='mt-10 mb-5'>
        <H1Heading enemyName='Compatible Monsters' />
      </div>

      <DescriptionBlock descriptionParts={[
        {text: ' Current sets as of Open Beta Test (OBT):', normalText: true, underlineText: true},
      ]}/>

      <div className="grid grid-cols-2 gap-4 m-5" id='comp-monsters'>
          <ImageWithModal src={Supporter} alt="Supporter" />
          <ImageWithModal src={Tank} alt="Tank" />
          <ImageWithModal src={Technician} alt="Technician" />
          <ImageWithModal src={Shielder} alt="Shielder" />
          <ImageWithModal src={Attacker} alt="Attacker" />
          <ImageWithModal src={Healer} alt="Healer" />
      </div>

      <H2Heading enemyAttack='Suggested sets for characters:' />
      <HorizontalLine />

    <ul className="mt-2 list-disc list-outside leading-relaxed text-white tracking-widest">
      <li className="flex items-start justify-center">
        <div className="bg-white w-2 h-2 rounded-full ml-3 mr-5 mt-3 p-1"></div>
        <div className='mb-1 flex-grow'>
          Chasing Wind
        </div>
      </li>
      <li className="flex items-start justify-center">
        <div className="bg-white w-2 h-2 rounded-full ml-3 mr-5 mt-3 p-1"></div>
        <div className='mb-1 flex-grow'>
          <strong>Perseverance:</strong> Saigo
        </div>
      </li>
      <li className="flex items-start justify-center">
        <div className="bg-white w-2 h-2 rounded-full ml-3 mr-5 mt-3 p-1"></div>
        <div className='mb-1 flex-grow'>
          <strong>Phantom Trickery:</strong> Eiji, Q, Jio, Miu, Gotanda
        </div>
      </li>
      <li className="flex items-start justify-center">
        <div className="bg-white w-2 h-2 rounded-full ml-3 mr-5 mt-3 p-1"></div>
        <div className='mb-1 flex-grow'>
          <strong>Iron Heart:</strong> Kazuki, Hyakuichitaro
        </div>
      </li>
      <li className="flex items-start justify-center">
        <div className="bg-white w-2 h-2 rounded-full ml-3 mr-5 mt-3 p-1"></div>
        <div className='mb-1 flex-grow'>
          <strong>Impaling Dragon Claws:</strong> Enoki, Koishi, Yo, Tsuki
        </div>
      </li>
      <li className="flex items-start justify-center">
        <div className="bg-white w-2 h-2 rounded-full ml-3 mr-5 mt-3 p-1"></div>
        <div className='mb-1 flex-grow'>
          <strong>Harvest:</strong> Oi, Tsuruko
        </div>
      </li>
    </ul>

      <HorizontalLine />
      <div className='px-32'>
        <DescriptionBlock descriptionParts={[
          {text: 'As the developers have said, the game offers the freedom of playing however the player ', normalText: true, italicText: true},
          {text: 'prefers; hence, depending on preferences, one could run an attack set on Kazuki or Hyakuichitaro.', normalText: true, italicText: true},
        ]} />
      </div>
    </div>
  );
}

export default CompMonsters;