import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import applicationsBackground from "@/assets/applications-background.png";
import SEOHead from "@/components/SEOHead";

const Technology = () => {
  const technologies = [
    {
      title: "Conversational AI & NLP",
      description: "Natural, human-like interactions across languages.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Multilingual Large Language Models (LLMs)",
      description: "Trained on Arabic and English triage scenarios, with expansion to more languages.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      title: "Validated Against Gold Standards",
      description: "Aligned with the Australasian Triage Scale, benchmarked against clinician decisions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Continuous Learning",
      description: "Feedback loops for ongoing refinement.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Ethical by Design",
      description: "Developed within NSW's AI governance framework, with privacy, transparency, and cultural safety embedded from the ground up.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <SEOHead 
        title="Technology - TRIBOT AI-Powered Triage System"
        description="Discover TRIBOT's advanced technology including Conversational AI, NLP, Multilingual LLMs, and validated triage classification aligned with the Australasian Triage Scale."
        url="https://tribot.health/technology"
      />
      <div 
        className="min-h-screen relative"
        style={{
          backgroundImage: `url(${applicationsBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        
        <div className="relative z-10">
          <Header />
          <main className="pt-0 pb-20">
            {/* Hero Section */}
            <section className="py-20">
              <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-foreground">TRIBOT  </span>
             
                  <span className="bg-gradient-hero bg-clip-text text-transparent">Technology Overview</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                   Watch our comprehensive overview of TRIBOT's technology and capabilities
                </p>
              </div>
            </section>
            <section className="py-8 bg-transparent ">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <iframe
                      src="https://www.youtube.com/embed/qxsoK-ucjAY?start=4"
                      title="TRIBOT Technology Overview"
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* Technology Cards */}
            <section className="pt-2 pb-20">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {technologies.map((tech, index) => (
                    <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-all duration-300 bg-card/90 backdrop-blur-sm">
                      <CardHeader>
                        <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-white mb-4">
                          {tech.icon}
                        </div>
                        <CardTitle className="text-xl text-foreground">{tech.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Context-Aware Clinical Assistant */}
                <div className="max-w-4xl mx-auto mt-16 text-center">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    TRIBOT isn't just a translator. It's a <span className="text-primary font-semibold">context-aware clinical assistant</span> designed for the most high-stakes environment in healthcare.
                  </p>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Technology;
