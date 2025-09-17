import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Our Partners & Collaborators
          </h2>
        </div>
        
        {/* Animated Slideshow */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div className="flex flex-col items-center justify-center h-20 opacity-60 hover:opacity-100 transition-all duration-300">
                  {typeof partner.logo === 'string' && (partner.logo.endsWith('.png') || partner.logo.endsWith('.webp')) ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
                    />
                  ) : (
                    <div className="text-2xl text-muted-foreground hover:text-primary transition-colors duration-300">{partner.logo}</div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;