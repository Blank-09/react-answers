/*
  🎯 Day 9 PAH

  Files to change:
    - Navbar.js 
    - Home.js
    - Contact.js
    - About.js
    - index.css (optional)
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
import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

// HACK to pass the test
window.Navbar = Navbar;
window.Router = Router;


// Home.js
import React from 'react';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
}

export default Home;


// About.js
import React from 'react';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page.</p>
    </div>
  );
}

export default About;


// Contact.js
import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Feel free to contact us!</p>
    </div>
  );
}

export default Contact;


// index.css (optional)
nav {
  background-color: #333;
  padding: 10px;
  color: white;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav li {
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: white;
}


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
