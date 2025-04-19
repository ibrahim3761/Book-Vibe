import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utilities/addToDb";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort,setSort] = useState('')

  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBookData = storedBookData.map((book) =>
      parseInt(book)
    );
    const myReadList = data.filter((book) =>
      convertedStoredBookData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "page") {
      const sortedData = [...readList].sort((a, b) => a.toalPages - b.totalPage);
      setReadList(sortedData);
    }
    else if (type === "rating") {
      const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedData);
    }
  }

  return (
    <><details className="dropdown">
          <summary className="btn m-1">Sort By: {sort?sort:""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li onClick={()=>handleSort("page")}><a>Page</a></li>
              <li onClick={()=>handleSort("rating")}><a>Rating</a></li>
          </ul>
      </details>
      <Tabs>
              <TabList>
                  <Tab>Read List</Tab>
                  <Tab>Wish List</Tab>
              </TabList>

              <TabPanel>
                  <h2>Book I read {readList.length}</h2>
                  {readList.map((book) => (
                      <Book key={book.bookId} book={book}></Book>
                  ))}
              </TabPanel>
              <TabPanel>
                  <h2>Any content 2</h2>
              </TabPanel>
          </Tabs></>
  );
};

export default ReadList;
