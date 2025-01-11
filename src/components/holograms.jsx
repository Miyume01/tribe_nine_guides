import React from 'react';
import ImageWithModal from '../components/utils/ImageWithModal';
import butterflyHologram2Spot from "./holograms/butterfly 2 spot.png";
import butterflyHologram2 from "./holograms/butterfly 2.png";
import butterflyHologramSpot from "./holograms/butterfly spot.png";
import butterflyHologram from "./holograms/butterfly.png";
import enigmaticEntity from "./holograms/enigmatic-entity.png";
import tigerHologramsSpot from "./holograms/tiger spot.png";
import tigerHologram from "./holograms/tiger.png";
import whaleHologramSpot from "./holograms/whale spot.png";
import whaleHologram from "./holograms/whale.png";
import wolfHologramSpot from "./holograms/wolf spot.png";
import wolfHologram from "./holograms/wolf.png";
import H1Heading from './utils/H1Heading';
import H2Heading from './utils/H2Heading';
import HorizontalLine from './utils/HorizontalLine';
function Holograms() {
    return (
        <div className='flex flex-col flex-wrap h-full w-[70%] pb-5 items-center justify-start text-white
            hologram-container bg-middle-background'>
            <div className='mt-10'><H1Heading enemyName="Holograms's locations" /></div>

            <HorizontalLine />
            
            <p className='flex font-roboto'>
                Each hologram rewards the player 50
                <img src={enigmaticEntity} alt="enigmatic entity" className='size-8 mx-1' id='enigmatic-ball'/>
                enigmatic entities.
            </p>
            <HorizontalLine />

            <div className='mb-8'><H2Heading enemyAttack='Tiger' /></div>
            <ImageWithModal src={tigerHologram} alt="tiger" />
            <ImageWithModal src={tigerHologramsSpot} alt="tiger spot" />
            <HorizontalLine />

            <div className='mb-8'><H2Heading enemyAttack='Wolf Face' /></div>
            <ImageWithModal src={wolfHologram} alt="wolf" />
            <ImageWithModal src={wolfHologramSpot} alt="wolf spot" />
            <HorizontalLine />

            <div className='mb-8'><H2Heading enemyAttack='Whale' /></div>
            <ImageWithModal src={whaleHologram} alt="whale" />
            <ImageWithModal src={whaleHologramSpot} alt="whale spot" />
            <HorizontalLine />

            <div className='mb-8'><H2Heading enemyAttack='Butterfly' /></div>
            <ImageWithModal src={butterflyHologram} alt="butterfly" />
            <ImageWithModal src={butterflyHologramSpot} alt="butterfly spot" />
            <HorizontalLine />

            <div className='mb-8'><H2Heading enemyAttack='Butterfly 2' /></div>
            <ImageWithModal src={butterflyHologram2} alt="butterfly 2" />
            <ImageWithModal src={butterflyHologram2Spot} alt="butterfly 2 spot" />
        </div>
    );
};

export default Holograms;