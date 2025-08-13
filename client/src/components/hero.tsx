import { useScroll } from "../hooks/use-scroll";

export default function Hero() {
  const { scrollToSection } = useScroll();

  return (
    <section id="home" className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="animate-float absolute top-20 left-10 w-4 h-4 bg-gold-400 rounded-full opacity-60"></div>
        <div className="animate-float absolute top-40 right-20 w-6 h-6 bg-gold-500 rounded-full opacity-40" style={{animationDelay: '-2s'}}></div>
        <div className="animate-float absolute bottom-40 left-20 w-5 h-5 bg-gold-400 rounded-full opacity-50" style={{animationDelay: '-4s'}}></div>
        <div className="animate-float absolute bottom-20 right-10 w-3 h-3 bg-gold-500 rounded-full opacity-70" style={{animationDelay: '-6s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-down">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
            Yuvraj Adinath <span className="gradient-text">Sanap</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Frontend Developer | Cloud Enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Crafting elegant web experiences with modern technologies and cloud-first thinking
          </p>
        </div>
        
        <div className="animate-fade-in-up space-x-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 animate-glow"
            data-testid="button-view-portfolio"
          >
            View Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            data-testid="button-contact-me"
          >
            Contact Me
          </button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-gold-500 text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
