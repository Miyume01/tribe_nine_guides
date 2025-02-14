import React from 'react';
import HorizontalLine from './HorizontalLine';
function FancyTable({ tableData, gridCols = 3, gridGap = 4, setBgColor = false, hBgColor = '#FFFFFF',
                    lineWidth='60%', lineWidthHead='100%',}) {
    const gapValue = `${gridGap * 0.25}rem`;
  return (
    <div className='rankup-mats-grid' data-cols={gridCols} >
        {tableData.map((column, columnIndex) => (
            <div
                key={columnIndex}
                className='flex flex-col items-center border border-gray-300 p-1 md:p-2 rounded-lg shadow-md
                    text-[10px] md:text-lg justify-start'
            >
                {/* ${row.text != 'Impaling Dragon Claws' ? 'mb-4 mt-3' : ''} */}
                {column.map((row, rowIndex) =>(
                    <React.Fragment key={rowIndex}>
                        {rowIndex == 0 ? (
                            <div className={`text-center font-roboto rounded-sm w-full h-16
                                            flex flex-col items-center justify-center`}
                            style={{
                                color: row.textColor || 'white',
                                fontWeight: row.bold ? 'bold' : 'normal',
                                textDecoration: row.underline ? 'underline' : 'normal',
                                fontStyle: row.italic ? 'italic' : 'normal',
                                backgroundColor: setBgColor ? hBgColor : '',
                                }}
                            >
                            {row.text}</div>
                        ) : (
                            <div className='w-full flex flex-col justify-center items-center h-14'
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

                        {rowIndex !== column.length - 1 && rowIndex == 0 ?
                        (
                            <HorizontalLine width={lineWidthHead} marginTop='0px'/>
                        ) : (
                            <HorizontalLine width={lineWidth} marginTop='0px'/>
                        )}
                    </React.Fragment>
                ))}
            </div>
        ))}
    </div>
    );
}

export default FancyTable