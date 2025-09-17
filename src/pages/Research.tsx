import Header from "@/components/Layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Research = () => {
  const publications = [
    {
      title: "Multilingual AI-Powered Triage in Emergency Departments: A Validation Study",
      authors: "Dr. Sarah Chen, Prof. Michael Roberts, Dr. Aisha Patel",
      journal: "Journal of Emergency Medicine AI",
      year: "2024",
      abstract: "This study validates the clinical accuracy of TRIBOT's multilingual triage system across 12 languages in emergency department settings."
    },
    {
      title: "Breaking Language Barriers: Real-time Translation in Critical Care",
      authors: "Prof. Elena Rodriguez, Dr. James Wilson, Dr. Lin Zhang",
      journal: "International Healthcare Technology Review",
      year: "2023",
      abstract: "Analysis of patient outcomes and satisfaction when using AI-powered real-time translation in emergency medical care."
    },
    {
      title: "Clinical Decision Support Systems for Multilingual Patient Populations",
      authors: "Dr. Priya Sharma, Prof. David Kim, Dr. Ahmed Hassan",
      journal: "Medical AI Quarterly",
      year: "2023",
      abstract: "Comprehensive review of AI systems designed to support clinical decision-making in linguistically diverse healthcare environments."
    }
  ];

  const researchAreas = [
    {
      title: "Clinical Validation",
      description: "Ongoing studies to validate TRIBOT's accuracy against established triage protocols and clinical outcomes.",
      metrics: ["95% accuracy rate", "12 language validation", "Multi-site trials"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Linguistic Diversity",
      description: "Research into optimal multilingual AI models for medical terminology and cultural context understanding.",
      metrics: ["50+ languages", "Cultural adaptation", "Regional dialects"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      title: "Healthcare Equity",
      description: "Investigating how AI-powered tools can reduce healthcare disparities for linguistically diverse populations.",
      metrics: ["Equity outcomes", "Access improvement", "Bias mitigation"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "AI Safety & Ethics",
      description: "Ensuring responsible AI development with focus on patient safety, privacy, and ethical healthcare delivery.",
      metrics: ["Safety protocols", "Privacy compliance", "Ethical guidelines"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const partnerships = [
    { name: "Griffith University", role: "AI Research & Development" },
    { name: "Queensland Health", role: "Clinical Validation & Implementation" },
    { name: "Gold Coast Health", role: "Emergency Department Trials" },
    { name: "Australian Government", role: "Healthcare Innovation Funding" },
    { name: "Medical Research Institute", role: "Clinical Outcomes Research" },
    { name: "AI Ethics Consortium", role: "Responsible AI Development" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Research &</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advancing the science of AI-powered healthcare through rigorous research, 
              clinical validation, and collaborative partnerships with leading institutions.
            </p>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Research Focus Areas</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {researchAreas.map((area, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-white mb-4">
                      {area.icon}
                    </div>
                    <CardTitle className="text-2xl text-foreground">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Metrics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.metrics.map((metric, idx) => (
                          <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Recent Publications</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {publications.map((pub, index) => (
                <Card key={index} className="border-0 shadow-card">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">{pub.title}</h3>
                    <div className="text-muted-foreground">
                      <p className="font-medium">{pub.authors}</p>
                      <p className="text-sm">{pub.journal} ({pub.year})</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{pub.abstract}</p>
                    <Button variant="outline" size="sm">
                      Read Full Paper
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research Partnerships */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Research Partnerships</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {partnerships.map((partner, index) => (
                  <div key={index} className="flex items-center space-x-4 p-6 rounded-lg bg-card hover:shadow-card transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0V9a1 1 0 011-1h4a1 1 0 011 1v11" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{partner.name}</h3>
                      <p className="text-muted-foreground text-sm">{partner.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Impact */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Research Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-lg font-semibold text-foreground">Research Papers</div>
                <div className="text-muted-foreground">Published in peer-reviewed journals</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-primary">25K+</div>
                <div className="text-lg font-semibold text-foreground">Patient Interactions</div>
                <div className="text-muted-foreground">Across clinical validation studies</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-primary">8</div>
                <div className="text-lg font-semibold text-foreground">Healthcare Partners</div>
                <div className="text-muted-foreground">Leading medical institutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Collaborate with Our Research Team</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our mission to advance AI-powered healthcare through collaborative research and innovation.
            </p>
            <div className="space-x-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Research Partnership Inquiry
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View All Publications
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Research;