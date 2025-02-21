import React from 'react'

function H1Heading({enemyName = 'Undefined Enemy Name'}) {
  return (
    <h1 className='font-pixelify text-2xl sm:text-3xl md:text-4xl mt-8 md:mt-4 py-1 items-center'>
      {enemyName}
    </h1>
  )
}

export default H1Heading