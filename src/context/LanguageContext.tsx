'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'header.language.en': 'EN',
    'header.language.zh': '中',
    'header.theme.toggle': 'Toggle theme',
    
    // Social Links
    'social.linkedin': 'LinkedIn',
    'social.github': 'GitHub',
    'social.cv': 'CV',
    
    // Sections
    'section.explore': 'Explore',
    'section.explore.featured': 'Featured',
    'section.explore.all': 'All',
    'section.explore.cv.title': 'Computer Vision',
    'section.explore.cv.description': 'Beyond pixels — towards understanding. How does vision work? How can vision help us?',
    'section.explore.cv.readMore': 'Read more',
    'section.explore.hci.title': 'Human-Computer Interaction',
    'section.explore.hci.description': 'What kind of experience are we seeking? How do we interact with computers? How do we interact with humans?',
    'section.explore.hci.readMore': 'Read more',
    
    'section.career': 'Career',
    'section.career.company': 'Wuitt',
    'section.career.role': 'Founder & Research Engineer',
    'section.career.location': 'New York, NY',
    'section.career.period': '02/2025 - Present',
    'section.career.description1': 'Wuitt is a software startup developing tools for film photography.',
    'section.career.description2.website': 'Website',
    'section.career.description3': 'Developed Photon Museum, a cross-platform desktop application for managing film photos.',
    'section.career.description4.page': 'Page',
    'section.career.description5': 'Exploring contemporary film photography workflows and the future form of photography.',
    
    'section.education': 'Education',
    'section.education.columbia.university': 'Columbia University',
    'section.education.columbia.degree': 'Master of Arts in Statistics',
    'section.education.columbia.location': 'New York, NY',
    'section.education.columbia.period': '09/2023 - 12/2024',
    'section.education.osu.university': 'Ohio State University',
    'section.education.osu.degree': 'Bachelor of Science in Applied Mathematics',
    'section.education.osu.minor': 'Minor in Computer Information Science',
    'section.education.osu.honors': 'Graduated with Highest Honors',
    'section.education.osu.location': 'Columbus, OH',
    'section.education.osu.period': '06/2020 - 05/2023',
    
    'section.other': 'Other',
    'section.other.photography.title': 'Photography',
    'section.other.photography.description': 'I document my life through photography. I shoot both film and digital.',
    'section.other.photography.readMore': 'Read more',
    'section.other.photography.extra': 'A single photo is not enough to know a person.',
    'section.other.photography.seeMore': 'See more',
    
    'section.other.design.title': 'Graphic Design',
    'section.other.design.description': 'Quiet, vibrant, elegant. Combining my surname "Wu" with a smile, quite cleverly recreating this photo. My design highlights.',
    'section.other.design.readMore': 'Read more',
    
    'section.other.origami.title': 'Origami',
    'section.other.origami.description': 'So much fun! Origami brings me relaxation and peace.',
    'section.other.origami.readMore': 'Read more',
    
    'footer.lastUpdated': 'Last updated: February 2026',
    
    // Expand button
    'button.expand': 'Expand content',
    'button.collapse': 'Collapse content',
  },
  zh: {
    // Header
    'header.language.en': 'EN',
    'header.language.zh': '中',
    'header.theme.toggle': '切换主题',
    
    // Social Links
    'social.linkedin': 'LinkedIn',
    'social.github': 'GitHub',
    'social.cv': '简历',
    
    // Sections
    'section.explore': '探索',
    'section.explore.featured': '精选',
    'section.explore.all': '全部',
    'section.explore.cv.title': '计算机视觉',
    'section.explore.cv.description': '超越像素——走向理解。视觉是如何工作的？视觉可以如何帮助我们？',
    'section.explore.cv.readMore': '阅读更多',
    'section.explore.hci.title': '人机交互',
    'section.explore.hci.description': '我们在寻求什么样的体验？如何与计算机交互？如何与人类交互？',
    'section.explore.hci.readMore': '阅读更多',
    
    'section.career': '职业',
    'section.career.company': 'Wuitt',
    'section.career.role': '创始人 & 研究工程师',
    'section.career.location': '纽约, 纽约州',
    'section.career.period': '02/2025 - 至今',
    'section.career.description1': 'Wuitt 是一家软件创业公司，开发用于胶片摄影的工具软件。',
    'section.career.description2.website': '网站',
    'section.career.description3': '开发了 Photon Museum，一个用于管理胶片照片的跨平台桌面应用程序。',
    'section.career.description4.page': '页面',
    'section.career.description5': '探索当代胶片摄影的工作流程，以及摄影的未来形式。',
    
    'section.education': '教育',
    'section.education.columbia.university': '哥伦比亚大学',
    'section.education.columbia.degree': '统计学文学硕士',
    'section.education.columbia.location': '纽约, 纽约州',
    'section.education.columbia.period': '09/2023 - 12/2024',
    'section.education.osu.university': '俄亥俄州立大学',
    'section.education.osu.degree': '应用数学理学学士',
    'section.education.osu.minor': '辅修计算机信息科学',
    'section.education.osu.honors': '最高荣誉毕业',
    'section.education.osu.location': '哥伦布, 俄亥俄州',
    'section.education.osu.period': '06/2020 - 05/2023',
    
    'section.other': '其他',
    'section.other.photography.title': '摄影',
    'section.other.photography.description': '我用摄影记录我的生活。我拍摄胶片和数码照片。',
    'section.other.photography.readMore': '阅读更多',
    'section.other.photography.extra': '只凭一张照片不足以了解一个人。',
    'section.other.photography.seeMore': '查看更多',
    
    'section.other.design.title': '平面设计',
    'section.other.design.description': '安静、活力、优雅。融合了我的姓氏吴（Wu）和一个微笑，相当巧妙地复刻了这张照片。我的设计精选。',
    'section.other.design.readMore': '阅读更多',
    
    'section.other.origami.title': '折纸',
    'section.other.origami.description': '太有意思了！折纸让我感到放松和平静。',
    'section.other.origami.readMore': '阅读更多',
    
    'footer.lastUpdated': '最后更新: 2026年2月',
    
    // Expand button
    'button.expand': '展开内容',
    'button.collapse': '收起内容',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguage(savedLanguage);
    } else {
      // Default language for first-time visitors
      setLanguage('en');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
