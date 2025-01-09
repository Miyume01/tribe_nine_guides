import React from 'react'

function H2Heading({enemyAttack = 'Undefined', tensionEx = false}) {
    return (
        <h1 className={`font-orbitron text-xl mt-4 py-1
            ${tensionEx ? 'text-ex-mode' : 'text-white'}
            ${enemyAttack === '' ? 'py-[1.1rem]' : ''}`}>
            {enemyAttack === '' ? '' : enemyAttack}
        </h1>
    )
}

export default H2Heading