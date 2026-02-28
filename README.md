# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Vite.

## Features

- ✨ Clean and professional design
- 📱 Fully responsive and mobile-friendly
- 🎨 Customizable sections including:
  - About
  - Work History
  - Education
  - Certifications
  - Featured Projects
  - Conferences & Presentations
- ⚡ Fast performance with Vite
- 🎯 Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Update Your Profile Information

Edit [src/components/Header.jsx](src/components/Header.jsx) to update:
- Your name and title
- Biography
- Profile image URL (use the photo you attached here by saving it as `src/assets/profile.jpg` or provide an external URL)
- Social media links

### Add Your Content

Update the following files with your content:
- [src/components/sections/About.jsx](src/components/sections/About.jsx) - About section
- [src/components/sections/WorkHistory.jsx](src/components/sections/WorkHistory.jsx) - Work experience
- [src/components/sections/Education.jsx](src/components/sections/Education.jsx) - Education details
- [src/components/sections/Certifications.jsx](src/components/sections/Certifications.jsx) - Certifications
- [src/components/sections/Projects.jsx](src/components/sections/Projects.jsx) - Featured projects
- [src/components/sections/Conferences.jsx](src/components/sections/Conferences.jsx) - Presentations

### Customize Colors and Styles

Update the CSS color variables in [src/index.css](src/index.css) and component CSS files to match your branding.

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Deployment

You can deploy your portfolio to various platforms:

### GitHub Pages
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## Technologies Used

- React 18
- Vite
- CSS3 (with Flexbox and Grid)
- JavaScript ES6+

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help customizing the portfolio, feel free to reach out!
