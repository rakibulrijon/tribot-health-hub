import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import AnimatedCheckmark from "@/components/ui/animated-checkmark";
import SEOHead from "@/components/SEOHead";
import applicationsBackground from "@/assets/applications-background.png";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    reason: "",
    fullName: "",
    email: "",
    organization: "",
    country: "",
    message: "",
    consent: false,
    updates: false
  });

  const contactReasons = [
    "Research & Clinical Collaboration",
    "Investment & Partnerships", 
    "Students & Careers"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleReasonChange = (reason: string) => {
    setFormData(prev => ({ ...prev, reason }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.reason || !formData.fullName || !formData.email || 
        !formData.organization || !formData.country || !formData.message || 
        !formData.consent) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    const subject = `TRIBOT Contact Form - ${formData.reason}`;
    const body = `Hello Team,

I am contacting you regarding TRIBOT.

Name: ${formData.fullName}
Email: ${formData.email}
Organization: ${formData.organization}
Country: ${formData.country}

Reason for Contact: ${formData.reason}

Message:
${formData.message}

Wants Updates: ${formData.updates ? 'Yes' : 'No'}

Best regards,
${formData.fullName}`;

    const mailtoUrl = `mailto:tribot.triage@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setShowSuccess(true);
    setIsLoading(false);
  };

  return (
    <>
      <SEOHead 
        title="Contact - TRIBOT AI-Powered Triage System"
        description="Contact the TRIBOT research team at UNSW Medicine & Health for collaboration, partnerships, or inquiries."
        url="https://tribot.health/contact"
      />
      <div className="min-h-screen relative" style={{ backgroundImage: `url(${applicationsBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <AnimatedCheckmark isVisible={showSuccess} onComplete={() => setShowSuccess(false)} />
        <div className="relative z-10">
          <Header />
          <main className="py-20">
            <section className="py-20">
              <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 animate-fade-in">
                  <span className="text-foreground">Partner with us to</span>
                  <br />
                  <span className="bg-gradient-hero bg-clip-text text-transparent">transform emergency care.</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in">
                  Whether you are a researcher, health professional, investor, or student, we would love to hear from you.
                </p>
              </div>
            </section>
            <section className="py-20">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-12">
                    <h2 className="text-2xl text-foreground flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      For Investors & Strategic Partners
                    </h2>
                    <div className="space-y-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        TRIBOT is an NHMRC Ideas Grant-funded innovation, backed by UNSW Sydney, Bankstown-Lidcombe, Westmead and Prince of Wales Hospitals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-20">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <Card className="border-0 shadow-card bg-card/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-3xl text-foreground text-center mb-6">Get in Touch</CardTitle>
                      <p className="text-muted-foreground text-center">Please select the reason for your enquiry and complete the form.</p>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <form onSubmit={handleSubmit} className="space-y-8" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        <div style={{ display: 'none' }}>
                          <label>Don't fill this out if you are human: <input name="bot-field" /></label>
                        </div>
                        <div className="space-y-4">
                          <Label className="text-lg font-semibold text-foreground">Reason for Contact:</Label>
                          <div className="space-y-3">
                            {contactReasons.map((reason, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <input type="radio" name="reason" id={`reason-${index}`} className="text-primary" checked={formData.reason === reason} onChange={() => handleReasonChange(reason)} />
                                <label htmlFor={`reason-${index}`} className="text-muted-foreground cursor-pointer">{reason}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-6">
                          <h3 className="text-lg font-semibold text-foreground">Common fields:</h3>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="fullName">Full Name*</Label>
                              <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email*</Label>
                              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="organization">Organisation / Institution*</Label>
                              <Input id="organization" name="organization" value={formData.organization} onChange={handleInputChange} required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="country">Country / Region*</Label>
                              <Input id="country" name="country" value={formData.country} onChange={handleInputChange} required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="message">Message*</Label>
                            <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required className="min-h-[120px]" placeholder="Please provide details about your enquiry..." />
                          </div>
                        </div>
                        <div className="space-y-4 border-t pt-6">
                          <h3 className="font-semibold text-foreground">Consent & Privacy</h3>
                          <div className="flex items-start space-x-3">
                            <Checkbox id="consent" checked={formData.consent} onCheckedChange={(checked) => handleCheckboxChange('consent', checked as boolean)} required className="mt-1" />
                            <label htmlFor="consent" className="text-sm text-muted-foreground">I agree to the data handling notice.*</label>
                          </div>
                          <p className="text-sm text-muted-foreground">We use your details only to respond to your enquiry.</p>
                          <div className="flex items-start space-x-3">
                            <Checkbox id="updates" checked={formData.updates} onCheckedChange={(checked) => handleCheckboxChange('updates', checked as boolean)} className="mt-1" />
                            <label htmlFor="updates" className="text-sm text-muted-foreground">Email me TRIBOT research updates (optional).</label>
                          </div>
                        </div>
                        <Button type="submit" variant="hero" size="lg" className="w-full text-lg" disabled={isLoading}>
                          {isLoading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
