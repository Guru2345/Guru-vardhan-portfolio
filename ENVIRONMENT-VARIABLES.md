# 🔧 Environment Variables Guide

## 📋 **Current Environment Variables:**

Your portfolio uses these environment variables:

### **🚀 Required for Deployment:**
```env
GENERATE_SOURCEMAP=false          # Disables source maps for faster builds
CI=false                          # Prevents ESLint errors from failing build
DISABLE_ESLINT_PLUGIN=true       # Disables ESLint during build
SKIP_PREFLIGHT_CHECK=true        # Skips dependency version checks
```

### **⚙️ Portfolio Configuration:**
```env
REACT_APP_PORTFOLIO_NAME="Guruvardhan Yakkanti Portfolio"
REACT_APP_PORTFOLIO_URL="https://portfolio.vercel.app"
REACT_APP_GITHUB_USERNAME=Guru2345
REACT_APP_GITHUB_API_URL=https://api.github.com
```

### **📞 Contact Information:**
```env
REACT_APP_EMAIL=yakkantiguruvardhan@gmail.com
REACT_APP_PHONE="+91 9502712026"
REACT_APP_LOCATION="Tirupati, AP, India"
```

### **🔗 Social Media Links:**
```env
REACT_APP_GITHUB_URL=https://github.com/Guru2345
REACT_APP_LINKEDIN_URL=https://www.linkedin.com/in/guruvardhan-yakkanti-50235b3b8/
REACT_APP_LEETCODE_URL=https://leetcode.com/u/guruvardhan/
```

### **🎛️ Feature Controls:**
```env
REACT_APP_AUTO_CERTIFICATE_DETECTION=true
REACT_APP_AUTO_GITHUB_SYNC=true
```

## 🎯 **What Each Variable Does:**

| Variable | Purpose | Required | Default |
|----------|---------|----------|---------|
| `GENERATE_SOURCEMAP` | Controls source map generation | ✅ Yes | false |
| `CI` | Prevents build failures from warnings | ✅ Yes | false |
| `DISABLE_ESLINT_PLUGIN` | Disables ESLint in build | ✅ Yes | true |
| `SKIP_PREFLIGHT_CHECK` | Skips dependency checks | ✅ Yes | true |
| `REACT_APP_GITHUB_USERNAME` | Your GitHub username for API calls | ❌ No | Guru2345 |
| `REACT_APP_EMAIL` | Contact email address | ❌ No | hardcoded |
| `REACT_APP_PHONE` | Contact phone number | ❌ No | hardcoded |
| `REACT_APP_AUTO_CERTIFICATE_DETECTION` | Enable/disable auto cert detection | ❌ No | true |

## 🔐 **For Vercel Deployment:**

### **Required Environment Variables in Vercel:**
When deploying to Vercel, you need these in your Vercel dashboard:

1. **Go to Vercel Dashboard** → Your Project → Settings → Environment Variables

2. **Add these variables:**
```
GENERATE_SOURCEMAP = false
CI = false
DISABLE_ESLINT_PLUGIN = true
SKIP_PREFLIGHT_CHECK = true
```

### **Optional Variables (can add if you want to customize):**
```
REACT_APP_PORTFOLIO_NAME = Your Portfolio Name
REACT_APP_GITHUB_USERNAME = yourusername
REACT_APP_EMAIL = your.email@gmail.com
REACT_APP_PHONE = +91 1234567890
```

## 🌍 **Environment-Specific Settings:**

### **Development (.env):**
- All variables from .env file are loaded
- Used when running `npm start`

### **Production (Vercel):**
- Only REACT_APP_* variables are available in browser
- Build-time variables (CI, GENERATE_SOURCEMAP) used during build
- Set in Vercel dashboard environment variables

## 🔧 **How Your Portfolio Uses Them:**

### **Build Process:**
- `CI=false` → Prevents ESLint warnings from failing build
- `GENERATE_SOURCEMAP=false` → Faster builds, smaller bundles
- `DISABLE_ESLINT_PLUGIN=true` → No linting during build

### **Runtime (in browser):**
- `process.env.PUBLIC_URL` → Used for image paths (auto-provided by React)
- `REACT_APP_*` variables → Available in JavaScript code

### **Auto-Features:**
- GitHub API calls use `REACT_APP_GITHUB_USERNAME`
- Certificate detection runs automatically
- Project sync pulls from GitHub API

## ❗ **Important Notes:**

### **Security:**
- ✅ **No sensitive data** - All variables are public
- ✅ **No API keys** - GitHub API is public, no auth needed
- ✅ **Contact info** - Already public in portfolio

### **Required vs Optional:**
- **MUST HAVE**: Build configuration variables (CI, GENERATE_SOURCEMAP, etc.)
- **OPTIONAL**: All REACT_APP_* variables (portfolio works without them)

### **Vercel Deployment:**
- Vercel automatically detects React apps
- Environment variables should be set in Vercel dashboard
- .env file is for local development only

## 🎉 **Your Portfolio Works With:**

### **Minimum Required:**
```env
CI=false
GENERATE_SOURCEMAP=false
```

### **Fully Featured:**
All variables in .env file for complete functionality.

Your portfolio is configured to work perfectly with these environment variables! 🚀