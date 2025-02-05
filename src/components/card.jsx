import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cardCircle from './cards_format/circle.svg';

function Card({ title, image, url, id }) {
    const navigate = useNavigate();

    function handleCardClick() {
        // navigate(url);
    }

    return (
        <Link className="flex flex-col m-4 max-w-[180px] w-auto h-auto max-h-[240px] text-white p-1 rounded-lg
            hover:cursor-pointer hover:shadow-card hover:shadow-gray-500 card relative"
            onClick={handleCardClick}
            to={url}
            >
            <img
                src={cardCircle}
                alt="Background Circle encomprising the enemy card image"
                className="absolute -top-1 left-0 object-contain w-[100%] max-w-full h-[80%] max-h-full opacity-50"
            />
            <img
                src={image}
                className="relative rounded-lg mb-2 w-auto max-w-full p-2 card-img h-auto max-h-full"
                alt={title}
                id={id}
            />
            <div className="flex-grow p-2 text-center h-[30%] flex items-center justify-center
                    overflow-hidden">
                {title}
            </div>
        </Link>
    );
}

export default Card;