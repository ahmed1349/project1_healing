
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Database, Cloud, Code, Zap, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Technology = () => {
  const { t, isRTL } = useLanguage();

  const technologies = [
    {
      name: 'Flutter',
      description: 'Cross-platform mobile development framework for iOS and Android apps with native performance',
      icon: Smartphone,
      color: 'from-blue-500 to-blue-600',
      features: ['Native Performance', 'Single Codebase', 'Rich UI Components', 'Hot Reload']
    },
    {
      name: 'Firebase',
      description: 'Real-time database and backend services for secure data storage and user authentication',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      features: ['Real-time Database', 'Authentication', 'Cloud Storage', 'Analytics']
    },
    {
      name: 'React',
      description: 'Modern web frontend framework for building responsive and interactive user interfaces',
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      features: ['Component-Based', 'Virtual DOM', 'Responsive Design', 'Modern JavaScript']
    },
    {
      name: 'Django',
      description: 'Robust Python web framework for building secure and scalable backend APIs',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      features: ['RESTful APIs', 'ORM Integration', 'Security Features', 'Scalable Architecture']
    },
    {
      name: 'SQLite',
      description: 'Lightweight, embedded database system for efficient local data storage and caching',
      icon: Database,
      color: 'from-purple-500 to-violet-500',
      features: ['Lightweight', 'ACID Compliant', 'Zero Configuration', 'Cross-platform']
    }
  ];

  const architecture = [
    {
      layer: 'Frontend Layer',
      technologies: ['React Web App', 'Flutter Mobile App'],
      description: 'User-facing applications built with modern frameworks for optimal user experience',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      layer: 'API Gateway',
      technologies: ['Django REST Framework', 'Authentication Layer'],
      description: 'Secure API endpoints handling all client-server communication and authentication',
      color: 'from-green-500 to-emerald-500'
    },
    {
      layer: 'Business Logic',
      technologies: ['AI/ML Models', 'Healthcare Algorithms'],
      description: 'Core application logic including AI chatbot, symptom analysis, and health insights',
      color: 'from-purple-500 to-violet-500'
    },
    {
      layer: 'Data Layer',
      technologies: ['Firebase Firestore', 'SQLite Cache'],
      description: 'Distributed data storage with real-time synchronization and local caching',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    {
      title: 'Cross-Platform Development',
      description: 'Single codebase deployment across iOS, Android, and web platforms',
      icon: '📱'
    },
    {
      title: 'Real-time Synchronization',
      description: 'Instant data updates across all devices and platforms',
      icon: '🔄'
    },
    {
      title: 'Offline Capabilities',
      description: 'Local data storage enabling app functionality without internet connection',
      icon: '📡'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Cloud-native architecture that grows with user demand',
      icon: '☁️'
    },
    {
      title: 'AI Integration',
      description: 'Machine learning models for intelligent health insights and recommendations',
      icon: '🤖'
    },
    {
      title: 'Security First',
      description: 'End-to-end encryption and compliance with healthcare data regulations',
      icon: '🔐'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Healing is built on cutting-edge technologies that ensure reliability, 
            security, and exceptional performance across all platforms.
          </p>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${tech.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <tech.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {tech.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-center">
                    {tech.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Features:</h4>
                    <ul className="space-y-1">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${tech.color} rounded-full`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              System Architecture
            </h2>
            <p className="text-xl text-gray-600">
              Multi-layered architecture ensuring scalability, security, and performance
            </p>
          </div>

          <div className="space-y-8">
            {architecture.map((layer, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                    <div className={`w-24 h-24 bg-gradient-to-r ${layer.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{layer.layer}</h3>
                      <p className="text-gray-600 mb-4">{layer.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {layer.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Advanced features that set Healing apart in digital healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Performance Metrics
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">&lt;100ms</div>
              <div className="text-gray-600 font-medium">API Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-green-600">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime Guarantee</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-purple-600">256-bit</div>
              <div className="text-gray-600 font-medium">SSL Encryption</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600 font-medium">System Monitoring</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
