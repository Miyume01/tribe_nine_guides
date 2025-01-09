import React from "react";
import { useNavigate } from "react-router-dom";

function Logo(){

    const nagivate = useNavigate();
    const handleLogoClick = () => {
        nagivate('/homepage');
    };

    return(
        <div className="max-w-28 h-auto flex justify-center items-center md:justify-end md:items-end">
            <div onClick={handleLogoClick} className="cursor-pointer font-tiny5 text-[1.4rem] text-logo-blue
                font-bold">
            {/* <img src={LogoImg} alt="Website Logo" border="0" className="h-14 w-14 my-2"/> */}
                Trash Tribe
            </div>
        </div>
    )
}

export default Logo;