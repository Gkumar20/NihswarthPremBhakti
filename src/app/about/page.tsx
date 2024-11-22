'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Cover Image Section */}
      <section className="relative">
        <Image
          src="/cover.png"
          alt="Channel Cover"
          layout="responsive"
          width={1200}
          height={400}
          className="object-cover w-full h-96"
        />
        <div className=" flex justify-center mt-12 items-center">
          <h1 className="text-4xl font-bold  text-center">Nihswarth Prem Bhakti</h1>
        </div>
      </section>

      {/* Logo and Channel Introduction */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <Image
            src="/logo.png"
            alt="Channel Logo"
            width={150}
            height={150}
            className="mx-auto rounded-full mb-6"
          />
          <motion.p
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            नमस्ते दोस्तों! 🙏 आपके तहे दिल से समर्थन के लिए मैं दिल से शुक्रगुज़ार हूँ। इस चैनल पर आपका हार्दिक स्वागत है! 
            यहां मैं आपके लिए AI जनरेटेड वीडियो बनाकर प्रस्तुत करती हूँ, जो ज्ञानवर्धक और मनोरंजक हैं।
          </motion.p>
        </div>
      </section>

      {/* Channel Stats */}
      <section className="py-16 bg-indigo-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-indigo-700">Channel Stats</h2>
          <p className="text-xl text-gray-700 mt-4">11.9K subscribers | 1,080 videos | 605,256 views</p>
        </div>
      </section>

      {/* Channel Description */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            अगर मेरे वीडियो आपको पसंद आएं, तो कृपया लाइक, कमेंट और शेयर करके अपने दोस्तों तक पहुंचाएं। आपके समर्थन से मुझे प्रेरणा मिलती है, और आपका प्यार ही मुझे बेहतर कंटेंट बनाने के लिए प्रोत्साहित करता है।
          </motion.p>
          <p className="text-lg text-gray-700 mt-4">
            👉 Subscribe करें और Notification Bell को दबाएं ताकि नए वीडियो की जानकारी आपको सबसे पहले मिल सके।
          </p>
        </div>
      </section>

      {/* Contact / Sponsored Inquiries */}
      <section className="py-16 bg-indigo-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-indigo-700">Contact Us</h2>
          <p className="text-lg text-gray-700 mt-4">For sponsored inquiries, email us at: <a href="mailto:learninganesh@gmail.com" className="text-indigo-500">learninganesh@gmail.com</a></p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <div>
          <motion.h3
            className="text-3xl font-bold text-indigo-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Join Us on This Journey!
          </motion.h3>
          <p className="text-lg text-gray-700 mt-4">`${"Don't forget to subscribe and stay updated with all the latest videos and content."}`</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
