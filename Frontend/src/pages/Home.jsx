import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowITworks";
import Stats from "../components/landing/stats";
import Features from "../components/landing/Features";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/footer";
import ScrollAnimations from "../components/landing/ScrollAnimations";
import "../styles/landing.css";

const Home = () => {
  return (
    <div className="landing-page-root">
      <ScrollAnimations />
      <Navbar />
      <main className="landing-main">
        <Hero />
        <HowItWorks />
        <Stats />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;