import React from 'react';
import doro from '../doro.png';
import DescriptionBlock from './DescriptionBlock';
import H2Heading from './H2Heading';
import ImageWithModal from './ImageWithModal';
// add a default not found image

function GridBlock({enemyAtk = 'undefined',
                    tensionEx = false,
                    imgSrc = doro,
                    imgAlt = 'Image not found',
                    center = false,
                    description = []}) {
  return (
    <div className='flex flex-col items-center gap-4 justify-start'>
        <H2Heading enemyAttack={enemyAtk} tensionEx={tensionEx} center={center}/>
        <ImageWithModal src={imgSrc} alt={imgAlt} />
        <DescriptionBlock descriptionParts={description}/>
    </div>
  );
};

export default GridBlock