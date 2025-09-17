import Header from "@/components/Layout/Header";
import Hero from "@/components/Layout/Hero";
import Partners from "@/components/Layout/Partners";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Partners />
      </main>
    </div>
  );
};

export default Index;
