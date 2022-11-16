import React, { useState } from "react";

const FilterList = ({ filterBlogs }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const setSelectedOption = (e) => {
    const cpSelectedOptions = [...selectedOptions];

    if (!cpSelectedOptions.find((option) => option === e.target.value)) {
      cpSelectedOptions.push(e.target.value);
    } else {
      const i = cpSelectedOptions.findIndex(
        (option) => option === e.target.value
      );

      cpSelectedOptions.splice(i, 1);
    }
    filterBlogs([...cpSelectedOptions]);
    setSelectedOptions([...cpSelectedOptions]);
  };

  console.log(selectedOptions);

  return (
    <div className="filter-list">
      <div className="filter">
        <h1 className="title">Filter</h1>
        <ul>
          <li className="checkbox-wrapper">
            <input
              type="checkbox"
              id="regional"
              value={"Regional"}
              onClick={setSelectedOption}
            />
            <label htmlFor="regional" className="checkbox-label">
              Regional Blogs
            </label>
          </li>
          <li className="checkbox-wrapper">
            <input
              type="checkbox"
              id="National"
              value={"National"}
              onClick={setSelectedOption}
            />
            <label htmlFor="National" className="checkbox-label">
              National Blogs
            </label>
          </li>
          <li className="checkbox-wrapper">
            <input
              type="checkbox"
              id="International"
              value={"International"}
              onClick={setSelectedOption}
            />
            <label htmlFor="International" className="checkbox-label">
              International Blogs
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterList;
