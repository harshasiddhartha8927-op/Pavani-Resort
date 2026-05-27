import { useRef } from "react";
import { useGsapScroll } from "../animations/useGsapScroll";
import AboutSection from "../components/sections/AboutSection";
import AmenitiesSection from "../components/sections/AmenitiesSection";
import BookingSection from "../components/sections/BookingSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import GallerySection from "../components/sections/GallerySection";
import HeroSection from "../components/sections/HeroSection";
import RoomsSection from "../components/sections/RoomsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

export default function Home() {
  const pageRef = useRef(null);
  useGsapScroll(pageRef);

  return (
    <main ref={pageRef}>
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />
      <GallerySection />
      <ExperienceSection />
      <TestimonialsSection />
      <BookingSection />
    </main>
  );
}
