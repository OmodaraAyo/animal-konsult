"use client";
import React, { useEffect, useState } from "react";
import { Fish, Menu, X } from "lucide-react";
import { navLinks } from "@/data/navbar";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 ${
        isScrolled 
          ? "text-white"
          : "bg-white"
      } lg:transition-[background] lg:duration-500 md:ease-in-out lg:bg-transparent ${isMenuOpen? "rounded-br-4xl rounded-bl-4xl": ""}`}
      style={{
        background: isScrolled 
          ? "#111827"
          : undefined
      }}
    >
      <div className="container mx-auto px-4 py-6">
        {/* Logo and Desktop Navigation*/}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? "bg-white" : "bg-[#3c8d66]"
              }`}
            >
              <Fish
                className="w-6 h-6 transition-colors duration-300"
                color={isScrolled ? "#3c8d66" : "#ffffff"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className={`text-xl font-bold ${isScrolled ? "text-white" : "text-gray-900"}`}>
                Animal Bank Konsult
              </h1>
              <p className={`text-xs ${isScrolled ? "text-gray-100" : "text-gray-600"}`}>
                Services
              </p>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ href, label }, index) => (
              <motion.a
                key={href}
                href={href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`transition-colors ${
                  isScrolled ? "text-white hover:text-white/80" : "text-gray-700 hover:text-[#3c8d66]"
                }`}
              >
                {label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05, backgroundColor: "#2a6d4d" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#3c8d66] text-white px-6 py-2 rounded-lg cursor-pointer"
            >
              Get Consultation
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`lg:hidden p-2 rounded-lg cursor-pointer ${isScrolled? "bg-[#3c8d66]": "bg-gray-100"}`}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className={`flex flex-col space-y-4 mt-4 py-4 border-t border-gray-200 `}>
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`hover:text-[#3c8d66] ${isScrolled? "text-white": "text-gray-700"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <button className="bg-[#3c8d66] hover:bg-[#2a6d4d] text-white px-6 py-3 rounded-lg mt-2 cursor-pointer">
                Get Consultation
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}