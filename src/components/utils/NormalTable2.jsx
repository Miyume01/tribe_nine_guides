import React from 'react';

function NormalTable2({ tableData }) {
  // Determine the maximum number of rows among all columns.
  const maxRows = tableData.reduce((max, col) => Math.max(max, col.length), 0);

  return (
      <div className='w-full overflow-x-auto flex justify-center'>
        <div className='min-w-[200px] xl:w-[90%] lg:w-[80%] sm:w-[90%]'>
          <table className='border-collapse w-full'>
            <tbody>
              {Array.from({ length: maxRows }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {tableData.map((column, colIndex) => {
                    const cell = column[rowIndex];
                    return (
                      <td 
                        key={colIndex}
                        className={`${rowIndex == 0 ?
                                  'table-border-col' :
                                  (cell && cell.text !== '' ? 'table-border-row' : '')}
                                  text-center xl:h-18 lg:h-12 md:h-16 h-12 px-4 py-2 lg:px-2
                                  text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem]
                                  font-pixelify`}
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

export default NormalTable2;
