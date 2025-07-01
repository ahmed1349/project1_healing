
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Clock, Users, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ForPatients = () => {
  const { t, isRTL } = useLanguage();

  const benefits = [
    {
      icon: Heart,
      title: '24/7 Health Support',
      description: 'Get instant health guidance anytime, anywhere with our AI-powered chatbot',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your health data is protected with military-grade encryption and privacy controls',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Never Miss Medications',
      description: 'Smart reminders ensure you take the right medication at the right time',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others facing similar health challenges in a supportive environment',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: MessageCircle,
      title: 'Direct Doctor Access',
      description: 'Chat privately with verified healthcare professionals when you need expert advice',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Star,
      title: 'Personalized Care',
      description: 'Receive tailored health insights based on your unique medical history and needs',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      location: 'Dubai, UAE',
      text: 'Healing helped me manage my diabetes better than any app I\'ve tried. The medication reminders are a lifesaver!',
      rating: 5
    },
    {
      name: 'Omar Hassan',
      location: 'Riyadh, Saudi Arabia',
      text: 'The AI chatbot gave me great advice when I was worried about my symptoms at 2 AM. Really impressed!',
      rating: 5
    },
    {
      name: 'Fatima Al-Zahra',
      location: 'Cairo, Egypt',
      text: 'The community support helped me through my recovery journey. I felt less alone and more empowered.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'Chronic Disease Management',
      description: 'Track symptoms, manage medications, and stay connected with your care team',
      icon: '💊'
    },
    {
      title: 'Emergency Guidance',
      description: 'Get immediate advice on urgent symptoms and when to seek emergency care',
      icon: '🚨'
    },
    {
      title: 'Wellness Monitoring',
      description: 'Monitor vital signs, track progress, and maintain healthy habits',
      icon: '📈'
    },
    {
      title: 'Mental Health Support',
      description: 'Access resources and connect with others for emotional and mental well-being',
      icon: '🧠'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Healthcare Made Simple
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empower your health journey with AI-powered guidance, community support, 
              and direct access to healthcare professionals - all in one app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Heart className="w-5 h-5 mr-2" />
                  Get Started Free
                </Button>
              </Link>
              <Link to="/screenshots">
                <Button variant="outline" size="lg" className="border-2 hover:shadow-lg transition-all duration-300 px-8 py-3 rounded-full">
                  View Screenshots
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Patients Choose Healing
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive healthcare support designed with your needs in mind
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

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Patients Use Healing
            </h2>
            <p className="text-xl text-gray-600">
              Real-world applications that make a difference in your health journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{useCase.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
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
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from people who transformed their health with Healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of patients who have already transformed their healthcare experience with Healing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full transition-all duration-300">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForPatients;
