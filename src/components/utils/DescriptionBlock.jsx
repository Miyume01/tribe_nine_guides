import React from 'react';

function DescriptionBlock({descriptionParts = []}) {
  return (
  <p className='m-1 pb-2 text-lg'>
      {descriptionParts.map((part, index) => (
        <span
          key={index}
          className={`${part.underlineText ? 'decoration-white underline underline-offset-4' : ''}
                      ${part.normalText ? 'text-white' : ''}
                      ${part.blueText ? 'text-logo-blue' : ''}
                      ${part.tensionText ? 'text-ex-mode' : ''}
                      ${part.boldText ? 'font-bold' : ''}
                      ${part.italicText? 'italic' : ''}
                      ${part.semiBoldText? 'font-semibold' : ''}
                    `}
        >
          {part.text}
      </span>
    ))}
  </p>
  );
};

export default DescriptionBlock