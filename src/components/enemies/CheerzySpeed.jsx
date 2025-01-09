import React from 'react';
import ImageWithModal from '../utils/ImageWithModal';
import CheerzyLungeAndChargeEX from './enemies_gifs/Cheerzy_lunge_and_charge_NORMAL.gif';
import CheerzyLungeNormal from './enemies_gifs/Cheerzy_lunge_NORMAL.gif';
import CheerzySpin from './enemies_gifs/Cheerzy_spin.gif';

function Cheerzy() {
  return (
    <div className='flex flex-col flex-wrap h-full w-full pb-5 items-center justify-start text-white'>
        <h2>Cheerzy (Speed)</h2>
        <div className="w-full h-[2px] bg-gray-500 mt-4 mx-auto opacity-50 md:mb-6">
        </div>
        <p>Outside of EX mode will fall over after an attack.</p>
        <div className='flex flex-row mx-5 items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <p>Lunge</p>
            <ImageWithModal src={CheerzyLungeNormal} alt="Cheerzy Lunge Normal"/>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p>Spin</p>
            <ImageWithModal src={CheerzySpin} alt="Cheerzy Spin"/>
          </div>
        </div>
        <p>Tension EX: Lunge & Spin</p>
        <ImageWithModal src={CheerzyLungeAndChargeEX} alt="Cheerzy Lunge and Charge EX" />
        <p>Will only do this attack in EX mode.</p>
    </div>
  );
}

export default Cheerzy