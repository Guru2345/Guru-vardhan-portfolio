# 📜 Certificate Management System

This folder contains your automatic certificate management system for your portfolio.

## 🎯 How to Add New Certificates

### Method 1: Edit certificates.json File
1. Open `certificates.json` in this folder
2. Add your new certificate to the "certificates" array
3. Save the file - it will automatically appear in your portfolio!

### Certificate Template:
```json
{
  "id": "cert-YYYY-###",
  "title": "Your Certificate Name",
  "issuer": "Institution/Platform Name", 
  "category": "Programming|Web Development|AI/ML|Soft Skills|Tools",
  "date": "Month YYYY",
  "description": "Brief description of what you learned",
  "skills": ["Skill1", "Skill2", "Skill3"],
  "credentialId": "Your-Credential-ID",
  "verificationUrl": "https://verify-link.com",
  "certificateUrl": "/certificates/your-cert.pdf",
  "image": "/certificates/images/your-cert.jpg",
  "featured": true,
  "status": "Completed|In Progress|Planned"
}
```

### Method 2: Upload Certificate Files
1. **PDF Certificates**: Upload to `/public/certificates/` folder
2. **Certificate Images**: Upload to `/public/certificates/images/` folder
3. Update the `certificateUrl` and `image` paths in certificates.json

## 📁 Folder Structure
```
/public/certificates/
├── certificates.json          # Main certificate data
├── README.md                 # This guide
├── images/                   # Certificate images
│   ├── java-cert.jpg
│   ├── web-cert.jpg
│   └── react-cert.jpg
├── java-fundamentals.pdf     # PDF certificates
├── web-development.pdf
└── react-development.pdf
```

## 🔄 Categories Available
- **Programming**: Java, Python, C++, etc.
- **Web Development**: HTML, CSS, JavaScript, React, etc.
- **AI/ML**: Machine Learning, Data Science, AI courses
- **Soft Skills**: Communication, Leadership, etc. 
- **Tools**: Git, VS Code, Docker, etc.

## ✨ Features
- **Auto-Refresh**: Changes appear immediately in portfolio
- **Featured Certificates**: Set `featured: true` for homepage display
- **Status Tracking**: Completed, In Progress, or Planned
- **Verification Links**: Direct links to verify authenticity
- **Skill Tags**: Automatic skill categorization

## 🚀 Quick Add Example
To add a new certificate, copy this template and customize:

```json
{
  "id": "cert-2024-004",
  "title": "Python for Data Science",
  "issuer": "Coursera",
  "category": "AI/ML", 
  "date": "July 2024",
  "description": "Python programming for data analysis and machine learning",
  "skills": ["Python", "Pandas", "NumPy", "Data Analysis"],
  "credentialId": "PY-DS-2024-004",
  "verificationUrl": "https://coursera.org/verify/PY-DS-2024-004",
  "certificateUrl": "/certificates/python-data-science.pdf",
  "image": "/certificates/images/python-cert.jpg",
  "featured": true,
  "status": "Completed"
}
```

Just add it to the certificates array in certificates.json and save! 🎉