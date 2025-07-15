import React, { useEffect, useState } from "react";
import { serviceSectionData } from "@/data/service";
import { motion } from "framer-motion";

export default function ServiceSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <section id="services" className="py-20 bg-white relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
  
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive aquaculture solutions tailored to help you succeed in Nigeria's growing fish farming industry
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceSectionData.map((service, index) => (
            <motion.div
              key={index}
              initial={isLargeScreen ? { opacity: 0, x: 40 } : { opacity: 0, y: 30 }}
              whileInView={isLargeScreen ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="flex flex-col h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image Section */}
              <div className="relative h-48 shrink-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-[#3c8d66] p-2 rounded-lg mb-2">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-[#3c8d66] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto w-full bg-[#f0f9f4] text-[#2a7151] py-3 rounded-lg font-semibold hover:bg-[#CCE9D5] transition-colors duration-300 ease-in-out cursor-pointer"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
