/*
  🎯 Day 8 CW

  Files to change:
    - ReactApp.js

  Steps to follow:
    - cd reactapp
    - npm install
    - Copy/Paste these files
    - npm start

  That's all 👍
*/

// ReactApp.js

import React, { useState, useEffect } from "react";

const ReactApp = () => {
  const [message, setMessage] = useState("Hello dear one, learning React...?");

  useEffect(() => {
    console.log("useEffect hook called");

    const timeoutId = setTimeout(() => {
      setMessage("Great.... This is time to learn about HOOKS");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return <p>{message}</p>;
};

export default ReactApp;
