import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSuccess(true);
      form.reset();
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="contact-form space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-medium">Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            className="bg-navy-800 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold-500"
                            data-testid="input-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-medium">Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            className="bg-navy-800 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold-500"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-medium">Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            rows={5}
                            className="bg-navy-800 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold-500 resize-none"
                            data-testid="input-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-500"
                    data-testid="button-submit-form"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  
                  {isSuccess && (
                    <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <i className="fas fa-check-circle text-green-400 text-xl mb-2"></i>
                      <p className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
                    </div>
                  )}
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
