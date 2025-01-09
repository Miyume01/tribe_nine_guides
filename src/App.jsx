import React from 'react';
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

function App() {
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
