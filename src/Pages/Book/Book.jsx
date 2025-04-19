import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
const Book = ({ book }) => {

  const { bookId,bookName,image,author,rating,category,tags,yearOfPublishing} = book;

  return (
    <Link to={`/bookDetails/${bookId}`} className="hover:scale-105 duration-300">
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
        <div className="flex justify-center gap-6 pb-5 ">
          {
            tags.map((tag,index)=><button className="font-bold" key={index}>{tag}</button>)
          }
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p className="pt-2 text-gray-500">
          By: {author}
        </p>
        <div className="border-t-2 border-dashed mt-5"></div>
        <div className="card-actions justify-center pt-5 gap-4">
          <div className="badge ">{category}</div>
          <div className="badge "><CiStar />
          {rating}</div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
