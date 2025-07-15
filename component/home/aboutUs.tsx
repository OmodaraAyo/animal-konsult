"use client";
import { aboutUsSectionValues, aboutUsStatisticsData } from "@/data/about-us";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function AboutUsSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        // viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={isLargeScreen ? { opacity: 0, x: -40 } : { opacity: 0, y: 40 }}
            whileInView={isLargeScreen ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            // viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transforming Aquaculture Through Practical Knowledge
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Animal Bank Konsult Services is a Nigerian-based aquaculture training and consultancy company committed to equipping fish farmers with the practical skills, business knowledge, and tools needed to build profitable and sustainable fish farms.
              </p>
              <p className="text-lg text-gray-600">
                We combine real-world farming experience with proven methods tailored to local conditions — delivering hands-on training, technical guidance, and modern fish farming solutions that support long-term success.
              </p>
            </div>

            <div className="space-y-4">
              {aboutUsSectionValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  // viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 bg-[#3c8d66] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#3c8d66] hover:bg-[#2a6d4d] cursor-pointer text-white px-8 py-4 rounded-lg transition-colors duration-300 ease-in-out"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Image + Stats */}
          <motion.div
            initial={isLargeScreen ? { opacity: 0, x: 40 } : { opacity: 0, y: 40 }}
            whileInView={isLargeScreen ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            // viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/6069051/pexels-photo-6069051.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fish farming training session"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {aboutUsStatisticsData.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  // viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-[#3c8d66]">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-[#1b4332]">{stat.number}</div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
