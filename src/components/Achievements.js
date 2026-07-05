import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrophyIcon, 
  AcademicCapIcon,
  CodeBracketIcon,
  LightBulbIcon,
  UserGroupIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      id: 1,
      category: 'Academic Excellence',
      title: 'Consistent High Academic Performance',
      description: 'Maintained excellent grades throughout my academic journey with CGPA above 8.5 in engineering.',
      icon: <AcademicCapIcon className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-500',
      date: '2022 - Present',
      highlights: [
        'CGPA: 8.5+ in B.Tech Instrumentation Engineering',
        'Merit certificate in Intermediate (12th grade)',
        'School topper in Mathematics (10th grade)',
        'Consistent academic excellence award recipient'
      ]
    },
    {
      id: 2,
      category: 'Problem Solving',
      title: 'Coding Challenges & Competitions',
      description: 'Active participation in coding competitions and problem-solving platforms with growing skill level.',
      icon: <CodeBracketIcon className="w-8 h-8" />,
      color: 'from-green-500 to-blue-500',
      date: '2023 - Present',
      highlights: [
        'Solved 100+ problems on various coding platforms',
        'Ranked in top 25% in college coding competitions',
        'Regular participation in LeetCode challenges',
        'Improved problem-solving skills in Data Structures & Algorithms'
      ]
    },
    {
      id: 3,
      category: 'Project Development',
      title: 'Successful Project Portfolio',
      description: 'Built and deployed multiple projects showcasing various technologies and programming skills.',
      icon: <LightBulbIcon className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      date: '2023 - Present',
      highlights: [
        'Developed 15+ projects across different technologies',
        'Built responsive web applications with modern frameworks',
        'Created Java-based desktop applications',
        'Maintained active GitHub profile with regular contributions'
      ]
    },
    {
      id: 4,
      category: 'Technical Skills',
      title: 'Multi-Technology Proficiency',
      description: 'Acquired proficiency in multiple programming languages and development technologies.',
      icon: <CodeBracketIcon className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      date: '2022 - Present',
      highlights: [
        'Proficient in Java, JavaScript, HTML/CSS',
        'Learning Python, React.js, and Node.js',
        'Experience with Git, GitHub, and development tools',
        'Understanding of database concepts and design'
      ]
    },
    {
      id: 5,
      category: 'Leadership & Teamwork',
      title: 'Team Leadership & Collaboration',
      description: 'Demonstrated leadership skills through team projects and student organization activities.',
      icon: <UserGroupIcon className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      date: '2022 - Present',
      highlights: [
        'Led a team of 5 students in technical project',
        'Active member of Engineering Student Council',
        'Volunteered in organizing technical events',
        'Mentored junior students in programming concepts'
      ]
    },
    {
      id: 6,
      category: 'Continuous Learning',
      title: 'Certification & Skill Development',
      description: 'Committed to continuous learning through online courses and professional certifications.',
      icon: <StarIcon className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      date: '2023 - Present',
      highlights: [
        'Earned 8+ technical certifications',
        'Completed courses from top platforms (Coursera, Udemy, etc.)',
        'Attended 10+ technical workshops and seminars',
        'Active participation in developer communities'
      ]
    }
  ];

  const stats = [
    { label: 'Academic CGPA', value: '8.5+', icon: '🎓', description: 'Consistent Excellence' },
    { label: 'Projects Built', value: '15+', icon: '🚀', description: 'Diverse Portfolio' },
    { label: 'Certifications', value: '8+', icon: '🏆', description: 'Skill Validation' },
    { label: 'Problems Solved', value: '100+', icon: '🧩', description: 'Coding Practice' },
    { label: 'Technologies', value: '10+', icon: '💻', description: 'Tech Stack' },
    { label: 'Learning Hours', value: '200+', icon: '⏰', description: 'Dedication' }
  ];

  const upcomingGoals = [
    {
      title: 'Secure Software Development Internship',
      description: 'Target: Summer 2024 internship at top tech companies',
      status: 'In Progress',
      timeline: '2024 Q2'
    },
    {
      title: 'Master React.js & Node.js',
      description: 'Complete advanced full-stack development skills',
      status: 'In Progress',
      timeline: '2024 Q1-Q2'
    },
    {
      title: 'Contribute to Open Source',
      description: 'Make meaningful contributions to open source projects',
      status: 'Planned',
      timeline: '2024 Q2-Q3'
    },
    {
      title: 'GATE Examination',
      description: 'Prepare for and excel in GATE examination',
      status: 'In Progress',
      timeline: '2024'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Milestones and accomplishments that reflect my dedication to learning, growth, and excellence in technology
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="card text-center hover-lift group"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
            Key Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card card-hover group"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`flex-shrink-0 p-3 bg-gradient-to-r ${achievement.color} rounded-lg text-white group-hover:shadow-glow transition-all duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {achievement.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {achievement.date}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                      {achievement.title}
                    </h4>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {achievement.description}
                </p>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-900 dark:text-white text-sm">Key Highlights:</h5>
                  <ul className="space-y-1">
                    {achievement.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <TrophyIcon className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
            Upcoming Goals & Targets
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {upcomingGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="card hover-lift"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {goal.title}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    goal.status === 'In Progress' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                  }`}>
                    {goal.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                  {goal.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>📅</span>
                  <span>Timeline: {goal.timeline}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievement Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center"
          >
            <div className="card max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold mb-4 gradient-text">My Achievement Philosophy</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                "Success is not just about reaching goals, but about the continuous journey of learning, 
                growing, and contributing to something meaningful. Every achievement is a stepping stone 
                to greater challenges and opportunities."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="font-semibold text-gray-900 dark:text-white">Goal-Oriented</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Setting clear, achievable targets</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">📈</div>
                  <div className="font-semibold text-gray-900 dark:text-white">Continuous Growth</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Always striving to improve</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🤝</div>
                  <div className="font-semibold text-gray-900 dark:text-white">Collaborative Success</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Achieving together with others</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;