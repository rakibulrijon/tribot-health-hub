import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
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

  const researchPhases = [
    {
      title: "Phase 1 – Development",
      description: "AI chatbot training with multilingual datasets and stakeholder input.",
      status: "Completed",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Phase 2 – Simulation Testing",
      description: "High-fidelity usability studies in hospital simulation labs.",
      status: "In Progress",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Phase 3 – Real-World Evaluation",
      description: "Large-scale testing in NSW Emergency Departments (Bankstown, Westmead, Prince of Wales).",
      status: "Upcoming",
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
              <span className="text-foreground">Rigorous Science.</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Real-World Impact.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              TRIBOT is not just an innovation — it is evidence-driven research designed to transform practice.
            </p>
          </div>
        </section>

        {/* Research Phases */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Research Phases</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {researchPhases.map((phase, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-white mb-4">
                      {phase.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground">{phase.title}</CardTitle>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      phase.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      phase.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {phase.status}
                    </div>
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Key Outcomes Studied</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {keyOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center space-x-4 p-6 rounded-lg bg-card hover:shadow-card transition-all duration-300">
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
              <h2 className="text-3xl font-bold mb-8 text-foreground">Research Dissemination</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our findings will be published in leading AI and health journals and shared at global conferences.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Target Journals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Nature Machine Intelligence</li>
                      <li>• PLoS Digital Health</li>
                      <li>• Lancet Digital Health</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Global Conferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• HIMSS</li>
                      <li>• MedInfo</li>
                      <li>• IEEE</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
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
      <Footer />
    </div>
  );
};

export default Research;