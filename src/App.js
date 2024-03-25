import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Box from './Box';
import Hierchy from './Hierchy';
import InfiniteScroll from './InfiniteScroll';
import Game from './Game';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/box">box</Link>
          </li>
          <li>
            <Link to="/hierchy">Hierchy</Link>
          </li>
          <li>
            <Link to="/scroll">Scroll</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/box" element={<Box />} />
        <Route path="/hierchy" element={<Hierchy />} />
        <Route path="/scroll" element={<InfiniteScroll />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
