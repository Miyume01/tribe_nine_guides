import React from "react";
import GridBlock from "./GridBlock";

function Grid({ gridBlocks = [] }) {
  return (
    <div className={`grid ${gridBlocks.length === 1 ? 'place-items-center' : 'grid-cols-1 md:grid-cols-2'} gap-4 m-2 p-6`}>
      {gridBlocks.map((block, index) => (
        <GridBlock
          key={index}
          enemyAtk={block.enemyAtk}
          tensionEX={block.tensionEX}
          imgSrc={block.imgSrc}
          imgAlt={block.imgAlt}
          description={block.description}
        />
      ))}
    </div>
  );
};

export default Grid;
