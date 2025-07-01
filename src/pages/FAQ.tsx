
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, MessageCircle, Shield, Smartphone, Users, Stethoscope, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t, isRTL } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'General Questions',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      faqs: [
        {
          question: 'What is Healing and how does it work?',
          answer: 'Healing is an AI-powered healthcare platform that provides 24/7 health guidance, medication reminders, and connects patients with healthcare professionals. Our AI chatbot analyzes symptoms and provides personalized health recommendations while maintaining the highest privacy standards.'
        },
        {
          question: 'Is Healing available in Arabic?',
          answer: 'Yes! Healing fully supports Arabic language with right-to-left (RTL) text alignment. Our AI chatbot is trained to understand Arabic medical terminology and cultural contexts specific to the Middle East region.'
        },
        {
          question: 'Which countries in the Middle East does Healing serve?',
          answer: 'Healing is available across the Middle East, including UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, Jordan, Lebanon, Egypt, and Morocco. We continuously expand our services to serve more communities in the region.'
        },
        {
          question: 'How much does Healing cost?',
          answer: 'Healing offers a free tier with basic AI chatbot access and medication reminders. Premium features including doctor consultations and advanced health insights are available through affordable subscription plans starting from $9.99/month.'
        }
      ]
    },
    {
      title: 'Safety & Privacy',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      faqs: [
        {
          question: 'How secure is my health data?',
          answer: 'Your health data is protected with military-grade AES-256 encryption, both in transit and at rest. We comply with international healthcare data protection standards including HIPAA and GDPR, and never share your data with third parties without explicit consent.'
        },
        {
          question: 'Can I trust the AI medical advice?',
          answer: 'Our AI provides guidance based on medical literature and is regularly reviewed by licensed healthcare professionals. However, AI recommendations are not a substitute for professional medical diagnosis. We always encourage users to consult with healthcare providers for serious symptoms.'
        },
        {
          question: 'What happens in medical emergencies?',
          answer: 'Healing\'s AI is trained to recognize emergency symptoms and will immediately advise users to seek emergency care. The app provides emergency contact numbers for each country and can help locate the nearest hospital or emergency services.'
        },
        {
          question: 'How do you ensure doctor verification?',
          answer: 'All healthcare professionals on our platform undergo thorough verification including medical license validation, background checks, and continuous monitoring. Only certified doctors from recognized medical institutions can provide consultations.'
        }
      ]
    },
    {
      title: 'Mobile App & Technology',
      icon: Smartphone,
      color: 'from-purple-500 to-violet-500',
      faqs: [
        {
          question: 'Is there a mobile app available?',
          answer: 'Yes! Healing is available as a mobile app for both iOS and Android, built with Flutter for native performance. The web platform is also fully responsive and works seamlessly across all devices.'
        },
        {
          question: 'Does the app work offline?',
          answer: 'Basic features like medication reminders and previously accessed health information work offline. However, AI chatbot consultations and real-time doctor communications require internet connectivity for security and accuracy.'
        },
        {
          question: 'What technologies power Healing?',
          answer: 'Healing is built with modern technologies including Flutter for mobile apps, React for web interface, Django for backend APIs, Firebase for real-time data, and SQLite for local storage. Our AI models are regularly updated with latest medical research.'
        },
        {
          question: 'How often is the app updated?',
          answer: 'We release regular updates with new features, security improvements, and AI model enhancements. Critical updates are pushed automatically, while feature updates are released monthly with user notifications.'
        }
      ]
    },
    {
      title: 'For Healthcare Providers',
      icon: Stethoscope,
      color: 'from-orange-500 to-red-500',
      faqs: [
        {
          question: 'How can doctors join Healing?',
          answer: 'Licensed healthcare professionals can apply through our doctor registration process. We require medical license verification, professional references, and completion of our platform training. The review process typically takes 48-72 hours.'
        },
        {
          question: 'How do doctors monitor AI interactions?',
          answer: 'Doctors have access to a comprehensive dashboard showing all AI-patient interactions involving their patients. They can review recommendations, add notes, and intervene when necessary to ensure optimal patient care.'
        },
        {
          question: 'What are the benefits for healthcare providers?',
          answer: 'Doctors benefit from reduced routine inquiries, better patient monitoring, data-driven insights, streamlined appointment management, and the ability to provide care to more patients efficiently while maintaining quality standards.'
        },
        {
          question: 'How does billing work for doctor consultations?',
          answer: 'Doctors set their own consultation rates within platform guidelines. Healing handles secure payment processing and provides detailed billing reports. Doctors receive payments monthly with transparent fee structures.'
        }
      ]
    },
    {
      title: 'Community & Support',
      icon: Users,
      color: 'from-teal-500 to-cyan-500',
      faqs: [
        {
          question: 'What are Patient Community Groups?',
          answer: 'These are moderated online support groups where patients with similar conditions can share experiences, ask questions, and support each other. All groups are supervised by healthcare professionals to ensure accurate information sharing.'
        },
        {
          question: 'How do I get technical support?',
          answer: 'Technical support is available 24/7 through in-app chat, email (support@healing.health), or phone. We also have comprehensive help documentation and video tutorials available in both English and Arabic.'
        },
        {
          question: 'Can family members access my health information?',
          answer: 'You have full control over who can access your health information. You can grant specific family members or caregivers access to certain health data while maintaining privacy over sensitive information. All access is logged and can be revoked anytime.'
        },
        {
          question: 'How do I provide feedback or suggest features?',
          answer: 'We welcome user feedback through the in-app feedback feature, email, or our community forums. User suggestions directly influence our development roadmap, and we regularly implement features requested by our community.'
        }
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
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Healing's features, security, 
            and how we're transforming healthcare accessibility in the Middle East.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const itemIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.includes(itemIndex);
                  
                  return (
                    <Card key={faqIndex} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-600">
              Our support team is here to help you 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help through our in-app chat support</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Start Chat →
                </button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us detailed questions via email</p>
                <a href="mailto:support@healing.health" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  support@healing.health →
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600 mb-4">Connect with other users in our forums</p>
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  Join Community →
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Can't find what you're looking for? Our team is ready to help you personally.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Contact Us Directly
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
