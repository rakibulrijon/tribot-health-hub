import Header from "@/components/Layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Technology = () => {
  const technologies = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP models trained on medical terminology and multilingual datasets enable accurate understanding of patient symptoms across languages.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Clinical Decision Support",
      description: "AI algorithms trained on validated triage protocols ensure consistent and accurate patient prioritization following established clinical guidelines.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Real-time Translation",
      description: "Instantaneous bidirectional translation enables seamless communication between healthcare providers and patients in their preferred language.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      title: "Machine Learning",
      description: "Continuous learning algorithms adapt and improve triage accuracy based on clinical outcomes and healthcare provider feedback.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Advanced AI</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Technology Stack</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              TRIBOT leverages cutting-edge artificial intelligence and machine learning technologies 
              to deliver reliable, clinically validated emergency triage and multilingual support.
            </p>
          </div>
        </section>

        {/* Technology Cards */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {technologies.map((tech, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-white mb-4">
                      {tech.icon}
                    </div>
                    <CardTitle className="text-2xl text-foreground">{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Technical Specifications</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-primary">95%+</div>
                  <div className="text-lg font-semibold text-foreground">Triage Accuracy</div>
                  <div className="text-muted-foreground">Clinically validated performance</div>
                </div>
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-lg font-semibold text-foreground">Languages</div>
                  <div className="text-muted-foreground">Multilingual support</div>
                </div>
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-primary">&lt;2s</div>
                  <div className="text-lg font-semibold text-foreground">Response Time</div>
                  <div className="text-muted-foreground">Real-time processing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Experience TRIBOT?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how our advanced AI technology can transform emergency care in your healthcare facility.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Try TRIBOT Prototype
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Technology;