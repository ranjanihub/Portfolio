import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Database, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  ChevronDown,
  Code,
  TrendingUp,
  FileText,
  Award,
  Calendar,
  ExternalLink,
  ArrowUp,
  Brain,
  Eye,
  Cpu,
  GitBranch,
  Figma
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'internships', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });

      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    {
      category: 'Data Analysis',
      items: [
        { name: 'Pandas', icon: Database },
        { name: 'NumPy', icon: BarChart3 },
        { name: 'SQL', icon: Database }
      ]
    },
    {
      category: 'Visualization',
      items: [
        { name: 'Power BI', icon: TrendingUp },
        { name: 'Matplotlib', icon: BarChart3 },
        { name: 'Seaborn', icon: TrendingUp }
      ]
    },
    {
      category: 'Machine Learning',
      items: [
        { name: 'Scikit-learn', icon: Brain },
        { name: 'TensorFlow', icon: Cpu },
        { name: 'Keras', icon: Brain },
        { name: 'CNN', icon: Eye },
        { name: 'Tree Classifiers', icon: TrendingUp }
      ]
    },
    {
      category: 'Programming',
      items: [
        { name: 'Python', icon: Code },
        { name: 'R', icon: BarChart3 }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: GitBranch },
        { name: 'Figma', icon: Figma }
      ]
    }
  ];

  const projects = [
    {
      title: 'Zepto Inventory Analysis',
      description: 'SQL-based analysis providing insights on stock optimization, inventory turnover, and demand forecasting to improve supply chain efficiency.',
      technologies: ['SQL', 'Data Analysis', 'Inventory Management'],
      metrics: ['Stock optimization insights', 'Demand forecasting', 'Supply chain efficiency'],
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/ranjanihub/zepto_inventory_analysis'
    },
    {
      title: 'Uber Analysis',
      description: 'Comprehensive analysis of ride data using SQL for data processing and Power BI for creating interactive dashboards to visualize ride patterns and trends.',
      technologies: ['SQL', 'Power BI', 'Data Visualization'],
      metrics: ['Interactive dashboards', 'Ride pattern analysis', 'Trend visualization'],
      image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/ranjanihub/uber_analysis'
    }
  ];

  const certifications = [
    'Google Data Analytics (Coursera)',
    'GUVI Learnathon',
    'Python (CSC)',
    'Power BI (NoviTech)'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-black">
              B. <span className="text-red-600">Ranjani</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Education', 'Internships', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                  B. Ranjani
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-red-600">
                  Aspiring Data Analyst | AI & DS Student
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Final-year B.Tech student specializing in Artificial Intelligence and Data Science, 
                  passionate about transforming data into actionable insights through advanced analytics 
                  and machine learning techniques.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects"
                  className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </a>
                <a
                  href="/Ranjani.pdf"
                  download
                  className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>

              <div className="flex gap-6">
                <a href="mailto:ranjaniranjani5694@gmail.com" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
                  <Mail size={24} />
                </a>
                <a href="http://www.linkedin.com/in/ranjani8" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/ranjanihub" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
                  <Github size={24} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Brain size={120} className="text-red-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <ChevronDown size={32} className="text-gray-400 animate-bounce mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about leveraging data science and AI to solve real-world problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Detail-oriented and enthusiastic B.Tech student specializing in AI and Data Science, 
                with hands-on experience in data analysis, machine learning, and data visualization.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently pursuing my final year at DMI College of Engineering, Chennai, with a strong 
                academic record (CGPA: 8.4) and practical experience through internships and projects 
                in data analytics and business intelligence.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">8.4</div>
                  <div className="text-gray-600">CGPA</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-black">2+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Data Analysis"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <Award className="text-red-600" size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600">
              Proficient in modern data science and AI technologies
            </p>
          </div>

          <div className="space-y-12">
            {skills.map((skillCategory, index) => (
              <div key={skillCategory.category} className="space-y-6">
                <h3 className="text-2xl font-bold text-black text-center">{skillCategory.category}</h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {skillCategory.items.map((skill) => (
                    <div key={skill.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="flex flex-col items-center gap-4">
                        <div className="p-3 bg-red-100 rounded-lg">
                          <skill.icon className="text-red-600" size={24} />
                        </div>
                        <h4 className="font-semibold text-black text-center">{skill.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Education</h2>
            <p className="text-xl text-gray-600">
              Academic background and achievements
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Award className="text-red-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black">Bachelor of Technology in Artificial Intelligence and Data Science</h3>
                  <p className="text-red-600 font-medium">DMI College of Engineering, Chennai</p>
                  <p className="text-gray-600 mb-4">2022 - 2026 | CGPA: 8.4/10.0</p>
                  <p className="text-gray-700">
                    Specialized coursework in data analysis, machine learning, and data visualization. 
                    Achieved a strong academic record with consistent performance in core AI and Data Science subjects.
                  </p>
                </div>
                <div className="text-right text-gray-500">
                  <Calendar size={20} />
                  <p className="text-sm mt-1">2022-2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Internship Experience</h2>
            <p className="text-xl text-gray-600">
              Professional experience and practical learning
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-red-100 rounded-lg">
                  <TrendingUp className="text-red-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black">Data Analyst Intern</h3>
                  <p className="text-red-600 font-medium">Vulture Lines Pvt Ltd, Anna Nagar</p>
                  <p className="text-gray-600 mb-4">February 2025 - March 2025</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Built interactive dashboards in Power BI for business intelligence</li>
                    <li>• Cleaned and processed large datasets for analysis</li>
                    <li>• Extracted actionable insights from complex data patterns</li>
                    <li>• Collaborated with cross-functional teams to deliver data-driven solutions</li>
                  </ul>
                </div>
                <div className="text-right text-gray-500">
                  <Calendar size={20} />
                  <p className="text-sm mt-1">Feb-Mar 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Real-world applications of data analysis and visualization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <TrendingUp size={16} className="text-red-500" />
                        {metric}
                      </div>
                    ))}
                  </div>

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View on GitHub
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Certifications</h2>
            <p className="text-xl text-gray-600">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <Award className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">{cert}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-300">
              Ready to discuss data, opportunities, or collaborate on projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 max-w-2xl mx-auto md:max-w-none">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm always interested in discussing new opportunities, collaborating on data projects, 
                  or simply connecting with fellow data enthusiasts and professionals.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-red-400" size={24} />
                  <a href="mailto:ranjaniranjani5694@gmail.com" className="hover:text-red-400 transition-colors">
                    ranjaniranjani5694@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-red-400" size={24} />
                  <a href="tel:+917358724578" className="hover:text-red-400 transition-colors">
                    +91 7358724578
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="text-red-400" size={24} />
                  <a href="http://www.linkedin.com/in/ranjani8" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="text-red-400" size={24} />
                  <a href="https://github.com/ranjanihub" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;