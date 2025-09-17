import Header from "@/components/Layout/Header";
import Hero from "@/components/Layout/Hero";
import AboutTribot from "@/components/Layout/AboutTribot";
import Partners from "@/components/Layout/Partners";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutTribot />
        <Partners />
      </main>
    </div>
  );
};

export default Index;
