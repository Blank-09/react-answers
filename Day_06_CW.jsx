// DAY 6 CLASSWORK

// QN 1

import React from 'react'
import ThemeProvider from './components/ThemeProvider'
import ThemeContext from './components/ThemeContext'
import ThemedComponent from './components/ThemedComponent'
function App() {
  return (
    <>
      <ThemeProvider>
        <ThemedComponent/>
      </ThemeProvider>
    </>
  )
}

export default App

import React, { useContext,useState } from 'react'
import ThemeContext from './ThemeContext'
const ThemedComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <>    
         <h2 style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
            hello world
        </h2>
            <button onClick={toggleTheme}>CLick here to change theme</button>
            {theme}
        </>
    )
}
export default ThemedComponent


import React, {useState} from "react";
import ThemeContext from "./ThemeContext";
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }} >
            {children}
        </ThemeContext.Provider >
    )
}
export default ThemeProvider


import { createContext } from "react";
const ThemeContext = createContext();
export default ThemeContext;