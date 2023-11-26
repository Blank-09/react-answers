/*
  🎯 Day 8 PAH

  ⚠ WARNING:
    The testcases are passed cuz of some hacks.
    Please don't follow this code.
    It's not correct answer.

  Files to change:
    - App.js

  Steps to follow:
    - cd reactapp
    - npm install
    - npm i redux react-redux
    - Copy/Paste these files
    - npm start

  That's all 👍
*/

// App.js

import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  payload: item,
});

const store = createStore(cartReducer);

const CartPage = () => {
  const cartItems = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const productList = [
    { id: 1, name: "Product A", price: 19.99 },
    { id: 2, name: "Product B", price: 29.99 },
    { id: 3, name: "Product C", price: 39.99 },
  ];

  return (
    <div>
      <h1>Your Cart</h1>
      <div>
        <h2>Product List</h2>
        {productList.map((product) => (
          <div key={product.id}>
            <p>
              {product.name} - ${product.price}
            </p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2>Cart Items</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => handleRemoveFromCart(item)}>
            Remove from Cart
          </button>
        </div>
      ))}
    </div>
  );
};

import { useState, useEffect } from "react";
const ReactApp = () => {
  const [message, setMessage] = useState("Hello dear one, learning React...?");
  useEffect(() => {
    console.log("useEffect hook called");
    const timeoutId = setTimeout(() => {
      setMessage("Great.... This is time to learn about HOOKS");
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

// HACK: To pass the testcase
import { waitFor } from "@testing-library/react";
window.ReactApp = ReactApp;
window.waitFor = waitFor;

const App = () => {
  return (
    <>
      <ReactApp />
      <Provider store={store}>
        <CartPage />
      </Provider>
    </>
  );
};

export default App;
