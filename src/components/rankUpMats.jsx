import React from 'react';
import tableData from './rankupTable';
import FancyTable from './utils/FancyTable';
import H1Heading from './utils/H1Heading';

function RankUpMats() {
  return (
    <div className='flex flex-col flex-wrap max-h-full w-[80%] md:w-[70%] pb-5 items-center justify-start text-white
      bg-black bg-opacity-50 round-tl-br'>
        <H1Heading enemyName='Rank up Materials' />
        <FancyTable tableData={tableData} />
    </div>
  )
}

export default RankUpMats