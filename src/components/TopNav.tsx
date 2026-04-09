'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

type ActiveTab = 'home' | 'projects';

export default function TopNav({ active }: { active: ActiveTab }) {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const zh = language === 'zh';

  return (
    <header className="ws-topbar">
      <Link href="/" className="ws-mark" aria-label="Home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 96 96"
          fill="none"
          aria-hidden="true"
          className="ws-mark-logo"
        >
          <path d="M22 18 V56" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <path d="M66 18 V56" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <path d="M60 28 L76 40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <path
            d="M22 70 Q44 92 66 70"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <nav className="ws-nav" aria-label="Primary navigation">
        <Link href="/" className={active === 'home' ? 'is-active' : ''}>
          {zh ? '首页' : 'Home'}
        </Link>
        <span>/</span>
        <Link href="/projects" className={active === 'projects' ? 'is-active' : ''}>
          {zh ? '精选项目' : 'Featured Projects'}
        </Link>
      </nav>

      <div className="ws-top-actions">
        <button type="button" className="ws-top-link" onClick={() => setLanguage('en')}>
          EN
        </button>
        <span>/</span>
        <button type="button" className="ws-top-link" onClick={() => setLanguage('zh')}>
          中
        </button>
        <span>/</span>
        <button type="button" className="ws-top-link" onClick={toggleTheme}>
          {theme === 'light' ? (zh ? '暗色' : 'Dark') : zh ? '亮色' : 'Light'}
        </button>
      </div>
    </header>
  );
}
