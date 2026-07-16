live demolink:https://guruportfolio-ruddy.vercel.app/
# Guruvardhan Yakkanti - Portfolio Website

A modern, responsive portfolio website built with React.js and Tailwind CSS, showcasing my skills, projects, and professional journey as a Software Developer and Engineering Student.

![Portfolio Preview](./public/portfolio-preview.png)

## 🌟 Features

- **Modern Design**: Premium dark theme with glassmorphism effects
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth animations and micro-interactions
- **Performance**: Optimized loading and SEO-friendly
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🚀 Sections

- **Hero**: Professional introduction with animated typing effect
- **About**: Personal background and passion for technology
- **Skills**: Interactive progress bars and skill categories
- **Projects**: Filterable portfolio with project details
- **Education**: Academic timeline with achievements
- **Experience**: Professional and learning experiences
- **Certificates**: Technical certifications and courses
- **Achievements**: Key accomplishments and recognition
- **Coding Profiles**: GitHub, LinkedIn, LeetCode profiles
- **Resume**: Downloadable resume with preview
- **Contact**: Professional contact form with social links

## 🛠️ Technologies Used

- **Frontend**: React.js, Tailwind CSS, Framer Motion
- **Icons**: Heroicons
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages
- **Development**: Modern JavaScript (ES6+), CSS3, HTML5

## 📋 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update your personal details in the component files:
- `src/components/Hero.js` - Name, roles, and tagline
- `src/components/About.js` - Personal background and description
- `src/components/Contact.js` - Contact information and social links

### Projects
Add your projects in `src/components/Projects.js`:
```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://project-demo.com"
  }
];
```

### Skills
Update your skills in `src/components/Skills.js`:
```javascript
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-orange-500' }
    ]
  }
];
```

### Colors and Styling
Customize the design in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* Your primary colors */ },
      // Add your custom colors
    }
  }
}
```

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## ⚡ Performance Features

- **Lazy Loading**: Components load as needed
- **Image Optimization**: Compressed and optimized images
- **Code Splitting**: Reduced bundle sizes
- **SEO Optimization**: Meta tags and structured data
- **PWA Ready**: Service worker and manifest included

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_SITE_URL=https://yourportfolio.com
REACT_APP_EMAIL_SERVICE_ID=your_service_id
REACT_APP_EMAIL_TEMPLATE_ID=your_template_id
REACT_APP_EMAIL_USER_ID=your_user_id
```

### Social Links
Update social media links in the component files:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- Email: `your.email@example.com`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure custom domain (optional)

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📊 Analytics Setup

Add Google Analytics to `public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Common Issues

1. **White screen on deployment**
   - Check the build logs for errors
   - Ensure all dependencies are in `dependencies`, not `devDependencies`

2. **Images not loading**
   - Place images in the `public` folder
   - Use relative paths: `/images/photo.jpg`

3. **Animations not working**
   - Check browser compatibility
   - Ensure Framer Motion is properly installed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio trends and UI/UX best practices
- **Icons**: Heroicons for beautiful SVG icons
- **Animations**: Framer Motion for smooth animations
- **Styling**: Tailwind CSS for rapid styling

## 📞 Contact

**Guruvardhan Yakkanti**
- Email: yakkantiguruvardhan@gmail.com
- Phone: +91 9502712026
- Location: Tirupati, AP, India
- LinkedIn: [Guruvardhan Yakkanti](https://www.linkedin.com/in/guruvardhan-yakkanti-50235b3b8/)
- GitHub: [Guru2345](https://github.com/Guru2345)
- LeetCode: [guruvardhan](https://leetcode.com/u/guruvardhan/)

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ using React.js and Tailwind CSS
