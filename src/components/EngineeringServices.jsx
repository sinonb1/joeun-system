import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const EngineeringServices = () => {
  const { language } = useLanguage();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 1024;

  const services = [
    {
      title: language === 'ko' ? '연구개발' : 'R&D',
      items: language === 'ko' 
        ? ['Application System', '시스템 상호 인터페이스', 'HW 제품 기획']
        : ['Application System', 'System Interface', 'HW Product Planning']
    },
    {
      title: language === 'ko' ? '컨설팅' : 'Consulting',
      items: language === 'ko'
        ? ['PJ System 구축용역', '현장 담당자 실무교육']
        : ['PJ System Construction', 'Field Manager Training']
    },
    {
      title: language === 'ko' ? '설계' : 'Design',
      items: language === 'ko'
        ? ['현장분석', '계획, 기본설계', '실시 설계', 'CAD', '운영 시나리오 작성']
        : ['Field Analysis', 'Basic Design', 'Detailed Design', 'CAD', 'Operation Scenarios']
    },
    {
      title: language === 'ko' ? '시공' : 'Installation',
      items: language === 'ko'
        ? ['직영 설치, 시공, 시운전', '배관, 배선 하청관리', '시공 감리']
        : ['Direct Installation & Commissioning', 'Piping & Wiring Management', 'Construction Supervision']
    },
    {
      title: language === 'ko' ? '유지보수' : 'Maintenance',
      items: language === 'ko'
        ? ['현장상주', '정기순환', '긴급출동']
        : ['On-site Presence', 'Regular Inspection', 'Emergency Response']
    }
  ];

  return (
    <div style={{ width: '100%', position: 'relative', zIndex: 10 }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="animate-slide-up" style={{ 
          marginTop: isMobile ? '30px' : '50px', // 상단 콘텐츠와 겹치지 않게 50px 띄움 (데스크탑 기준)
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: isMobile ? '30px' : '40px',
          padding: isMobile ? '1.5rem 1rem 1rem 1rem' : '2.5rem 2rem',
          border: '1px solid rgba(255, 255, 255, 0.7)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.05)',
          position: 'relative'
        }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.3rem' : '2.5rem', 
            fontWeight: '800', 
            textAlign: 'center', 
            marginBottom: isMobile ? '0.8rem' : '2rem',
            color: '#0f172a'
          }}>
            Engineering <span className="text-gradient">Service Area</span>
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: isMobile ? '0.6rem' : '1rem',
            alignItems: 'stretch'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{ 
                background: 'rgba(255, 255, 255, 0.35)', // 반투명 유리 배경
                backdropFilter: 'blur(10px)', // 블러 효과
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: isMobile ? '0.8rem' : '2rem 1rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(255, 255, 255, 0.6)', // 유리 테두리
              }}>
                <div style={{ 
                  background: 'var(--primary-color)',
                  color: '#ffffff',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '50px',
                  fontSize: isMobile ? '0.85rem' : '1rem',
                  fontWeight: '700',
                  textAlign: 'center',
                  marginBottom: isMobile ? '0.5rem' : '1.5rem'
                }}>
                  {service.title}
                </div>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem'
                }}>
                  {service.items.map((item, idx) => (
                    <li key={idx} style={{ 
                      fontSize: '0.8rem', 
                      color: '#64748b', 
                      lineHeight: '1.3',
                      textAlign: 'center',
                      fontWeight: '500'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringServices;
