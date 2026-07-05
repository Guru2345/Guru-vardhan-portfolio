import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon, EyeIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Software Developer',
    'Java Programmer',
    'Web Developer',
    'Future AI Engineer',
    'Problem Solver'
  ];

  useEffect(() => {
    const type = () => {
      const current = roles[currentIndex];
      
      if (isDeleting) {
        setTypedText(current.substring(0, typedText.length - 1));
      } else {
        setTypedText(current.substring(0, typedText.length + 1));
      }

      if (!isDeleting && typedText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentIndex, roles]);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Guru2345',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/guruvardhan-yakkanti-50235b3b8/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/guruvardhan/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.linnxx 2.133 7.678l.01-.006L23.707 14.8c.5-.5.498-1.312.01-1.799-.488-.487-1.312-.487-1.799 0L13.91 20.998c-.951.95-2.499.95-3.45 0L6.184 16.723a2.38 2.38 0 0 1-.518-.724 2.378 2.378 0 0 1-.114-.39 2.262 2.262 0 0 1-.017-.457c.006-.135.02-.27.043-.402a2.35 2.35 0 0 1 .454-.78l3.91-4.187c.5-.532.47-1.358-.06-1.848-.53-.49-1.356-.457-1.848.075L4.042 12.133a5.13 5.13 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.858 2.133 8.106-.033L23.707 14.8c.5-.5.498-1.312.01-1.799-.488-.487-1.312-.487-1.799 0L13.91 20.998c-.951.95-2.499.95-3.45 0L6.184 16.723a2.38 2.38 0 0 1-.518-.724 2.378 2.378 0 0 1-.114-.39 2.262 2.262 0 0 1-.017-.457c.006-.135.02-.27.043-.402a2.35 2.35 0 0 1 .454-.78l7.624-8.17c.508-.53.478-1.356-.06-1.846zM8.708 14.411a1.374 1.374 0 0 0-.961.438l-2.681 2.681c-.508.53-.478 1.356.06 1.846.538.49 1.365.457 1.846-.06l2.681-2.681c.508-.53.478-1.356-.06-1.846a1.374 1.374 0 0 0-.885-.378z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:yakkantiguruvardhan@gmail.com',
      icon: <EnvelopeIcon className="w-6 h-6" />
    }
  ];

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume PDF in the public folder
    link.download = 'Guruvardhan_Yakkanti_Resume.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Guruvardhan</span>
              <br />
              <span className="text-gray-900 dark:text-white">Yakkanti</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2 h-8"
            >
              I'm a <span className="gradient-text font-semibold">{typedText}</span>
              <span className="typed-cursor">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              Building intelligent solutions through code, innovation, and engineering.
              Passionate about creating impactful software that solves real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={handleDownloadResume}
                className="btn-primary inline-flex items-center gap-2"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Download Resume
              </button>
              <button
                onClick={scrollToProjects}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <EyeIcon className="h-5 w-5" />
                View Projects
              </button>
              <button
                onClick={scrollToContact}
                className="btn-glass inline-flex items-center gap-2"
              >
                <PhoneIcon className="h-5 w-5" />
                Hire Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg glass-dark text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-glow"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-800 overflow-hidden">
                  {/* Your Profile Photo */}
                  <img 
                    src={`${process.env.PUBLIC_URL}/profile.jpeg`}
                    alt="Guruvardhan Yakkanti" 
                    className="w-full h-full object-cover"
                    style={{ display: 'block' }}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-blue-500/20 rounded-lg glass-dark flex items-center justify-center"
              >
                <span className="text-2xl">⚡</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 rounded-lg glass-dark flex items-center justify-center"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/4 -left-12 w-12 h-12 bg-green-500/20 rounded-lg glass-dark flex items-center justify-center"
              >
                <span className="text-xl">💡</span>
              </motion.div>

              <motion.div
                animate={{ y: [15, -5, 15] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-1/4 -right-12 w-12 h-12 bg-yellow-500/20 rounded-lg glass-dark flex items-center justify-center"
              >
                <span className="text-xl">🎯</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-600 dark:text-gray-400"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;