import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Card from './card';
import enemiesURL from './enemiesURL';
import DescriptionBlock from './utils/DescriptionBlock';
function Enemies() {

  const location = useLocation();
  const isBasePath = location.pathname === '/enemies';
  return (
    <div className='flex flex-col flex-wrap max-h-full w-[80%] md:w-[70%] items-center justify-start text-white
        bg-black bg-opacity-50 round-tl-br'>
      { isBasePath && (<>
        <DescriptionBlock descriptionParts={[
          {text: 'Attacks listed under ', normalText: true, semiBoldText: true},
          {text: '“tension EX” ', tensionText: true, semiBoldText: true},
          {text: 'are additions exclusive to ', normalText: true, semiBoldText: true},
          {text: 'EX ', tensionText: true, semiBoldText: true},
          {text: 'mode, exceptions will be noted.', normalText: true, semiBoldText: true},
        ]} />

        <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 text-center'>
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