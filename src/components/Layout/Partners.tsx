const Partners = () => {
  const partners = [
    { name: "Queensland Health", logo: "QLD Health" },
    { name: "Griffith University", logo: "GRIFFITH" },
    { name: "Gold Coast Health", logo: "GC Health" },
    { name: "Australian Government", logo: "AU GOV" },
    { name: "Queensland Government", logo: "QLD GOV" },
    { name: "Medical Research", logo: "MED RES" },
    { name: "AI Institute", logo: "AI INST" },
    { name: "Healthcare Innovation", logo: "HC INNOV" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group relative p-4 rounded-lg hover:bg-background transition-all duration-300 cursor-pointer"
            >
              <div className="w-20 h-12 bg-muted rounded-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.logo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Animation for Mobile */}
        <div className="mt-12 md:hidden">
          <div className="flex space-x-8 animate-pulse">
            {partners.slice(0, 4).map((partner, index) => (
              <div 
                key={`mobile-${index}`}
                className="flex-shrink-0 w-16 h-10 bg-muted rounded-md flex items-center justify-center"
              >
                <span className="text-xs font-semibold text-muted-foreground">
                  {partner.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;