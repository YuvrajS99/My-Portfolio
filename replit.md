# Portfolio Website for Yuvraj Adinath Sanap

## Overview

This is a luxurious, modern, and professional personal portfolio website built for Yuvraj Adinath Sanap, a final-year Computer Engineering student. The application showcases his skills as a Frontend Developer and Cloud Enthusiast through an elegant single-page application built with React.js and modern web technologies.

The portfolio features a full-screen hero section, comprehensive sections for About, Education, Skills, Projects, Certifications, and Contact, all designed with premium aesthetics and smooth animations. The site is fully responsive and optimized for both desktop and mobile viewing experiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React.js with TypeScript for type safety and enhanced developer experience
- **Routing**: Wouter for lightweight client-side routing with a simple Switch/Route structure
- **Styling**: 
  - Tailwind CSS for utility-first styling with custom design tokens
  - Shadcn/ui component library for consistent, accessible UI components
  - Custom CSS variables for brand colors (navy and gold theme)
  - Google Fonts integration (Playfair Display for headings, Inter for body text)
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Animations**: CSS-based animations with Intersection Observer API for scroll-triggered effects

### Backend Architecture
- **Server**: Express.js with TypeScript running in ESM mode
- **Development Setup**: Vite for fast development with HMR and middleware integration
- **API Structure**: RESTful API design with `/api` prefix routing (currently minimal implementation)
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Component Architecture
- **UI Components**: Radix UI primitives wrapped with Tailwind styling for accessibility
- **Layout**: Single-page application with smooth scrolling navigation between sections
- **Responsive Design**: Mobile-first approach with breakpoint-specific styles
- **Component Organization**: Separation of UI components, page components, and utility functions

### Database and Storage
- **ORM**: Drizzle ORM with TypeScript-first schema definitions
- **Database**: PostgreSQL with Neon Database serverless connection
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

### Development Tooling
- **Build System**: Vite for frontend, esbuild for backend bundling
- **Type Checking**: TypeScript with strict mode enabled
- **Linting**: ESM module support with path aliases for clean imports
- **Environment**: Development and production environment configuration

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18 with modern hooks and concurrent features
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and caching

### UI and Styling
- **Design System**: Radix UI primitives for accessible component foundations
- **Styling**: Tailwind CSS with custom configuration and Shadcn/ui components
- **Icons**: Font Awesome for comprehensive icon library
- **Fonts**: Google Fonts (Playfair Display, Inter)

### Form and Validation
- **Forms**: React Hook Form for performant form handling
- **Validation**: Zod for runtime type validation and schema definition
- **Integration**: Hookform/resolvers for seamless Zod integration

### Database and Backend
- **Database**: Neon Database (PostgreSQL) for serverless database hosting
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Connection**: @neondatabase/serverless for edge-compatible database connections

### Development and Build Tools
- **Build Tools**: Vite for frontend development and building
- **Backend Build**: esbuild for server-side bundling
- **Development**: Replit-specific plugins for development environment integration
- **Session Management**: connect-pg-simple for PostgreSQL session storage (configured but not actively used)

### Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Styling Utilities**: clsx and class-variance-authority for conditional styling
- **UI Enhancements**: cmdk for command palette functionality, embla-carousel for carousels

The architecture prioritizes developer experience, performance, and maintainability while providing a solid foundation for a professional portfolio website that can be easily extended and customized.