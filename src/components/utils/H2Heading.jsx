import React from 'react'

function H2Heading({enemyAttack = 'Undefined', tensionEx = false, center = false, underlineText = false}) {
    return (
        <h2
            className={`font-pixelify text-xl sm:text-2xl
            ${enemyAttack === '' ? 'py-[1.1rem]' : ''} w-full`}
            style={{minHeight: '4rem'}}
        >
            <div className={`flex flex-col ${center ? 'items-center' : 'lg:items-start md:items-center'} py-2`}>
                <span className={`${tensionEx ? 'text-ex-mode' : 'invisible'} text-center`}>
                    Tension EX:
                </span>
                <span className={`text-center`}>{enemyAttack === '' ? '' : enemyAttack}</span>
            </div>
        </h2>
    )
}

export default H2Heading