import React from 'react';

function NormalTable2({ tableData }) {
  // Determine the maximum number of rows among all columns.
  const maxRows = tableData.reduce((max, col) => Math.max(max, col.length), 0);

  return (
    <table style={{ width: '95%', borderCollapse: 'collapse' }}>
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
                            text-center h-16
                            text-[0.8rem] lg:text-lg
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
  );
}

export default NormalTable2;
