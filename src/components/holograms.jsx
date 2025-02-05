import React from 'react';
import hologramData from './hologramData';
import enigmaticEntity from "./holograms/enigmatic-entity.png";
import FlexCol from './utils/FlexCol';
import H1Heading from './utils/H1Heading';

function Holograms() {
    return (
        <div className='flex flex-col flex-wrap h-full w-[80%] md:w-[70%] pb-5 items-center justify-start text-white
            hologram-container bg-black bg-opacity-50 round-tl-br'>
            <H1Heading enemyName="Holograms's locations" />

            
            <p className='flex font-roboto mt-4 text-sm md:text-lg w-auto'>
                Each hologram rewards the player 50
                <img src={enigmaticEntity} alt="enigmatic entity" className='size-8 mx-1' id='enigmatic-ball'/>
                enigmatic entities.
            </p>

            { hologramData.map((hologram, index) => (
                <div>
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