import React from 'react';
import hologramData from './hologramData';
import enigmaticEntity from "./holograms/enigmatic-entity.png";
import FlexCol from './utils/FlexCol';
import H1Heading from './utils/H1Heading';

function Holograms() {
    return (
        <div className='flex flex-col flex-wrap max-h-full w-full mobile:w-[80%] md:w-[70%] pb-5 items-center justify-start text-white
        mobile:bg-black mobile:bg-opacity-50 mobile:round-tl-br hologram-container'>
            <div className='mt-8 md:mt-4'><H1Heading enemyName="Holograms's locations" /></div>

            <div className='mobile:w-[70%] md:w-[90%] w-[90%] mt-4 text-center -mb-2'>
                <span className='inline-flex font-pixelify sm:text-lg mobile:text-md max-mobile:text-sm flex-wrap items-center justify-center'>
                    <span className='text-left inline items-center'>
                        Each hologram rewards the player 50
                        <img src={enigmaticEntity} alt="enigmatic entity" className='size-8 mx-[2px]' id='enigmatic-ball'/>
                        enigmatic entities.
                    </span>
                </span>
            </div>

            { hologramData.map((hologram, index) => (
                <div key={index}>
                    <FlexCol
                        key={index}
                        enemyAtk={hologram.heading}
                        imgData={hologram.imgData}
                        center='true'
                    />
                </div>
            ))}
                
        </div>
    );
};

export default Holograms;