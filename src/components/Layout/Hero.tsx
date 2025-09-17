import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-hero rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-accent rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center animate-pulse-slow">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
              </svg>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Tribot is ground zero</span>
                <br />
                <span className="text-foreground">for </span>
                <span className="bg-gradient-hero bg-clip-text text-transparent">AI robotics</span>
                <br />
                <span className="text-foreground">startups.</span>
              </h1>

              {/* Decorative Line */}
              <div className="w-32 h-1 bg-gradient-accent rounded-full"></div>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Tribot backs early-stage founders with community, education, and investment in the future of AI robotics.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Get Investment
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="AI Robotics Technology" 
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
            {/* Image Background Glow */}
            <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-3xl opacity-20 scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;