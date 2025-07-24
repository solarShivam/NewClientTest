
import React from "react";
import { motion } from "framer-motion";

function FeatureCard({ title, desc }) {
  return (
    <motion.div
      className={`p-6 rounded-[2rem] w-full  relative transition duration-300
        bg-white text-black shadow-md dark:bg-gray-800 dark:text-white dark:shadow-lg 
        hover:shadow-[0px_4px_20px_5px_#393E46] dark:hover:shadow-[0_0_20px_4px_#ff7e00]`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-blue-700 dark:text-yellow-400 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </motion.div>
  );
}

export default FeatureCard;

