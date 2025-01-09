import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ title, image, url, id }) {
    const navigate = useNavigate();

    function handleCardClick() {
        navigate(url);
    }

    return (
        <div className="flex flex-col m-4 w-full max-w-[200px] h-auto max-h-[300px] text-white p-1 rounded-lg
            hover:cursor-pointer hover:shadow-card hover:shadow-gray-500 card overflow-hidden"
            onClick={handleCardClick}>
            <img
                src={image}
                className="rounded-lg mb-2 w-full p-2 card-img"
                alt={title}
                id={id}
            />
            <div className="flex-grow p-2 text-center h-[50%] flex items-center justify-center
                    overflow-hidden">
                {title}
            </div>
        </div>
    );
}

export default Card;