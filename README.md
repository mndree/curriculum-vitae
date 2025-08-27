# 🚀 Muhammad Andre Juliansyah - Portfolio Website

<div align="center">

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0.1-646CFF?style=for-the-badge&logo=vite)

*A modern, responsive portfolio website showcasing professional experience, skills, and projects*

[🌐 Live Demo](#) • [📧 Contact](#) • [💼 LinkedIn](#)

</div>

---

## ✨ Overview

This is a professional portfolio website built with modern web technologies to showcase the work and expertise of **Muhammad Andre Juliansyah**, a Senior Front End Developer with over 4 years of experience in building scalable web applications.

The website features a sleek, dark-themed design with smooth animations, interactive elements, and a comprehensive showcase of professional achievements, technical skills, and portfolio projects.

## 🎯 Features

- **🎨 Modern UI/UX**: Clean, professional design with dark theme and red accents
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Performance Optimized**: Built with React 19 and modern build tools
- **🎭 Smooth Animations**: AOS (Animate On Scroll) and custom CSS animations
- **🔍 Interactive Portfolio**: Filterable project showcase with detailed descriptions
- **📊 Skills Visualization**: Dynamic skill bars and expertise areas
- **📧 Contact Integration**: Professional contact form and information
- **🌐 SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **TypeScript 4.9.5** - Type-safe development
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **AOS 2.3.4** - Animate On Scroll library

### Development Tools
- **Vite 5.0.1** - Fast build tool and dev server
- **PostCSS** - CSS processing and optimization
- **ESLint** - Code quality and consistency

### Icons & Fonts
- **FontAwesome 6.7.2** - Professional icon library
- **Google Fonts** - Typography optimization

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mndree/curriculum-vitae.git
   cd curriculum-vitae
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
# or
yarn build
```

The build files will be created in the `dist` folder, ready for deployment.

## 📁 Project Structure

```
curriculum-vitae/
├── public/                 # Static assets and images
│   ├── project/           # Portfolio project images
│   └── favicon.ico        # Website icon
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Footer component
│   │   └── JobModal.tsx   # Job details modal
│   ├── sections/          # Main page sections
│   │   ├── Hero.tsx       # Hero section with intro
│   │   ├── Skills.tsx     # Skills showcase
│   │   ├── Portfolio.tsx  # Project portfolio
│   │   └── Contact.tsx    # Contact information
│   ├── data/              # Static data files
│   │   ├── portofolio.ts  # Portfolio projects
│   │   └── experienceEducation.ts # Work history
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript type definitions
│   └── App.tsx            # Main application component
├── package.json           # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Key Sections

### Hero Section
- Professional introduction with animated typewriter effect
- Floating project screenshots with smooth animations
- Call-to-action with smooth scrolling navigation

### Skills & Expertise
- Technical skills with progress bars
- Professional expertise areas
- Interactive skill categorization

### Portfolio Showcase
- **Merdeka Insight** - AI-powered business intelligence platform
- **Merdeka Belajar** - Corporate Learning Management System
- **LWMS** - Logistics Warehouse Management System
- **Mapan Meet Cantik** - Modern dating application
- **Asia Trans** - Multi-service mobile platform

### Experience & Education
- 4+ years of professional development experience
- Senior Front End Developer at PT. Merdeka Copper Gold Tbk
- Software Engineering degree from Universitas Indonesia

## 🔧 Customization

### Adding New Projects
Edit `src/data/portofolio.ts` to add new portfolio items:

```typescript
{
    title: 'Your Project',
    subtitle: 'Project description',
    image: '/path/to/image.jpg',
    tags: ['React', 'TypeScript'],
    category: 'react_js',
}
```

### Modifying Skills
Update `src/data/skills.ts` to customize your skill set and expertise areas.

### Styling Changes
- Global styles: `src/styles/global.css`
- Component-specific styles: Individual `.css` files in sections
- Tailwind configuration: `tailwind.config.js`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages
1. Set repository to public
2. Enable GitHub Pages in settings
3. Set source to GitHub Actions
4. Create `.github/workflows/deploy.yml`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful component and variable names
- Maintain consistent code formatting
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Muhammad Andre Juliansyah** is a Senior Front End Developer with expertise in:
- React.js and modern JavaScript frameworks
- TypeScript and type-safe development
- Responsive web design and UI/UX
- Performance optimization and best practices
- Team leadership and mentoring

## 📞 Contact

- **Email**: [your.email@example.com](#)
- **LinkedIn**: [LinkedIn Profile](#)
- **GitHub**: [GitHub Profile](#)
- **Portfolio**: [Portfolio Website](#)

---

<div align="center">

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

*Last updated: December 2024*

</div>
