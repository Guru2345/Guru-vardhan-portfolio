import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AcademicCapIcon, CodeBracketIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: 'Years of Experience', value: '3+', icon: '📚' },
    { label: 'Projects Completed', value: '15+', icon: '🚀' },
    { label: 'Technologies Learned', value: '10+', icon: '💻' },
    { label: 'Problem Solving Score', value: '85%', icon: '🧩' },
  ];

  const highlights = [
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      title: 'Engineering Background',
      description: 'B.Tech in Instrumentation Engineering with strong analytical and problem-solving skills.'
    },
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: 'Programming Passion',
      description: 'Passionate about coding and software development with hands-on experience in multiple programming languages.'
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: 'Innovation Mindset',
      description: 'Always eager to learn new technologies and implement innovative solutions to real-world problems.'
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: 'Career Goals',
      description: 'Aspiring to become an AI Engineer and contribute to cutting-edge technological advancements.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Building the Future Through Code
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I am a passionate 4th-year B.Tech Instrumentation Engineering student with a strong 
              interest in Software Development, Artificial Intelligence, and innovative technology solutions. 
              My journey in programming started with curiosity and has evolved into a deep commitment to 
              creating impactful software.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With expertise in Java programming, web development, and a growing interest in AI, 
              I continuously challenge myself to learn new technologies and solve complex problems. 
              My engineering background gives me a unique perspective on systematic problem-solving 
              and attention to detail.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I am actively preparing for internships and placements while also focusing on GATE preparation. 
              My goal is to contribute to innovative projects that make a real difference in people's lives 
              and advance the field of artificial intelligence and software engineering.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm font-medium">
                Quick Learner
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-lg text-sm font-medium">
                Innovation Focused
              </span>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-dark-700 overflow-hidden">
                  {/* Your Profile Photo */}
                  <img 
                    src={`${process.env.PUBLIC_URL}/profile.jpeg`}
                    alt="Guruvardhan Yakkanti" 
                    className="w-full h-full object-cover"
                    style={{ display: 'block' }}
                  />
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white dark:bg-dark-800 rounded-xl p-4 shadow-xl glass-dark"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Coding</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-dark-800 rounded-xl p-4 shadow-xl glass-dark"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="card text-center hover-lift"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="card hover-lift group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white group-hover:shadow-glow transition-all duration-300">
                  {highlight.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;