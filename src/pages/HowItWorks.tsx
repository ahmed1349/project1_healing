
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, MessageSquare, Bell, Users, Stethoscope, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HowItWorks = () => {
  const { t, isRTL } = useLanguage();

  const patientSteps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your secure account and complete your health profile',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'Chat with AI',
      description: 'Describe your symptoms and get instant AI-powered guidance',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Bell,
      title: 'Set Reminders',
      description: 'Add medications and get personalized reminder notifications',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Join Community',
      description: 'Connect with others and access expert medical advice',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const doctorSteps = [
    {
      icon: UserPlus,
      title: 'Professional Registration',
      description: 'Verify your medical credentials and create your professional profile',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Stethoscope,
      title: 'Review AI Interactions',
      description: 'Monitor and validate AI recommendations for your patients',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Calendar,
      title: 'Manage Appointments',
      description: 'Schedule consultations and manage your patient appointments',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: CheckCircle,
      title: 'Provide Care',
      description: 'Deliver personalized care through secure communication channels',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              How Healing Works
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to transform your healthcare experience, whether you're a patient
            seeking care or a doctor providing it.
          </p>
        </div>
      </section>

      {/* For Patients Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Patients
            </h2>
            <p className="text-lg text-gray-600">
              Get started with Healing in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {patientSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                        <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Connector Line */}
                {index < patientSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/for-patients">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More for Patients
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For Doctors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Healthcare Professionals
            </h2>
            <p className="text-lg text-gray-600">
              Enhance your practice with AI-powered patient care tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {doctorSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                        <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Connector Line */}
                {index < doctorSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/for-doctors">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More for Doctors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Communication Flow */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Seamless Communication Flow
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            AI bridges the gap between patients and healthcare providers,
            ensuring accurate information flow and timely interventions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold">Patient Input</h3>
              <p className="text-blue-100">Symptoms and concerns are captured through our AI chatbot</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold">AI Analysis</h3>
              <p className="text-blue-100">Advanced algorithms provide initial assessment and recommendations</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold">Doctor Review</h3>
              <p className="text-blue-100">Healthcare professionals validate and provide expert guidance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
