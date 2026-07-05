import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowTopRightOnSquareIcon, StarIcon, ChartBarIcon, FireIcon } from '@heroicons/react/24/outline';

const CodingProfiles = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const profiles = [
    {
      id: 1,
      platform: 'GitHub',
      username: 'Guru2345',
      profileUrl: 'https://github.com/Guru2345',
      description: 'Open source contributions and personal projects repository',
      avatar: '/api/placeholder/80/80',
      stats: {
        repositories: '15+',
        followers: '25+',
        stars: '50+',
        contributions: '200+'
      },
      highlights: [
        '15+ public repositories',
        'Active contributor with consistent commits',
        'Diverse project portfolio across technologies',
        'Well-documented codebases'
      ],
      technologies: ['Java', 'JavaScript', 'React', 'HTML/CSS'],
      color: 'from-gray-700 to-gray-900',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      featured: true
    },
    {
      id: 2,
      platform: 'LinkedIn',
      username: 'guruvardhan-yakkanti',
      profileUrl: 'https://www.linkedin.com/in/guruvardhan-yakkanti-50235b3b8/',
      description: 'Professional networking and career development',
      avatar: '/api/placeholder/80/80',
      stats: {
        connections: '100+',
        posts: '20+',
        articles: '5+',
        recommendations: '10+'
      },
      highlights: [
        'Active professional networking',
        'Regular posts about technology and learning',
        'Building industry connections',
        'Showcasing professional achievements'
      ],
      technologies: ['Professional Networking', 'Career Development', 'Industry Insights'],
      color: 'from-blue-600 to-blue-800',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      featured: true
    },
    {
      id: 3,
      platform: 'LeetCode',
      username: 'guruvardhan',
      profileUrl: 'https://leetcode.com/u/guruvardhan/',
      description: 'Competitive programming and problem solving practice',
      avatar: '/api/placeholder/80/80',
      stats: {
        problems: '50+',
        contests: '10+',
        ranking: 'Top 30%',
        streak: '15 days'
      },
      highlights: [
        'Solved 50+ coding problems',
        'Regular participation in contests',
        'Focus on Data Structures & Algorithms',
        'Improving problem-solving speed'
      ],
      technologies: ['Algorithms', 'Data Structures', 'Java', 'Problem Solving'],
      color: 'from-orange-500 to-yellow-500',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.858 2.133 8.106-.033L23.707 14.8c.5-.5.498-1.312.01-1.799-.488-.487-1.312-.487-1.799 0L13.91 20.998c-.951.95-2.499.95-3.45 0L6.184 16.723a2.38 2.38 0 0 1-.518-.724 2.378 2.378 0 0 1-.114-.39 2.262 2.262 0 0 1-.017-.457c.006-.135.02-.27.043-.402a2.35 2.35 0 0 1 .454-.78l7.624-8.17c.508-.53.478-1.356-.06-1.846zM8.708 14.411a1.374 1.374 0 0 0-.961.438l-2.681 2.681c-.508.53-.478 1.356.06 1.846.538.49 1.365.457 1.846-.06l2.681-2.681c.508-.53.478-1.356-.06-1.846a1.374 1.374 0 0 0-.885-.378z"/>
        </svg>
      ),
      featured: false
    },
    {
      id: 4,
      platform: 'HackerRank',
      username: 'guruvardhan_y',
      profileUrl: '#',
      description: 'Skill assessments and coding challenges',
      avatar: '/api/placeholder/80/80',
      stats: {
        badges: '5+',
        certificates: '3+',
        skills: 'Java, Problem Solving',
        rank: 'Silver'
      },
      highlights: [
        'Multiple skill certifications',
        'Java programming proficiency',
        'Problem-solving badges earned',
        'Regular challenge participation'
      ],
      technologies: ['Java', 'Algorithms', 'SQL', 'Problem Solving'],
      color: 'from-green-500 to-teal-500',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 0v24h24V0zm9.95 8.002c1.072 0 1.957.82 2.074 1.857l.006.143v2c0 1.116-.896 2-2 2s-2-.884-2-2v-2c0-1.116.884-2 2-2zm4.3 0c1.072 0 1.957.82 2.074 1.857l.006.143v2c0 1.116-.896 2-2 2s-2-.884-2-2v-2c0-1.116.884-2 2-2zm-8.5 0c1.072 0 1.957.82 2.074 1.857l.006.143v2c0 1.116-.896 2-2 2s-2-.884-2-2v-2c0-1.116.884-2 2-2z"/>
        </svg>
      ),
      featured: false
    }
  ];

  const codingStats = [
    { label: 'Problems Solved', value: '100+', icon: '🧩', description: 'Across all platforms' },
    { label: 'GitHub Repos', value: '15+', icon: '📁', description: 'Public repositories' },
    { label: 'Coding Hours', value: '300+', icon: '⏰', description: 'Practice time' },
    { label: 'Technologies', value: '10+', icon: '💻', description: 'Learned & practiced' }
  ];

  const contributions = [
    {
      title: 'Daily Coding Practice',
      description: 'Consistent problem-solving across multiple platforms',
      streak: '15+ days',
      icon: '🔥'
    },
    {
      title: 'Open Source Contributions',
      description: 'Contributing to community projects and maintaining repositories',
      commits: '200+',
      icon: '🌟'
    },
    {
      title: 'Skill Certifications',
      description: 'Validated programming skills through platform assessments',
      certificates: '8+',
      icon: '🏆'
    },
    {
      title: 'Code Quality',
      description: 'Writing clean, documented, and maintainable code',
      score: '85%+',
      icon: '✨'
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my coding journey across various platforms showcasing problem-solving skills, 
            project contributions, and continuous learning progress
          </p>
        </motion.div>

        {/* Coding Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {codingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="card text-center hover-lift"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
            Main Profiles
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {profiles.filter(profile => profile.featured).map((profile, index) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="card card-hover group"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`flex-shrink-0 p-3 bg-gradient-to-r ${profile.color} rounded-lg text-white group-hover:shadow-glow transition-all duration-300`}>
                    {profile.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        {profile.platform}
                      </h4>
                      <a
                        href={profile.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                      >
                        Visit Profile
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      @{profile.username}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {profile.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {Object.entries(profile.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold gradient-text">{value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Highlights:</h5>
                  <ul className="space-y-1">
                    {profile.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <StarIcon className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {profile.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Profiles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            All Coding Platforms
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="card text-center hover-lift group"
              >
                <div className={`w-12 h-12 mx-auto mb-4 p-2 bg-gradient-to-r ${profile.color} rounded-lg text-white group-hover:shadow-glow transition-all duration-300`}>
                  {profile.icon}
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-500 transition-colors">
                  {profile.platform}
                </h4>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  @{profile.username}
                </p>
                
                <div className="space-y-1 mb-4">
                  {Object.entries(profile.stats).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="font-semibold gradient-text">{value}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                >
                  Visit Profile
                  <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contribution Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Coding Activity & Contributions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributions.map((contribution, index) => (
              <motion.div
                key={contribution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="card text-center hover-lift"
              >
                <div className="text-4xl mb-4">{contribution.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {contribution.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {contribution.description}
                </p>
                
                {/* Dynamic metric display */}
                <div className="text-center">
                  {contribution.streak && (
                    <div className="text-2xl font-bold gradient-text">{contribution.streak}</div>
                  )}
                  {contribution.commits && (
                    <div className="text-2xl font-bold gradient-text">{contribution.commits}</div>
                  )}
                  {contribution.certificates && (
                    <div className="text-2xl font-bold gradient-text">{contribution.certificates}</div>
                  )}
                  {contribution.score && (
                    <div className="text-2xl font-bold gradient-text">{contribution.score}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Contribution Graph Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-center"
        >
          <div className="card max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 gradient-text">GitHub Contribution Activity</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Consistent coding activity with regular contributions to personal projects and learning repositories.
            </p>
            
            {/* Contribution Graph Visualization */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-12 gap-1 mb-4">
                {Array.from({ length: 84 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-sm ${
                      Math.random() > 0.7
                        ? 'bg-green-500'
                        : Math.random() > 0.5
                        ? 'bg-green-300'
                        : Math.random() > 0.3
                        ? 'bg-green-200'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 text-left">
                <span className="mr-2">Less</span>
                <div className="inline-flex gap-1 mr-2">
                  <div className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                </div>
                <span>More</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">📈</div>
                <div className="font-semibold text-gray-900 dark:text-white">Consistent Activity</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Regular coding sessions</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🔄</div>
                <div className="font-semibold text-gray-900 dark:text-white">Version Control</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Proper Git workflow</div>
              </div>
              <div>
                <div className="text-3xl mb-2">📝</div>
                <div className="font-semibold text-gray-900 dark:text-white">Documentation</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Well-documented code</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;