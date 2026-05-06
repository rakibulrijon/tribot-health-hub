import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import researchBackground from "@/assets/research-background.png";
import SEOHead from "@/components/SEOHead";

const Research = () => {
  const researchPhases = [
    {
      title: "Phase 1 – Development",
      description: "AI chatbot training with multilingual datasets and stakeholder input.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Phase 2 – Simulation Testing",
      description: "High-fidelity usability studies in hospital simulation labs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Phase 3 – Real-World Evaluation",
      description: "Large-scale testing in NSW Emergency Departments (Bankstown, Westmead, Prince of Wales).",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )
    }
  ];

  const keyOutcomes = [
    "Accuracy of triage decisions",
    "Reduction in under- and over-triage", 
    "Patient and clinician satisfaction",
    "Impact on ED waiting times and length of stay"
  ];


return (
    <>
      <SEOHead 
        title="Research - TRIBOT AI-Powered Triage System"
        description="TRIBOT research phases - Development, Simulation Testing, and Real-World Evaluation in NSW Emergency Departments."
        url="https://tribot.health/research"
      />
      <div 
        className="min-h-screen relative"
        style={{
          backgroundImage: `url(${researchBackground})`,
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
          <main className="py-20">
            {/* Hero Section */}
            <section className="py-20">
              <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-foreground">Rigorous Science.</span>
                  <br />
                  <span className="bg-gradient-hero bg-clip-text text-transparent">Real-World Impact.</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  TRIBOT is not just an innovation but evidence-driven research designed to transform practice.
                </p>
              </div>
            </section>

            {/* Research Phases */}
            <section className="py-20">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {researchPhases.map((phase, index) => (
                    <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-all duration-300 bg-card/90 backdrop-blur-sm">
                      <CardHeader>
                        <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-white mb-4">
                          {phase.icon}
                        </div>
                        <CardTitle className="text-xl text-foreground">{phase.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Key Outcomes */}
            <section className="py-20">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Key Outcomes Studied</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-6">
                    {keyOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-center space-x-4 p-6 rounded-lg bg-card/90 backdrop-blur-sm hover:shadow-card transition-all duration-300">
                        <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-foreground font-medium">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Dissemination */}
            <section className="py-20">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-8 text-foreground">Dissemination</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Our findings will be published in leading AI and health journals (e.g., Nature Machine Intelligence, PLoS Digital Health, Lancet Digital Health) and shared at global conferences (HIMSS, MedInfo, IEEE).
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

export default Research;