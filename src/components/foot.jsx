import React from "react";
import { useNavigate } from "react-router-dom";

function Foot(){
    let year = new Date().getFullYear();
    const navigate = useNavigate();

    return(
        <div className="flex flex-col justify-center items-center mt-auto w-full z-10">
            <footer className="text-center mt-6 pt-2 p-2 max-w-full font-pixelify
                            text-xs mobile:text-sm w-[80%] md:w-[70%]
                            max-mobile:w-full text-white bg-black bg-opacity-50 round-footer">
                <div className="flex flex-col md:flex-row flex-wrap items-start justify-start">
                    <p className="py-1 text-start">
                                    Game contents are trademarks and copyrights of Akatsuki Games Inc.
                                    You may not use our content in a way that suggests any affiliation
                                    with or endorsement by Akatsuki Games Inc. or the Tribe Nine franchise.
                    </p>
                </div>
                <p className="text-start p-1">
                    <a href="https://github.com/Miyume01/tribe_nine_guides"
                        className="py-1 text-white hover:text-gray-400 hover:underline hover:underline-offset-4
                                transition duration-150"
                        target="_blank" rel="noopener noreferrer">
                                        Visit our Github for more information.
                    </a>
                </p>
                <p className="text-white text-start"> ⓒ {year} Miyume. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Foot;