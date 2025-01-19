import React from 'react';
import FlexImg from './FlexImg';
import H2Heading from './H2Heading';

function FlexCol({enemyAtk = 'undefined',
                    tensionEx = false,
                    center = false,
                    imgData = [],
                    description = []}) {
                        
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <H2Heading enemyAttack={enemyAtk} tensionEx={tensionEx} center={center}/>
            <FlexImg imgData={imgData} />
        </div>
    )
}

export default FlexCol