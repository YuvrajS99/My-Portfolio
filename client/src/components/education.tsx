import { useEffect, useRef } from "react";

export default function Education() {
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

  const educationData = [
    {
      period: "2022 – 2026",
      degree: "B.E. Computer Science & Engineering",
      institution: "Sinhgad Institute of Technology",
      grade: "CGPA: 8.01/10",
      align: "left"
    },
    {
      period: "2022",
      degree: "12th MSBSHSE",
      institution: "Sant Bhagwan Baba Junior College Pathardi",
      grade: "69.67%",
      align: "right"
    },
    {
      period: "2020",
      degree: "10th MSBSHSE",
      institution: "Ideal English Medium School, Shirur Kasar",
      grade: "91.60%",
      align: "left"
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-gray-50 section-fade">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 text-center mb-6">
            Educational <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-16"></div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-gold-500 to-gold-400"></div>
            
            {educationData.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${
                  item.align === "left" ? "animate-slide-in-left" : "animate-slide-in-right md:justify-end"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className={`ml-20 md:ml-0 md:w-1/2 ${item.align === "left" ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-gold-500 font-semibold text-sm mb-2">{item.period}</div>
                    <h3 className="font-serif text-xl font-semibold text-navy-800 mb-2">{item.degree}</h3>
                    <p className="text-navy-700 mb-2">{item.institution}</p>
                    <div className="text-gold-500 font-semibold">{item.grade}</div>
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
