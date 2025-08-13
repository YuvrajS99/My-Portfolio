import { useEffect, useRef } from "react";

export default function Skills() {
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

  const skillCategories = [
    {
      name: "Frontend Technologies",
      skills: [
        { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
        { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-500" },
        { name: "React", icon: "fab fa-react", color: "text-cyan-500" },
        { name: "VS Code", icon: "fas fa-code", color: "text-gray-600" },
      ]
    },
    {
      name: "Cloud & Backend",
      skills: [
        { name: "AWS", icon: "fab fa-aws", color: "text-orange-400" },
        { name: "Azure", icon: "fab fa-microsoft", color: "text-blue-600" },
        { name: "Google Cloud", icon: "fab fa-google", color: "text-red-500" },
        { name: "MySQL", icon: "fas fa-database", color: "text-blue-700" },
        { name: "Java", icon: "fab fa-java", color: "text-red-600" },
        { name: "Postman", icon: "fas fa-tools", color: "text-gray-600" },
      ]
    },
    {
      name: "Development Tools",
      skills: [
        { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
        { name: "PowerBI", icon: "fas fa-chart-bar", color: "text-yellow-600" },
        { name: "JIRA", icon: "fas fa-project-diagram", color: "text-blue-600" },
        { name: "Debugging", icon: "fas fa-bug", color: "text-green-600" },
        { name: "DSA", icon: "fas fa-sitemap", color: "text-purple-600" },
        { name: "OOP", icon: "fas fa-object-group", color: "text-indigo-600" },
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white section-fade">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 text-center mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-16"></div>
          
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="font-serif text-2xl font-semibold text-navy-800 text-center mb-8">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-item bg-gray-50 p-6 rounded-xl text-center group cursor-pointer"
                    data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <i className={`${skill.icon} text-4xl ${skill.color} mb-4 group-hover:scale-110 transition-transform`}></i>
                    <h4 className="font-semibold text-navy-800 text-sm">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
