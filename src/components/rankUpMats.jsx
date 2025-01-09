import React from 'react';
import Accurate from "./rank_up/accurate.png";
import Innivative from "./rank_up/innivative.png";
import Tech from "./rank_up/tech.png";
import H1Heading from './utils/H1Heading';

function RankUpMats() {
  return (
    <div className='flex flex-col flex-wrap h-full w-[80%] pb-5 items-center justify-start text-white
      bg-middle-background'>
      <div className='mt-10'>
        <H1Heading enemyName='Rank up Materials' />
      </div>
      <div>
        <div className='grid grid-cols-3 gap-4 m-5 mt-5'>

          <div className='flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow-md'>
            <div className='text-center font-bold tracking-widest'>Innovative</div>
            <img src={Innivative} alt="Innivative" className='w-16 h-16 m-4' />
            <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
            </div>

            <strong className='mb-6'>Tsuruko</strong>
            <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
            </div>
            
            <strong className='mb-6'>Saigo</strong>
            <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
            </div>
            
            <strong className='mb-6'>Gotanda</strong>
            <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
            </div>
            
            <strong className='mb-6'>Kazuki</strong>
            <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
            </div>
            

          </div>

          <div className='flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow-md'>
            <div className='text-center font-bold tracking-widest'>Tech</div>
            <img src={Accurate} alt="Accurate" className='w-16 h-16 m-4' />
            <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
            </div>
            
            <strong className='mb-6'>Enoki</strong>
            <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
            </div>
            
            <strong className='mb-6'>Jio</strong>
            <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
            </div>
            
            <strong className='mb-6'>Miu</strong>
            <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
            </div>
            
            <strong className='mb-6'>Oi</strong>
            <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
            </div>

            <strong className='mb-6'>Q</strong>
            <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
            </div>
          </div>

          <div className='flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow-md'>
              <div className='text-center font-bold tracking-widest'>Accurate</div>
              <img src={Tech} alt="Tech" className='w-16 h-16 m-4' />
              <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
              </div>
              
              <strong className='mb-6'>Koishi</strong>
              <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
              </div>
              
              <strong className='mb-6'>Yo</strong>
              <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
              </div>
              
              <strong className='mb-6'>Tsuki</strong>
              <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
              </div>
              
              <strong className='mb-6'>Hyakuichitaro</strong>
              <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
              </div>
              
              <strong className='mb-6'>Eiji</strong>
              <div className="w-full h-[1px] bg-gray-500 mx-auto opacity-50 md:mb-6">
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RankUpMats