/*
  🎯 Day 6 CW

  Files to change:
    - ProductListComponent.js
    - WithProductList.js
    - App.js

  Steps to follow:
    - cd reactapp
    - npm install
    - Copy/Paste these files
    - npm start

  That's all 👍
*/

// ProductListComponent.js
import React from 'react';

const ProductListComponent = ({ productList }) => (
  <div>
    <h2>Product List</h2>
    <ul>
      {productList.map(product => (
        <li key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <div>
            <h3>{product.name}</h3>
            Price: <p>${product.price.toFixed(2)}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductListComponent;


// WithProductList.js
import React from 'react';

const WithProductList = (WrappedComponent, productList) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent productList={productList} {...this.props} />;
    }
  };
};

export { WithProductList };


// App.js
import ProductListComponent from "./ProductListComponent";
import {WithProductList} from "./WithProductList";

const Products = [
  { id: 1, name: 'Product 1', price: 19.99, imageUrl: 'product1.jpg' },
  { id: 2, name: 'Product 2', price: 29.99, imageUrl: 'product2.jpg' },
];

const EnchanceProductList = WithProductList(ProductListComponent, Products);

function App() {
  return (
    <EnchanceProductList />
  );
}

export default App;
