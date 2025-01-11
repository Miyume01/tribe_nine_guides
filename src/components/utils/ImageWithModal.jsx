import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";

const ImageWithModal = ({ src, alt }) => {
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
      {/* Thumbnail Image */}
      <img
        src={src}
        alt={alt || "Image"}
        className="cursor-pointer w-[440px] h-[400px]"
        onClick={openModal}
      />

      {/* Modal */}
      {isModalOpen && (
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
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white p-1 rounded-lg w-8 text-sm h-8"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Modal Image */}
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
