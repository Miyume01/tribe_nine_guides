import React from "react";
import GridBlock from "./GridBlock";

function Grid({ gridBlocks = [] }) {
  return (
    <div className={`grid grid-cols-1 ${gridBlocks.length > 1 ? 'md:grid-cols-2' : ''} gap-1 m-2 p-6`}>
      {gridBlocks.map((block, index) => (
        <GridBlock
          key={index}
          enemyAtk={block.enemyAtk}
          tensionEx={block.tensionEx}
          imgSrc={block.imgSrc}
          imgAlt={block.imgAlt}
          center={block.center}
          description={block.description}
        />
      ))}
    </div>
  );
};

export default Grid;
