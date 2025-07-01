
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Bell, Users, MessageCircle, Calendar, Shield, Heart, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const { t, isRTL } = useLanguage();

  const mainFeatures = [
    {
      icon: Bot,
      title: t('features.chatbot.title'),
      description: t('features.chatbot.desc'),
      details: [
        'Symptom assessment and guidance',
        'Medical information lookup',
        'Emergency situation detection',
        'Multi-language support',
        'Voice-to-text capabilities'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Bell,
      title: t('features.reminder.title'),
      description: t('features.reminder.desc'),
      details: [
        'Customizable medication schedules',
        'Smart notifications',
        'Dosage tracking',
        'Refill reminders',
        'Family caregiver alerts'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: t('features.community.title'),
      description: t('features.community.desc'),
      details: [
        'Moderated health forums',
        'Private doctor consultations',
        'Support group meetings',
        'Educational content sharing',
        'Peer-to-peer support'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const additionalFeatures = [
    {
      icon: MessageCircle,
      title: 'Real-time Chat',
      description: 'Instant messaging with healthcare professionals'
    },
    {
      icon: Calendar,
      title: 'Appointment Booking',
      description: 'Schedule and manage medical appointments'
    },
    {
      icon: Shield,
      title: 'Health Records',
      description: 'Secure storage of medical history and documents'
    },
    {
      icon: Heart,
      title: 'Wellness Tracking',
      description: 'Monitor vital signs and health metrics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t('features.title')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Healing's advanced features empower both patients and healthcare providers
            with cutting-edge technology and compassionate care.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <Card className="h-full shadow-2xl border-0 hover:shadow-3xl transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center shadow-lg`}>
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-lg text-gray-600 text-center">
                        {feature.description}
                      </p>
                      <ul className="space-y-3">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex-1">
                  <div className="relative">
                    <div className={`w-full h-80 bg-gradient-to-br ${feature.color} rounded-3xl shadow-2xl flex items-center justify-center`}>
                      <feature.icon className="w-32 h-32 text-white opacity-20" />
                      <div className="absolute inset-0 bg-white bg-opacity-10 rounded-3xl flex items-center justify-center">
                        <div className="text-center text-white">
                          <Zap className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                          <p className="text-lg font-semibold">Feature Demo</p>
                          <p className="text-sm opacity-80">Interactive preview coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Features
            </h2>
            <p className="text-xl text-gray-600">
              Even more ways Healing supports your health journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
