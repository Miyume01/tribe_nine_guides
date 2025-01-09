import React from 'react';
// import Cheerzy from './enemies/Cheerzy';
// import DeathPenalty from './enemies/DeathPenalty';
// import Endrone from './enemies/Endrone';
// import LaserDrone from './enemies/LaserDrone';
// import Mameeze from './enemies/Mameeze';
// import MinionInWhiteDoubleSpeed from './enemies/MinionInWhiteDoubleSpeed';
// import OrbDrone from './enemies/OrbDrone';
// import Scheeze from './enemies/Scheeze';
// import Shark from './enemies/Shark';
// import ShinagawaTribeBatter from './enemies/ShinagawaTribeBatter';
// import ShinagawaTribeHammer from './enemies/ShinagawaTribeHammer';
// import ShinagawaTribeRider from './enemies/ShinagawaTribeRider';
// import ShinagawaTribeShielder from './enemies/ShinagawaTribeShielder';
// import dummyImage from "./doro.png";
import { Outlet, useLocation } from 'react-router-dom';
import Card from './card';
import enemiesURL from './enemiesURL';
import DescriptionBlock from './utils/DescriptionBlock';
function Enemies() {

  const location = useLocation();
  const isBasePath = location.pathname === '/enemies';
  return (
    <div className='flex flex-col flex-wrap h-full w-[80%] items-center justify-start text-white
        bg-middle-background enemies-container'>
      { isBasePath && (<>
        <div className='mt-10'></div>
        <DescriptionBlock descriptionParts={[
          {text: 'Click on the ', normalText: true, underlineText: true},
          {text: '“enemies” tab ', blueText: true, underlineText: true},
          {text: 'for the full list & fast access.', normalText: true, underlineText: true},
        ]} />

        <DescriptionBlock descriptionParts={[
          {text: 'Attacks listed under ', normalText: true, semiBoldText: true},
          {text: '“tension EX” ', tensionText: true, semiBoldText: true},
          {text: 'are additions exclusive to ', normalText: true, semiBoldText: true},
          {text: 'EX ', tensionText: true, semiBoldText: true},
          {text: 'mode, exceptions will be noted.', normalText: true, semiBoldText: true},
        ]} />

        <div className='grid grid-cols-5'>
          {enemiesURL.map((enemy) => {
            return(
              <Card key={enemy.name} title={enemy.name} image={enemy.image} url={enemy.url} id={enemy.id}/>
            )
          })}
        </div>
        </>
      )}
      <Outlet />
      {/* <Cheerzy />
      <LaserDrone />
      <OrbDrone />
      <ShinagawaTribeHammer />
      <ShinagawaTribeRider />
      <ShinagawaTribeBatter />
      <ShinagawaTribeShielder />
      <MinionInWhiteDoubleSpeed />
      <Scheeze />
      <Mameeze />
      <Endrone />
      <Shark />
      <DeathPenalty /> */}
    </div>
  );
}

export default Enemies