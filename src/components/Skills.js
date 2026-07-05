import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [displayValues, setDisplayValues] = useState({});

  // Fixed skills data with exact percentages
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 60, color: 'from-orange-500 to-red-500' },
        { name: 'CSS', level: 55, color: 'from-blue-500 to-indigo-500' },
        { name: 'JavaScript', level: 50, color: 'from-yellow-500 to-orange-500' },
        { name: 'React', level: 45, color: 'from-blue-400 to-blue-600' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Database', level: 50, color: 'from-green-500 to-emerald-500' },
        { name: 'REST API', level: 45, color: 'from-indigo-500 to-purple-500' }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 55, color: 'from-orange-600 to-red-600' },
        { name: 'GitHub', level: 55, color: 'from-gray-700 to-gray-900' },
        { name: 'GitHub Copilot', level: 50, color: 'from-purple-600 to-pink-600' },
        { name: 'VS Code', level: 60, color: 'from-blue-600 to-blue-800' },
        { name: 'Claude AI', level: 50, color: 'from-indigo-500 to-purple-500' },
        { name: 'VS Code Extensions', level: 55, color: 'from-teal-500 to-cyan-500' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 55, color: 'from-blue-500 to-purple-500' },
        { name: 'Communication', level: 60, color: 'from-green-500 to-teal-500' },
        { name: 'Leadership', level: 60, color: 'from-purple-500 to-pink-500' },
        { name: 'Teamwork', level: 75, color: 'from-orange-500 to-red-500' },
        { name: 'Time Management', level: 70, color: 'from-indigo-500 to-blue-500' },
        { name: 'Critical Thinking', level: 50, color: 'from-teal-500 to-cyan-500' }
      ]
    }
  ];

  // Simple static display - guaranteed to show correct values
  const CircularProgress = ({ skill }) => {
    const percentage = skill.level; // Direct value, no animation
    
    return (
      <div className="text-center p-4">
        {/* Static circle with guaranteed percentage display */}
        <div className="relative w-24 h-24 mx-auto mb-4">
          {/* Background circle */}
          <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            {/* Percentage text - ALWAYS VISIBLE */}
            <span className="text-xl font-bold text-gray-900 dark:text-white z-10">
              {percentage}%
            </span>
          </div>
          {/* Colored border overlay */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-500"></div>
        </div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h4>
      </div>
    );
  };

  const LinearProgress = ({ skill }) => {
    const percentage = skill.level; // Direct value

    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-medium text-gray-900 dark:text-white">
            {skill.name}
          </span>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
                {category.title}
              </h3>
              
              {category.title === 'Soft Skills' ? (
                // Simple circles for Soft Skills - GUARANTEED TO SHOW PERCENTAGES
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <CircularProgress skill={skill} />
                    </div>
                  ))}
                </div>
              ) : (
                // Progress bars for Technical Skills
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill) => (
                      <LinearProgress key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'Machine Learning', 'Generative AI'].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 font-medium"
              >
                🎓 {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
            <h4 className="text-xl font-bold mb-4 gradient-text">Skills Overview</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold gradient-text">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Frontend Skills</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Backend Skills</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">6</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Tools & Platforms</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">6</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Soft Skills</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;