import React from 'react'

function H1Heading({enemyName = 'Undefined Enemy Name'}) {
  return (
    <h1 className='font-roboto text-md sm:text-xl md:text-3xl mt-8 md:mt-4 py-1 items-center'>
      {enemyName}
    </h1>
  )
}

export default H1Heading