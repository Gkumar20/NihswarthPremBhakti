"use client";

import { motion } from "framer-motion";

const PopularVideos = () => {
  const videos = [
    { title: "Bhakti Song 1", url: "https://www.youtube.com/embed/CF_WCzIC7vs?autoplay=1" },
    { title: "Bhakti Song 2", url: "https://www.youtube.com/embed/EAJvGd-VqPQ?autoplay=1" },
    { title: "Bhakti Song 3", url: "https://www.youtube.com/embed/XNd0P4jUjK0?autoplay=1" },
    { title: "Bhakti Song 4", url: "https://www.youtube.com/embed/anotherVideoLink" },
    { title: "Bhakti Song 5", url: "https://www.youtube.com/embed/anotherVideoLink" },
    // Add more videos here
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">Popular Shorts</h2>
      <motion.div
        className="flex gap-4 overflow-x-auto" // Horizontal scroll if videos exceed width
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="relative bg-white shadow rounded overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <iframe
              src={video.url}
              title={video.title}
              className="w-[250px] h-[333px]" // Adjusted size for better fit and scrolling
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PopularVideos;
