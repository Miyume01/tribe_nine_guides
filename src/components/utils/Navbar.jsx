// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import faBars from '../bars.svg';
import faTimes from '../cross.svg';

function Navbar({ navTabs }){

    const nagivate = useNavigate();
    const location = useLocation();
    const [isSelected, setIsSelected] = useState(navTabs[0].name);
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
        <div className='relative w-full font-tiny5 text-md lg:text-md'>
            <button className={`lg:hidden focus:outline-none relative flex items-center`} onClick={toggleMenu}>
                {/* <FontAwesomeIcon icon={isOpen ? faTimes : faBars} /> */}
                <img src={isOpen ? faTimes : faBars} className="w-6 h-6" alt='Menu Icon'/>
            </button>
            <div className="hidden lg:flex flex-row items-center justify-end px-2 mr-2 flex-wrap
                    relative z-20 text-purple-400 font-semibold">
                {navTabs.map((tab) => (
                    <Link
                        key={tab.name}
                        className={`text-center lg:w-36 px-2 py-2 flex-shrink ${
                            isSelected === tab.name ? whenSelected : coolEffects
                        } hover:cursor-pointer`}
                        onClick={() => handleNavigation(tab.url, tab.name)}
                        to={tab.url}
                    >
                        <div className="flex items-center justify-around">
                            <div className="bg-ex-mode h-8 w-1 rounded"></div>
                            <button>{tab.label}</button>
                        </div>
                    </Link>
                ))}
            </div>
            <div
                className={`z-[-1] lg:hidden fixed inset-0 bg-black bg-opacity-50 h-screen w-screen flex
                        transition-all duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} rounded-lg`}
                onClick={toggleMenu}
                style={{
                    pointerEvents: isOpen ? 'auto' : 'none',
                    }}
                >
                <div
                    className='lg:hidden flex flex-col items-start bg-black text-purple-400 w-1/3 pl-7 pr-5 pt-16 pb-3
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