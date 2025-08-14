import React from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

function Home() {
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
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to MUSAFIR</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Your Gateway to NorthEast India
        </motion.p>
      </motion.section>

      <motion.section 
        className="blogs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </motion.section>
    </div>
  );
}

export default Home;
