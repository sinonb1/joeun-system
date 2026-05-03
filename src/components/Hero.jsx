import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';
import EngineeringServices from './EngineeringServices';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 1024;

  // 전체 배경 그라데이션을 위한 스타일
  const wrapperStyle = {
    width: '100%',
    background: 'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.15) 0%, rgba(255, 255, 255, 0) 60%)',
    position: 'relative'
  };

  const sectionStyle = {
    width: '100%',
    textAlign: 'center',
    // 화면 높이와 상관없이 일정한 여백 유지
    padding: isMobile ? '80px 0 0 0' : '180px 0 0 0', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: 'auto', // 100vh 설정을 완전히 제거하여 늘어남 방지
    position: 'relative',
    overflow: 'visible'
  };

  const contentStyle = {
    maxWidth: '850px',
    margin: '0 auto',
    padding: '0 1rem',
    zIndex: 1,
    position: 'relative'
  };

  const glassBoxStyle = {
    background: 'rgba(255, 255, 255, 0.35)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: isMobile ? '30px' : '40px',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    borderTop: '2px solid rgba(255, 255, 255, 1)',
    borderLeft: '2px solid rgba(255, 255, 255, 0.9)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05), inset 0 0 30px rgba(255, 255, 255, 0.9)',
    padding: isMobile ? '1.5rem 1rem 1rem 1rem' : '4rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '0'
  };

  const titleStyle = {
    fontSize: isMobile ? '2rem' : '4.2rem', 
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: isMobile ? '0.8rem' : '1.5rem',
    letterSpacing: '-1.5px',
    color: '#0f172a',
  };

  const subtitleStyle = {
    fontSize: isMobile ? '0.9rem' : '1.2rem',
    color: '#475569',
    marginBottom: isMobile ? '1rem' : '3rem',
    maxWidth: '650px',
    margin: '0 auto',
    lineHeight: '1.5',
    fontWeight: '500'
  };

  const spreadSlots = Array.from({ length: 10 }, (_, i) => `${t('hero.productPrefix')} ${i + 1}`);

  return (
    <div style={wrapperStyle}>
      <section style={sectionStyle}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <AnimatedBackground />
        </div>

        <div style={contentStyle} className="animate-chewy">
          <div style={glassBoxStyle} className="hero-glass-box">
            <div style={{ marginBottom: '0.8rem', display: 'flex', justifyContent: 'center' }}>
              <svg width={isMobile ? "32" : "64"} height={isMobile ? "32" : "64"} viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 4px 6px rgba(56, 189, 248, 0.4))' }}>
                <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
                <circle cx="9" cy="10" r="2"></circle>
                <path d="M15 8h2"></path>
                <path d="M15 12h2"></path>
                <path d="M7 16h10"></path>
              </svg>
            </div>
            <h1 style={titleStyle} className="hero-title-main">
              {t('hero.title1')} <br/>
              <span className="text-gradient">{t('hero.title2')}</span>
            </h1>
            <p style={subtitleStyle}>
              {t('hero.subtitle')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: isMobile ? '0.5rem' : '0' }}>
              <Link to="/contact" className="btn btn-outline" style={{ padding: isMobile ? '0.5rem 1.2rem' : '0.9rem 2.5rem', fontSize: isMobile ? '0.9rem' : '1.1rem', background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(56, 189, 248, 0.5)', color: 'var(--primary-color)', fontWeight: '700', boxShadow: '0 4px 15px rgba(56, 189, 248, 0.15)' }}>{t('hero.cta')}</Link>
            </div>
          </div>
        </div>
      </section>

      <EngineeringServices />

      <div style={{ width: '100%', padding: isMobile ? '2.5rem 0' : '6rem 0', background: '#ffffff' }} className="animate-slide-up">
        <h3 style={{ fontSize: '0.8rem', textAlign: 'center', color: '#94a3b8', marginBottom: '1rem', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>
          {t('hero.productsTitle')}
        </h3>
        <div className="marquee-container">
          <div className="marquee-content">
            {spreadSlots.map((item, index) => (
              <Link to={`/products/${index + 1}`} key={`first-${index}`} className="product-slot" style={{ textDecoration: 'none' }}>
                {item}
              </Link>
            ))}
          </div>
          <div className="marquee-content secondary">
            {spreadSlots.map((item, index) => (
              <Link to={`/products/${index + 1}`} key={`second-${index}`} className="product-slot" style={{ textDecoration: 'none' }}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
