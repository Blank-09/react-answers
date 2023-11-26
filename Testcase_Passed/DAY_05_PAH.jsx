/*
  🎯 Day 5 CW

  Files to change:
    - LifeCycle.js
    - App.js

  Steps to follow:
    - cd reactapp
    - npm install
    - Copy/paste the code
    - npm start

  That's all 👍
*/

// LifeCycle.js
import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: 'IamNEO',
        };
    }

    componentDidMount() {
        console.log('Component Did MOUNT!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did UPDATE!');
    }

    componentWillUnmount() {
        console.log('Component Will UNMOUNT!');
    }

    handleClick = () => {
        console.log('Button Clicked!');
        this.setState({
            msg: 'Welcome to React',
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.handleClick}>Change Message</button>
            </div>
        );
    }
}

export default LifeCycle;


// App.js

import React from "react";
import LifeCycle from "./LifeCycle";

export default function App() {
    return <LifeCycle />
}