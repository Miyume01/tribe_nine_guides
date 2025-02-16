import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Card({ title, image, url, id }) {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    function handleCardClick() {
        // navigate(url);
    }

    return (
        <Link className="flex flex-col m-1 mb-2 xl:w-[15rem] lg:w-[12.5rem] sm:w-[10.6rem]
                max-sm:w-auto w-full h-full xl:h-[16.2rem]
                lg:h-[15rem] md:h-[12.5rem] sm:h-[12.5rem] mobile:h-auto text-white md:rounded-lg
                rounded-md hover:cursor-pointer card relative items-center transition-transform
                duration-300 ease-in-out hover:scale-105 card-container"
            onClick={handleCardClick}
            to={url}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            id={id}
            >
            <div className={`flex items-center justify-center w-full h-[75%]
                    card-image-container ${isHovered ? "hovered" : ""} overflow-hidden`}>
                <img
                    src={image}
                    className="p-2 card-img object-contain"
                    alt={title}
                />
            </div>
            <div className="p-1 min-mobile:h-[25%] h-[35%] w-full flex items-start justify-center
                    max-sm:text-[0.7rem] md:text-md lg:text-lg text-ellipsis overflow-hidden">
                {title}
            </div>
        </Link>
    );
}

export default Card;