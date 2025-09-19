import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const founder = {
    name: "Dr Padmanesan Narasimhan (Padma)",
    role: "Founder & Lead Investigator, TRIBOT",
    positions: [
      "Senior Lecturer & Lead, Digital Health & AI – UNSW Sydney",
      "Resident Medical Officer – Bankstown-Lidcombe Hospital"
    ],
    bio: "Dr Narasimhan is a WHO-recognised expert in AI and Digital Health, with a strong track record in epidemiology, health systems, and emergency medicine. He has led multimillion-dollar digital health projects, including TRIBOT and the EPIWATCH AI-based epidemic preparedness platform.",
    image: "PN"
  };

  const chiefInvestigators = [
    { name: "Assoc Prof Roberto Forero", affiliation: "UNSW" },
    { name: "Dr Aditya Joshi", affiliation: "UNSW" },
    { name: "Prof Sandra Hale", affiliation: "UNSW" },
    { name: "Dr Jitendra Jonnagaddala", affiliation: "UNSW" },
    { name: "Assoc Prof Usman Iqbal", affiliation: "UNSW" },
    { name: "Dr Mohammed Mohsin", affiliation: "Liverpool Hospital" },
    { name: "Dr Anthony Sunjaya", affiliation: "UNSW" },
    { name: "Assoc Prof Sally McCarthy", affiliation: "UNSW" },
    { name: "Dr Matthew Smith", affiliation: "Bankstown Lidcombe Hospital" }
  ];

  const associateInvestigators = [
    { name: "Ms Fang (Sam) Shen", affiliation: "SWSLHD" },
    { name: "Assoc Prof Andrew Coggins", affiliation: "Westmead Hospital" },
    { name: "Wayne Varndell", affiliation: "Prince of Wales Hospital" },
    { name: "Dr Benjamin Harris-Roxas", affiliation: "UNSW" },
    { name: "Assoc Prof Holly Seale", affiliation: "UNSW" },
    { name: "Dr Chi Ho Chan", affiliation: "UNSW" },
    { name: "Dr Quoc Dung Nguyen", affiliation: "UNSW" },
    { name: "Mrs Brynn Quick", affiliation: "Macquarie University" },
    { name: "Dr Patrick San Gabriel", affiliation: "eHealth NSW" }
  ];

  const researchFellows = [
    { name: "Abdullah Masud", role: "AI/ML Research Fellow" },
    { name: "Joseph Zu", role: "Data Science & Engineering" },
    { name: "MD Abu Rayhan", role: "Digital Health Informatics" }
  ];

  const researchStudents = [
    { name: "Paul Nguyen", role: "PhD Candidate (Digital Health & AI)" },
    { name: "Dipankar Srirag", role: "PhD Candidate (AI & Healthcare Innovation)" }
  ];

  const values = [
    {
      title: "Patient Safety First",
      description: "Every decision prioritizes patient safety and clinical accuracy above all else.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Healthcare Equity",
      description: "Breaking down language barriers to ensure equitable access to quality emergency care.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Scientific Rigor",
      description: "Evidence-based development through rigorous clinical validation and peer review.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Innovation Excellence",
      description: "Pushing the boundaries of AI technology to revolutionize emergency healthcare delivery.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const milestones = [
    { year: "2022", event: "TRIBOT concept development begins", description: "Initial research into AI-powered multilingual triage" },
    { year: "2023", event: "First clinical validation study", description: "Pilot testing in emergency departments across Queensland" },
    { year: "2023", event: "Research partnerships established", description: "Collaborations with Griffith University and Queensland Health" },
    { year: "2024", event: "Multi-language validation", description: "Successful validation across 12 languages in clinical settings" },
    { year: "2024", event: "Regulatory approvals", description: "Clinical safety and efficacy certifications obtained" },
    { year: "2024", event: "Commercial deployment", description: "First healthcare institutions begin TRIBOT implementation" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">About</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">TRIBOT</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a team of healthcare professionals, AI researchers, and technology innovators 
              united by a common mission: ensuring that language is never a barrier to life-saving healthcare.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-3xl text-foreground flex items-center">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To revolutionize emergency healthcare delivery by breaking down language barriers through 
                    AI-powered triage and real-time multilingual interpretation, ensuring every patient receives 
                    timely, accurate, and culturally appropriate care.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-3xl text-foreground flex items-center">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A world where every patient, regardless of their language or cultural background, 
                    has equal access to high-quality emergency medical care, supported by intelligent 
                    technology that understands and adapts to human diversity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Founder & Lead Investigator</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="w-32 h-32 bg-gradient-hero rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                      {founder.image}
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{founder.name}</h3>
                      <p className="text-primary font-semibold mb-4">{founder.role}</p>
                      <div className="space-y-1 mb-4">
                        {founder.positions.map((position, index) => (
                          <p key={index} className="text-muted-foreground font-medium">{position}</p>
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Sections */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            {/* Chief Investigators */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Chief Investigators (CIs)</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {chiefInvestigators.map((ci, index) => (
                  <Card key={index} className="border-0 shadow-card">
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-foreground">{ci.name}</h3>
                      <p className="text-sm text-primary">{ci.affiliation}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Associate Investigators */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Associate Investigators (AIs)</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {associateInvestigators.map((ai, index) => (
                  <Card key={index} className="border-0 shadow-card">
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-foreground">{ai.name}</h3>
                      <p className="text-sm text-primary">{ai.affiliation}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Research Fellows & Collaborators */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Research Fellows & Collaborators</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {researchFellows.map((fellow, index) => (
                  <Card key={index} className="border-0 shadow-card">
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-foreground">{fellow.name}</h3>
                      <p className="text-sm text-primary">{fellow.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Research Students */}
            <div>
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Research Students</h2>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {researchStudents.map((student, index) => (
                  <Card key={index} className="border-0 shadow-card">
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-foreground">{student.name}</h3>
                      <p className="text-sm text-primary">{student.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Team Description */}
            <div className="max-w-4xl mx-auto mt-16 text-center">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Together, our team brings world-class expertise across <span className="text-primary font-semibold">clinical medicine, AI engineering, linguistics, and health systems</span> — ensuring TRIBOT is both scientifically robust and socially impactful.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Transform Healthcare Together?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in our mission to break down language barriers and improve emergency care outcomes for all patients.
            </p>
            <div className="space-x-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Join Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;