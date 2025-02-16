import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";

const ImageWithModal = ({ src, alt, allowModal = true, isVideo = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  }

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  return (
    <>
    {isVideo ? (
      <video
        src={src}
        controls
        className='cursor-pointer md:w-[27.5rem] md:h-[25rem] mobile:w-[22.5rem] mobile:h-[20rem]'
      />
    ) : (
      <img
        src={src}
        alt={alt || "Image"}
        className={`${allowModal ? 'cursor-pointer' : 'cursor-default'} md:w-[27.5rem] md:h-[25rem] mobile:w-[22.5rem] mobile:h-[20rem] object-cover`}
        onClick={openModal}
      />
    )}

      {allowModal && isModalOpen && !isVideo && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]
            ${isAnimating ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-300`}
          onClick={closeModal}
        >
          <div
            className={`relative bg-transparent rounded-lg flex items-center justify-center
              ${isAnimating ? 'scale-100' : 'scale-90'}
              transition-transform duration-300 max-w-[90vw] max-h-[90vh]`}
            onClick={(e) => e.stopPropagation()}
          >
          <div className="relative flex items-center justify-center mt-20">
            <button
              className="absolute top-2 md:top-2 max-mobile:right-[18%] max-sm:right-24 sm:right-28
                md:right-32 text-white rounded-full text-lg md:text-xl w-7 h-7 md:w-9 md:h-9
                flex items-center justify-center bg-gray-800 hover:bg-gray-600 transition-all"
              id="modal-button"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <img
              src={src}
              alt={alt || "Popup Image"}
              className={`max-w-[70%] max-h-[70%] object-contain
                ${isAnimating ? 'opacity-100' : 'opacity-0'}
                transition-opacity duration-300`}
              id="modal-size"
            />
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default ImageWithModal;
