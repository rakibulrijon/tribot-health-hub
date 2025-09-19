import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    { name: "Md Abu Rayhan", role: "Digital Health Informatics" }
  ];

  const researchStudents = [
    { name: "Paul Nguyen", role: "PhD Candidate (Digital Health & AI)" },
    { name: "Dipankar Srirag", role: "PhD Candidate (AI & Healthcare Innovation)" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              <span className="text-foreground">About</span>
            </h1>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground animate-fade-in">
              Founder & Lead Investigator
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-card hover:shadow-hero transition-all duration-500 animate-scale-in">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="w-32 h-32 bg-gradient-hero rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 animate-float">
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
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground animate-fade-in">
                Chief Investigators (CIs)
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {chiefInvestigators.map((ci, index) => (
                  <Card 
                    key={index} 
                    className="border-0 shadow-card hover:shadow-hero hover-scale transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
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
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground animate-fade-in">
                Associate Investigators (AIs)
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {associateInvestigators.map((ai, index) => (
                  <Card 
                    key={index} 
                    className="border-0 shadow-card hover:shadow-hero hover-scale transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
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
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground animate-fade-in">
                Research Fellows & Collaborators
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {researchFellows.map((fellow, index) => (
                  <Card 
                    key={index} 
                    className="border-0 shadow-card hover:shadow-hero hover-scale transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-foreground">{fellow.name}</h3>
                      <p className="text-sm text-primary">{fellow.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Research Students */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground animate-fade-in">
                Research Students
              </h2>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {researchStudents.map((student, index) => (
                  <Card 
                    key={index} 
                    className="border-0 shadow-card hover:shadow-hero hover-scale transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-foreground">{student.name}</h3>
                      <p className="text-sm text-primary">{student.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Team Description */}
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Together, our team brings world-class expertise across{" "}
                <span className="text-primary font-semibold bg-gradient-hero bg-clip-text text-transparent">
                  clinical medicine, AI engineering, linguistics, and health systems
                </span>{" "}
                — ensuring TRIBOT is both scientifically robust and socially impactful.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;