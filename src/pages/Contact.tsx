import Header from "@/components/Layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      title: "General Inquiries",
      email: "info@tribot.site",
      description: "Questions about TRIBOT technology and capabilities"
    },
    {
      title: "Clinical Partnerships",
      email: "clinical@tribot.site",
      description: "Healthcare institutions interested in implementation"
    },
    {
      title: "Research Collaboration",
      email: "research@tribot.site",
      description: "Academic partnerships and research opportunities"
    },
    {
      title: "Technical Support",
      email: "support@tribot.site",
      description: "Implementation assistance and technical questions"
    }
  ];

  const offices = [
    {
      location: "Brisbane, Queensland",
      address: "Griffith University\nGold Coast Campus\nSouthport QLD 4222\nAustralia",
      type: "Research Headquarters"
    },
    {
      location: "Gold Coast, Queensland",
      address: "Gold Coast Health\nEmergency Department\nSouthport QLD 4215\nAustralia",
      type: "Clinical Testing Site"
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
              <span className="text-foreground">Get in</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform emergency healthcare at your institution? We'd love to discuss 
              how TRIBOT can improve patient outcomes and operational efficiency.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@hospital.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" placeholder="City General Hospital" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Type of Inquiry</Label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Clinical Implementation</option>
                      <option>Research Partnership</option>
                      <option>Technical Information</option>
                      <option>Demo Request</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your specific needs and how TRIBOT can help your organization..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-primary font-medium">{info.email}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Office Locations</h2>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <Card key={index} className="border-0 shadow-card">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-foreground mb-2">{office.location}</h3>
                          <p className="text-sm text-primary font-medium mb-2">{office.type}</p>
                          <address className="text-muted-foreground text-sm not-italic whitespace-pre-line">
                            {office.address}
                          </address>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-card hover:shadow-hero transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Schedule a Demo</h3>
                  <p className="text-muted-foreground mb-6">
                    See TRIBOT in action with a personalized demonstration for your healthcare team.
                  </p>
                  <Button variant="outline" className="w-full">
                    Book Demo
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card hover:shadow-hero transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Research Partnership</h3>
                  <p className="text-muted-foreground mb-6">
                    Collaborate with our research team on clinical validation studies and publications.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card hover:shadow-hero transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Technical Support</h3>
                  <p className="text-muted-foreground mb-6">
                    Get help with implementation, integration, and ongoing technical assistance.
                  </p>
                  <Button variant="outline" className="w-full">
                    Get Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "How accurate is TRIBOT's triage classification?",
                  answer: "TRIBOT has demonstrated 95%+ accuracy in clinical validation studies across multiple emergency departments and languages."
                },
                {
                  question: "What languages does TRIBOT support?",
                  answer: "TRIBOT currently supports 50+ languages with plans to expand further based on healthcare facility needs and regional demographics."
                },
                {
                  question: "How does TRIBOT integrate with existing hospital systems?",
                  answer: "TRIBOT is designed for seamless integration with major EMR systems and can be customized to fit existing clinical workflows."
                },
                {
                  question: "What are the implementation timelines?",
                  answer: "Typical implementation takes 4-8 weeks including system integration, staff training, and clinical validation in your specific environment."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;