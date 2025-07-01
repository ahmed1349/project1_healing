
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Monitor, Tablet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Screenshots = () => {
  const { t, isRTL } = useLanguage();

  const mobileScreenshots = [
    {
      title: 'AI Chatbot Interface',
      description: 'Intuitive chat interface with health symptom guidance',
      category: 'mobile'
    },
    {
      title: 'Medication Reminders',
      description: 'Smart notification system for medication schedules',
      category: 'mobile'
    },
    {
      title: 'Community Forums',
      description: 'Patient support groups and discussion boards',
      category: 'mobile'
    },
    {
      title: 'Doctor Chat',
      description: 'Private consultation with healthcare professionals',
      category: 'mobile'
    }
  ];

  const webScreenshots = [
    {
      title: 'Professional Dashboard',
      description: 'Healthcare provider interface for patient monitoring',
      category: 'web'
    },
    {
      title: 'Patient Management',
      description: 'Comprehensive patient data and interaction history',
      category: 'web'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Health insights and trend analysis tools',
      category: 'web'
    },
    {
      title: 'Appointment Scheduler',
      description: 'Integrated calendar and booking system',
      category: 'web'
    }
  ];

  const features = [
    {
      icon: Smartphone,
      title: 'Mobile App Features',
      items: [
        'Voice-to-text symptom input',
        'Offline mode capabilities',
        'Push notifications',
        'Biometric authentication',
        'Dark/light theme options',
        'Multi-language support'
      ]
    },
    {
      icon: Monitor,
      title: 'Web Platform Features',
      items: [
        'Responsive design',
        'Real-time notifications',
        'Advanced search filters',
        'Data export options',
        'Multi-tab workflow',
        'Keyboard shortcuts'
      ]
    },
    {
      icon: Tablet,
      title: 'Cross-Platform Sync',
      items: [
        'Seamless data synchronization',
        'Multi-device support',
        'Cloud backup',
        'Real-time updates',
        'Consistent UI/UX',
        'Universal accessibility'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              App Screenshots & Demo
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Healing's intuitive interface design across mobile and web platforms. 
            See how we make healthcare accessible and user-friendly.
          </p>
        </div>
      </section>

      {/* Mobile Screenshots */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mobile App Interface
            </h2>
            <p className="text-xl text-gray-600">
              Designed for smartphones with intuitive touch interactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mobileScreenshots.map((screenshot, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardContent className="p-6">
                  <div className="aspect-[9/16] bg-gradient-to-br from-blue-100 to-green-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20"></div>
                    <Smartphone className="w-16 h-16 text-gray-400" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-xs font-medium text-gray-700">Screenshot Preview</div>
                        <div className="text-xs text-gray-500">Coming Soon</div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{screenshot.title}</h3>
                  <p className="text-gray-600 text-sm">{screenshot.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Web Screenshots */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Platform Interface
            </h2>
            <p className="text-xl text-gray-600">
              Professional dashboard for healthcare providers and patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webScreenshots.map((screenshot, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20"></div>
                    <Monitor className="w-20 h-20 text-gray-400" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-sm font-medium text-gray-700">Web Interface Preview</div>
                        <div className="text-xs text-gray-500">Interactive demo available soon</div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{screenshot.title}</h3>
                  <p className="text-gray-600">{screenshot.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive feature set across all platforms and devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Interactive Demo
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience Healing's interface with our interactive demo. Try the AI chatbot, 
            explore the medication reminder system, and see how easy healthcare can be.
          </p>
          
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-12 mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <Monitor className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Demo Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              We're preparing an interactive demo where you can experience Healing's features firsthand. 
              Sign up to be notified when it's ready!
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-3 rounded-full">
                Get Demo Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Demo Placeholder */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Video Walkthrough
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Watch our comprehensive video guide showing all features of Healing
          </p>
          
          <div className="aspect-video bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Monitor className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Video Demo</h3>
              <p className="text-blue-100">Coming soon - comprehensive platform walkthrough</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Screenshots;
