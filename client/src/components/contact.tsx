import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:yuvrajsanap.sit.comp@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Opening email client with your message...");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-navy-900 section-fade">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="font-serif text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gold-500 p-3 rounded-lg">
                    <i className="fas fa-envelope text-navy-900"></i>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <a 
                      href="mailto:yuvrajsanap.sit.comp@gmail.com"
                      className="text-white hover:text-gold-400 transition-colors"
                      data-testid="contact-email"
                    >
                      yuvrajsanap.sit.comp@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gold-500 p-3 rounded-lg">
                    <i className="fas fa-phone text-navy-900"></i>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <a 
                      href="tel:+919373500779"
                      className="text-white hover:text-gold-400 transition-colors"
                      data-testid="contact-phone"
                    >
                      +91-9373500779
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gold-500 p-3 rounded-lg">
                    <i className="fas fa-map-marker-alt text-navy-900"></i>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <div className="text-white">Maharashtra, India</div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a 
                  href="https://www.linkedin.com/in/yuvrajs779/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 p-3 rounded-lg transition-colors"
                  data-testid="contact-linkedin"
                >
                  <i className="fab fa-linkedin text-navy-900"></i>
                </a>
                <a 
                  href="https://github.com/YuvrajS99" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 p-3 rounded-lg transition-colors"
                  data-testid="contact-github"
                >
                  <i className="fab fa-github text-navy-900"></i>
                </a>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="contact-form space-y-6">
                <div>
                  <label className="text-gray-300 font-medium block mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy-800 border border-gray-600 text-white placeholder-gray-400 px-3 py-2 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 font-medium block mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy-800 border border-gray-600 text-white placeholder-gray-400 px-3 py-2 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 font-medium block mb-2">Message *</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy-800 border border-gray-600 text-white placeholder-gray-400 px-3 py-2 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 resize-none"
                    data-testid="input-message"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                  data-testid="button-submit-form"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
