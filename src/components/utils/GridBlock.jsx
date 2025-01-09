import React from 'react';
import doro from '../doro.png';
import DescriptionBlock from './DescriptionBlock';
import H2Heading from './H2Heading';
import ImageWithModal from './ImageWithModal';
// add a default not found image

function GridBlock({enemyAtk = 'undefined',
                    tensionEX = false,
                    imgSrc = doro,
                    imgAlt = 'Image not found',
                    description = []}) {
  return (
    <div className='flex flex-col items-center gap-4'>
        <H2Heading enemyAttack={enemyAtk} tensionEx={tensionEX}/>
        <ImageWithModal src={imgSrc} alt={imgAlt} />
        <DescriptionBlock descriptionParts={description}/>
    </div>
  );
};

export default GridBlock