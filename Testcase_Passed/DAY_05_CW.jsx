/*
  🎯 Day 5 CW

  Files to change:
    - List.js
    - ErrorBoundary.js
    - App.js

  Steps to follow:
    - cd reactapp
    - npm install
    - Copy/paste the code
    - npm start

  That's all 👍
*/

// List.js
import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [1, 2, 3, 4, 5] };
    }

    componentDidUpdate() {
        throw new Error('An error occurred in List component');
    }

    render() {
        return (
            <ErrorBoundary>
                <ul>
                    {this.state.data.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </ErrorBoundary>
        );
    }
}

export default List;


// ErrorBoundary.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <p>Error: {this.state.error.message}</p>;
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;



// App.js
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import List from "./List";

function App() {
  return(
    <ErrorBoundary>
      <List />
    </ErrorBoundary>
  )
}

export default App;