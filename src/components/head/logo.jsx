import React from "react";
import { useNavigate } from "react-router-dom";
import Cactus from '../logoLeft.png';
import Pudding from '../logoRight.png';

function Logo(){

    const nagivate = useNavigate();
    const handleLogoClick = () => {
        nagivate('/homepage');
    };

    return(
        <div className="max-w-80 lg:w-80 h-auto flex justify-center items-center lg:justify-start lg:items-center">
            <img src={Cactus} alt="Q's cactus on left side of website name"
                className="w-6 lg:w-7 h-auto"/>
            <div onClick={handleLogoClick} className="cursor-pointer font-tiny5 md:text-[1.4rem]
                font-bold bg-gradient-left-right bg-clip-text text-transparent px-2">
                TRASH TRIBE
            </div>
            <img src={Pudding} alt="Tsuki's pudding on right side of website name"
                className="w-6 lg:w-7 h-auto"/>
        </div>
    )
}

export default Logo;