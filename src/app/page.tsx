// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import FinancingSection from "@/components/FinancingSection";
import Footer from "@/components/Footer";
import FAQs from "@/components/FAQs";
import WhyChooseUs from "@/components/ChooseUs";
import GetStartedSection from "@/components/GetStartedSection";
import DealershipSystemSection from "@/components/DealershipSystemSection";
import Carousel from "@/components/Carousel";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GallerySection />
        <ServicesSection />
        <FinancingSection />
        <DealershipSystemSection />
        <WhyChooseUs />
        <Carousel />
        <FAQs />
        <GetStartedSection />
      </main>
      <Footer />
    </>
  );
}
