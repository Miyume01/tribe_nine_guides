import React from 'react';

function NormalTable2WithImg({ tableData }) {
    // Determine the maximum number of rows among all columns.
    const maxRows = tableData.reduce((max, col) => Math.max(max, col.length), 0);

    return (
        <div className='w-full overflow-x-auto flex justify-center mt-[1.25rem]'>
            <div className='min-w-[200px] xl:w-[90%] lg:w-[80%] sm:w-[90%] py-4'>
                <table className='border-collapse w-full'>
                    <tbody>
                        {Array.from({ length: maxRows }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {tableData.map((column, colIndex) => {
                                    const cell = column[rowIndex];
                                    return rowIndex == 0 ? (
                                        <td
                                            key={colIndex}
                                            className={`${cell && cell.text !== '' ? 'table-border-col' : ''}
                                                text-center xl:h-18 lg:h-12 md:h-16 h-12 p-4 lg:px-2
                                                text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem]
                                                font-roboto`}
                                        >
                                            {cell ? (
                                                <div className='flex flex-col items-center'>
                                                    {cell.text && cell.text}
                                                    {cell.img &&
                                                    <img
                                                        src={cell.img}
                                                        alt={cell.alt}
                                                        className='w-8 h-8 m-4 md:w-16 md:h-16 md:m-4'
                                                    />}
                                                </div>
                                            ) : ''}
                                        </td>
                                    ) : (
                                        <td
                                            key={colIndex}
                                            className={`${cell && cell.text !== '' ? 'table-border-row' : ''}
                                                text-center xl:h-18 lg:h-12 md:h-16 h-12 p-4  lg:px-2
                                                text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem]
                                                font-roboto`}
                                        >
                                            {cell ? cell.text : ''}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default NormalTable2WithImg