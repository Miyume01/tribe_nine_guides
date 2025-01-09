import React from 'react'

function H1Heading({enemyName = 'Undefined Enemy Name'}) {
  return (
    <h1 className='font-orbitron text-3xl mt-4 py-1'>
      {enemyName}
    </h1>
  )
}

export default H1Heading