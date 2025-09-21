import { Card, CardContent } from "@/components/ui/card";
import aboutBackground from "@/assets/about-background-new.png";

const AboutTribot = () => {
  return (
    <section 
      className="py-20 bg-background relative"
      style={{
        backgroundImage: `url(${aboutBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
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

        </div>
      </div>
    </section>
  );
};

export default AboutTribot;