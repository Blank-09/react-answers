import axios from "axios";
import React from "react";

export default function ProductList() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = "http://localhost:3001/products";
    axios
      .get(apiUrl)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}
