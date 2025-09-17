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
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Our Partners & Collaborators
          </h2>
        </div>
        
        {/* Animated Slideshow with Center Focus */}
        <div className="relative overflow-hidden">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/5 lg:basis-1/7">
                  <div className="flex flex-col items-center justify-center h-40 group transition-all duration-700 ease-in-out">
                    <div className="transform transition-all duration-700 ease-in-out group-hover:scale-125 opacity-100">
                      {typeof partner.logo === 'string' && (partner.logo.endsWith('.png') || partner.logo.endsWith('.webp')) ? (
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-h-24 max-w-full object-contain transition-all duration-700 ease-in-out transform hover:scale-125"
                        />
                      ) : (
                        <div className="text-5xl text-foreground hover:text-primary transition-all duration-700 ease-in-out transform hover:scale-125">{partner.logo}</div>
                      )}
                    </div>
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