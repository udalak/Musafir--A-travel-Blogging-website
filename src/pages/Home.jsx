// src/pages/Home.jsx
import React, { useState } from "react";
import GridCard from "../components/GridCard";
import StateModal from "../components/StateModal";
import { motion } from "framer-motion";

const STATES = [
  { 
    name: "Arunachal Pradesh", 
    tagline: "Land of the Rising Sun", 
    img: "/images/arunachal.jpg",
    details: "Known for its monasteries, scenic mountains, and the first sunrise in India.",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222783.35287171286!2d92.38093515199623!3d28.217999048200383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3743c2f0cf8c7fd7%3A0x38c63a7a0de1!2sArunachal+Pradesh!5e0!3m2!1sen!2sin!4v1690388000000!5m2!1sen!2sin"
  },
  { 
    name: "Assam", 
    tagline: "Tea Gardens & Brahmaputra", 
    img: "/images/assam.jpg",
    details: "Famous for Assam Tea, Kaziranga National Park, and the mighty Brahmaputra River.",
    mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229046.1565564234!2d91.56143962742471!3d26.14356846096954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5939e1d5e2ad%3A0x2b2bdf4f0e1b4c0b!2sAssam!5e0!3m2!1sen!2sin!4v1690382515698!5m2!1sen!2sin"
  },
  { 
    name: "Manipur", 
    tagline: "Lakes, Valleys & Culture", 
    img: "/images/manipur.jpg",
    details: "Rich in culture with Loktak Lake, floating islands, and Manipuri dance.",
    mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383374.2391262322!2d93.7405061726566!3d24.752710703180753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374c84b8e092eeb1%3A0x1d9edebc70d7b2!2sManipur!5e0!3m2!1sen!2sin!4v1690388100000!5m2!1sen!2sin"
  },
  { 
    name: "Meghalaya", 
    tagline: "Abode of Clouds", 
    img: "/images/meghalaya.jpg",
    details: "Home to Cherrapunji, Living Root Bridges, and misty waterfalls.",
    mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d384786.3131587902!2d91.3523717215318!3d25.571204968374486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37434c503128e9a1%3A0xe4d4314a4a1!2sMeghalaya!5e0!3m2!1sen!2sin!4v1690388200000!5m2!1sen!2sin"
  },
  { 
    name: "Mizoram", 
    tagline: "Rolling Hills & Bamboo", 
    img: "/images/mizoram.jpg",
    details: "Known for lush hills, bamboo forests, and vibrant tribal festivals.",
    mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383975.1298403783!2d92.49907967262555!3d23.75782341942827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374dcb8359aa1ad7%3A0x5b14d0c5e1c!2sMizoram!5e0!3m2!1sen!2sin!4v1690388300000!5m2!1sen!2sin"
  },
  { 
    name: "Nagaland", 
    tagline: "Festivals & Highlands", 
    img: "/images/nagaland.jpg",
    details: "Hornbill Festival, warrior tribes, and beautiful highlands.",
    mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383264.1738926512!2d94.09402907262551!3d26.11209801942825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744e72d37eec10f%3A0x497c1b74d4f8!2sNagaland!5e0!3m2!1sen!2sin!4v1690388400000!5m2!1sen!2sin"
  },
  { 
    name: "Sikkim", 
    tagline: "Monasteries & Mountains", 
    img: "/images/sikkim.jpg",
    details: "Famous for monasteries, Kanchenjunga, and eco-tourism.",
    mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382802.4134172011!2d88.35298187262551!3d27.33178941942822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4b7b2c3de37a7%3A0xc2f8b2a1c!2sSikkim!5e0!3m2!1sen!2sin!4v1690388500000!5m2!1sen!2sin"
  },
  { 
    name: "Tripura", 
    tagline: "Palaces & Heritage", 
    img: "/images/tripura.jpg",
    details: "Ujjayanta Palace, Neermahal, and ancient temples showcase its heritage.",
    mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382876.8135172012!2d91.18106917262552!3d23.94078941942823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3742f678cbece9a1%3A0x4d2b5e3a1b2!2sTripura!5e0!3m2!1sen!2sin!4v1690388600000!5m2!1sen!2sin"
  },
];

const Home = () => {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="home-title">Welcome to MUSAFIR</h1>

      <div className="grid-container">
        {STATES.map((state, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => setSelectedState(state)}
          >
            <GridCard state={state} />
          </motion.div>
        ))}
      </div>

      {/* Render modal only when a state is selected */}
      {selectedState && (
        <StateModal 
          state={selectedState} 
          onClose={() => setSelectedState(null)} 
        />
      )}
    </motion.div>
  );
};

export default Home;
