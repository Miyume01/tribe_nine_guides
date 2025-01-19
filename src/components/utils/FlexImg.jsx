import React from 'react'
import ImageWithModal from './ImageWithModal'

function FlexImg({imgData = {}}) {
  return (
    <div className='flex flex-col items-center justify-center'>
        {imgData.map((data, index) => (
            <ImageWithModal
                key = {index}
                src={data.src}
                alt={data.alt}
            />
        ))}
    </div>
  )
}

export default FlexImg