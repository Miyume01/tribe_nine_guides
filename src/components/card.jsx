import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cardCircle from './cards_format/circle.png';
import cardCircleHover from './cards_format/circleHover.png';

function Card({ title, image, url, id }) {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    function handleCardClick() {
        // navigate(url);
    }

    return (
        <Link className="flex flex-col m-4 max-w-[320px] w-auto h-auto max-h-[280px] text-white p-1 rounded-lg
            hover:cursor-pointer card relative items-center"
            onClick={handleCardClick}
            to={url}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            id={id}
            >
            <div className="w-[100%] max-w-full h-[100%] max-h-full">
                <img
                    src={ isHovered ? cardCircleHover : cardCircle}
                    alt="Background Circle encomprising the enemy card image"
                    className={`absolute -top-1 left-0 object-contain w-[100%] max-w-full h-[80%] max-h-full card-circle`}
                />
                <div className="flex items-center justify-center w-full h-full overflow-hidden">
                    <img
                        src={image}
                        className="relative rounded-lg max-w-full p-2 card-img max-h-full"
                        alt={title}
                    />
                </div>
            </div>
            <div className="flex-grow p-2 mt-2 text-center h-[20%] flex items-center justify-center
                    overflow-hidden text-div">
                {title}
            </div>
        </Link>
    );
}

export default Card;