import React from "react";
import { useNavigate } from "react-router-dom";

function Foot(){
    let year = new Date().getFullYear();
    const navigate = useNavigate();

    return(
    <div className="">
        <footer className="footer relative text-center mt-6 pb-10 bottom-0 w-full
                        flex flex-col justify-start items-start ml-20 font-serif">
            <div className="pb-4 flex flex-col md:flex-row flex-wrap">
                <p className="py-1 text-gray-400">
                                This is an unofficial database website for Tribe Nine players.
                                Game contents are trademarks and copyrights of Akatsuki Games Inc.
                </p>
                <p className="py-1 text-gray-400">
                                You may not use our content in a way that suggests any affiliation
                                with or endorsement by Akatsuki Games Inc. or the Tribe Nine franchise.
                </p>
            </div>
            <a href="https://github.com/Miyume01/tribe_nine_guides"
                className="py-1 text-gray-400 hover:text-gray-200 hover:underline hover:underline-offset-4
                        transition duration-150"
                target="_blank" rel="noopener noreferrer">
                                Visit our Github for more information.
            </a>
            <p className="text-gray-400"> ⓒ {year} Miyume. All rights reserved.</p>
        </footer>
    </div>
    )
}

export default Foot;