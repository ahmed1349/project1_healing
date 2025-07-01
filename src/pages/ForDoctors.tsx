
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Stethoscope, Users, BarChart3, Shield, Calendar, MessageSquare, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ForDoctors = () => {
  const { t, isRTL } = useLanguage();

  const benefits = [
    {
      icon: Users,
      title: 'Enhanced Patient Care',
      description: 'Monitor patient interactions with AI and provide targeted interventions when needed',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Access comprehensive patient data and AI-generated health insights for better diagnosis',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Reduce routine inquiries with AI pre-screening and focus on complex cases',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Review and validate AI recommendations to ensure patient safety and care quality',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Streamlined Scheduling',
      description: 'Integrated appointment management and patient communication tools',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: MessageSquare,
      title: 'Secure Communication',
      description: 'HIPAA-compliant messaging with patients and healthcare team members',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const features = [
    {
      title: 'AI Supervision Dashboard',
      description: 'Monitor all AI-patient interactions and intervene when necessary',
      icon: '🖥️'
    },
    {
      title: 'Patient Monitoring Tools',
      description: 'Track patient progress, medication adherence, and health metrics',
      icon: '📊'
    },
    {
      title: 'Consultation Management',
      description: 'Schedule and conduct virtual consultations with integrated tools',
      icon: '🩺'
    },
    {
      title: 'Clinical Decision Support',
      description: 'AI-powered insights to support your clinical decision-making process',
      icon: '🧠'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Ahmad Mahmoud',
      specialty: 'Internal Medicine',
      location: 'Dubai, UAE',
      text: 'Healing has revolutionized how I monitor my patients. The AI insights help me identify issues before they become serious.',
      rating: 5
    },
    {
      name: 'Dr. Layla Kassem',
      specialty: 'Family Medicine',
      location: 'Amman, Jordan',
      text: 'The platform saves me hours each week by handling routine patient questions while keeping me informed of important issues.',
      rating: 5
    },
    {
      name: 'Dr. Hassan Al-Rashid',
      specialty: 'Cardiology',
      location: 'Riyadh, Saudi Arabia',
      text: 'The quality of AI recommendations is impressive. It\'s like having a junior resident that works 24/7.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Healthcare Professionals' },
    { number: '10,000+', label: 'Patients Served' },
    { number: '95%', label: 'Doctor Satisfaction' },
    { number: '24/7', label: 'AI Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Empower Your Practice with AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance patient care, improve efficiency, and maintain the highest quality 
              standards with Healing's AI-powered healthcare platform designed for medical professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Stethoscope className="w-5 h-5 mr-2" />
                  Join as Healthcare Provider
                </Button>
              </Link>
              <Link to="/screenshots">
                <Button variant="outline" size="lg" className="border-2 hover:shadow-lg transition-all duration-300 px-8 py-3 rounded-full">
                  View Professional Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Healthcare Professionals Choose Healing
            </h2>
            <p className="text-xl text-gray-600">
              Advanced tools and insights that enhance your medical practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Tools & Features
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive platform designed specifically for healthcare professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Healthcare Professionals Say
            </h2>
            <p className="text-xl text-gray-600">
              Testimonials from doctors who have enhanced their practice with Healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-blue-600">{testimonial.specialty}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Professional Registration Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Required Documentation:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Valid medical license</li>
                <li>• Professional certification</li>
                <li>• Hospital or clinic affiliation</li>
                <li>• Professional references</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Verification Process:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Document review (24-48 hours)</li>
                <li>• Professional background check</li>
                <li>• Platform training session</li>
                <li>• Account activation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join leading healthcare professionals who are already using Healing to provide better patient care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Apply as Healthcare Provider
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForDoctors;
