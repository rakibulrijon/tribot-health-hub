import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import applicationsBackground from "@/assets/applications-background.png";

const Applications = () => {
  const applications = [
    {
      title: "Emergency Departments",
      description: "Reduce triage misclassification, waiting times, and errors.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )
    },
    {
      title: "Hospitals & Telehealth",
      description: "Provide 24/7 multilingual interpretation across care settings.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Aged Care & Community Health",
      description: "Support linguistically diverse populations with safe, immediate communication tools.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Education & Training",
      description: "A platform for studying AI adoption in complex clinical environments.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Commercial Scale-Up",
      description: "Expandable to multiple languages, enabling partnerships across health systems worldwide.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
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
        <main className="py-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Global Scalability</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Multi-Sector Use</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              TRIBOT is designed for global scalability and multi-sector use:
            </p>
          </div>
        </section>

        {/* Applications Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {applications.map((app, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-all duration-300 bg-card/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-white mb-4">
                      {app.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{app.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Future Extensions */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-muted-foreground leading-relaxed">
                TRIBOT's future extends into <span className="text-primary font-semibold">wearables, home health monitoring, and multilingual patient education</span> — making it a foundation for next-generation digital health.
              </p>
            </div>
          </div>
        </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Applications;