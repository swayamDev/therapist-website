import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import ScheduleConsultation from "@/components/ScheduleConsultation";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import Banner from "@/components/ui/banner";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ScheduleConsultation />
      <PricingSection />
      <TestimonialSection />
      <FaqSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default page;
