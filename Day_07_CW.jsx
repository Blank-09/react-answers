import axios from "axios";
import React, { useState, useEffect } from "react";

function DataFetch() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const apiURL = "http://localhost:3001/books";

    axios
      .get(apiURL)
      .then((res) => setBook(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Book Names</h1>
      <ul>
        {book.map((items) => (
          <li key={items.id}>{items.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default DataFetch;
