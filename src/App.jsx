import React, { useEffect } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CompMonsters from "./components/compMonsters";
import Enemies from "./components/enemies";
import CheerzySpeed from './components/enemies/CheerzySpeed';
import DeathPenalty from './components/enemies/DeathPenalty';
import Endrone from './components/enemies/Endrone';
import LaserDrone from './components/enemies/LaserDrone';
import Mameeze from './components/enemies/Mameeze';
import MinionInWhiteDefender from './components/enemies/MinionInWhiteDefender';
import MinionInWhiteDoubleSpeed from './components/enemies/MinionInWhiteDoubleSpeed';
import OrbDrone from './components/enemies/OrbDrone';
import Scheeze from './components/enemies/Scheeze';
import Shark from './components/enemies/Shark';
import ShinagawaTribeBatter from './components/enemies/ShinagawaTribeBatter';
import ShinagawaTribeHammer from './components/enemies/ShinagawaTribeHammer';
import ShinagawaTribeRider from './components/enemies/ShinagawaTribeRider';
import Holograms from "./components/holograms";
import HomePage from "./components/homepage";
import Layout from './components/layout';
import NotFound from "./components/notFound";
import RankUpMats from "./components/rankUpMats";
import { convertPercentageToPx } from './components/utils/converter';

function App() {

  useEffect(() => {
    // Run the function on mount
    convertPercentageToPx();

    // Attach resize event listener
    window.addEventListener("resize", convertPercentageToPx);

    // Cleanup function to remove event listener on unmount
    return () => {
        window.removeEventListener("resize", convertPercentageToPx);
    };
  }, []);

  useEffect(() => {
    const checkiOS = async () => {
      let isIOS = false;

      if (navigator.userAgentData) {
        // Check for iOS in the new `userAgentData`
        const platform = await navigator.userAgentData.platform;
        isIOS = platform && platform.toLowerCase().includes("ios");
      } else {
        // Fallback: Check in the older `userAgent`
        isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      }

      if (isIOS) {
        document.documentElement.classList.add("ios-fix");
      }
    };

    checkiOS();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/homepage" />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="holograms" element={<Holograms />} />
          <Route path="compatible-monsters" element={<CompMonsters />} />
          <Route path="rank-up-materials" element={<RankUpMats />} />
          <Route path="enemies" element={<Enemies />}>
            {/* Nested routes for enemy details */}
            <Route path="cheerzy-speed" element={<CheerzySpeed />} />
            <Route path="laser-drone" element={<LaserDrone />} />
            <Route path="orb-drone" element={<OrbDrone />} />
            <Route path="shinagawa-tribe-hammer" element={<ShinagawaTribeHammer />} />
            <Route path="shinagawa-tribe-rider" element={<ShinagawaTribeRider />} />
            <Route path="shinagawa-tribe-batter" element={<ShinagawaTribeBatter />} />
            <Route path="minion-in-white-defender" element={<MinionInWhiteDefender />} />
            <Route path="minion-in-white-double-speed" element={<MinionInWhiteDoubleSpeed />} />
            <Route path="scheeze" element={<Scheeze/>} />
            <Route path="mameeze" element={<Mameeze/>} />
            <Route path="endrone" element={<Endrone />} />
            <Route path="shark" element={<Shark />} />
            <Route path="death-penalty" element={<DeathPenalty />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
