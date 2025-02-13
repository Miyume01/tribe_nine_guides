// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import faBars from '../bars.svg';
import faTimes from '../cross.svg';
// import tabGlow from '../navbarGlow.png';

function Navbar({ navTabs }){

    const nagivate = useNavigate();
    const location = useLocation();
    const [isSelected, setIsSelected] = useState(navTabs[0].name);
    const [isHovered, setIsHovered] = useState(null);
    const coolEffects = 'transition duration-300 text-logo-blue hover:text-selected-tab';
    const coolEffectsMobile = 'transition duration-300 text-logo-blue hover:text-selected-tab';
    const whenSelected = 'text-ex-mode';
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const matchedTab = navTabs.find((tab) => location.pathname.startsWith(tab.url));
        setIsSelected(matchedTab ? matchedTab.name : navTabs[0].name);
    }, [location.pathname, navTabs]);

    const handleNavigation = (path, selected, event) => {
        // nagivate(path);
        setIsSelected(selected);
        toggleMenu();
    }
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
        <div className='relative w-full font-tiny5 text-[0.8rem] lg:text-lg'>
            <button className={`lg:hidden focus:outline-none relative flex items-center`} onClick={toggleMenu}>
                <img src={isOpen ? faTimes : faBars} className="w-8 h-8 mr-5" alt='Menu Icon'/>
            </button>
            <div className="hidden lg:flex flex-row items-center justify-end flex-wrap
                    relative z-20 text-purple-400 font-semibold">
                {navTabs.map((tab) => (
                    <div className={`relative text-center max-w-64 h-16 flex-shrink
                        ${isSelected === tab.name ? whenSelected : coolEffects}
                        hover:cursor-pointer flex justify-center items-center min-w-40`}>
                        <div className="bg-ex-mode h-8 w-[2px] mx-1 flex-none"></div>
                        <Link
                            key={tab.name}
                            className={`text-center max-w-64 h-16 flex-shrink px-2 py-2
                                        flex justify-center items-center min-w-40 custom-bg`}
                            onClick={() => handleNavigation(tab.url, tab.name)}
                            onMouseEnter={() => setIsHovered(tab.name)}
                            onMouseLeave={() => setIsHovered(null)}
                            to={tab.url}
                        >
                            <div className="flex items-center justify-center w-full gap-4">
                                <button>{tab.label}</button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div
                className={`z-[-1] lg:hidden fixed inset-0 bg-black bg-opacity-50 h-full w-full flex
                        transition-all duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} rounded-lg`}
                onClick={toggleMenu}
                style={{
                    pointerEvents: isOpen ? 'auto' : 'none',
                    }}
                >
                <div
                    className='lg:hidden flex flex-col items-start bg-black text-purple-400 w-[45%] pl-7 pt-16 pb-3
                        space-y-2 h-full rounded-lg font-semibold z-10 justify-start'
                    onClick={(e) => e.stopPropagation()}
                >
                    {navTabs.map((tab) => (
                        <Link
                            key={tab.name}
                            className={`text-start w-full px-2 py-3 flex items-center justify-start ${isSelected === tab.name ? whenSelected : coolEffectsMobile} hover:cursor-pointer`}
                            onClick={() => handleNavigation(tab.url, tab.name)}
                            to={tab.url}
                        >
                            <button className="w-full text-left">{tab.label}</button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Navbar;