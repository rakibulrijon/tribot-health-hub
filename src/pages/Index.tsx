import Header from "@/components/Layout/Header";
import Hero from "@/components/Layout/Hero";
import AboutTribot from "@/components/Layout/AboutTribot";
import Partners from "@/components/Layout/Partners";
import Footer from "@/components/Layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Partners />
        <AboutTribot />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
