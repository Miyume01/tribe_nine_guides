import React from 'react';

function DescriptionBlock({descriptionParts = [], setWidth = '440px', centerText = false}) {
  return (
  <p
    className={`md:mx-4 md:p-2 text-sm md:text-lg ${centerText ? 'text-center' : 'lg:text-start md:text-center'}`}
    >
      {descriptionParts.map((part, index) =>
        part.isImage ? (
          <img
            key={index}
            src={part.src}
            alt={part.alt || 'Image'}
            className={`inline-block description-image`}
                // ${part.wMobile ? `w-[${part.wMobile}]` : 'w-[50px]'} h-auto
                // md:${part.wMobile ? `w-[${part.wDesktop}]` : 'w-[50px]'} md:h-auto`}
            style={{
              width: part.wDesktop || '50px',
              height: part.hDesktop || '50px',
            }}
            data-desktop-width={part.wDesktop || '50px'}
          />
        ) : (
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
                      lg:text-start md:text-center`}
        >
          {part.text}
      </span>
    ))}
  </p>
  );
};

export default DescriptionBlock