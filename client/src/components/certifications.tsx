import { useEffect, useRef } from "react";

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft Azure (AZ-900)",
      description: "Cloud computing fundamentals and Azure services expertise",
      verificationUrl: "https://verify.certiport.com/wy2uL-48EN",
      icon: "fas fa-certificate",
      score: null
    },
    {
      title: "Java Training Certificate",
      issuer: "IIT Bombay, Spoken Tutorial Project",
      description: "Comprehensive Java programming and development training",
      verificationUrl: "#",
      icon: "fab fa-java",
      score: "82.50/100"
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-white section-fade">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 text-center mb-6">
            Certifications & <span className="gradient-text">Assessments</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                data-testid={`certification-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 p-3 rounded-xl">
                    <i className={`${cert.icon} text-2xl text-gold-600`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-navy-800 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mb-4">{cert.description}</p>
                    
                    <div className="flex items-center space-x-4">
                      {cert.score && (
                        <span className="text-gold-600 font-semibold">Score: {cert.score}</span>
                      )}
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gold-600 hover:text-gold-500 font-medium transition-colors"
                        data-testid={`certification-verify-${index}`}
                      >
                        <i className="fas fa-external-link-alt mr-2"></i>
                        Verify Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
