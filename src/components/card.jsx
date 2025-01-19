import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Card({ title, image, url, id }) {
    const navigate = useNavigate();

    function handleCardClick() {
        // navigate(url);
    }

    return (
        <Link className="flex flex-col m-4 w-full max-w-[200px] h-auto max-h-[300px] text-white p-1 rounded-lg
            hover:cursor-pointer hover:shadow-card hover:shadow-gray-500 card overflow-hidden"
            onClick={handleCardClick}
            to={url}
            >
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
        </Link>
    );
}

export default Card;