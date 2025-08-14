import React from "react";
import Navbar from "./Navbar";
import BlogCard from "./BlogCard";

function App() {
  const blogs = [
    {
      title: "Majestic Meghalaya",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Living_Root_Bridge%2C_Meghalaya.jpg",
      desc: "Explore the breathtaking living root bridges and waterfalls of Meghalaya."
    },
    {
      title: "The Serenity of Sikkim",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Tsomgo_Lake.jpg",
      desc: "Snow-capped mountains and monasteries await you in Sikkim."
    },
    {
      title: "Nagaland’s Vibrant Culture",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Hornbill_Festival_Nagaland.jpg",
      desc: "Experience the Hornbill Festival and the rich culture of Nagaland."
    }
  ];

  return (
    <div>
      <Navbar />
      <section className="hero">
        <h1>Welcome to MUSAFIR</h1>
        <p>Your Gateway to NorthEast India</p>
      </section>
      <section className="blogs">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </section>
    </div>
  );
}

export default App;
