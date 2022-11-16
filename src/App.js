import logo from "./logo.svg";
import "./App.scss";
import Logo from "./components/Logo/Logo";
import FilterList from "./components/FilterList/FilterList";
import BlogsItem from "./components/BlogsItem/BlogsItem";
// import BlogsView from "./components/BlogsView/BlogsView";
import { useEffect, useState } from "react";
function App() {
  const [blogsItem, SetBlogsItem] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    fetch("https://jsonmockserver.vercel.app/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        SetBlogsItem(data);
        setBlogs(data);
      });
  }, []);

  const filterBlogs = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    if (selectedOptions.length) {
      const filteredBlogs = blogs.filter((option) => {
        return selectedOptions.find(
          (selectedOption) => selectedOption === option.type
        );
      });

      SetBlogsItem(filteredBlogs);
    } else {
      SetBlogsItem(blogs);
    }
  };

  const searchBlog = (searchValue) => {
    // console.log(searchValue);
    if (searchValue !== "") {
      const filteredBlogs = blogsItem.filter((value) => {
        return (
          value.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          value.details.toLowerCase().includes(searchValue.toLowerCase())
        );
      });

      SetBlogsItem(filteredBlogs);
    } else {
      filterBlogs(selectedOptions);
    }
  };

  return (
    <div className="application">
      <div className="sideBar">
        <Logo />
        <FilterList filterBlogs={filterBlogs} />
      </div>
      <div className="blogsComponent">
        <BlogsItem searchBlog={searchBlog} blogsList={blogsItem} />
      </div>
    </div>
  );
}

export default App;
