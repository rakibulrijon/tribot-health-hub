import Header from "@/components/Layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Applications = () => {
  const applications = [
    {
      title: "Emergency Departments",
      description: "Reduce triage misclassification, waiting times, and errors in hospital emergency departments.",
      features: ["24/7 availability", "Instant triage classification", "Real-time translation", "Clinical decision support"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )
    },
    {
      title: "Hospitals & Telehealth",
      description: "Provide 24/7 multilingual interpretation across care settings including telehealth platforms.",
      features: ["Remote triage", "Virtual interpretation", "Pre-consultation screening", "Care coordination"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Aged Care & Community Health",
      description: "Support linguistically diverse populations with safe, immediate communication tools.",
      features: ["Cultural competency", "Community integration", "Health education", "Preventive care guidance"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Education & Training",
      description: "A platform for studying AI adoption in complex clinical environments and training healthcare professionals.",
      features: ["Clinical simulation", "Training modules", "Educational content", "Research platform"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Commercial Scale-Up",
      description: "Expandable to multiple languages, enabling partnerships across health systems worldwide.",
      features: ["Global scalability", "Multi-language support", "Health system integration", "Commercial partnerships"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const useCases = [
    {
      scenario: "Multilingual Emergency",
      description: "A Spanish-speaking patient arrives with chest pain. TRIBOT conducts triage in Spanish, classifies as urgent, and provides English summary to clinical staff.",
      outcome: "Reduced wait time by 40%, improved patient satisfaction, ensured appropriate care priority."
    },
    {
      scenario: "Overcrowded ED",
      description: "During flu season peak, TRIBOT helps manage patient flow by conducting preliminary assessments and prioritizing cases efficiently.",
      outcome: "Improved throughput by 25%, reduced staff workload, maintained care quality standards."
    },
    {
      scenario: "Rural Healthcare Access",
      description: "Remote clinic uses TRIBOT for initial patient assessment before telehealth consultation with specialist physicians.",
      outcome: "Enhanced access to care, improved diagnostic accuracy, reduced unnecessary transfers."
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
              <span className="text-foreground">Beyond Emergency</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Departments</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              TRIBOT is designed for global scalability and multi-sector use across healthcare environments.
            </p>
          </div>
        </section>

        {/* Applications Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Healthcare Settings</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {applications.map((app, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-white mb-4">
                      {app.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{app.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Features:</h4>
                      <ul className="space-y-1">
                        {app.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-muted-foreground">
                            <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Future Extensions */}
            <div className="max-w-4xl mx-auto mt-16 text-center">
              <p className="text-xl text-muted-foreground leading-relaxed">
                TRIBOT's future extends into <span className="text-primary font-semibold">wearables, home health monitoring, and multilingual patient education</span> — making it a foundation for next-generation digital health.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Success Stories</h2>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{useCase.scenario}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{useCase.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-foreground mb-2">Impact:</h4>
                      <p className="text-sm text-primary font-medium">{useCase.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Implementation Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Assessment", desc: "Evaluate current workflow and requirements" },
                  { step: "2", title: "Integration", desc: "Seamless integration with existing systems" },
                  { step: "3", title: "Training", desc: "Staff training and system customization" },
                  { step: "4", title: "Deployment", desc: "Go-live support and monitoring" }
                ].map((phase, index) => (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
                      {phase.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                    <p className="text-muted-foreground text-sm">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Transform Your Healthcare Delivery?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading healthcare institutions already using TRIBOT to improve patient outcomes and operational efficiency.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Schedule Implementation Consultation
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

export default Applications;