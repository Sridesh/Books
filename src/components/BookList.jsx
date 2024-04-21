import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  // const { books } = useContext(BooksContext);
  const { books } = useBooksContext(); //using our custom hook

  const bookList = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{bookList}</div>;
}

export default BookList;
