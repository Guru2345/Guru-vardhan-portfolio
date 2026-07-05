import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  const goHome = () => {
    window.location.href = '/';
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
            404
          </h1>
          <div className="relative">
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -left-6 w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center"
            >
              <span className="text-2xl">🤖</span>
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center"
            >
              <span className="text-2xl">🔍</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL. But don't worry, my portfolio has 
            plenty of other interesting content to explore!
          </p>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Here's what you can do:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="card text-center p-4">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-semibold mb-1">Go Home</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Visit my homepage to see all sections
              </p>
            </div>
            <div className="card text-center p-4">
              <div className="text-3xl mb-2">📂</div>
              <h3 className="font-semibold mb-1">Browse Projects</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Check out my latest work and projects
              </p>
            </div>
            <div className="card text-center p-4">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-semibold mb-1">Contact Me</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get in touch for opportunities
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={goHome}
            className="btn-primary inline-flex items-center gap-2"
          >
            <HomeIcon className="w-5 h-5" />
            Go to Homepage
          </button>
          <button
            onClick={goBack}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Go Back
          </button>
        </motion.div>

        {/* Fun Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <div className="relative max-w-md mx-auto">
            {/* Animated Code Snippet */}
            <div className="bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-left">
              <div className="text-gray-500 mb-2">// error-handler.js</div>
              <div className="text-blue-400">
                if <span className="text-white">(</span>
                <span className="text-yellow-300">page</span>
                <span className="text-white">.</span>
                <span className="text-yellow-300">found</span>
                <span className="text-white">) {`{`}</span>
              </div>
              <div className="text-green-400 ml-4">
                redirect<span className="text-white">(</span>
                <span className="text-red-400">'awesome-content'</span>
                <span className="text-white">);</span>
              </div>
              <div className="text-blue-400">
                <span className="text-white">{`}`}</span> else <span className="text-white">{`{`}</span>
              </div>
              <div className="text-green-400 ml-4">
                show<span className="text-white">(</span>
                <span className="text-red-400">'404-page'</span>
                <span className="text-white">);</span>
              </div>
              <div className="text-blue-400">
                <span className="text-white">{`}`}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 0.3, 0]
              }}
              transition={{ 
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;