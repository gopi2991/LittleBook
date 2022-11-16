import React from "react";

const SearchList = ({ searchBlog }) => {
  return (
    <>
      <div className="search-component">
        <div className="search-item">
          <input
            type="search"
            className="form-input"
            placeholder="Search Blogs"
            name="search"
            onChange={(e) => searchBlog(e.target.value)}
          />
          <button className="button" type="submit">
            Search
          </button>
        </div>
      </div>
    </>
  );
};
export default SearchList;
