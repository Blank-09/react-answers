import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Check error message.</div>;
    }

    return this.props.children;
  }
}

// export default ErrorBoundary;

// App.js
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import List from "./List";

const App = () => {
  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div>
      <h1>My App</h1>
      <ErrorBoundary>
        <List data={data} />
      </ErrorBoundary>
    </div>
  );
};

export default App;

import React from "react";

const List = ({ data }) => {
  if (data === null) {
    throw new Error("Data is null");
  }

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// export default List;
