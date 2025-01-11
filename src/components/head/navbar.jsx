import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Navbar(){

    const nagivate = useNavigate();
    const location = useLocation();
    const [isSelected, setIsSelected] = useState('HomePage');
    // const coolEffects = 'nav nav-enter transition duration-500 hover:text-white';
    const coolEffects = 'transition duration-300 text-ex-mode hover:text-selected-tab';
    // const coolEffectsMobile = 'nav-mobile nav-enter-mobile transition duration-500 hover:text-white';
    const coolEffectsMobile = 'transition duration-300 text-ex-mode hover:text-selected-tab';
    // const whenSelected = 'bg-gray-300 text-black';
    const whenSelected = 'text-selected-tab';
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     if (location.pathname.startsWith('/homepage')) {
    //         setIsSelected('HomePage');
    //     } else if (location.pathname.startsWith('/holograms')) {
    //         setIsSelected('Holograms');
    //     } else if (location.pathname.startsWith('/monsters-types')) {
    //         setIsSelected('CompatibleMonsters');
    //     } else if (location.pathname.startsWith('/rank-up-materials')) {
    //         setIsSelected('RankUpMaterials');
    //     } else if (location.pathname.startsWith('/enemies')) {
    //         setIsSelected('Enemies');
    //     } else {
    //         setIsSelected('HomePage');
    //     }
    // }, [location.pathname]);

    useEffect(() => {
        const pathMap = {
            '/homepage': 'HomePage',
            '/holograms': 'Holograms',
            '/compatible-monsters': 'CompatibleMonsters',
            '/rank-up-materials': 'RankUpMaterials',
            '/enemies': 'Enemies'
        };
    
        const matchedKey = Object.keys(pathMap).find((key) => location.pathname.startsWith(key));
        setIsSelected(matchedKey ? pathMap[matchedKey] : 'HomePage');
    }, [location.pathname]);

    const handleNavigation = (path, selected) => {
        nagivate(path);
        setIsSelected(selected);
        toggleMenu();
    }
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
        <div className='relative w-full font-tiny5 text-xl'>
            <button className={`text-white text-2xl md:hidden focus:outline-none relative h-full`} onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
            <div className="hidden md:flex flex-row items-center justify-end px-10 text-md
                    mr-2 flex-wrap relative z-20 text-purple-400 font-semibold">
                <div className={`text-center w-36 px-2 py-5 flex-shrink ${ isSelected==='HomePage' ? whenSelected : coolEffects}
                        hover:cursor-pointer`} onClick={() => handleNavigation('/homepage', 'HomePage')}>
                            <button>
                                Homepage
                            </button>
                </div>
                <div className={`text-center w-36 px-2 py-5 flex-shrink ${ isSelected==='Holograms' ? whenSelected : coolEffects}
                        hover:cursor-pointer`} onClick={() => handleNavigation('/holograms', 'Holograms')}>
                            <button>
                                Holograms
                            </button>
                </div>
                <div className={`text-center w-36 px-2 py-2 flex-shrink ${ isSelected==='CompatibleMonsters' ? whenSelected : coolEffects}
                        hover:cursor-pointer`} onClick={() => handleNavigation('/compatible-monsters', 'CompatibleMonsters')}>
                            <button>
                                Compatible Monsters
                            </button>
                </div>
                <div className={`text-center w-36 px-2 py-5 flex-shrink ${ isSelected==='RankUpMaterials' ? whenSelected : coolEffects}
                        hover:cursor-pointer`} onClick={() => handleNavigation('/rank-up-materials', 'RankUpMaterials')}>
                            <button>
                                Rank-up Mats
                            </button>
                </div>
                <div className={`text-center w-36 px-2 py-5 flex-shrink ${ isSelected==='Enemies' ? whenSelected : coolEffects}
                        hover:cursor-pointer`} onClick={() => handleNavigation('/enemies', 'Enemies')}>
                            <button>
                                Enemies
                            </button>
                </div>
            </div>
            <div className={`z-[-1] md:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm h-screen w-screen flex
                        transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} rounded-lg`}>
                <div className='md:hidden flex flex-col items-start bg-black text-purple-400 w-1/3 pl-7 pr-5 pt-16 pb-3
                        space-y-2 h-full rounded-lg font-semibold z-10'>
                    <div className={`text-start w-full px-2 py-2 ${isSelected === 'HomePage' ? whenSelected : coolEffectsMobile} hover:cursor-pointer`}
                        onClick={() => handleNavigation('/homepage', 'HomePage')}>
                        <button>Homepage</button>
                    </div>
                    <div className={`text-start w-full px-2 py-2 ${isSelected === 'Holograms' ? whenSelected : coolEffectsMobile} hover:cursor-pointer`}
                        onClick={() => handleNavigation('/holograms', 'Holograms')}>
                            <button>Holograms</button>
                    </div>
                    <div className={`text-start w-full px-2 py-2 ${isSelected === 'CompatibleMonsters' ? whenSelected : coolEffectsMobile} hover:cursor-pointer`}
                        onClick={() => handleNavigation('/compatible-monsters', 'CompatibleMonsters')}>
                            <button>Compatible Monsters</button>
                    </div>
                    <div className={`text-start w-full px-2 py-2 ${isSelected === 'RankUpMaterials' ? whenSelected : coolEffectsMobile} hover:cursor-pointer`}
                        onClick={() => handleNavigation('/rank-up-materials', 'RankUpMaterials')}>
                            <button>Rank Up Monsters</button>
                    </div>
                    <div className={`text-start w-full px-2 py-2 ${isSelected === 'Enemies' ? whenSelected : coolEffectsMobile} hover:cursor-pointer`}
                        onClick={() => handleNavigation('/enemies', 'Enemies')}>
                        <button>Enemies</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;