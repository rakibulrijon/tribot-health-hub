import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import applicationsBackground from "@/assets/applications-background.png";

const Contact = () => {
  const contactReasons = [
    "🔬 Research & Clinical Collaboration",
    "💼 Investment & Partnerships", 
    "🎓 Students & Careers"
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
          <section className="py-20">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Contact</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">TRIBOT</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Partner with us to transform emergency care. Whether you are a researcher, health professional, investor, or student, we would love to hear from you.
              </p>
            </div>
          </section>

          {/* Investor & Strategic Partners */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="border-0 shadow-card mb-12 bg-card/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground flex items-center">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      For Investors & Strategic Partners
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      🚀 TRIBOT is an <span className="text-primary font-semibold">NHMRC Ideas Grant–funded innovation</span>, backed by UNSW Sydney, Bankstown-Lidcombe, Westmead and Prince of Wales Hospitals.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Problem</h3>
                        <p className="text-muted-foreground">Language barriers delay and endanger emergency care.</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Solution</h3>
                        <p className="text-muted-foreground">TRIBOT provides real-time multilingual AI triage support, validated in clinical settings.</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Opportunity</h3>
                        <p className="text-muted-foreground">TRIBOT has global commercial potential, scalable to multiple languages, adaptable across EDs, hospitals, aged care, and telehealth.</p>
                      </div>
                    </div>
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <p className="text-muted-foreground">📄 Request our investor brief or pitch deck directly using the form below.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="border-0 shadow-card bg-card/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl text-foreground text-center mb-6">Get in Touch</CardTitle>
                    <p className="text-muted-foreground text-center">
                      Please select the reason for your enquiry and complete the form.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Reason for Contact */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold text-foreground">Reason for Contact (choose one):</Label>
                      <div className="space-y-3">
                        {contactReasons.map((reason, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <input type="radio" name="reason" id={`reason-${index}`} className="text-primary" />
                            <label htmlFor={`reason-${index}`} className="text-muted-foreground">{reason}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name*</Label>
                        <Input id="fullName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email*</Label>
                        <Input id="email" type="email" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organisation / Institution*</Label>
                        <Input id="organization" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country / Region*</Label>
                        <Input id="country" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Please avoid personal health information)*</Label>
                      <Textarea 
                        id="message" 
                        required
                        className="min-h-[120px]"
                        placeholder="Please provide details about your enquiry..."
                      />
                    </div>

                    {/* Consent & Privacy */}
                    <div className="space-y-4 border-t pt-6">
                      <h3 className="font-semibold text-foreground">Consent & Privacy</h3>
                      
                      <div className="flex items-start space-x-3">
                        <Checkbox id="consent" required className="mt-1" />
                        <label htmlFor="consent" className="text-sm text-muted-foreground">
                          I agree to the data handling notice.*
                        </label>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        We use your details only to respond to your enquiry. TRIBOT does not provide medical advice via this form. Please do not include personal health information.
                      </p>
                      
                      <div className="flex items-start space-x-3">
                        <Checkbox id="updates" className="mt-1" />
                        <label htmlFor="updates" className="text-sm text-muted-foreground">
                          Email me TRIBOT research and innovation updates (optional).
                        </label>
                      </div>
                    </div>

                    <Button variant="hero" size="lg" className="w-full text-lg">
                      Send Message
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;