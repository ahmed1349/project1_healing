
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Team = () => {
  const { t, isRTL } = useLanguage();

  const teamMembers = [
    {
      name: 'Dr. Sarah Al-Mahmoud',
      role: 'Chief Medical Officer & Co-Founder',
      specialty: 'Internal Medicine & Digital Health',
      bio: 'Former physician at Dubai Hospital with 15+ years of clinical experience. Passionate about leveraging technology to improve patient care across the Middle East.',
      location: 'Dubai, UAE',
      avatar: '👩‍⚕️'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Chief Technology Officer & Co-Founder',
      specialty: 'AI/ML Engineering & Software Architecture',
      bio: 'Former lead engineer at major tech companies. Expert in healthcare AI systems and cross-platform mobile development with Flutter and React.',
      location: 'Cairo, Egypt',
      avatar: '👨‍💻'
    },
    {
      name: 'Fatima Al-Zahra',
      role: 'Head of Product Design',
      specialty: 'UX/UI Design & Healthcare Accessibility',
      bio: 'Design leader focused on creating inclusive, culturally-sensitive healthcare interfaces. Previously worked with international health organizations.',
      location: 'Amman, Jordan',
      avatar: '👩‍🎨'
    },
    {
      name: 'Omar Rashid',
      role: 'Lead Backend Developer',
      specialty: 'Django & Database Architecture',
      bio: 'Senior backend engineer specializing in scalable healthcare systems. Expert in data security and compliance with healthcare regulations.',
      location: 'Riyadh, Saudi Arabia',
      avatar: '👨‍💻'
    },
    {
      name: 'Layla Kassem',
      role: 'Mobile App Developer',
      specialty: 'Flutter & Cross-Platform Development',
      bio: 'Mobile development specialist with focus on healthcare applications. Passionate about creating seamless user experiences across iOS and Android.',
      location: 'Beirut, Lebanon',
      avatar: '👩‍💻'
    },
    {
      name: 'Dr. Hassan Al-Rashid',
      role: 'Medical Advisor',
      specialty: 'Cardiology & Telemedicine',
      bio: 'Practicing cardiologist and telemedicine pioneer. Provides clinical oversight and ensures medical accuracy of AI recommendations.',
      location: 'Kuwait City, Kuwait',
      avatar: '👨‍⚕️'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Amina Benali',
      role: 'Healthcare Innovation Advisor',
      specialty: 'Digital Health Strategy',
      location: 'Casablanca, Morocco'
    },
    {
      name: 'Khalid Al-Mansoori',
      role: 'Business Development Advisor',
      specialty: 'Healthcare Startups',
      location: 'Abu Dhabi, UAE'
    },
    {
      name: 'Dr. Yasmin Farouk',
      role: 'Medical Ethics Advisor',
      specialty: 'AI Ethics in Healthcare',
      location: 'Cairo, Egypt'
    }
  ];

  const values = [
    {
      title: 'Patient-Centric',
      description: 'Every decision we make prioritizes patient safety, privacy, and empowerment',
      icon: '❤️'
    },
    {
      title: 'Cultural Sensitivity',
      description: 'We design with deep respect for Middle Eastern cultures and healthcare practices',
      icon: '🌍'
    },
    {
      title: 'Innovation with Purpose',
      description: 'We leverage cutting-edge technology to solve real healthcare challenges',
      icon: '💡'
    },
    {
      title: 'Transparency',
      description: 'We believe in open communication about how our AI works and protects your data',
      icon: '🔍'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse team of healthcare professionals, engineers, and designers united by 
            our mission to transform healthcare accessibility in the Middle East.
          </p>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Team
            </h2>
            <p className="text-xl text-gray-600">
              The founding members and key contributors behind Healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
                  <p className="text-green-600 text-sm mb-4">{member.specialty}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <p className="text-gray-500 text-xs mb-4">📍 {member.location}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <button className="w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors">
                      <Linkedin className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                    </button>
                    <button className="w-8 h-8 bg-gray-100 hover:bg-green-100 rounded-full flex items-center justify-center transition-colors">
                      <Mail className="w-4 h-4 text-gray-600 hover:text-green-600" />
                    </button>
                    <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                      <Github className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advisory Board
            </h2>
            <p className="text-xl text-gray-600">
              Industry experts guiding our strategic direction and medical standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">👥</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{advisor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{advisor.role}</p>
                  <p className="text-green-600 text-sm mb-2">{advisor.specialty}</p>
                  <p className="text-gray-500 text-xs">📍 {advisor.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at Healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              Healing was born from a simple yet powerful observation: healthcare accessibility 
              in the Middle East could be dramatically improved through thoughtful application of AI technology.
            </p>
            
            <p className="leading-relaxed mb-6">
              Our co-founders, Dr. Sarah Al-Mahmoud and Ahmed Hassan, met during a digital health 
              conference in Dubai in 2023. Dr. Al-Mahmoud, with her extensive clinical experience, 
              shared the daily challenges patients faced in accessing timely healthcare guidance. 
              Ahmed, with his background in AI and mobile development, saw an opportunity to bridge this gap.
            </p>
            
            <p className="leading-relaxed mb-6">
              What started as weekend conversations evolved into a mission: create an AI-powered 
              healthcare companion that respects Middle Eastern cultural values, maintains the highest 
              privacy standards, and truly empowers both patients and healthcare providers.
            </p>
            
            <p className="leading-relaxed">
              Today, our diverse team spans across the Middle East, united by our commitment to 
              making quality healthcare guidance accessible to everyone, anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for passionate individuals who share our vision of 
            transforming healthcare through technology and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
