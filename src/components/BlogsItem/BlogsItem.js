import React, { useEffect, useState } from "react";
import BlogsView from "../BlogsView/BlogsView";
import SearchList from "../Search/Search";

const BlogsItem = ({ blogsList, searchBlog }) => {
  // console.log(blogsList);
  const [selectedBlog, setSelectedBlog] = useState([]);

  useEffect(() => {
    setSelectedBlog(blogsList[0]);
  }, [blogsList]);

  const handleClick = (item) => {
    setSelectedBlog(item);
  };

  return (
    <>
      <div className={`blogsList ${blogsList.length ? "" : "no-data"}`}>
        <SearchList searchBlog={searchBlog} />
        <div className="blogsList-item">
          <div className="blogsitem no-datas">
            <p>No datas</p>
          </div>

          {blogsList.map((item, index) => {
            return (
              <div
                className={`blogsitem ${
                  item.title === selectedBlog?.title ? "active" : ""
                }`}
                // className="blogsitem"
                key={index}
                id={item.id}
                onClick={() => handleClick(item)}
              >
                <h2 className="title">{item.title}</h2>
                <h3 className="type">{item.type}</h3>
                <p className="desc">{item.details}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="blogsView">
        <BlogsView blogsView={selectedBlog} />
      </div>
    </>
  );
};
export default BlogsItem;
