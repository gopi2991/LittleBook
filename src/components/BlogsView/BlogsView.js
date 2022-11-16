import React from "react";

const BlogsView = ({ blogsView }) => {
  // console.log(blogsView);

  if (!blogsView) {
    return null;
  }
  return (
    <>
      <div className="blogsview-info">
        <div className="blogs-img">
          <img src={blogsView.photo} alt={blogsView.title} />
        </div>
        <div className="blogs-content">
          <h3 className="title">{blogsView.title}</h3>
          <p>{blogsView.details}</p>
        </div>
      </div>
    </>
  );
};

export default BlogsView;
