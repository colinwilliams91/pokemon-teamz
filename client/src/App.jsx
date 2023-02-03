import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const NavBar = lazy(() => import('./NavBar.jsx'));
const Profile = lazy(() => import('./components/userProfiles/profile.jsx'));
const NonUserProf = lazy(() => import('./components/userProfiles/nonUserProf.jsx'));

const Collection = lazy(() => import('./components/cardCollection/collection.jsx')); // working?
const MarketPlace = lazy(() => import('./components/marketPlace/marketPlace.jsx'));
const Pokedex = lazy(() => import('./components/pokedex/Pokedex.jsx'));
const Inbox = lazy(() => import('./components/Messages/Inbox.jsx'));
const Compose = lazy(() => import('./components/Messages/Compose.jsx'));
const LeaderBoard = lazy(() => import('./LeaderBoard.jsx'));
const PokeTypes = lazy(() => import('./PokeTypes.jsx'));
const BattleView = lazy(() => import('./components/BattleView.jsx'));


const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='inbox' element={<Inbox />} />
        <Route path='compose:id' element={<Compose />} />
        <Route path='marketPlace' element={<MarketPlace />} />
        <Route path='pokedex' element={<Pokedex />} />
        <Route path='collection' element={<Collection />} />
        <Route path='userProfile:id' element={<NonUserProf />} />
        <Route path='leaderBoard' element={<LeaderBoard />} />
        <Route path='pokeTypes' element={<PokeTypes />} />
        <Route path="battler" element={<BattleView />}/>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);




export default App;

