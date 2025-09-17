import { Card, CardContent } from "@/components/ui/card";

const AboutTribot = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* First Description Card */}
          <Card className="border-0 shadow-card bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                <span className="font-semibold text-foreground">TRIBOT</span> is a conversational AI chatbot designed to bridge this gap. By combining cutting-edge AI with clinical expertise, TRIBOT enables{" "}
                <span className="font-semibold text-primary">real-time multilingual interpretation</span> and{" "}
                <span className="font-semibold text-primary">clinically validated triage classification</span> — ensuring safe, timely, and equitable care.
              </p>
            </CardContent>
          </Card>

          {/* Vision Statement */}
          <Card className="border-0 shadow-card bg-gradient-subtle">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                <p className="text-xl text-foreground leading-relaxed">
                  <span className="font-semibold">A world where language is never a barrier to urgent, life-saving healthcare.</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-card hover:shadow-hero transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Multilingual AI</h3>
                  <p className="text-muted-foreground">
                    Real-time interpretation capabilities breaking down language barriers in emergency care.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-hero transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Clinical Validation</h3>
                  <p className="text-muted-foreground">
                    Clinically validated triage classification ensuring accurate and safe patient prioritization.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTribot;