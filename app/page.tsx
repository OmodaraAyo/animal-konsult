"use client"
import AboutUsSection from "@/component/home/aboutUs";
import ContactSection from "@/component/home/contactSection";
import HeroSection from "@/component/home/heroSection";
import ServiceSection from "@/component/home/serviceSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <ServiceSection/>
    <AboutUsSection/>
    <ContactSection/>
    </>
  );
}
