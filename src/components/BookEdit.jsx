import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ onFormSubmit, book }) {
  const { updateBookByID } = useContext(BooksContext);

  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
    updateBookByID(book.id, title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="input"
          value={title}
          onChange={handleChange}
        />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
