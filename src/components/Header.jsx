import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 리사이즈 이벤트 감지하여 반응형 상태 업데이트
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
        setActiveSubMenu(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubMenu(null); // 메뉴 닫힐 때 하위 메뉴 상태 초기화
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveSubMenu(null);
  };

  const headerStyle = {
    position: 'fixed',
    top: '1.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 3rem)',
    maxWidth: '1200px',
    padding: '0.8rem 0',
    background: '#ffffff',
    borderRadius: '100px',
    border: '2px solid #ffffff',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), inset 0 0 0 4px rgba(56, 189, 248, 0.4)',
    zIndex: 1000,
    transition: 'all 0.3s ease'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1.5rem'
  };

  const logoImageStyle = {
    height: '55px', // 로고 크기 상향 (45px -> 55px)
    width: 'auto',
    display: 'block'
  };

  const getLinkStyle = (path) => {
    const isActive = path === '/' 
      ? location.pathname === '/' 
      : location.pathname.startsWith(path);
      
    return {
      color: isActive ? '#ffffff' : 'var(--text-main)',
      backgroundColor: isActive ? 'var(--primary-color)' : 'transparent',
      padding: '0.5rem 1.2rem',
      borderRadius: '50px',
      fontSize: windowWidth <= 1024 ? '1.5rem' : '0.95rem',
      fontWeight: isActive ? '700' : '500',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'inline-block',
      border: 'none',
      cursor: 'pointer',
      width: windowWidth <= 1024 ? '100%' : 'auto',
      textAlign: 'left'
    };
  };

  return (
    <header style={headerStyle}>
      <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
        <div style={logoContainerStyle}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }} onClick={closeMenu}>
            <img src="/joeun-system/logo.png" alt="Joeun System Logo" style={logoImageStyle} />
          </Link>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* 언어 선택 버튼 (슬라이드 방식) */}
          <div className="lang-toggle-container">
            <div className={`lang-toggle-slider ${language}`}></div>
            <button 
              onClick={() => toggleLanguage('ko')}
              className={`lang-btn ${language === 'ko' ? 'active' : ''}`}
            >KO</button>
            <button 
              onClick={() => toggleLanguage('en')}
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            >EN</button>
          </div>
        
        {/* 모바일 햄버거 버튼 */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="메뉴 열기">
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul 
            key={activeSubMenu} 
            className="animate-fade-in"
            style={{ gap: activeSubMenu !== null ? '0.5rem' : '2rem' }}
          >
            {activeSubMenu === null ? (
              <>
                <li><Link to="/" style={getLinkStyle('/')} onClick={closeMenu}>{t('nav.home')}</Link></li>
                <li className="dropdown-container">
                  <Link 
                    to="/about/greetings" 
                    style={getLinkStyle('/about')} 
                    onClick={(e) => {
                      if (windowWidth <= 1024) {
                        e.preventDefault();
                        setActiveSubMenu('about');
                      } else {
                        closeMenu();
                      }
                    }}
                  >
                    {t('nav.about')}
                  </Link>
                  {/* 데스크탑 드롭다운 */}
                  <div className="dropdown-menu">
                    <Link to="/about/greetings" className="dropdown-item" onClick={closeMenu}>{language === 'ko' ? '인사말' : 'Greetings'}</Link>
                    <Link to="/about/history" className="dropdown-item" onClick={closeMenu}>{language === 'ko' ? '사업연혁' : 'History'}</Link>
                    <Link to="/about/certifications" className="dropdown-item" onClick={closeMenu}>{language === 'ko' ? '자격현황' : 'Certifications'}</Link>
                    <Link to="/about/performance" className="dropdown-item" onClick={closeMenu}>{language === 'ko' ? '실적' : 'Performance'}</Link>
                    <Link to="/about/location" className="dropdown-item" onClick={closeMenu}>{language === 'ko' ? '찾아오는 길' : 'Location'}</Link>
                  </div>
                </li>
                <li><Link to="/products" style={getLinkStyle('/products')} onClick={closeMenu}>{t('nav.products')}</Link></li>
                <li><Link to="/contact" style={getLinkStyle('/contact')} onClick={closeMenu}>{t('nav.contact')}</Link></li>
              </>
            ) : (
              <>
                <li style={{ width: '100%', marginBottom: '1rem' }} className="animate-slide-up-small">
                  <button 
                    onClick={() => setActiveSubMenu(null)} 
                    style={{ 
                      width: '100%',
                      backgroundColor: 'var(--primary-color)',
                      color: '#ffffff',
                      padding: '0.8rem',
                      borderRadius: '16px',
                      border: 'none',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}
                  >
                    <span style={{ position: 'absolute', left: '1rem' }}>←</span>
                    {activeSubMenu === 'about' ? (language === 'ko' ? '회사소개' : 'About Us') : ''}
                  </button>
                </li>
                {[
                  { to: '/about/greetings', label: language === 'ko' ? '인사말' : 'Greetings' },
                  { to: '/about/history', label: language === 'ko' ? '사업연혁' : 'History' },
                  { to: '/about/certifications', label: language === 'ko' ? '자격현황' : 'Certifications' },
                  { to: '/about/performance', label: language === 'ko' ? '실적' : 'Performance' },
                  { to: '/about/location', label: language === 'ko' ? '찾아오는 길' : 'Location' }
                ].map((item, index) => (
                  <li 
                    key={item.to} 
                    style={{ width: '100%' }} 
                    className={`animate-slide-up-small delay-${(index + 1) * 100}`}
                  >
                    <Link 
                      to={item.to} 
                      style={{ 
                        ...getLinkStyle(item.to), 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.8rem',
                        fontSize: windowWidth <= 1024 ? '1.2rem' : '0.95rem',
                        padding: windowWidth <= 1024 ? '0.3rem 1.2rem' : '0.5rem 1.2rem'
                      }} 
                      onClick={closeMenu}
                    >
                      <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--primary-color)', borderRadius: '50%', flexShrink: 0 }}></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
