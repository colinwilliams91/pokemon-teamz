import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Profile</Link>
        </li>
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
        <li>
          <Link to="/marketPlace">Market Place</Link>
        </li>
        <li>
          <Link to="/pokedex">Poke-dex</Link>
        </li>
        <li>
          <Link to="/collection">Collection</Link>
        </li>
        <li>
          <Link to="/leaderBoard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/pokeTypes">PokeTypes</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
);

export default Layout;
