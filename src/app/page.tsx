'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Section: Channel Introduction */}
      <section className="text-center py-32 bg-transparent">
        <motion.h1
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Nihswarth Prem Bhakti
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          A youtube channel dedicated to spiritual bhakti songs, inspirational content, and divine devotion.
        </motion.p>
      </section>

      

      {/* Section: Channel Statistics */}
      <section className="pb-20 bg-transparent">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-800">Subscribers</h3>
            <p className="text-4xl text-purple-700">10K</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-800">Highest Viewed Video</h3>
            <p className="text-4xl text-purple-700">12K Views</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-800">Total Videos</h3>
            <p className="text-4xl text-purple-700">1500+</p>
          </div>
        </motion.div>
      </section>

      {/* Section: Our Work */}
      <section className="py-32 bg-indigo-50">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Our Work</h2>
        <motion.p
          className="text-xl text-gray-700 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          At Nihswarth Prem Bhakti, we promote ads both through our YouTube channel and our website. By reaching a large audience with our spiritual content, we make it easier for advertisers to showcase their products or services. Our goal is to create a platform that not only provides valuable content but also allows businesses to effectively promote their ads to a wider audience.
        </motion.p>
      </section>

      {/* Section: Popular Videos (5 videos) */}
      <section className="py-32 bg-purple-50">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Popular Videos</h2>
        <motion.div
          className="flex gap-8 overflow-x-auto justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {/* Example: Video 1 */}
          <div className="relative group">
            <iframe
              src="https://www.youtube.com/embed/CF_WCzIC7vs"
              title="Bhakti Song 1"
              className="w-[250px] h-[333px] rounded-xl shadow-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                alt="YouTube Logo"
                width={48}
                height={48}
              />
            </div>
          </div>

          {/* Example: Video 2 */}
          <div className="relative group">
            <iframe
              src="https://www.youtube.com/embed/EAJvGd-VqPQ"
              title="Bhakti Song 2"
              className="w-[250px] h-[333px] rounded-xl shadow-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                alt="YouTube Logo"
                width={48}
                height={48}
              />
            </div>
          </div>

          {/* Example: Video 3 */}
          <div className="relative group">
            <iframe
              src="https://www.youtube.com/embed/XNd0P4jUjK0"
              title="Bhakti Song 3"
              className="w-[250px] h-[333px] rounded-xl shadow-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                alt="YouTube Logo"
                width={48}
                height={48}
              />
            </div>
          </div>

          {/* Add 2 more videos in a similar way */}
        </motion.div>
      </section>

      
    </div>
  );
};

export default LandingPage;
