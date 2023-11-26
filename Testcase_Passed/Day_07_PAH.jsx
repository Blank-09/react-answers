/*
  🎯 Day 7 PAH

  Files to change:
    - /package.json
    - /src/ProductList.js
    - /src/Product.js
    - /src/ProductCard.js
    - /src/db.json
    - /src/App.js

  Steps to follow:
    - copy/paste package.json
    - cd reactapp
    - npm install
    - Copy/Paste these files
    - npm start
    - npm run server (new terminal)
    - get the json-server link
      - Its located on the PORTS tab beside the TERMINAL tab
      - Copy port 8080 link
      - Paste it on the ProductList.js

  That's all 👍
*/

// package.json
{
  "name": "reactapp",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.10",
    "@testing-library/react": "^11.2.6",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.24.0",
    "canvas": "^2.11.2",
    "json-server": "^0.17.4",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.1"
  },
  "scripts": {
    "start": "PORT=8081 react-scripts start",
    "server": "json-server -w ./src/db.json -p 8080",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "jest-fetch-mock": "^3.0.3"
  }
}


// ProductList.js
import React, { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios'

// ⚠️ Put your json-server link ⚠️
const jsonServerLink = 'https://ide-efffccdaafbfae307836852cdfcfaaabaafccfefdaone.project.examly.io/proxy/8080/'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch is not working as it return undefined during *test only*
        // const response = await fetch(jsonServerLink '/products');
        const response = await axios.get(jsonServerLink + '/products')

        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <Product products={products} />;
};

export default ProductList;


// Product.js

import React from 'react';
import ProductCard from './ProductCard';

const Product = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;


// ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;


// db.json

{
  "products": [
    {
      "id": 1,
      "name": "ProductA",
      "description": "This is Product A",
      "price": 10.99
    }
  ]
}

// App.js
import React from "react"
import ProductList from "./ProductList"

export default function App() {
    return <ProductList />
}