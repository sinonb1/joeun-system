import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  return (
    <footer style={{ background: 'rgba(248, 250, 252, 0.4)', padding: '4rem 0 2rem 0', borderTop: '1px solid #e2e8f0', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <img src="/joeun-system/logo.png" alt="Joeun System Logo" style={{ height: '55px', width: 'auto' }} />
        </div>
        <div style={{ display: 'flex', gap: '2rem', color: '#64748b', fontSize: '0.95rem', fontWeight: '500' }}>
          <Link to="/" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary-color)'} onMouseOut={e => e.target.style.color = '#64748b'}>{t('nav.home')}</Link>
          <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary-color)'} onMouseOut={e => e.target.style.color = '#64748b'}>{language === 'ko' ? '이용약관' : 'Terms'}</a>
          <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary-color)'} onMouseOut={e => e.target.style.color = '#64748b'}>{language === 'ko' ? '개인정보처리방침' : 'Privacy'}</a>
        </div>
        <div style={{ width: '100%', height: '1px', background: '#e2e8f0', margin: '1rem 0' }}></div>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Joeun System. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
