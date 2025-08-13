# Windows Fix Guide - Content Not Showing

The server is running but content isn't showing because of import path issues. Here's the complete fix:

## Step 1: Replace App.tsx
Replace the content of `client/src/App.tsx` with:

```tsx
import { Switch, Route } from "wouter";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
```

## Step 2: Replace home.tsx
Replace the content of `client/src/pages/home.tsx` with:

```tsx
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import About from "../components/about";
import Education from "../components/education";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Certifications from "../components/certifications";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
```

## Step 3: Fix Navigation Component
In `client/src/components/navigation.tsx`, replace the import:
```tsx
// Change this:
import { useScroll } from "@/hooks/use-scroll";

// To this:
import { useScroll } from "../hooks/use-scroll";
```

## Step 4: Fix Hero Component
In `client/src/components/hero.tsx`, replace the import:
```tsx
// Change this:
import { useScroll } from "@/hooks/use-scroll";

// To this:
import { useScroll } from "../hooks/use-scroll";
```

## Step 5: Fix Contact Component (Replace entire content)
Replace the entire content of `client/src/components/contact.tsx` with the simplified version from the `setup-local.md` file (the one without form validation libraries).

## Step 6: Create Missing UI Components
Create the folder `client/src/components/ui/` and add these files:

**toaster.tsx:**
```tsx
export const Toaster = () => null;
```

**tooltip.tsx:**
```tsx
export const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
```

## Step 7: Restart Server
After making these changes:
```bash
cd client
npx vite
```

Your portfolio should now load completely with all sections visible!