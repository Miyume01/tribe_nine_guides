import React from 'react';

function DescriptionBlock({descriptionParts = [], setWidth = '440px'}) {
  return (
  <p
    className='mx-4 p-2 text-sm md:text-lg text-center'
    style={{
      width: setWidth,
    }}
    >
      {descriptionParts.map((part, index) => (
        <span
          key={index}
          className={`${part.underlineText ? 'underline underline-offset-4' : ''}
                      ${part.normalText ? 'text-white' : ''}
                      ${part.blueText ? 'text-logo-blue' : ''}
                      ${part.tensionText ? 'text-ex-mode' : ''}
                      ${part.redText ? 'text-red-500' : ''}
                      ${part.boldText ? 'font-bold' : ''}
                      ${part.italicText? 'italic' : ''}
                      ${part.semiBoldText? 'font-semibold' : ''}
                      ${part.italicText? 'italic' : ''}
                    `}
        >
          {part.text}
      </span>
    ))}
  </p>
  );
};

export default DescriptionBlock