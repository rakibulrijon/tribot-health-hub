import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import padmaImage from "@/assets/padma-narasimhan.jpg";
import rayhanImage from "@/assets/rayhan-profile.jpg";
import abdullahImage from "@/assets/abdullah-profile.jpg";
import josephImage from "@/assets/joseph-profile.jpg";
import adityaImage from "@/assets/aditya-joshi-profile.jpg";
import robertoImage from "@/assets/roberto-forero-profile.jpg";
import sandraImage from "@/assets/sandra-hale-profile.jpg";
import jitendraImage from "@/assets/jitendra-jonnagaddala-profile.jpg";
import usmanImage from "@/assets/usman-iqbal-profile.jpg";
import mohsinImage from "@/assets/mohammed-mohsin-profile.jpg";
import sallyImage from "@/assets/sally-mccarthy-profile.jpg";
import anthonyImage from "@/assets/anthony-sunjaya-profile.jpg";
import matthewImage from "@/assets/matthew-smith-profile.jpg";
import hollyImage from "@/assets/holly-seale-profile.jpg";
import andrewImage from "@/assets/andrew-coggins-profile.jpg";
import fangImage from "@/assets/fang-shen-profile.jpg";
import dipankarImage from "@/assets/dipankar-srirag-profile.jpg";
import paulImage from "@/assets/paul-nguyen-profile.jpg";
import wayneImage from "@/assets/wayne-varndell-profile.jpg";
import benjaminImage from "@/assets/benjamin-harris-roxas-profile.jpg";
import chiImage from "@/assets/chi-ho-chan-profile.jpg";
import patrickImage from "@/assets/patrick-san-gabriel-profile.jpg";
import brynnImage from "@/assets/brynn-quick-profile.jpg";
import aboutBackground from "@/assets/about-background.png";

const About = () => {
  const founder = {
    name: "Dr Padmanesan Narasimhan (Padma)",
    
    positions: [
      "Senior Lecturer & Lead, Digital Health & AI – UNSW Sydney",
      "Resident Medical Officer – Bankstown-Lidcombe Hospital"
    ],
    bio: "Dr Narasimhan is a WHO-recognised expert in AI and Digital Health, with a strong track record in epidemiology, health systems, and emergency medicine. He has led multimillion-dollar digital health projects, including TRIBOT and the EPIWATCH AI-based epidemic preparedness platform.",
    image: padmaImage,
    unsw: "https://www.unsw.edu.au/staff/padmanesan-narasimhan"
  };

  const chiefInvestigators = [
    { name: "Assoc Prof Roberto Forero", affiliation: "UNSW", image: robertoImage, unsw: "https://www.unsw.edu.au/staff/roberto-forero" },
    { name: "Dr Aditya Joshi", affiliation: "UNSW", image: adityaImage, linkedin: "https://www.linkedin.com/in/aditya-joshi-phd/", unsw: "https://www.unsw.edu.au/staff/aditya-joshi" },
    { name: "Prof Sandra Hale", affiliation: "UNSW", image: sandraImage, unsw: "https://www.unsw.edu.au/staff/sandra-hale" },
    { name: "Dr Jitendra Jonnagaddala", affiliation: "UNSW", image: jitendraImage, unsw: "https://www.unsw.edu.au/staff/jitendra-jonnagaddala" },
    { name: "Assoc Prof Usman Iqbal", affiliation: "UNSW", image: usmanImage, unsw: "https://www.unsw.edu.au/staff/usman-iqbal" },
    { name: "Dr Mohammed Mohsin", affiliation: "Liverpool Hospital", image: mohsinImage, unsw: "https://www.unsw.edu.au/staff/mohammed-mohsin" },
    { name: "Dr Anthony Sunjaya", affiliation: "UNSW", image: anthonyImage, unsw: "https://www.unsw.edu.au/staff/anthony-sunjaya" },
    { name: "Assoc Prof Sally McCarthy", affiliation: "UNSW", image: sallyImage },
    { name: "Dr Matthew Smith", affiliation: "Bankstown Lidcombe Hospital", image: matthewImage, sydney: "https://www.sydney.edu.au/arts/about/our-people/academic-staff/matthew-smith.html" }
  ];

  const associateInvestigators = [
    { name: "Ms Fang (Sam) Shen", affiliation: "SWSLHD", image: fangImage },
    { name: "Assoc Prof Andrew Coggins", affiliation: "Westmead Hospital", image: andrewImage, sydney: "https://www.sydney.edu.au/medicine-health/about/our-people/academic-staff/andrew-coggins.html" },
    { name: "Wayne Varndell", affiliation: "Prince of Wales Hospital", image: wayneImage },
    { name: "Dr Benjamin Harris-Roxas", affiliation: "UNSW", image: benjaminImage },
    { name: "Assoc Prof Holly Seale", affiliation: "UNSW", image: hollyImage },
    { name: "Dr Chi Ho Chan", affiliation: "UNSW", image: chiImage },
    { name: "Mrs Brynn Quick", affiliation: "Macquarie University", image: brynnImage, macquarie: "https://researchers.mq.edu.au/en/persons/brynn-quick" },
    { name: "Dr Patrick San Gabriel", affiliation: "eHealth NSW", image: patrickImage }
  ];

  const researchFellows = [
    { name: "Abdullah Masud", role: "AI/ML Research Fellow", image: abdullahImage, linkedin: "https://www.linkedin.com/in/abdullah-al-masud-27january1986/" },
    { name: "Joseph Zhu", role: "Data Science & Engineering", image: josephImage, linkedin: "https://www.linkedin.com/in/zhujoseph/" },
    { name: "Md Abu Rayhan", role: "Digital Health Informatics", image: rayhanImage, linkedin: "https://www.linkedin.com/in/mdaburayhann/" }
  ];

  const researchStudents = [
    { name: "Paul Nguyen", role: "PhD Candidate (Digital Health & AI)", image: paulImage },
    { name: "Dipankar Srirag", role: "PhD Candidate (AI & Healthcare Innovation)", image: dipankarImage, linkedin: "https://www.linkedin.com/in/dipankarsrirag/" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        

        {/* Founder Section */}
        <section 
          className="relative overflow-hidden"
          style={{
            backgroundImage: `url(${aboutBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-black drop-shadow-sm animate-fade-in">
              Founder & Lead Investigator
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card 
                className="border-0 shadow-2xl hover:shadow-hero transition-all duration-500 animate-scale-in bg-white/95 backdrop-blur-sm cursor-pointer"
                onClick={() => window.open(founder.unsw, "_blank")}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="flex-shrink-0">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-32 h-32 rounded-full object-cover object-center shadow-hero animate-float aspect-square"
                        style={{ aspectRatio: '1/1' }}
                      />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-foreground">{founder.name.trim()}</h3>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open("https://www.linkedin.com/in/padmanesan-narasimhan-b2664734/", "_blank");
                          }}
                          className="bg-[#0077B5] text-white p-2 rounded-full hover:bg-[#005885] transition-colors duration-300 hover:scale-110 transform"
                          aria-label="Visit LinkedIn Profile"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </button>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        {founder.positions.map((position, index) => (
                          <p key={index} className="text-muted-foreground font-medium text-sm sm:text-base">{position}</p>
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{founder.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Sections */}
        <section className="py-12 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Chief Investigators */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground animate-fade-in">
                Chief Investigators (CIs)
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {chiefInvestigators.map((ci, index) => (
                   <Card 
                     key={index} 
                     className={`border-0 shadow-card hover:shadow-hero hover-scale transition-all duration-300 animate-fade-in ${ci.unsw || ci.sydney ? 'cursor-pointer' : ''}`}
                     style={{ animationDelay: `${index * 100}ms` }}
                     onClick={(ci.unsw || ci.sydney) ? () => window.open(ci.unsw || ci.sydney, "_blank") : undefined}
                  >
                    <CardContent className="p-4 text-center">
                      {ci.image && (
                        <div className="flex justify-center mb-3">
                           <img 
                             src={ci.image} 
                             alt={ci.name}
                             className="w-20 h-20 rounded-full object-cover object-top shadow-card"
                           />
                        </div>
                      )}
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{ci.name}</h3>
                        <div className="flex gap-1">
                          {ci.linkedin && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(ci.linkedin, "_blank");
                              }}
                              className="bg-[#0077B5] text-white p-1 rounded-full hover:bg-[#005885] transition-colors duration-300 hover:scale-110 transform"
                              aria-label="Visit LinkedIn Profile"
                            >
                              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-primary">{ci.affiliation}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Associate Investigators */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground animate-fade-in">
                Associate Investigators (AIs)
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                 {associateInvestigators.map((ai, index) => (
                   <Card 
                     key={index} 
                     className={`border-0 shadow-card hover:shadow-hero hover-scale transition-all duration-300 animate-fade-in ${ai.sydney || ai.macquarie ? 'cursor-pointer' : ''}`}
                     style={{ animationDelay: `${index * 100}ms` }}
                     onClick={(ai.sydney || ai.macquarie) ? () => window.open(ai.sydney || ai.macquarie, "_blank") : undefined}
                   >
                    <CardContent className="p-4 text-center">
                      {ai.image && (
                        <div className="flex justify-center mb-3">
                           <img 
                             src={ai.image} 
                             alt={ai.name}
                             className="w-20 h-20 rounded-full object-cover object-top shadow-card"
                           />
                        </div>
                      )}
                      <h3 className="font-semibold text-foreground">{ai.name}</h3>
                      <p className="text-sm text-primary">{ai.affiliation}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Research Fellows & Collaborators */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground animate-fade-in">
                Research Fellows & Collaborators
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {researchFellows.map((fellow, index) => (
                  <Card 
                    key={index} 
                    className="border-0 shadow-card hover:shadow-hero hover-scale transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 text-center">
                      {fellow.image && (
                        <div className="flex justify-center mb-3">
                           <img 
                             src={fellow.image} 
                             alt={fellow.name}
                             className={`w-24 h-24 rounded-full shadow-card ${fellow.name.includes('Rayhan') ? 'object-cover object-[center_10%]' : 'object-cover object-center'}`}
                           />
                        </div>
                      )}
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{fellow.name}</h3>
                        {fellow.linkedin && (
                          <button
                            onClick={() => window.open(fellow.linkedin, "_blank")}
                            className="bg-[#0077B5] text-white p-1 rounded-full hover:bg-[#005885] transition-colors duration-300 hover:scale-110 transform"
                            aria-label="Visit LinkedIn Profile"
                          >
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </button>
                        )}
                      </div>
                      <p className="text-sm text-primary">{fellow.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Research Students */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8 text-foreground animate-fade-in">
                Research Students
              </h2>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {researchStudents.map((student, index) => (
                  <Card 
                    key={index} 
                    className="border-0 shadow-card hover:shadow-hero hover-scale transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 text-center">
                      {student.image && (
                        <div className="flex justify-center mb-3">
                          <img 
                            src={student.image} 
                            alt={student.name}
                            className="w-24 h-24 rounded-full object-cover object-center shadow-card"
                          />
                        </div>
                      )}
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{student.name}</h3>
                        {student.linkedin && (
                          <button
                            onClick={() => window.open(student.linkedin, "_blank")}
                            className="bg-[#0077B5] text-white p-1 rounded-full hover:bg-[#005885] transition-colors duration-300 hover:scale-110 transform"
                            aria-label="Visit LinkedIn Profile"
                          >
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </button>
                        )}
                      </div>
                      <p className="text-sm text-primary">{student.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Team Description */}
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Together, our team brings world-class expertise across{" "}
                <span className="text-primary font-semibold bg-gradient-hero bg-clip-text text-transparent">
                  clinical medicine, AI engineering, linguistics, and health systems
                </span>{" "}
                — ensuring TRIBOT is both scientifically robust and socially impactful.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;