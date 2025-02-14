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
        className='cursor-pointer md:w-[440px] md:h-[440px]'
      />
    ) : (
      <img
        src={src}
        alt={alt || "Image"}
        className={`${allowModal ? 'cursor-pointer' : 'cursor-default'} md:w-[440px] md:h-[400px]`}
        onClick={openModal}
      />
    )}

      {allowModal && isModalOpen && !isVideo && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50
            ${isAnimating ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-300`}
          onClick={closeModal}
        >
          <div
            className={`relative bg-transparent rounded-lg flex items-center justify-center
              ${isAnimating ? 'scale-100' : 'scale-90'}
              transition-transform duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 md:top-3 md:right-3 text-white p-1 rounded-lg text-sm md:text-lg h-6 w-6 md:w-8 md:h-8 flex
                items-center justify-center bg-gray-600 hover:bg-black"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* max-w-full max-h-full object-contain */}
            <img
              src={src}
              alt={alt || "Popup Image"}
              className={`w-[729px] h-[729px]
                ${isAnimating ? 'opacity-100' : 'opacity-0'}
                transition-opacity duration-300`}
              id='modal-size'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageWithModal;
