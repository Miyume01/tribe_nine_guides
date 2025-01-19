import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar({ navTabs }){

    const nagivate = useNavigate();
    const location = useLocation();
    const [isSelected, setIsSelected] = useState(navTabs[0].name);
    const coolEffects = 'transition duration-300 text-ex-mode hover:text-selected-tab';
    const coolEffectsMobile = 'transition duration-300 text-ex-mode hover:text-selected-tab';
    const whenSelected = 'text-selected-tab';
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
        <div className='relative w-full font-tiny5 text-lg md:text-xl'>
            <button className={`text-white text-lg md:text-2xl md:hidden focus:outline-none relative h-full`} onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
            <div className="hidden md:flex flex-row items-center justify-end px-10 text-sm
                    md:text-md mr-2 flex-wrap relative z-20 text-purple-400 font-semibold">
                {navTabs.map((tab) => (
                    <Link
                        key={tab.name}
                        className={`text-center w-36 px-2 py-5 flex-shrink ${
                            isSelected === tab.name ? whenSelected : coolEffects
                        } hover:cursor-pointer`}
                        onClick={() => handleNavigation(tab.url, tab.name)}
                        to={tab.url}
                    >
                        <button>{tab.label}</button>
                    </Link>
                ))}
            </div>
            <div
                className={`z-[-1] md:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm h-screen w-screen flex
                        transition-all duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} rounded-lg`}
                onClick={toggleMenu}
                style={{
                    pointerEvents: isOpen ? 'auto' : 'none',
                    }}
                >
                <div
                    className='md:hidden flex flex-col items-start bg-black text-purple-400 w-1/3 pl-7 pr-5 pt-16 pb-3
                        space-y-2 h-full rounded-lg font-semibold z-10 justify-start'
                    onClick={(e) => e.stopPropagation()}
                >
                    {navTabs.map((tab) => (
                        <Link
                            key={tab.name}
                            className={`text-start w-full px-4 py-3 flex items-center justify-start ${isSelected === tab.name ? whenSelected : coolEffectsMobile} hover:cursor-pointer`}
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