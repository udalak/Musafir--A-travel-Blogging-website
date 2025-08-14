// src/components/GridCard.jsx
import React from "react";
import { motion } from "framer-motion";

const GridCard = ({ state }) => {
  return (
    <motion.div
      className="grid-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <img src={state.img} alt={state.name} className="grid-image" />
      <h2>{state.name}</h2>
      <p>{state.tagline}</p>
    </motion.div>
  );
};

export default GridCard;
