// PAH-LIFE CYCLE
// LIFECYCLE.JS

import React, { useState } from "react";

const LifeCycle = () => {
  const [resourceType, setResourceType] = useState("COMPONENTS");
  console.log("component mounted", resourceType);
  return (
    <div>
      <button onClick={() => setResourceType("Component Wil MOUNT")}>
        Posts
      </button>
      <button onClick={() => setResourceType("Component Did MOUNT")}>
        Users
      </button>
      <button onClick={() => setResourceType("Component Will Recieve Props!")}>
        Comments
      </button>
      <h2>{resourceType}</h2>
    </div>
  );
};

// export default LifeCycle

// APP.JS
import logo from "./logo.svg";
import "./App.css";
import LifeCycle from "./compe/LifeCycle";

function App() {
  return (
    <div className="App">
      <LifeCycle />
    </div>
  );
}

export default App;

// APP.CSS
/*
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

*/
