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
import applicationsBackground from "@/assets/applications-background.png";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Form state
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
    "🔬 Research & Clinical Collaboration",
    "💼 Investment & Partnerships", 
    "🎓 Students & Careers"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleReasonChange = (reason: string) => {
    setFormData(prev => ({
      ...prev,
      reason: reason
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.reason || !formData.fullName || !formData.email || 
        !formData.organization || !formData.country || !formData.message || 
        !formData.consent) {
      toast({
        title: "Please fill in all required fields",
        description: "All fields marked with * are required",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Use mailto approach - opens user's email client
      const subject = `TRIBOT Contact Form - ${formData.reason}`;
      const body = `Hello Abdullah,

I am contacting you regarding TRIBOT.

Name: ${formData.fullName}
Email: ${formData.email}
Organization: ${formData.organization}
Country: ${formData.country}

Reason for Contact: ${formData.reason}

Message:
${formData.message}

Wants Updates: ${formData.updates ? 'Yes' : 'No'}

Submitted: ${new Date().toLocaleString()}

Best regards,
${formData.fullName}`;

      const mailtoUrl = `mailto:abdullah.masud@unsw.edu.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      
      // Show animated checkmark
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        reason: "",
        fullName: "",
        email: "",
        organization: "",
        country: "",
        message: "",
        consent: false,
        updates: false
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

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
      
      {/* Animated Checkmark */}
      <AnimatedCheckmark 
        isVisible={showSuccess} 
        onComplete={() => setShowSuccess(false)} 
      />
      
      <div className="relative z-10">
        <Header />
        <main className="py-20">
          {/* Hero Section */}
          <section className="py-20">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 animate-fade-in">
                <span className="text-foreground">Partner with us to</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">transform emergency care.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
                Whether you are a researcher, health professional, investor, or student, we would love to hear from you.
              </p>
            </div>
          </section>

          {/* Investor & Strategic Partners */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                  <div>
                    <h2 className="text-2xl text-foreground flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      For Investors & Strategic Partners
                    </h2>
                  </div>
                  <div className="space-y-6">
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
                  </div>
                </div>
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
                    <form onSubmit={handleSubmit} className="space-y-8" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                      {/* Hidden fields for Netlify */}
                      <input type="hidden" name="form-name" value="contact" />
                      <div style={{ display: 'none' }}>
                        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                      </div>
                      
                      {/* Reason for Contact */}
                      <div className="space-y-4">
                        <Label className="text-lg font-semibold text-foreground">Reason for Contact (choose one):</Label>
                        <div className="space-y-3">
                          {contactReasons.map((reason, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <input 
                                type="radio" 
                                name="reason" 
                                id={`reason-${index}`} 
                                className="text-primary" 
                                checked={formData.reason === reason}
                                onChange={() => handleReasonChange(reason)}
                              />
                              <label htmlFor={`reason-${index}`} className="text-muted-foreground cursor-pointer">{reason}</label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Form Fields */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-foreground">Common fields (all enquiries):</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name*</Label>
                            <Input 
                              id="fullName" 
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email*</Label>
                            <Input 
                              id="email" 
                              name="email"
                              type="email" 
                              value={formData.email}
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="organization">Organisation / Institution*</Label>
                            <Input 
                              id="organization" 
                              name="organization"
                              value={formData.organization}
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="country">Country / Region*</Label>
                            <Input 
                              id="country" 
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message (Please avoid personal health information)*</Label>
                          <Textarea 
                            id="message" 
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="min-h-[120px]"
                            placeholder="Please provide details about your enquiry..."
                          />
                        </div>
                      </div>

                      {/* Consent & Privacy */}
                      <div className="space-y-4 border-t pt-6">
                        <h3 className="font-semibold text-foreground">Consent & Privacy</h3>
                        
                        <div className="flex items-start space-x-3">
                          <Checkbox 
                            id="consent" 
                            checked={formData.consent}
                            onCheckedChange={(checked) => handleCheckboxChange('consent', checked as boolean)}
                            required 
                            className="mt-1" 
                          />
                          <label htmlFor="consent" className="text-sm text-muted-foreground">
                            I agree to the data handling notice.*
                          </label>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          We use your details only to respond to your enquiry. TRIBOT does not provide medical advice via this form. Please do not include personal health information.
                        </p>
                        
                        <div className="flex items-start space-x-3">
                          <Checkbox 
                            id="updates" 
                            checked={formData.updates}
                            onCheckedChange={(checked) => handleCheckboxChange('updates', checked as boolean)}
                            className="mt-1" 
                          />
                          <label htmlFor="updates" className="text-sm text-muted-foreground">
                            Email me TRIBOT research and innovation updates (optional).
                          </label>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        className="w-full text-lg"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Sending...' : 'Send Message'}
                        {!isLoading && (
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        )}
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
  );
};

export default Contact;