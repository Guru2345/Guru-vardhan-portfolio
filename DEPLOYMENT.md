# Deployment Guide

This guide covers different ways to deploy your portfolio website.

## 📦 Build for Production

Before deploying, create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 🚀 Deployment Options

### 1. Vercel (Recommended)

**Why Vercel?**
- Zero configuration deployment
- Automatic HTTPS and CDN
- Perfect for React applications
- Free tier available

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect it's a React app
5. Click "Deploy" - that's it!

**Custom Domain:**
- Go to your project settings in Vercel
- Add your custom domain
- Update your DNS records as instructed

### 2. Netlify

**Steps:**
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com) and sign up
3. Drag and drop the `build` folder to Netlify
4. Your site is live!

**For automatic deployments:**
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### 3. GitHub Pages

**Steps:**
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to your `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Firebase Hosting

**Steps:**
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login and initialize:
   ```bash
   firebase login
   firebase init hosting
   ```

3. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

### 5. Surge.sh

**Steps:**
1. Install Surge:
   ```bash
   npm install -g surge
   ```

2. Build and deploy:
   ```bash
   npm run build
   cd build
   surge
   ```

## 🔧 Environment Variables

For production, you may need environment variables:

1. Create `.env.production`:
   ```env
   REACT_APP_SITE_URL=https://yourportfolio.com
   REACT_APP_ANALYTICS_ID=GA_MEASUREMENT_ID
   ```

2. For Vercel, add environment variables in the dashboard
3. For Netlify, add them in Site settings > Environment variables

## 🌐 Custom Domain Setup

### DNS Configuration

For a custom domain, update your DNS records:

**For Vercel:**
- Add A record: `76.76.19.61`
- Add CNAME record: `cname.vercel-dns.com`

**For Netlify:**
- Add A record: `75.2.60.5`
- Add CNAME record: `yoursite.netlify.app`

### SSL Certificate

All recommended platforms provide automatic SSL certificates.

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images:**
   - Compress images using tools like TinyPNG
   - Use WebP format where possible
   - Add lazy loading for images below the fold

2. **Code Optimization:**
   - Remove unused dependencies
   - Use React.memo for expensive components
   - Implement code splitting with React.lazy

3. **Bundle Analysis:**
   ```bash
   npm install -g webpack-bundle-analyzer
   npm run build
   npx webpack-bundle-analyzer build/static/js/*.js
   ```

### After Deployment

1. **Test Performance:**
   - Use Google PageSpeed Insights
   - Test on different devices and networks
   - Check Core Web Vitals

2. **SEO Check:**
   - Verify meta tags are working
   - Test social media previews
   - Submit sitemap to Google Search Console

## 🔍 SEO Setup

### Google Analytics

Add to `public/index.html`:
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

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership
4. Submit your sitemap: `https://yoursite.com/sitemap.xml`

## 🐛 Common Issues

### Build Fails
- Check for TypeScript errors
- Ensure all dependencies are installed
- Verify environment variables

### Images Not Loading
- Check image paths (use `/images/` not `./images/`)
- Verify images are in the `public` folder
- Check image file formats

### Routing Issues (404 on refresh)
Add `_redirects` file to `public` folder for Netlify:
```
/*    /index.html   200
```

For Apache servers, add `.htaccess`:
```apache
RewriteEngine On
RewriteRule ^(?!.*\.).*$ /index.html [L]
```

## 📧 Contact Forms

### Netlify Forms
Add to your form in Contact.js:
```html
<form name="contact" method="POST" netlify>
  <input type="hidden" name="form-name" value="contact" />
  <!-- your form fields -->
</form>
```

### Formspree
1. Sign up at [Formspree](https://formspree.io)
2. Create a form and get the endpoint
3. Update your form action to the Formspree endpoint

## 🔄 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    - name: Install dependencies
      run: npm ci
    - name: Build
      run: npm run build
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## ✅ Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] Projects and skills are current
- [ ] Contact form is working
- [ ] All images are optimized
- [ ] Meta tags and SEO are configured
- [ ] Analytics are set up
- [ ] Site is tested on mobile and desktop
- [ ] All links are working
- [ ] No console errors
- [ ] Performance score is good (>90)

## 🎉 Post-Deployment

1. **Test Everything:**
   - All sections load properly
   - Forms submit correctly
   - Links work as expected
   - Mobile responsiveness

2. **Share Your Portfolio:**
   - Update LinkedIn profile
   - Add to GitHub profile README
   - Share on social media
   - Include in job applications

3. **Monitor:**
   - Set up Google Analytics
   - Monitor performance
   - Track visitor behavior
   - Update content regularly

---

Need help with deployment? Feel free to open an issue or contact me!