import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  EyeIcon, 
  CodeBracketIcon, 
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
  ArrowPathIcon 
} from '@heroicons/react/24/outline';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Your GitHub username
  const GITHUB_USERNAME = 'Guru2345';

  // Function to categorize projects based on technologies and description
  const categorizeProject = (repo) => {
    const name = repo.name.toLowerCase();
    const description = (repo.description || '').toLowerCase();
    const topics = repo.topics || [];
    
    if (topics.includes('ai') || topics.includes('ml') || topics.includes('machine-learning') || 
        description.includes('ai') || description.includes('machine learning') || 
        description.includes('fraud detection') || name.includes('ai')) {
      return 'AI/ML';
    }
    
    if (description.includes('healthcare') || description.includes('drug') || 
        description.includes('medical') || name.includes('drug')) {
      return 'Healthcare';
    }
    
    if (topics.includes('mobile') || topics.includes('react-native') || 
        description.includes('mobile') || description.includes('android') || 
        description.includes('ios') || name.includes('atm')) {
      return 'Mobile App';
    }
    
    // Default to Web Development
    return 'Web Development';
  };

  // Function to determine technologies based on repo languages and topics
  const getTechnologies = (repo) => {
    const technologies = [];
    
    // Add main language
    if (repo.language) {
      technologies.push(repo.language);
    }
    
    // Add common technologies based on topics
    if (repo.topics) {
      repo.topics.forEach(topic => {
        const techMap = {
          'react': 'React.js',
          'javascript': 'JavaScript',
          'typescript': 'TypeScript',
          'python': 'Python',
          'java': 'Java',
          'spring-boot': 'Spring Boot',
          'mysql': 'MySQL',
          'postgresql': 'PostgreSQL',
          'mongodb': 'MongoDB',
          'nodejs': 'Node.js',
          'express': 'Express.js',
          'flask': 'Flask',
          'django': 'Django',
          'html': 'HTML',
          'css': 'CSS',
          'tailwindcss': 'Tailwind CSS',
          'bootstrap': 'Bootstrap',
          'machine-learning': 'Machine Learning',
          'tensorflow': 'TensorFlow',
          'scikit-learn': 'Scikit-learn',
          'pandas': 'Pandas',
          'numpy': 'NumPy'
        };
        
        if (techMap[topic]) {
          technologies.push(techMap[topic]);
        }
      });
    }
    
    // Add technologies based on repository name and description
    const content = `${repo.name} ${repo.description || ''}`.toLowerCase();
    
    if (content.includes('react')) technologies.push('React.js');
    if (content.includes('spring')) technologies.push('Spring Boot');
    if (content.includes('mysql')) technologies.push('MySQL');
    if (content.includes('tensorflow')) technologies.push('TensorFlow');
    if (content.includes('machine learning') || content.includes('ml')) technologies.push('Machine Learning');
    if (content.includes('api')) technologies.push('REST API');
    
    // Remove duplicates and return
    return [...new Set(technologies)].slice(0, 6); // Limit to 6 technologies
  };

  // Fetch GitHub repositories
  const fetchGitHubProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
      
      const repos = await response.json();
      
      // Filter out forked repositories and convert to our project format
      const projects = repos
        .filter(repo => !repo.fork && !repo.archived) // Exclude forks and archived repos
        .map((repo, index) => ({
          id: index + 1,
          title: repo.name.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' '),
          description: repo.description || 'No description available for this project.',
          longDescription: repo.description || 'This project is available on GitHub. Check the repository for more details and documentation.',
          image: '/api/placeholder/400/250',
          technologies: getTechnologies(repo),
          category: categorizeProject(repo),
          githubUrl: repo.html_url,
          liveUrl: repo.homepage || null,
          featured: repo.stargazers_count > 0 || ['employee-management-system', 'portfilio', 'ai-competative-coach', 'smart-exam-performance-analyzer', 'AI-Based-UPI-Fraud-and-Spam-Detection-System'].includes(repo.name),
          status: 'Completed',
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
          updatedAt: repo.updated_at,
          createdAt: repo.created_at
        }))
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)); // Sort by most recently updated
      
      setGithubProjects(projects);
    } catch (err) {
      setError(err.message);
      // Fallback to static projects if API fails
      setGithubProjects(staticProjects);
    } finally {
      setLoading(false);
    }
  };

  // Static fallback projects (your manually curated list)
  const staticProjects = [
    {
      id: 1,
      title: 'Employee Management System',
      description: 'A comprehensive application for managing employee records, payroll, attendance, and HR operations with modern interface.',
      longDescription: 'A full-featured employee management system that streamlines HR operations for organizations. Features include employee registration, attendance tracking, payroll management, leave management, and performance evaluation. Built with modern web technologies and includes role-based access control for different user types.',
      image: '/api/placeholder/400/250',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      category: 'Web Development',
      githubUrl: 'https://github.com/Guru2345/employee-management-system',
      liveUrl: null,
      featured: true,
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS featuring dark mode, animations, and mobile-first design.',
      longDescription: 'This portfolio website showcases my skills, projects, and experience in a visually appealing and user-friendly interface. Built with modern web technologies including React.js, Tailwind CSS, and Framer Motion for animations. Features include responsive design, dark/light mode toggle, smooth scrolling, and optimized performance.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
      category: 'Web Development',
      githubUrl: 'https://github.com/Guru2345/portfilio',
      liveUrl: 'https://guruvardhan-portfolio.vercel.app',
      featured: true,
      status: 'Completed'
    },
    {
      id: 3,
      title: 'AI Competitive Coach',
      description: 'An intelligent coaching system that provides personalized training recommendations and performance analysis for competitive programming.',
      longDescription: 'An AI-powered platform designed to help competitive programmers improve their skills through personalized coaching. Features include problem recommendation based on skill level, performance analytics, weakness identification, and adaptive learning paths. Uses machine learning algorithms to analyze coding patterns and suggest optimal practice strategies.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Machine Learning', 'Flask', 'PostgreSQL', 'AI', 'Data Analytics'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/Guru2345/ai-competative-coach',
      liveUrl: null,
      featured: true,
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Smart Exam Performance Analyzer',
      description: 'An intelligent system for analyzing student exam performance with automated insights and improvement recommendations.',
      longDescription: 'A comprehensive exam analysis platform that uses advanced analytics to evaluate student performance patterns. Features include automated grading, performance trend analysis, weakness identification, personalized study recommendations, and detailed reporting for both students and educators. Incorporates machine learning for predictive analysis and adaptive learning suggestions.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Data Science', 'Pandas', 'Matplotlib', 'Machine Learning', 'Flask'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/Guru2345/smart-exam-performance-analyzer',
      liveUrl: null,
      featured: true,
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Drug-Drug Interaction Checker',
      description: 'A healthcare application that identifies potential drug interactions and provides safety warnings for medical professionals.',
      longDescription: 'A critical healthcare tool designed to prevent adverse drug interactions by analyzing medication combinations. Features include comprehensive drug database, interaction severity classification, alternative medication suggestions, patient history tracking, and integration with medical databases. Essential for healthcare professionals to ensure patient safety.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Django', 'Medical APIs', 'PostgreSQL', 'Healthcare Data'],
      category: 'Healthcare',
      githubUrl: 'https://github.com/Guru2345/drug-drug-interaction-checker',
      liveUrl: null,
      featured: false,
      status: 'Completed'
    },
    {
      id: 6,
      title: 'ATM Locator',
      description: 'A location-based service application that helps users find nearby ATMs with real-time availability and service information.',
      longDescription: 'A user-friendly mobile and web application that assists users in locating nearby ATMs with real-time information. Features include GPS-based location services, ATM availability status, service type filtering (cash withdrawal, deposit, balance inquiry), bank-specific searches, and route navigation. Includes crowd-sourced updates for ATM status.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Google Maps API', 'Node.js', 'MongoDB', 'GPS'],
      category: 'Mobile App',
      githubUrl: 'https://github.com/Guru2345/atm-locator',
      liveUrl: null,
      featured: false,
      status: 'Completed'
    },
    {
      id: 7,
      title: 'AI-Based UPI Fraud Detection System',
      description: 'An advanced fraud detection system that uses artificial intelligence to identify and prevent fraudulent UPI transactions in real-time.',
      longDescription: 'A sophisticated fraud prevention system designed specifically for UPI (Unified Payments Interface) transactions. Uses advanced machine learning algorithms including anomaly detection, pattern recognition, and behavioral analysis to identify suspicious activities. Features include real-time transaction monitoring, risk scoring, automated alerts, and adaptive learning from new fraud patterns. Critical for fintech security and user protection.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Apache Kafka', 'Redis', 'Fraud Detection', 'Deep Learning'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/Guru2345/AI-Based-UPI-Fraud-and-Spam-Detection-System',
      liveUrl: null,
      featured: true,
      status: 'Completed'
    }
  ];

  // Fetch projects on component mount
  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  const categories = ['All', 'Web Development', 'AI/ML', 'Healthcare', 'Mobile App'];

  // Use GitHub projects if available, otherwise use static projects
  const projects = githubProjects.length > 0 ? githubProjects : staticProjects;

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Planned': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass-dark rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold gradient-text">{project.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex gap-2 mb-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 text-sm"
                >
                  <CodeBracketIcon className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-sm"
                >
                  <EyeIcon className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                {project.category}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {project.longDescription}
            </p>
            
            <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
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
              My <span className="gradient-text">Projects</span>
            </h2>
            <button
              onClick={fetchGitHubProjects}
              disabled={loading}
              className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors disabled:opacity-50"
              title="Refresh projects from GitHub"
            >
              <ArrowPathIcon className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {loading ? 'Loading projects from GitHub...' : 
             error ? 'Showing cached projects (GitHub API unavailable)' :
             `Explore my ${projects.length} projects fetched automatically from GitHub`}
          </p>
          {githubProjects.length > 0 && (
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
              ✨ Auto-synced from GitHub • Last updated: {new Date().toLocaleDateString()}
            </p>
          )}
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-6">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-dark-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured && (selectedCategory === 'All' || p.category === selectedCategory)).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="card card-hover group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors text-sm"
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors text-sm"
                    >
                      <EyeIcon className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card card-hover group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <h4 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 2).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2 text-xs">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <CodeBracketIcon className="w-3 h-3" />
                      Code
                      {project.stars > 0 && (
                        <span className="text-yellow-500">★{project.stars}</span>
                      )}
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <EyeIcon className="w-3 h-3" />
                      Demo
                    </a>
                  )}
                  {project.language && (
                    <span className="text-gray-500 dark:text-gray-400">
                      {project.language}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;