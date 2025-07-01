
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    userType: 'patient'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      details: ['ahmed1349.github.io/', 'ahmedrabea1349@gmail.com', 'www.linkedin.com/in/ahmed-rabea-abdalsalam/'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      details: ['+2001027321774 (Egypt)', '+971 123 456 789 (UAE)', '+962 123 456 789 (Jordan)'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Regional Offices',
      details: ['Dubai, UAE (Headquarters)', 'Riyadh, Saudi Arabia', 'Cairo, Egypt'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      details: ['24/7 Chat Support', 'Phone: 8 AM - 8 PM GST', 'Email: Response within 4 hours'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const supportOptions = [
    {
      title: 'Patient Support',
      description: 'Get help with using the app, managing your health profile, or technical issues',
      icon: '👥',
      action: 'Get Patient Help'
    },
    {
      title: 'Healthcare Provider Inquiries',
      description: 'Information about joining our platform as a verified medical professional',
      icon: '🩺',
      action: 'Doctor Registration'
    },
    {
      title: 'Business Partnerships',
      description: 'Explore partnership opportunities with hospitals, clinics, and health organizations',
      icon: '🤝',
      action: 'Partnership Inquiry'
    },
    {
      title: 'Media & Press',
      description: 'Press inquiries, interviews, and media kit requests',
      icon: '📰',
      action: 'Media Contact'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help! Whether you're a patient, healthcare provider, or potential partner, 
            we'd love to hear from you and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+2001027321774"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="userType">I am a...</Label>
                      <select
                        id="userType"
                        name="userType"
                        value={formData.userType}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="patient">Patient</option>
                        <option value="doctor">Healthcare Provider</option>
                        <option value="partner">Potential Partner</option>
                        <option value="media">Media/Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the support option that best matches your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{option.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{option.description}</p>
                      <Button variant="outline" className="border-2 hover:shadow-lg transition-all duration-300">
                        {option.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Looking for Quick Answers?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Check our comprehensive FAQ section for instant answers to common questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-2 hover:shadow-lg transition-all duration-300 px-8 py-3 rounded-full">
              Browse FAQs
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              View Help Center
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ⚠️ Medical Emergency Notice
            </h2>
            <p className="text-lg text-pink-100 mb-6">
              If you're experiencing a medical emergency, please contact your local emergency services immediately. 
              Do not use this contact form for urgent medical situations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
              <div>
                <p className="font-semibold">UAE: 999</p>
                <p className="text-sm text-pink-100">Emergency Services</p>
              </div>
              <div>
                <p className="font-semibold">Saudi Arabia: 997</p>
                <p className="text-sm text-pink-100">Emergency Services</p>
              </div>
              <div>
                <p className="font-semibold">Other Countries</p>
                <p className="text-sm text-pink-100">Contact local emergency services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
