import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  const { createBook } = useContext(BooksContext);

  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(true);
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Title </label>
        <input
          className="input"
          type="text"
          onChange={handleChange}
          value={title}
          id="input"
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
