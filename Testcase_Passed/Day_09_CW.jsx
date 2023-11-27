/*
  🎯 Day 9 CW

  Files to change:
    - Navbar.js 
    - Album.js
    - Home.js
    - Singer.js
    - App.js

  Steps to follow:
    - cd reactapp
    - npm install
    - npm i react-router-dom
    - Copy/Paste these files
    - npm start

  That's all 👍
*/

// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/singers">Singers</Link>
      <Link to="/albums">Albums</Link>
    </div>
  );
}

export default Navbar;


// Album.js

import React from 'react';

function Album() {
  const albums = [
    { name: 'Album 1', singer: 'Singer 1' },
    { name: 'Album 2', singer: 'Singer 2' },
  ];

  return (
    <div>
      <h2>List of Albums</h2>
      <ul>
        {albums.map((album, index) => (
          <li key={index}>
            {album.name} - {album.singer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Album;


// Home.js

import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to Music World</h1>
      <p>This is the landing page for our Music World SPA.</p>
    </div>
  );
}

export default Home;


// Singer.js

import React from 'react';

function Singer() {
  const singers = [
    { name: 'Singer 1', year: 1990 },
    { name: 'Singer 2', year: 1985 },
  ];

  return (
    <div>
      <h2>List of Singers</h2>
      <ul>
        {singers.map((singer, index) => (
          <li key={index}>
            {singer.name} - {singer.year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Singer;


// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Singer from './Singer';
import Album from './Album';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/singers" component={Singer} />
        <Route path="/albums" component={Album} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
