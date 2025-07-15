import React, { useEffect, useRef } from 'react';
import { ArrowRight, Fish, Play } from 'lucide-react';
import { statistics } from '@/data/heroSection';
import { motion, useAnimation, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    gsap.fromTo(
      ".floating-card",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".floating-card",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#e3f9e5] to-[#c6f6d5] py-20 overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-32">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
              },
            }}
          >
            <motion.div
              className="inline-flex items-center bg-[#c4e2cf] text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Fish className="w-4 h-4 mr-2" />
              Leading Aquaculture Consultancy in Nigeria
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Transform Your
              <motion.span
                className="text-[#3c8d66] block"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                Fish Farming
              </motion.span>
              Dreams Into Impact
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              Expert training, proven consulting, and comprehensive support
              services for successful aquaculture ventures across Nigeria and
              West Africa.
            </motion.p>

            <motion.div
              className="flex flex-col xl:flex-row gap-4"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <motion.button
                className="bg-[#3c8d66] text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2 group cursor-pointer"
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-semibold">Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span className="font-semibold">Watch Success Stories</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-8 text-gray-600"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {statistics.map(({ value, label }) => (
                <motion.div
                  key={label}
                  className="text-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="text-2xl font-bold text-primary-500">
                    {value}
                  </div>
                  <div className="text-sm">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <motion.img
                src="https://images.pexels.com/photos/6069047/pexels-photo-6069047.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fish farming operations in Nigeria"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20 floating-card">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Farm Active
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">24/7</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20 floating-card">
              <div className="text-sm text-gray-600">Monthly Revenue</div>
              <div className="text-2xl font-bold text-green-600">₦2.5M+</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#a0d0b5] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c4e2cf] rounded-full mix-blend-multiply filter blur-xl -z-10 opacity-70 animate-pulse"></div>
    </section>
  );
}