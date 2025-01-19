import React from 'react';
import HorizontalLine from './HorizontalLine';
function FancyTable({ tableData, gridCols = 3, gridGap = 4 }) {
    const gapValue = `${gridGap * 0.25}rem`;
  return (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
            gap: gapValue,
            margin: '1.25rem',
            marginTop: '1.25rem',
        }}>
        {tableData.map((column, columnIndex) => (
            <div
                key={columnIndex}
                className='flex flex-col items-center border border-gray-300 p-2 md:p-4 rounded-lg shadow-md
                    text-[10px] md:text-lg'
            >
                {column.map((row, rowIndex) =>(
                    <React.Fragment key={rowIndex}>
                        {rowIndex == 0 ? (
                            <div className='text-center font-roboto'
                            style={{
                                color: row.textColor || 'white',
                                fontWeight: row.bold ? 'bold' : 'normal',
                                textDecoration: row.underline ? 'underline' : 'normal',
                                fontStyle: row.italic ? 'italic' : 'normal'
                                }}
                            >
                            {row.text}</div>
                        ) : (
                            <div className='mb-3'
                            style={{
                                color: row.textColor,
                                fontWeight: row.bold ? 'bold' : 'normal',
                                textDecoration: row.underline ? 'underline' : 'normal',
                                fontStyle: row.italic ? 'italic' : 'normal'
                                }}
                            >
                            {row.text}</div>
                        )}

                        {row.img && (
                            <img src={row.img} alt={row.alt} className='w-8 h-8 m-4 md:w-16 md:h-16 md:m-4' />
                        )}

                        {rowIndex !== column.length - 1 && (
                            <HorizontalLine />
                        )}
                    </React.Fragment>
                ))}
            </div>
        ))}
    </div>
    );
}

export default FancyTable