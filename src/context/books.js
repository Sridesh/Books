import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const helloWorld = () => {
    console.log("Jello");
  };

  //fucntion to fecth books array from JSON server
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  //Function to delete Books
  const deleteBookByID = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  //Function to Add a book to JSON server
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    console.log(response);

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  //Function to Edit an existing book's data
  const updateBookByID = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: title,
    });

    console.log(response);

    const updatedBooks = books.map((book) => {
      if (id == book.id) {
        return {
          ...book,
          ...response.data,
        };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookByID,
    updateBookByID,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };

export default BooksContext;
