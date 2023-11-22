import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateCart: (state, action) => {
      return state;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

const { addToCart, removeFromCart } = cartSlice.actions;

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [newItem, setNewItem] = React.useState("");

  const handleAddToCart = () => {
    if (newItem.trim() !== "") {
      dispatch(addToCart({ id: Date.now(), name: newItem }));
      setNewItem("by Priyanshu");
    }
  };

  return (
    <div>
      <Typography variant="h3" mb={4}>
        Your Cart
      </Typography>
      <div style={{ marginBottom: "16px" }}>
        <TextField
          label="Enter item name"
          variant="outlined"
          size="small"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleAddToCart}
          style={{ marginLeft: "8px" }}
        >
          Add to Cart
        </Button>
      </div>

      <Typography variant="h4">Store</Typography>
      <List sx={{ maxWidth: "sm" }}>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} />
            <Button
              variant="danger"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
