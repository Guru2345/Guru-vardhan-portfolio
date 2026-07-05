import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BriefcaseIcon, 
  CalendarDaysIcon, 
  MapPinIcon, 
  AcademicCapIcon,
  CodeBracketIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      type: 'project',
      title: 'Personal Project Development',
      role: 'Full Stack Developer',
      company: 'Self-Directed Learning',
      location: 'Remote',
      duration: 'Jan 2023 - Present',
      current: true,
      description: 'Developing various web applications and software projects to enhance programming skills and build a strong portfolio.',
      responsibilities: [
        'Built responsive web applications using React.js and modern CSS frameworks',
        'Developed Java-based desktop applications with GUI interfaces',
        'Implemented RESTful APIs and database integration',
        'Applied version control using Git and GitHub for project management',
        'Focused on clean code practices and documentation'
      ],
      technologies: ['React.js', 'JavaScript', 'Java', 'HTML/CSS', 'Git', 'Node.js'],
      achievements: [
        'Created 15+ projects showcasing different technologies',
        'Maintained active GitHub profile with regular contributions',
        'Learned and implemented modern development practices'
      ]
    },
    {
      id: 2,
      type: 'education',
      title: 'Technical Workshop Participation',
      role: 'Participant & Volunteer',
      company: 'Various Technical Events',
      location: 'College Campus',
      duration: 'Aug 2022 - Present',
      current: true,
      description: 'Active participation in technical workshops, coding competitions, and engineering seminars to enhance practical knowledge.',
      responsibilities: [
        'Participated in coding competitions and hackathons',
        'Attended workshops on emerging technologies like AI/ML',
        'Volunteered in organizing technical events and seminars',
        'Collaborated with peers on group projects and assignments',
        'Mentored junior students in programming concepts'
      ],
      technologies: ['Python', 'Machine Learning', 'Data Structures', 'Algorithms', 'Teamwork'],
      achievements: [
        'Successfully completed 10+ technical workshops',
        'Ranked in top 25% in college coding competitions',
        'Led a team of 5 students in a technical project'
      ]
    },
    {
      id: 3,
      type: 'learning',
      title: 'Online Learning & Certification',
      role: 'Self-Learner',
      company: 'Multiple Platforms',
      location: 'Online',
      duration: 'Jun 2022 - Present',
      current: true,
      description: 'Continuous learning through online courses, tutorials, and certification programs to stay updated with latest technologies.',
      responsibilities: [
        'Completed online courses in web development and programming',
        'Earned certificates in Java, JavaScript, and web technologies',
        'Practiced problem-solving on platforms like LeetCode',
        'Built projects following online tutorials and documentation',
        'Joined developer communities and forums for knowledge sharing'
      ],
      technologies: ['Java', 'JavaScript', 'React', 'Node.js', 'Database', 'Git'],
      achievements: [
        'Earned 8+ technical certifications',
        'Solved 100+ coding problems on various platforms',
        'Built comprehensive portfolio of projects'
      ]
    },
    {
      id: 4,
      type: 'future',
      title: 'Upcoming Internship',
      role: 'Software Development Intern',
      company: 'Target Companies',
      location: 'Open to Remote/Onsite',
      duration: 'Summer 2024 (Expected)',
      current: false,
      description: 'Actively seeking internship opportunities in software development to gain real-world industry experience.',
      responsibilities: [
        'Apply theoretical knowledge to practical projects',
        'Collaborate with experienced developers and teams',
        'Learn industry best practices and development workflows',
        'Contribute to real software products and solutions',
        'Gain exposure to enterprise-level development'
      ],
      technologies: ['Java', 'Spring', 'React', 'Database', 'Agile', 'Testing'],
      achievements: [
        'Target: Secure internship at top tech companies',
        'Goal: Contribute to meaningful software projects',
        'Objective: Gain industry-level development experience'
      ]
    }
  ];

  const getExperienceIcon = (type) => {
    switch (type) {
      case 'project':
        return <CodeBracketIcon className="w-4 h-4 text-white" />;
      case 'education':
        return <AcademicCapIcon className="w-4 h-4 text-white" />;
      case 'learning':
        return <LightBulbIcon className="w-4 h-4 text-white" />;
      case 'future':
        return <BriefcaseIcon className="w-4 h-4 text-white" />;
      default:
        return <BriefcaseIcon className="w-4 h-4 text-white" />;
    }
  };

  const getExperienceColor = (type) => {
    switch (type) {
      case 'project':
        return 'from-blue-500 to-purple-500';
      case 'education':
        return 'from-green-500 to-blue-500';
      case 'learning':
        return 'from-yellow-500 to-orange-500';
      case 'future':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-blue-500 to-purple-500';
    }
  };

  const skills = [
    { category: 'Technical Skills', items: ['Java Programming', 'Web Development', 'Problem Solving', 'Database Design'] },
    { category: 'Soft Skills', items: ['Team Collaboration', 'Communication', 'Leadership', 'Time Management'] },
    { category: 'Tools & Platforms', items: ['Git/GitHub', 'VS Code', 'Postman', 'Figma'] },
    { category: 'Learning Focus', items: ['React.js', 'Node.js', 'Python', 'AI/ML Fundamentals'] }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional journey, learning experiences, and skill development through projects, education, and continuous learning
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 w-8 h-8 bg-gradient-to-r ${getExperienceColor(exp.type)} rounded-full flex items-center justify-center z-10`}>
                {getExperienceIcon(exp.type)}
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
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {exp.role}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Company Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <BriefcaseIcon className="w-4 h-4" />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPinIcon className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                          <span className="text-blue-500 mt-1">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                          <span className="text-green-500 mt-1">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Developed Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
            Skills Developed Through Experience
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="card hover-lift"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Career Goals & Aspirations</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm passionate about building a career in software development and artificial intelligence. 
              My goal is to contribute to innovative projects that make a positive impact while continuously 
              learning and growing as a developer.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Short-term Goals</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Secure software development internship</li>
                  <li>Master React.js and Node.js</li>
                  <li>Contribute to open-source projects</li>
                </ul>
              </div>
              <div className="p-4">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Medium-term Goals</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Full-time software developer role</li>
                  <li>Specialize in AI/ML development</li>
                  <li>Lead development teams</li>
                </ul>
              </div>
              <div className="p-4">
                <div className="text-4xl mb-3">🌟</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Long-term Vision</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Become an AI Engineer</li>
                  <li>Build innovative tech solutions</li>
                  <li>Mentor next-gen developers</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;