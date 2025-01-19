import React from 'react';

function FancyHeading({ text = 'undefined', enableSvg = true }) {
  return (
    <div className="flex items-center gap-2 p-2 my-3 bg-gray-800 bg-opacity-50 rounded-lg">
      <div className="bg-purple-600 h-6 w-1 rounded"></div>
      <div className="flex items-center text-white font-medium text-lg">
        {enableSvg && <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 mr-2 text-white"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 4.25 4.27 8.33 6.33 10.18.39.34.95.34 1.34 0C14.73 17.33 19 13.25 19 9c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 2.27-2.54 5.22-5 7.46C9.54 14.22 7 11.27 7 9c0-2.76 2.24-5 5-5zm0 3a2 2 0 0 0 0 4 2 2 0 0 0 0-4z" />
          </svg>
        }
        {text}
      </div>
    </div>
  );
}

export default FancyHeading;
