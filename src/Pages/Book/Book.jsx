import React from "react";
import { CiStar } from "react-icons/ci";
const Book = ({ book }) => {

    const { bookName,image,author,rating,category } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-sm
    p-2">
      <figure className="p-3 bg-gray-200 rounded-lg">
        <img
          className="h-[166px] p-2"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="pt-8 pb-5">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="pt-2 text-gray-500">
          By: {author}
        </p>
        <div className="card-actions justify-end">
          <div className="badge ">{category}</div>
          <div className="badge "><CiStar />
          {rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
