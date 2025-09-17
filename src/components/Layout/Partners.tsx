const Partners = () => {
  const partners = [
    { name: "Queensland Government", logo: "QLD" },
    { name: "Notion", logo: "NOTION" },
    { name: "Gold Coast Health", logo: "GCH" },
    { name: "QIC", logo: "QIC" },
    { name: "Amazon Web Services", logo: "AWS" },
    { name: "Google Cloud", logo: "CLOUD" },
    { name: "Cake Equity", logo: "CAKE" },
    { name: "Digital Health", logo: "DHF" },
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