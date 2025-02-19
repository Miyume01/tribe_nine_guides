import React from 'react';
import tableData from './rankupTable';
import H1Heading from './utils/H1Heading';
import NormalTable2WithImg from './utils/NormalTable2WithImg';

function RankUpMats() {
  return (
    <div className='flex flex-col flex-wrap max-h-full w-full mobile:w-[80%] md:w-[70%] pb-5 items-center justify-start text-white
      mobile:bg-black mobile:bg-opacity-50 mobile:round-tl-br'>
        <div className='md:mt-4'><H1Heading enemyName='Rank up Materials' /></div>
        <NormalTable2WithImg tableData={tableData} />
    </div>
  )
}

export default RankUpMats