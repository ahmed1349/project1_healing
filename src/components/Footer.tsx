
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-green-50 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Healing</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              {t('hero.subtitle')}
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for better healthcare</span>
            </div>
          </div>
          

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/features" className="block text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.features')}
              </Link>
              <Link to="/security" className="block text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.security')}
              </Link>
              <Link to="/faq" className="block text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.faq')}
              </Link>
              <Link to="/team" className="block text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.team')}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>ahmedrabea1349@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+2001027321774</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>New Cairo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Healing. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};
