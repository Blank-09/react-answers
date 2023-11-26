/*
  🎯 Day 7 CW

  Files to change:
    - BookList.js
    - db.json
    - App.js

  Steps to follow:
    - cd reactapp
    - npm install
    - Copy/Paste these files
    - npm start

  That's all 👍
*/


// BookList.js
import React, { useState, useEffect } from 'react';
// import axios from "axios"

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Test Case Failed when using Axios
        // const response = await axios.get('https://abc.com/books');
        const response = await fetch("https://abc.com/books");
        const data = await response.json();

        const transformedBooks = data.data.map(book => ({
          id: book.id,
          title: book.title,
          author: book.author,
        }));

        setBooks(transformedBooks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBooks();
  }, []); 

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;


// db.json
{
  "books": [
    {
      "id": 1,
      "title": "Book 1",
      "author": "Author 1"
    },
    {
      "id": 2,
      "title": "Book 2",
      "author": "Author 2"
    }
  ]
}

// App.js
import React from "react";
import BookList from "./BookList";

function App() {
    return <BookList />
}

export default App;