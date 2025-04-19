import React from 'react';
import { CiStar } from 'react-icons/ci';
import { useLoaderData, useParams } from 'react-router';
import { addToDb } from '../../Utilities/addToDb';

const BookDetails = () => {
    const {id} = useParams();
    const idnum=parseInt(id);
    const data = useLoaderData();
    const singleData = data.find(book=>book.bookId === idnum);
    const {bookName,review,author,image,category,rating,yearOfPublishing,tags} = singleData;

    const handleMarkAsRead = (id) => {
        addToDb(id);
    }


    return (
        <div className="flex flex-col md:flex-row border rounded-lg p-6 gap-6 shadow-md bg-white max-w-4xl mx-auto">
      {/* Book Image */}
      <div className="w-full md:w-1/3 flex justify-center items-center bg-gray-100 rounded-lg p-4">
        <img
          src={image}
          alt={bookName}
          className="object-contain rounded-lg"
        />
      </div>

      {/* Book Info */}
      <div className="w-full md:w-2/3 space-y-3">
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <p className="text-sm text-gray-600">By : {author}</p>
        <p className="text-md font-medium text-gray-700">{category}</p>

        <div>
          <span className="font-semibold">Review :</span>
          <p className="text-sm text-gray-500 mt-1">
            {review}
          </p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Meta info */}
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-semibold">Year of Publishing:</span>{' '}
            {yearOfPublishing}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {rating}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button onClick={()=>handleMarkAsRead(id)} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Mark as Read
          </button>
          <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
    );
};

export default BookDetails;