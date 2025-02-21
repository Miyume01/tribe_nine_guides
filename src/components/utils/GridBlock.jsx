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
                    isVideo = false,
                    allowModal = true,
                    center = false,
                    description = [],
                    centerText=false}) {
  return (
    <div className='flex flex-col items-center gap-4 justify-start w-full'>
        <div className="w-full flex justify-center items-center flex-none h-[10%] lg:px-4">
          <H2Heading enemyAttack={enemyAtk} tensionEx={tensionEx} center={center} />
        </div>
        <div className="w-full flex justify-center items-center">
          <ImageWithModal src={imgSrc} alt={imgAlt} allowModal={allowModal} isVideo={isVideo} />
        </div>
          <div className={`w-full flex justify-center items-start flex-none px-4 ${description.length > 0 ? 'min-h-[26%]' : 'h-auto'}`}>
            <DescriptionBlock descriptionParts={description} centerText={centerText} />
          </div>
    </div>
  );
};

export default GridBlock