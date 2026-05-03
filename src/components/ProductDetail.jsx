import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';
import { useLanguage } from '../context/LanguageContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <section style={{ width: '100%', padding: '10rem 0 5rem 0', background: 'transparent', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground />
      <div className="container">
        
        {/* 뒤로 가기 및 상단 타이틀 */}
        <div style={{ marginBottom: '2rem' }} className="animate-slide-up">
          <Link to="/products" style={{ color: 'var(--primary-color)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            &larr; {t('productDetail.back')}
          </Link>
          <h1 style={{ color: '#1e293b', fontSize: '2.5rem' }}>{t('productDetail.title')} <span style={{ color: 'var(--text-muted)' }}>#{id}</span></h1>
        </div>

        {/* 메인 이미지 플레이스홀더 */}
        <div className="animate-slide-up delay-200" style={{ 
          width: '100%', 
          height: '400px', 
          background: 'linear-gradient(135deg, #e0f2fe 0%, #f1f5f9 100%)', 
          borderRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '3rem',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{ color: '#94a3b8', margin: 0 }}>{t('productDetail.imagePlaceholder')} {id}</h2>
        </div>

        {/* 상세 설명 영역 */}
        <div className="grid-2-col-aside">
          <div className="animate-slide-up delay-300">
            <h3 style={{ color: '#0f172a', marginBottom: '1rem', fontSize: '1.8rem' }}>{t('productDetail.mainFeatureTitle')}</h3>
            <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              {t('productDetail.description')}
            </p>
            
            <h4 style={{ color: '#0f172a', marginBottom: '1rem', fontSize: '1.4rem' }}>{t('productDetail.specTitle')}</h4>
            <ul style={{ color: '#475569', lineHeight: '2', paddingLeft: '1rem', listStyleType: 'disc' }}>
              {t('productDetail.specs').map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          {/* 우측 사이드바 (문의 박스) */}
          <div className="glass-panel animate-slide-up delay-400" style={{ padding: '2.5rem', alignSelf: 'start' }}>
            <h4 style={{ color: '#0f172a', marginBottom: '1rem' }}>{t('productDetail.inquiryTitle')}</h4>
            <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '0.95rem' }}>{t('productDetail.inquirySubtitle')}</p>
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>{t('productDetail.inquiryBtn')}</Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductDetail;
