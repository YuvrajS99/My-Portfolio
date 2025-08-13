# Yuvraj Adinath Sanap - Portfolio Website

A luxurious, modern, and professional personal portfolio website built with React.js, featuring premium design, smooth animations, and professional presentation.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation & Setup

1. **Download/Clone the project files**
   - Copy all the project files to your local machine

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

### VS Code Setup

1. **Open the project folder in VS Code**
   ```bash
   code .
   ```

2. **Recommended VS Code Extensions:**
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Importer
   - Prettier - Code formatter
   - Auto Rename Tag

### Project Structure

```
portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility libraries
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # App entry point
│   └── index.html         # HTML template
├── dist/                  # Built files for deployment
├── shared/                # Shared TypeScript schemas
├── server/                # Backend (not needed for static version)
├── tailwind.config.ts     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type checking

### Features

- ✨ Luxurious navy-gold color scheme
- 🎨 Premium typography (Playfair Display + Inter)
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎯 Professional sections: Hero, About, Education, Skills, Projects, Certifications, Contact
- 📧 Working contact form (opens email client)
- 🔥 Built with modern tech: React, TypeScript, Tailwind CSS, Vite

### Customization

1. **Personal Information**: Update content in each component file
2. **Colors**: Modify CSS variables in `client/src/index.css`
3. **Fonts**: Change font imports in `client/index.html`
4. **Projects**: Update project data in `client/src/components/projects.tsx`
5. **Skills**: Modify skills in `client/src/components/skills.tsx`

### Deployment

For free deployment options:
- **Netlify**: Connect your GitHub repo for automatic deployment
- **Vercel**: Similar to Netlify with GitHub integration
- **GitHub Pages**: Use the built files in `dist/` folder
- **Replit Static Deployment**: Use the built files for free hosting

### Development Tips

1. **Hot Reload**: Changes will automatically refresh in the browser
2. **TypeScript**: Full type safety throughout the project
3. **Tailwind**: Use utility classes for styling
4. **Components**: All components are in `client/src/components/`

### Troubleshooting

- **Port already in use**: The dev server will automatically use the next available port
- **Build errors**: Run `npm run check` to see TypeScript errors
- **Styling issues**: Make sure Tailwind CSS is properly configured

### License

MIT License - feel free to use this as a template for your own portfolio!