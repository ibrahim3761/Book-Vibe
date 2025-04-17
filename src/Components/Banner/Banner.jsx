import React from "react";
import bookimage from "../../assets/books.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 px-10 py-16 mb-5 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bookimage}
          className="rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold py-6">Books to freshen up your bookshelf</h1>
          
          <button className="btn btn-primary bg-green-500 text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
