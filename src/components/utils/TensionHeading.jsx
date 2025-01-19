import React from 'react'

function TensionHeading({ tensionText = 'Tension EX'}) {
    return (
        <h1
            className={`font-orbitron text-xl mt-4
            py-[1.1rem]`}
        >
            <div className='flex flex-col items-start pl-6 text-ex-mode'>
                {tensionText}
            </div>
        </h1>
    )
}

export default TensionHeading