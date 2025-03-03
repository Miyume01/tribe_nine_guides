import React from 'react';
import PageNotFound from './page-not-found.png';

function NotFound() {
  return (
    <div className='flex flex-col flex-wrap max-h-full w-full mobile:w-[80%] md:w-[70%] pb-5 items-center justify-start text-white
    mobile:bg-black mobile:bg-opacity-50 mobile:round-tl-br overflow-hidden'>
      <img src={PageNotFound} alt={'Page Not Found'} className='scale-150'/>
    </div>
  )
}

export default NotFound