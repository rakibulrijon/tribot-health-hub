import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import unswLogo from "@/assets/unsw-logo.png";
import nhmrcLogo from "@/assets/nhmrc-logo.png";
import swslhdLogo from "@/assets/swslhd-logo.webp";

const Partners = () => {
  const partners = [
    { name: "UNSW Sydney", logo: unswLogo },
    { name: "NHMRC", logo: nhmrcLogo },
    { name: "SWSLHD", logo: swslhdLogo },
    { name: "Bankstown-Lidcombe Hospital", logo: "🏥" },
    { name: "Westmead Hospital", logo: "🏥" },
    { name: "Prince of Wales Hospital", logo: "🏥" },
    { name: "NSW Health", logo: "⚕️" },
    { name: "eHealth NSW", logo: "💻" },
  ];

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Our Partners & Collaborators
          </h2>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60 hover:opacity-80 transition-opacity">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center h-16"
              >
                {typeof partner.logo === 'string' && (partner.logo.endsWith('.png') || partner.logo.endsWith('.webp')) ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                ) : (
                  <div className="text-2xl text-muted-foreground">{partner.logo}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3">
                  <div className="flex flex-col items-center justify-center h-16 opacity-60">
                    {typeof partner.logo === 'string' && (partner.logo.endsWith('.png') || partner.logo.endsWith('.webp')) ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-h-10 max-w-full object-contain filter grayscale"
                      />
                    ) : (
                      <div className="text-xl text-muted-foreground">{partner.logo}</div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Partners;