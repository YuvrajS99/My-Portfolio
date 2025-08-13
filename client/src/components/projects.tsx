import { useEffect, useRef } from "react";

export default function Projects() {
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

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Showcase previous work with clean UI & mobile-friendly layout using modern web technologies.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "To-Do Web App",
      description: "Interactive task management application with local storage functionality and intuitive user interface.",
      technologies: ["JavaScript", "Local Storage", "CSS"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      demoUrl: "https://todoappyuva.netlify.app/",
      codeUrl: "#"
    },
    {
      title: "College Management System",
      description: "Comprehensive database solution with advanced SQL queries, joins, and subqueries for educational institution management.",
      technologies: ["MySQL", "SQL", "Database"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-navy-900 section-fade">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="project-card bg-navy-800 rounded-2xl overflow-hidden shadow-2xl group"
                data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gold-500/20 text-gold-400 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gold-400 hover:text-gold-300 transition-colors"
                      data-testid={`project-demo-${index}`}
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gold-400 hover:text-gold-300 transition-colors"
                      data-testid={`project-code-${index}`}
                    >
                      <i className="fab fa-github mr-2"></i>
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
              data-testid="button-view-all-projects"
            >
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
