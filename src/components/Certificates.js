import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AcademicCapIcon, 
  CalendarDaysIcon, 
  CheckBadgeIcon,
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  ArrowPathIcon,
  DocumentArrowDownIcon
} from '@heroicons/react/24/outline';

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);

  // Load certificates from JSON file AND scan for PDF files
  const loadCertificates = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try to load from JSON first
      let jsonCertificates = [];
      try {
        const response = await fetch('/certificates/certificates.json?t=' + new Date().getTime());
        if (response.ok) {
          const data = await response.json();
          jsonCertificates = data.certificates || [];
          setLastUpdated(data.lastUpdated || new Date().toISOString());
        }
      } catch (jsonError) {
        console.log('No JSON file found, will scan for PDFs only');
      }

      // Scan for PDF files in the certificates folder
      const pdfCertificates = await scanForPDFCertificates();
      
      // Combine JSON certificates with auto-detected PDFs (remove duplicates)
      const allCertificates = [...jsonCertificates];
      
      // Add PDFs that don't already exist in JSON
      pdfCertificates.forEach(pdfCert => {
        const existsInJson = jsonCertificates.some(jsonCert => 
          jsonCert.certificateUrl === pdfCert.certificateUrl
        );
        if (!existsInJson) {
          allCertificates.push(pdfCert);
        }
      });
      
      // Always set the certificates (even if empty)
      setCertificates(allCertificates);
      
      if (allCertificates.length === 0) {
        setError('No certificates found. Add PDF files to /public/certificates/ folder to see them here.');
      }
      
    } catch (err) {
      setError(err.message);
      setCertificates([]); // Empty array instead of default certificates
    } finally {
      setLoading(false);
    }
  };

  // Function to scan for PDF files and auto-create certificate entries
  const scanForPDFCertificates = async () => {
    try {
      // ONLY your 4 specific certificates - no others
      const commonPdfNames = [
        'Ai tools workshop.PDF',
        'Gen ai workshop.PDF',
        'quantum fundamentals.PDF',
        'web development .pdf'
      ];

      const foundCertificates = [];
      let certId = 1000; // Start with high number to avoid conflicts

      // Check each potential PDF file
      for (const pdfName of commonPdfNames) {
        try {
          const response = await fetch(`/certificates/${pdfName}`, { method: 'HEAD' });
          if (response.ok) {
            // PDF exists, create certificate entry
            const certificate = createCertificateFromPDF(pdfName, certId++);
            if (certificate) { // Only add if certificate was created successfully
              foundCertificates.push(certificate);
            }
          }
        } catch (error) {
          // PDF doesn't exist, continue
          continue;
        }
      }

      return foundCertificates;
    } catch (error) {
      console.log('Error scanning for PDFs:', error);
      return [];
    }
  };

  // Function to create certificate object from PDF filename - ONLY your 4 certificates
  const createCertificateFromPDF = (filename, id) => {
    let title, category, skills, issuer;
    
    // ONLY handle your specific 4 certificates
    if (filename === 'Ai tools workshop.PDF') {
      title = 'AI Tools Workshop';
      category = 'AI/ML';
      skills = ['AI Tools', 'Artificial Intelligence', 'Workshop', 'Technology'];
      issuer = 'Workshop Provider';
    } else if (filename === 'Gen ai workshop.PDF') {
      title = 'Generative AI Workshop';
      category = 'AI/ML';
      skills = ['Generative AI', 'AI', 'Machine Learning', 'Workshop'];
      issuer = 'Workshop Provider';
    } else if (filename === 'quantum fundamentals.PDF') {
      title = 'Quantum Fundamentals';
      category = 'Advanced Technology';
      skills = ['Quantum Computing', 'Physics', 'Technology', 'Fundamentals'];
      issuer = 'Educational Institution';
    } else if (filename === 'web development .pdf') {
      title = 'Web Development';
      category = 'Web Development';
      skills = ['HTML', 'CSS', 'JavaScript', 'Web Development'];
      issuer = 'Certification Authority';
    } else {
      // This should never happen since we only check for your 4 files
      return null;
    }

    return {
      id: `cert-${id}`,
      title: title,
      issuer: issuer,
      category: category,
      date: 'Completed',
      description: `Certificate: ${title}. View the complete certificate by downloading the PDF file.`,
      skills: skills,
      certificateUrl: `/certificates/${filename}`,
      image: '/api/placeholder/300/200',
      featured: true,
      status: 'Completed',
      autoDetected: true
    };
  };

  // Default fallback certificates - REMOVED - No defaults anymore
  const defaultCertificates = [];

  // Load certificates on component mount
  useEffect(() => {
    loadCertificates();
  }, []);

  const categories = ['All', 'Programming', 'Web Development', 'AI/ML', 'Advanced Technology', 'Soft Skills', 'Tools'];

  const filteredCertificates = certificates.filter(cert => 
    selectedCategory === 'All' || cert.category === selectedCategory
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Planned': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming': return '💻';
      case 'Web Development': return '🌐';
      case 'AI/ML': return '🤖';
      case 'Soft Skills': return '🧠';
      case 'Tools': return '🔧';
      default: return '📚';
    }
  };

  const stats = [
    { label: 'Certificates Earned', value: certificates.filter(c => c.status === 'Completed').length || '0', icon: '🏆' },
    { label: 'Skills Validated', value: certificates.length > 0 ? [...new Set(certificates.flatMap(c => c.skills))].length + '+' : '0', icon: '✅' },
    { label: 'Learning Hours', value: certificates.length > 0 ? (certificates.length * 25) + '+' : '0', icon: '⏰' },
    { label: 'Platforms Used', value: certificates.length > 0 ? [...new Set(certificates.map(c => c.issuer))].length + '+' : '0', icon: '🎓' }
  ];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="gradient-text">Certificates</span>
            </h2>
            <button
              onClick={loadCertificates}
              disabled={loading}
              className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors disabled:opacity-50"
              title="Refresh certificates"
            >
              <ArrowPathIcon className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {loading ? 'Scanning for certificates...' : 
             certificates.length === 0 ? 'Add your PDF certificates to see them automatically appear here' :
             `${certificates.length} certificates found • ${certificates.filter(c => c.autoDetected).length} auto-detected from PDFs`}
          </p>
          {!loading && (
            <div className="mt-4 space-y-2">
              {certificates.length === 0 ? (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg max-w-2xl mx-auto">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    📄 <strong>Ready to add certificates:</strong> Drop your certificate PDFs into <code>C:\prortfol\public\certificates\</code> and refresh!
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                    Supported names: java-certificate.pdf, web-development.pdf, coursera-certificate.pdf, etc.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    ✨ Auto-detection active • Last scan: {new Date().toLocaleTimeString()}
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg max-w-2xl mx-auto">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      🎉 <strong>Certificates loaded!</strong> Add more PDFs to <code>C:\prortfol\public\certificates\</code> to expand your collection
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="card text-center hover-lift"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-dark-600'
              }`}
            >
              {category !== 'All' && <span>{getCategoryIcon(category)}</span>}
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Featured Certificates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.filter(cert => cert.featured && (selectedCategory === 'All' || cert.category === selectedCategory)).map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card card-hover group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                      {cert.status}
                    </span>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800">
                      {getCategoryIcon(cert.category)} {cert.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 mb-2">
                  <CheckBadgeIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {cert.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2 mb-3 text-gray-600 dark:text-gray-400">
                  <AcademicCapIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">{cert.issuer}</span>
                </div>

                <div className="flex items-center gap-2 mb-3 text-gray-600 dark:text-gray-400">
                  <CalendarDaysIcon className="w-4 h-4" />
                  <span className="text-sm">{cert.date}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  {cert.certificateUrl ? (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                    >
                      <DocumentArrowDownIcon className="w-4 h-4" />
                      Download Certificate
                    </a>
                  ) : (
                    <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                      <EyeIcon className="w-4 h-4" />
                      View Certificate
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Certificates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">All Certificates</h3>
          
          {filteredCertificates.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">📄</div>
              <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">
                {certificates.length === 0 ? 'No certificates yet' : 'No certificates in this category'}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                {certificates.length === 0 
                  ? 'Add your certificate PDFs to the certificates folder and they will automatically appear here!'
                  : `No certificates found in the "${selectedCategory}" category. Try selecting "All" or choose a different category.`
                }
              </p>
              {certificates.length === 0 && (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg max-w-lg mx-auto">
                  <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-3">📋 Quick Start Guide:</h5>
                  <div className="text-left text-sm text-blue-700 dark:text-blue-300 space-y-2">
                    <p><strong>1.</strong> Save your certificate PDF to: <code>C:\prortfol\public\certificates\</code></p>
                    <p><strong>2.</strong> Name it like: <code>java-certificate.pdf</code> or <code>coursera-certificate.pdf</code></p>
                    <p><strong>3.</strong> Click the refresh button (🔄) above</p>
                    <p><strong>4.</strong> Your certificate appears automatically! 🎉</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.05 }}
                  className="card hover-lift group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckBadgeIcon className="w-4 h-4 text-blue-500" />
                    <span className="text-lg">{getCategoryIcon(cert.category)}</span>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm group-hover:text-blue-500 transition-colors">
                    {cert.title}
                  </h4>
                  
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    {cert.issuer} • {cert.date}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                      {cert.status}
                    </span>
                    <div className="flex items-center gap-1">
                      {cert.featured && (
                        <span className="text-xs text-yellow-600 dark:text-yellow-400">⭐</span>
                      )}
                      {cert.autoDetected && (
                        <span className="text-xs text-green-600 dark:text-green-400" title="Auto-detected from PDF">🤖</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Learning Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Continuous Learning Journey</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I believe in lifelong learning and continuously updating my skills through various 
              online platforms and certification programs. Each certificate represents not just 
              completion but a commitment to excellence and growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">📈</div>
                <div className="font-semibold text-gray-900 dark:text-white">Skill Development</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Continuously improving technical abilities</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold text-gray-900 dark:text-white">Goal-Oriented Learning</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Structured approach to skill acquisition</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-semibold text-gray-900 dark:text-white">Industry Readiness</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Preparing for professional opportunities</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;