
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.forPatients': 'For Patients',
    'nav.forDoctors': 'For Doctors',
    'nav.technology': 'Technology',
    'nav.security': 'Security',
    'nav.screenshots': 'Screenshots',
    'nav.team': 'Team',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Homepage
    'hero.tagline': 'Your intelligent health companion',
    'hero.subtitle': 'AI-powered healthcare support for patients and doctors across the Middle East',
    'hero.cta.patient': 'For Patients',
    'hero.cta.doctor': 'For Doctors',
    
    // Features
    'features.title': 'Comprehensive Healthcare Solutions',
    'features.chatbot.title': 'AI Medical Chatbot',
    'features.chatbot.desc': '24/7 symptom guidance and health support',
    'features.reminder.title': 'Medication Reminder',
    'features.reminder.desc': 'Automated alerts and scheduling system',
    'features.community.title': 'Patient Community',
    'features.community.desc': 'Moderated health forums and private doctor chats',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.readMore': 'Read More',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.features': 'المميزات',
    'nav.howItWorks': 'كيف يعمل',
    'nav.forPatients': 'للمرضى',
    'nav.forDoctors': 'للأطباء',
    'nav.technology': 'التكنولوجيا',
    'nav.security': 'الأمان',
    'nav.screenshots': 'لقطات الشاشة',
    'nav.team': 'الفريق',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.contact': 'اتصل بنا',
    
    // Homepage
    'hero.tagline': 'رفيقك الذكي في الصحة',
    'hero.subtitle': 'دعم رعاية صحية مدعوم بالذكاء الاصطناعي للمرضى والأطباء في الشرق الأوسط',
    'hero.cta.patient': 'للمرضى',
    'hero.cta.doctor': 'للأطباء',
    
    // Features
    'features.title': 'حلول رعاية صحية شاملة',
    'features.chatbot.title': 'روبوت المحادثة الطبي',
    'features.chatbot.desc': 'إرشاد للأعراض ودعم صحي على مدار الساعة',
    'features.reminder.title': 'تذكير الأدوية',
    'features.reminder.desc': 'تنبيهات تلقائية ونظام جدولة',
    'features.community.title': 'مجتمع المرضى',
    'features.community.desc': 'منتديات صحية مراقبة ومحادثات خاصة مع الأطباء',
    
    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.getStarted': 'ابدأ الآن',
    'common.readMore': 'اقرأ المزيد',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
