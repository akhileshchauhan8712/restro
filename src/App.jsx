import Footer from "./components/Footer";
import LenisScroll from "./components/LenisScroll";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import BookingProcess from "./sections/BookingProcess";
import CTA from "./sections/CTA";
import Dishes from "./sections/Dishes";
import FAQs from "./sections/FAQs";
import Features from "./sections/Features";
import HeroSection from "./sections/HeroSection";
import Stats from "./sections/Stats";
import TestimonialSection from "./sections/TestimonialSection";
import Timing from "./sections/Timing";

const App = () => {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <BookingProcess />
      <Timing />
      <TestimonialSection />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
