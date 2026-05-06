import Header from "@/components/Layout/Header";
import Hero from "@/components/Layout/Hero";
import AboutTribot from "@/components/Layout/AboutTribot";
import Partners from "@/components/Layout/Partners";
import Footer from "@/components/Layout/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead 
        title="TRIBOT - AI-Powered Multilingual Triage System"
        description="TRIBOT is an AI-powered multilingual triage system for Emergency Departments, developed by UNSW Medicine & Health to reduce triage delays and improve equity in Australian EDs."
        url="https://tribot.health"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Partners />
          <AboutTribot />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
