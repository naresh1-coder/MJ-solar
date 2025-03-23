import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import brand2 from "../assets/brand2.webp";
import brand3 from "../assets/brand3.webp";
import brand4 from "../assets/brand4.webp";
import brand5 from "../assets/brand5.webp";
import brand6 from "../assets/brand6.webp";
import brand7 from "../assets/brand7.webp";

const brands = [brand2, brand3, brand4, brand5, brand6, brand7];

const Brands = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`overflow-hidden mt-4 w-full rounded-lg shadow-md py-10 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#121212] text-[#ff4b4b]" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-center text-5xl font-semibold mb-5">Our Brands</h2>
      <motion.div
        className="flex w-max gap-10 mt-3"
        animate={{ x: [0, -1000] }} // Adjust the value based on image width
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...brands, ...brands].map((brand, index) => (
          <motion.img
            key={index}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="object-contain rounded-lg border-2 transition-transform duration-300 shadow-lg hover:scale-110"
            style={{ borderColor: theme === "dark" ? "#ffffff50" : "#00000050" }}
            whileHover={{ scale: 1.15 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Brands;
