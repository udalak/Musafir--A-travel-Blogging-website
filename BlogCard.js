import React from "react";

function BlogCard({ blog }) {
  return (
    <div className="card">
      <img src={blog.image} alt={blog.title} />
      <h3>{blog.title}</h3>
      <p>{blog.desc}</p>
    </div>
  );
}

export default BlogCard;
