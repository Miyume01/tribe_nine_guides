import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Card from './card';
import enemiesURL from './enemiesURL';
import DescriptionBlock from './utils/DescriptionBlock';
function Enemies() {

  const location = useLocation();
  const isBasePath = location.pathname === '/enemies';
  return (
    <div className='flex flex-col flex-wrap h-full w-[80%] md:w-[70%] items-center justify-start text-white
        bg-middle-background'>
      { isBasePath && (<>
        <DescriptionBlock descriptionParts={[
          {text: 'Attacks listed under ', normalText: true, semiBoldText: true},
          {text: '“tension EX” ', tensionText: true, semiBoldText: true},
          {text: 'are additions exclusive to ', normalText: true, semiBoldText: true},
          {text: 'EX ', tensionText: true, semiBoldText: true},
          {text: 'mode, exceptions will be noted.', normalText: true, semiBoldText: true},
        ]} />

        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
          {enemiesURL.map((enemy) => {
            return(
              <Card key={enemy.name} title={enemy.name} image={enemy.image} url={enemy.url} id={enemy.id}/>
            )
          })}
        </div>
        </>
      )}
      <Outlet />
    </div>
  );
}

export default Enemies