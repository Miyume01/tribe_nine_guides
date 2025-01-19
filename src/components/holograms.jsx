import React from 'react';
import hologramData from './hologramData';
import enigmaticEntity from "./holograms/enigmatic-entity.png";
import FlexCol from './utils/FlexCol';
import H1Heading from './utils/H1Heading';
import HorizontalLine from './utils/HorizontalLine';

function Holograms() {
    return (
        <div className='flex flex-col flex-wrap h-full w-[80%] md:w-[70%] pb-5 items-center justify-start text-white
            hologram-container bg-middle-background'>
            <H1Heading enemyName="Holograms's locations" />

            
            <p className='flex font-roboto mt-4 text-sm md:text-lg'>
                Each hologram rewards the player 50
                <img src={enigmaticEntity} alt="enigmatic entity" className='size-8 mx-1' id='enigmatic-ball'/>
                enigmatic entities.
            </p>
            <HorizontalLine />

            { hologramData.map((hologram, index) => (
                <div>
                    <FlexCol
                        key={index}
                        enemyAtk={hologram.heading}
                        imgData={hologram.imgData}
                        center='true'
                    />
                    <HorizontalLine />
                </div>
            ))}
                
        </div>
    );
};

export default Holograms;