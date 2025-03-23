import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import work1 from "../assets/wrok1.jfif";
import work2 from '../assets/work2.jfif';
import work3 from '../assets/work3.webp';
import work4 from '../assets/work4.webp';
import work5 from '../assets/work5.webp';
import work6 from '../assets/work6.webp';
import work7 from '../assets/work7.webp';
import work8 from '../assets/work8.webp';
import work9 from '../assets/work9.webp';
import work10 from '../assets/work10.jfif';

const gallery = [work1, work2, work3, work4, work5, work6, work7, work8, work9, work10];

const WorkGallery = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`overflow-hidden mt-4 w-full rounded-lg  py-10 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#121212] text-[#ff4b4b]" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-center text-5xl font-semibold mb-5">Our Work Gallery</h2>
      <motion.div
        className="flex w-max gap-10 mt-3"
        animate={{ x: [-1000,0] }} // Change this to [0, 1000] for left-to-right flow
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...gallery, ...gallery].map((brand, index) => (
          <motion.img
            key={index}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="object-cover rounded-lg border-2 transition-transform duration-300 shadow-lg hover:scale-110"
            style={{ 
              width: "200px", // Fixed width
              height: "150px", // Fixed height
              borderColor: theme === "dark" ? "#ffffff50" : "#00000050" 
            }}
            whileHover={{ scale: 1.15 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default WorkGallery;