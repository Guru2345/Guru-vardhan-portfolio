import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowDownTrayIcon, 
  EyeIcon, 
  DocumentTextIcon,
  XMarkIcon,
  PrinterIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume PDF in the public folder
    link.download = 'Guruvardhan_Yakkanti_Resume.pdf';
    link.click();
  };

  const handlePreviewResume = () => {
    setShowPreview(true);
  };

  const handlePrintResume = () => {
    window.print();
  };

  const handleShareResume = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Guruvardhan Yakkanti - Resume',
          text: 'Check out my resume - Software Developer & Engineering Student',
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: Copy link to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const resumeHighlights = [
    {
      section: 'Personal Information',
      items: [
        'Full Name: Guruvardhan Yakkanti',
        'Education: B.Tech Instrumentation Engineering',
        'Location: Available for Remote/Onsite',
        'Languages: English, Hindi, Telugu'
      ]
    },
    {
      section: 'Technical Skills',
      items: [
        'Programming: Java, JavaScript, Python',
        'Web Technologies: HTML, CSS, React.js',
        'Tools: Git, GitHub, VS Code, Postman',
        'Databases: MySQL, SQLite'
      ]
    },
    {
      section: 'Key Projects',
      items: [
        'Personal Portfolio Website (React.js)',
        'Student Management System (Java)',
        'Weather App (JavaScript)',
        'Task Management App (Web Technologies)'
      ]
    },
    {
      section: 'Certifications',
      items: [
        'Java Programming Fundamentals',
        'Web Development Bootcamp',
        'JavaScript ES6+ Mastery',
        'AI Fundamentals'
      ]
    },
    {
      section: 'Achievements',
      items: [
        'CGPA: 8.5+ in Engineering',
        'Solved 100+ coding problems',
        'Top 25% in coding competitions',
        'Led technical project team'
      ]
    }
  ];

  const ResumePreview = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={() => setShowPreview(false)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold gradient-text">Resume Preview</h3>
          <div className="flex gap-2">
            <button
              onClick={handlePrintResume}
              className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
              title="Print Resume"
            >
              <PrinterIcon className="w-5 h-5" />
            </button>
            <button
              onClick={handleDownloadResume}
              className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
              title="Download Resume"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowPreview(false)}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
              title="Close Preview"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Resume Content Preview */}
        <div className="bg-white dark:bg-dark-900 rounded-lg p-8 shadow-lg">
          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Guruvardhan Yakkanti
            </h1>
            <p className="text-lg text-blue-600 dark:text-blue-400 mb-4">
              Instrumentation Engineering Student | Software Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>📧 yakkantiguruvardhan@gmail.com</span>
              <span>📱 +91 9502712026</span>
              <span>📍 Tirupati, AP</span>
              <span>💼 LinkedIn: /in/guruvardhan-yakkanti</span>
              <span>🐙 GitHub: /Guru2345</span>
            </div>
          </div>

          {/* Resume Sections Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeHighlights.map((section, index) => (
              <div key={section.section} className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                  {section.section}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is a preview. Download the complete PDF for full details.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Download my comprehensive resume showcasing my skills, experience, projects, and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                  <DocumentTextIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Professional Resume
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Comprehensive overview of my technical skills, educational background, 
                    projects, and professional aspirations.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <span className="text-blue-500">✓</span>
                  <span>Updated with latest projects and skills</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <span className="text-blue-500">✓</span>
                  <span>ATS-friendly format for better visibility</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <span className="text-blue-500">✓</span>
                  <span>Comprehensive technical and soft skills</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <span className="text-blue-500">✓</span>
                  <span>Professional formatting and design</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleDownloadResume}
                className="btn-primary inline-flex items-center gap-2 flex-1 justify-center"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                Download Resume
              </button>
              <button
                onClick={handlePreviewResume}
                className="btn-secondary inline-flex items-center gap-2 flex-1 justify-center"
              >
                <EyeIcon className="w-5 h-5" />
                Preview Resume
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4"
            >
              <button
                onClick={handleShareResume}
                className="btn-glass inline-flex items-center gap-2 flex-1 justify-center"
              >
                <ShareIcon className="w-5 h-5" />
                Share Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="card p-0 overflow-hidden group cursor-pointer" onClick={handlePreviewResume}>
              {/* Resume Thumbnail */}
              <div className="bg-white dark:bg-dark-900 p-8 transition-transform duration-300 group-hover:scale-105">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="text-center pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="h-4 bg-gray-800 dark:bg-white rounded mb-2"></div>
                    <div className="h-3 bg-blue-500 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="flex gap-2 justify-center">
                      <div className="h-2 bg-gray-400 rounded w-16"></div>
                      <div className="h-2 bg-gray-400 rounded w-16"></div>
                      <div className="h-2 bg-gray-400 rounded w-16"></div>
                    </div>
                  </div>
                  
                  {/* Content Sections */}
                  {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-3 bg-gray-700 dark:bg-gray-300 rounded w-1/3"></div>
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-400 rounded"></div>
                        <div className="h-2 bg-gray-400 rounded w-5/6"></div>
                        <div className="h-2 bg-gray-400 rounded w-4/6"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white dark:bg-dark-800 rounded-full p-4 shadow-lg">
                    <EyeIcon className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-blue-500/20 rounded-lg glass-dark flex items-center justify-center"
            >
              <span className="text-2xl">📄</span>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 rounded-lg glass-dark flex items-center justify-center"
            >
              <span className="text-2xl">⬇️</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Resume Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
            What's Inside My Resume
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeHighlights.slice(0, 3).map((section, index) => (
              <motion.div
                key={section.section}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card hover-lift"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.section}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                      <span className="text-blue-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 gradient-text">Ready to Work Together?</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm actively seeking internship and full-time opportunities in software development. 
              Let's connect and discuss how I can contribute to your team's success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownloadResume}
                className="btn-primary inline-flex items-center gap-2"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                Get My Resume
              </button>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Connect
              </a>
            </div>
          </div>
        </motion.div>

        {/* Resume Modal */}
        {showPreview && <ResumePreview />}
      </div>
    </section>
  );
};

export default Resume;