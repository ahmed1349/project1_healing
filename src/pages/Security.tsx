
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, FileCheck, Server, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Security = () => {
  const { t, isRTL } = useLanguage();

  const securityFeatures = [
    {
      icon: Shield,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted using AES-256 encryption both in transit and at rest',
      details: [
        'Military-grade AES-256 encryption',
        'TLS 1.3 for data in transit',
        'Zero-knowledge architecture',
        'Encrypted database storage'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lock,
      title: 'Multi-Factor Authentication',
      description: 'Enhanced security with multiple authentication layers for all users',
      details: [
        'SMS and email verification',
        'Biometric authentication',
        'Time-based OTP (TOTP)',
        'Device-based authentication'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'Privacy Protection',
      description: 'Comprehensive privacy controls to protect your personal health information',
      details: [
        'Granular privacy settings',
        'Anonymous data options',
        'Right to data deletion',
        'Minimal data collection'
      ],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: FileCheck,
      title: 'Compliance Standards',
      description: 'Full compliance with international healthcare data protection regulations',
      details: [
        'HIPAA compliance (US)',
        'GDPR compliance (EU)',
        'Local healthcare regulations',
        'ISO 27001 certified'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade cloud infrastructure with 99.9% uptime guarantee',
      details: [
        'AWS/Google Cloud hosting',
        'Distributed data centers',
        'Automated backups',
        'DDoS protection'
      ],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: AlertTriangle,
      title: 'Threat Monitoring',
      description: '24/7 security monitoring and incident response capabilities',
      details: [
        'Real-time threat detection',
        'Automated security alerts',
        'Incident response team',
        'Regular security audits'
      ],
      color: 'from-red-500 to-pink-500'
    }
  ];

  const complianceStandards = [
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      region: 'United States',
      status: 'Compliant'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      region: 'European Union',
      status: 'Compliant'
    },
    {
      name: 'ISO 27001',
      description: 'Information Security Management',
      region: 'International',
      status: 'Certified'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control',
      region: 'International',
      status: 'Audited'
    }
  ];

  const dataHandling = [
    {
      category: 'Data Collection',
      practices: [
        'Minimal data collection principle',
        'Explicit user consent required',
        'Purpose-specific data gathering',
        'Regular data audit and cleanup'
      ]
    },
    {
      category: 'Data Storage',
      practices: [
        'Encrypted database storage',
        'Geographically distributed backups',
        'Access-controlled data centers',
        'Regular security updates'
      ]
    },
    {
      category: 'Data Processing',
      practices: [
        'Anonymized data processing',
        'Secure computation environments',
        'Audit trails for all access',
        'Automated privacy controls'
      ]
    },
    {
      category: 'Data Sharing',
      practices: [
        'No third-party data sharing',
        'User-controlled sharing options',
        'Healthcare provider access only',
        'Transparent consent process'
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
              Security & Privacy
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your health data security is our top priority. Learn about the comprehensive 
            measures we take to protect your privacy and ensure data security.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Features
            </h2>
            <p className="text-xl text-gray-600">
              Multi-layered security approach protecting your health information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance Standards
            </h2>
            <p className="text-xl text-gray-600">
              We meet and exceed international healthcare data protection standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{standard.name}</h3>
                      <p className="text-gray-600 mb-2">{standard.description}</p>
                      <p className="text-sm text-gray-500">{standard.region}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {standard.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling Practices */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Data Handling Practices
            </h2>
            <p className="text-xl text-gray-600">
              Transparent and secure data handling throughout the entire lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataHandling.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.practices.map((practice, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Your Data Rights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Access & Control</h3>
                <p className="text-gray-600">View, download, or delete your data at any time through your account settings.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Portability</h3>
                <p className="text-gray-600">Export your health data in standard formats for use with other healthcare providers.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consent Management</h3>
                <p className="text-gray-600">Granular controls over what data is collected and how it's used.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Deletion</h3>
                <p className="text-gray-600">Permanently delete your account and all associated data with a single request.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Correction</h3>
                <p className="text-gray-600">Update or correct any inaccurate information in your health profile.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600">Clear information about data usage, storage, and sharing practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Security Metrics
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">256-bit</div>
              <div className="text-blue-100 font-medium">AES Encryption</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">99.9%</div>
              <div className="text-blue-100 font-medium">Uptime SLA</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">24/7</div>
              <div className="text-blue-100 font-medium">Monitoring</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">Zero</div>
              <div className="text-blue-100 font-medium">Data Breaches</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
