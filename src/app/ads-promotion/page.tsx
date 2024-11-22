// pages/ads-and-promotion.tsx

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ads } from '@/utils/ads'; // Import ads array
import { promotions } from '@/utils/promotion'; // Import promotions array
import { channels } from '@/utils/channel'; // Import channels array
import { videoLinks } from '@/utils/videos'; // Import promoted videos

const AdsAndPromotionPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Section: Ads */}
      <section className="py-32 bg-transparent">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Advertisements</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {ads.map((ad) => (
            <div key={ad.id} className="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <Image
                src={ad.image}
                alt={ad.alt}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <p className="text-xl mt-4 text-gray-800">{ad.text}</p>
              <Link href={ad.link} className="text-indigo-500 mt-4 inline-block">Learn More</Link>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Section: Product Promotion */}
      <section className="py-32 bg-indigo-50">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Our Products</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {promotions.map((product) => (
            <div key={product.id} className="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <Image
                src={product.image}
                alt={product.alt}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <p className="text-xl mt-4 text-gray-800">{product.title}</p>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <Link href={product.link} className="text-indigo-500 mt-4 inline-block">Buy Now</Link>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Section: Promoted Channels */}
      <section className="py-32 bg-transparent">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Promoted Channels</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {channels.map((channel) => (
            <div key={channel.id} className="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <Image
                src={channel.image}
                alt={channel.name}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <p className="text-xl mt-4 text-gray-800">{channel.name}</p>
              <Link href="#" className="text-indigo-500 mt-4 inline-block">Visit Channel</Link>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Section: Promoted Videos */}
      <section className="py-32 bg-indigo-50">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Promoted Videos</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {videoLinks.map((video, index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <iframe
                src={video}
                title={`Promoted Video ${index + 1}`}
                width="100%"
                height="200"
                className="rounded-lg"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Section: Contact (Dummy Placeholder) */}
      <section id="contact" className="py-32 bg-indigo-100">
        <section className="py-32 text-center bg-transparent">
          <Link href="/contact" className="text-2xl text-indigo-700 font-bold hover:underline">
            Contact Us
          </Link>
        </section>
        <motion.p
          className="text-xl text-gray-700 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          If you have any inquiries about advertisements, promotions, or collaborations, feel free to reach out to us. We would love to hear from you!
        </motion.p>
      </section>
    </div>
  );
};

export default AdsAndPromotionPage;
