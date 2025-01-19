import React from 'react';

function NormalTable({ gridCols = 3, gridGap = 4, tableData }) {
    const gapValue = `${gridGap * 0.25}rem`;

    return (
        <div
        className='text-[10px] md:text-lg'
        style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
            gap: 0,
            margin: '20px',
            marginTop: '20px',
            border: '1px solid white',
        }}
        >
        {tableData.map((column, columnIndex) => (
            <div key={columnIndex}>
                {column.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    style={{
                        border: '1px solid white',
                        padding: '10px',
                        textAlign: 'center',
                        backgroundColor: '#282c34',
                        color: row.textColor || 'white',
                        fontWeight: row.bold ? 'bold' : 'normal',
                        textDecoration: row.underline ? 'underline' : 'normal',
                        fontStyle: row.italic ? 'italic' : 'normal',
                    }}
                >
                    {rowIndex === 0 && row.img && (
                    <img src={row.img} alt={row.alt} style={{ width: '50px', height: '50px' }} />
                    )}
                    <div>{row.text}</div>
                </div>
                ))}
            </div>
        ))}
    </div>
    );
    }

export default NormalTable