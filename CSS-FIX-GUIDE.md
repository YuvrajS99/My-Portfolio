# CSS Fix for Windows

I've fixed the Tailwind CSS error. If you're still seeing issues, replace your `client/src/index.css` file with this simplified version:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #2c3e50;
  --primary: #d4af37;
  --primary-foreground: #1a1a2e;
  --secondary: #1a1a2e;
  --secondary-foreground: #ffffff;
  --navy-900: #0f172a;
  --navy-800: #1e293b;
  --navy-700: #334155;
  --gold-500: #d4af37;
  --gold-400: #f1c40f;
  --gold-300: #f39c12;
  --font-serif: 'Playfair Display', serif;
  --font-sans: 'Inter', sans-serif;
}

body {
  font-family: var(--font-sans);
  background-color: var(--background);
  color: var(--foreground);
}

html {
  scroll-behavior: smooth;
}

.font-serif {
  font-family: var(--font-serif);
}

.font-sans {
  font-family: var(--font-sans);
}

.gradient-text {
  background: linear-gradient(135deg, var(--gold-500) 0%, var(--gold-400) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-bg {
  background: linear-gradient(135deg, var(--navy-900) 0%, var(--navy-800) 50%, var(--navy-700) 100%);
}

.section-fade {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.section-fade.visible {
  opacity: 1;
  transform: translateY(0);
}

.skill-item {
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(212, 175, 55, 0.2);
}

.project-card {
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px rgba(10, 22, 40, 0.3);
}

.contact-form input,
.contact-form textarea {
  transition: all 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--gold-500);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
}
```

This version removes the problematic Tailwind utility classes and uses standard CSS.