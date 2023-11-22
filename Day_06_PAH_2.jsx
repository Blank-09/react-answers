// EXAMPLE COMPONENTS
// ExampleComponent.js

import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";

const ExampleComponent = () => {
  const { categories, setPriceFilter } = useContext(ProductContext);

  const handlePriceFilterChange = (min, max) => {
    setPriceFilter({ min, max });
  };

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

      <input
        type="range"
        min="0"
        max="1000"
        onChange={(e) => handlePriceFilterChange(e.target.value)}
      />
    </div>
  );
};

// export default ExampleComponent;

// PRODUCT.JS

import React, { createContext, useState, useEffect } from "react";
import { fetchCategories } from "./ProductService";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 });

  useEffect(() => {
    const getCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };
    getCategories();
  }, []);

  return (
    <ProductContext.Provider
      value={{ categories, priceFilter, setPriceFilter }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };

// APP.JS;
import "./App.css";
import ExampleComponent from "/comp/ExampleComponent";
import Product from "/copm/Product";

function App() {
  return (
    <div className="App">
      <ExampleComponent />
      <Product />
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
