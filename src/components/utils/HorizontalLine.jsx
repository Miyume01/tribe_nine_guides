import React from 'react';

function HorizontalLine({ color = 'gray-500', height = '2px', opacity = 50, marginTop = 'mt-4', marginBottom = 'md:mb-6', width = '80%' }) {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: `rgba(${getColorValue(color)}, ${opacity / 100})`,
      }}
      className={`${marginTop} mx-auto ${marginBottom}`}
    />
  );
}

const getColorValue = (color) => {
  const colors = {
    'gray-500': '128, 128, 128',
    'red-500': '255, 0, 0',
    'blue-500': '0, 0, 255',
  };
  return colors[color] || '255, 255, 255'; // default: white
};

export default HorizontalLine;