import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AcademicCapIcon, CalendarDaysIcon, MapPinIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Instrumentation Engineering',
      institution: 'Your College Name',
      location: 'City, State',
      duration: '2022 - 2026',
      cgpa: '8.5',
      maxCgpa: '10.0',
      status: 'Currently Pursuing',
      description: 'Focused on instrumentation systems, control engineering, and automation. Gained strong analytical and problem-solving skills through engineering coursework.',
      highlights: [
        'Strong foundation in mathematics and engineering principles',
        'Hands-on experience with instrumentation systems',
        'Active participation in technical workshops and seminars',
        'Member of Engineering Student Council'
      ],
      courses: [
        'Control Systems Engineering',
        'Digital Signal Processing',
        'Microprocessors & Microcontrollers',
        'Industrial Automation',
        'Data Structures & Algorithms',
        'Engineering Mathematics'
      ]
    },
    {
      id: 2,
      degree: 'Intermediate (12th Grade)',
      field: 'Mathematics, Physics, Chemistry',
      institution: 'Your Intermediate College',
      location: 'City, State',
      duration: '2020 - 2022',
      cgpa: '9.2',
      maxCgpa: '10.0',
      status: 'Completed',
      description: 'Completed intermediate education with focus on science and mathematics, building a strong foundation for engineering studies.',
      highlights: [
        'Excellent performance in Mathematics and Physics',
        'Participated in science exhibitions',
        'Achieved merit certificate for academic excellence',
        'Active in extracurricular activities'
      ],
      courses: [
        'Advanced Mathematics',
        'Physics',
        'Chemistry',
        'English',
        'Computer Science Basics'
      ]
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (10th Grade)',
      field: 'General Studies',
      institution: 'Your School Name',
      location: 'City, State',
      duration: '2019 - 2020',
      cgpa: '9.5',
      maxCgpa: '10.0',
      status: 'Completed',
      description: 'Completed secondary education with distinction, demonstrating strong academic performance across all subjects.',
      highlights: [
        'Secured high grades in all subjects',
        'School topper in Mathematics',
        'Participated in various competitions',
        'Leadership roles in school activities'
      ],
      courses: [
        'Mathematics',
        'Science',
        'Social Studies',
        'English',
        'Hindi'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistent high performance throughout academic journey',
      icon: '🎓',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Technical Skills',
      description: 'Strong foundation in engineering and programming concepts',
      icon: '💻',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Problem Solving',
      description: 'Enhanced analytical and critical thinking abilities',
      icon: '🧩',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Leadership',
      description: 'Active participation in student organizations and activities',
      icon: '👥',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Academic journey and educational qualifications that shaped my technical knowledge and skills
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center z-10">
                <AcademicCapIcon className="w-4 h-4 text-white" />
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="card card-hover">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {edu.field}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Currently Pursuing' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}>
                      {edu.status}
                    </span>
                  </div>

                  {/* Institution Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <AcademicCapIcon className="w-4 h-4" />
                      <span className="text-sm">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPinIcon className="w-4 h-4" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                  </div>

                  {/* CGPA */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrophyIcon className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold">CGPA: </span>
                      <span className="font-bold gradient-text text-lg">{edu.cgpa}</span>
                      <span className="text-gray-600 dark:text-gray-400">/ {edu.maxCgpa}</span>
                    </div>
                    
                    {/* CGPA Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${(parseFloat(edu.cgpa) / parseFloat(edu.maxCgpa)) * 100}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                          <span className="text-blue-500 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Courses */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
            Academic Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="card text-center hover-lift group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-2xl group-hover:shadow-glow transition-all duration-300`}>
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Current Academic Focus</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              As a 4th-year Instrumentation Engineering student, I'm currently focusing on advanced 
              engineering concepts while simultaneously building my software development skills. 
              I'm also preparing for GATE and actively seeking internship opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">📚</div>
                <div className="font-semibold text-gray-900 dark:text-white">GATE Preparation</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Preparing for Graduate Aptitude Test</div>
              </div>
              <div>
                <div className="text-3xl mb-2">💼</div>
                <div className="font-semibold text-gray-900 dark:text-white">Internship Ready</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Seeking software development roles</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-semibold text-gray-900 dark:text-white">Skill Development</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Continuously learning new technologies</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;