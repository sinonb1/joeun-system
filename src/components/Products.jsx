import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';
import { useLanguage } from '../context/LanguageContext';

const Products = () => {
  const { t } = useLanguage();
  const productItems = t('products.items');

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2.5rem',
    marginTop: '3rem'
  };

  const cardStyle = {
    padding: '3rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit'
  };

  const iconPlaceholderStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    background: 'rgba(56, 189, 248, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.5rem',
  };

  return (
    <section style={{ width: '100%', padding: '10rem 0 5rem 0', background: 'transparent', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground />
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-slide-up">
          <h2 style={{ color: '#1e293b' }}>{t('products.title')}</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            {t('products.subtitle')}
          </p>
        </div>

        <div style={gridStyle}>
          {productItems.map((product, index) => (
            <Link 
              to={`/products/${index + 1}`}
              key={index} 
              className={`glass-panel glass-card animate-slide-up delay-${(index % 5 + 1) * 100}`} 
              style={cardStyle}
            >
              <div style={iconPlaceholderStyle}>
                <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: '800' }}>0{index + 1}</span>
              </div>
              <h3 style={{ color: '#1e293b', fontSize: '1.3rem' }}>{product.name}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{product.desc}</p>
              <span style={{ color: 'var(--primary-color)', fontWeight: '600', marginTop: 'auto', display: 'inline-block' }}>{t('products.viewDetail')} &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
