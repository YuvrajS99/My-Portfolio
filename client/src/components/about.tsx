import { useEffect, useRef } from "react";

export default function About() {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white section-fade">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="@assets/image_1755079377287.jpg" 
                alt="Yuvraj Adinath Sanap - Professional Portrait" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-[4/5]"
              />
            </div>
            
            <div className="animate-slide-in-right text-left">
              <h3 className="font-serif text-2xl font-semibold text-navy-800 mb-6">
                Building the Future, One Line at a Time
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Final-year Computer Engineering student specializing in Frontend Development, proficient in HTML, CSS, JavaScript, Bootstrap, Azure Fundamentals certified, and experienced with building responsive, user-friendly web interfaces. Strong problem-solving skills, eager to contribute to innovative frontend projects.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gold-500 font-bold text-2xl">3+</div>
                  <div className="text-gray-600 text-sm">Years Learning</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gold-500 font-bold text-2xl">10+</div>
                  <div className="text-gray-600 text-sm">Projects Built</div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/yuvrajs779/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold-500 hover:text-gold-400 text-2xl transition-colors"
                  data-testid="link-linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a 
                  href="https://github.com/YuvrajS99" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold-500 hover:text-gold-400 text-2xl transition-colors"
                  data-testid="link-github"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a 
                  href="mailto:yuvrajsanap.sit.comp@gmail.com"
                  className="text-gold-500 hover:text-gold-400 text-2xl transition-colors"
                  data-testid="link-email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
