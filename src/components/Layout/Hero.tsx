import emergencyCare from "@/assets/emergency-triage.jpg";
import heroBackground from "@/assets/hero-background.png";
import PrototypeAccessForm from "./PrototypeAccessForm";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[40vh] flex items-center bg-gradient-subtle overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-hero rounded-full opacity-15 animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-accent rounded-full opacity-10 animate-pulse-slow"></div>
      </div>

      <div className="w-full px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-900">Transforming Emergency Care with</span>
                <br />
                <span className="text-gray-800">AI-Powered Triage</span>
              </h1>

              {/* Decorative Line */}
              <div className="w-32 h-1 bg-gradient-accent rounded-full"></div>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-gray-800 leading-relaxed max-w-2xl font-medium">
              Every second counts in the Emergency Department. Yet, for millions of linguistically diverse patients, language barriers delay care, increase risks, and worsen outcomes.
            </p>
            
            {/* Additional Context */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              TRIBOT is a conversational AI chatbot designed to bridge this gap. By combining cutting-edge AI with clinical expertise, TRIBOT enables real-time multilingual interpretation and clinically validated triage classification — ensuring safe, timely, and equitable care.
            </p>
            
            {/* Vision Statement */}
            <p className="text-lg text-gray-900 font-semibold max-w-2xl">
              Our vision: A world where language is never a barrier to urgent, life-saving healthcare.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <PrototypeAccessForm />
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={emergencyCare} 
                alt="AI-Powered Emergency Care Technology" 
                className="w-4/5 h-auto rounded-2xl shadow-hero mx-auto"
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