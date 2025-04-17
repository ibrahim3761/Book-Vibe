import React from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <div className="my-10">
      <h1 className="text-center text-4xl">Books</h1>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
          {data.map((book) => (
            <Book key={book.id} book={book}></Book>
          ))}
        </div>

    </div>
  );
};

export default Books;
