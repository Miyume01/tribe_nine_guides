import React from 'react';

function FancyTable2({ 
  tableData, 
  gridCols = 3, 
  lineWidth = '60%',    // unused in this approach but kept for legacy reasons
  lineWidthHead = '100%'  // unused here as well
}) {
  return (
    <div
      className="grid w-full px-4"
      style={{
        gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
        gap: 0,
        margin: 0,
      }}
    >
      {tableData.map((column, colIndex) => (
        <div
          key={colIndex}
          className="flex flex-col text-[10px] md:text-lg font-pixelify
                    shadow-md "
        >
          {column.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {rowIndex === 0 ? (
                <div 
                  className="h-16 flex items-center justify-center
                            table-border-col mt-1 mb-1"
                  style={{
                    color: row.textColor || 'white',
                    fontWeight: row.bold ? 'bold' : 'normal',
                    textDecoration: row.underline ? 'underline' : 'none',
                    fontStyle: row.italic ? 'italic' : 'normal',
                  }}
                >
                  {row.text}
                </div>
              ) : (
                <div 
                  className="h-14 flex items-center justify-center
                            table-border-row"
                  style={{
                    color: row.textColor,
                    fontWeight: row.bold ? 'bold' : 'normal',
                    textDecoration: row.underline ? 'underline' : 'none',
                    fontStyle: row.italic ? 'italic' : 'normal'
                  }}
                >
                  {row.text}
                </div>
              )}
              {row.img && (
                <img 
                  src={row.img} 
                  alt={row.alt || 'Image'} 
                  className="w-8 h-8 md:w-16 md:h-16"
                  style={{ display: 'block' }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FancyTable2;
