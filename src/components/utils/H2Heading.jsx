import React from 'react'

function H2Heading({enemyAttack = 'Undefined', tensionEx = false, center = false}) {
    return (
        <h1
            className={`font-orbitron text-lg md:text-xl
            ${enemyAttack === '' ? 'py-[1.1rem]' : ''} w-full`}
            style={{minHeight: '4rem'}}
        >
            <div className={`flex flex-col ${center ? 'items-center' : 'items-start'} py-2`}>
                <span className={`${tensionEx ? 'text-ex-mode' : 'invisible'} text-center`}>
                    Tension EX
                </span>
                <span className='text-center'>{enemyAttack === '' ? '' : enemyAttack}</span>
            </div>
        </h1>
    )
}

export default H2Heading