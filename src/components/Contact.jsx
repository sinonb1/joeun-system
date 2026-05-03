import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '1.2rem',
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '12px',
    color: '#1e293b',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = 'var(--primary-color)';
    e.target.style.boxShadow = '0 0 0 3px rgba(56, 189, 248, 0.2)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = '#cbd5e1';
    e.target.style.boxShadow = 'none';
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/choeun@choeunsys.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          "이름": formData.name,
          "답장받을 이메일": formData.email,
          "문의 내용": formData.message,
          "_subject": "조은시스템 홈페이지에서 새로운 문의가 도착했습니다."
      })
    })
    .then(response => response.json())
    .then(data => {
      alert(t('contact.success') + (language === 'ko' ? ' (최초 1회 수신 동의 메일이 발송되었을 수 있습니다.)' : ''));
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    })
    .catch(error => {
      alert(t('contact.error'));
      console.error(error);
      setIsSubmitting(false);
    });
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${label} ${language === 'ko' ? "정보가 복사되었습니다!" : "copied!"}`);
    });
  };

  return (
    <section style={{ width: '100%', padding: '10rem 0 5rem 0', position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <AnimatedBackground />
      <div className="container">
        <div className="grid-2-col">
          <div className="animate-slide-up">
            <h2 style={{ marginBottom: '1rem', color: '#1e293b' }}>{t('contact.title1')} <br/><span className="text-gradient">{t('contact.title2')}</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              {t('contact.subtitle')}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {/* 주소 정보 */}
              <div className="glass-panel animate-slide-up delay-200" style={{ padding: '1.2rem 1.5rem', display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>📍</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, color: '#1e293b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('contact.infoOffice')}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.2rem', lineHeight: '1.4', wordBreak: 'keep-all' }}>
                    {language === 'ko' 
                      ? '경기도 안양시 동안구 관악대로 359번길 10-18 신송프라자 307호'
                      : 'Unit 307, Sinsong Plaza, 10-18 Gwanak-daero 359beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do'}
                  </p>
                </div>
                <button onClick={() => handleCopy(language === 'ko' ? "경기도 안양시 동안구 관악대로 359번길 10-18 신송프라자 307호" : "Unit 307, Sinsong Plaza, 10-18 Gwanak-daero 359beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do", language === 'ko' ? "주소" : "Address")} className="btn-copy-small">
                  {language === 'ko' ? '복사' : 'Copy'}
                </button>
              </div>

              {/* 이메일 정보 */}
              <div className="glass-panel animate-slide-up delay-300" style={{ padding: '1.2rem 1.5rem', display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>📧</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, color: '#1e293b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('contact.infoEmail')}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.2rem' }}>choeun@choeunsys.com</p>
                </div>
                <button onClick={() => handleCopy("choeun@choeunsys.com", language === 'ko' ? "이메일" : "Email")} className="btn-copy-small">
                  {language === 'ko' ? '복사' : 'Copy'}
                </button>
              </div>

              {/* 전화번호 정보 */}
              <div className="glass-panel animate-slide-up delay-400" style={{ padding: '1.2rem 1.5rem', display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>📞</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, color: '#1e293b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{language === 'ko' ? '전화번호' : 'Phone'}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.2rem' }}>031-479-6500</p>
                </div>
                <button onClick={() => handleCopy("031-479-6500", language === 'ko' ? "전화번호" : "Phone")} className="btn-copy-small">
                  {language === 'ko' ? '복사' : 'Copy'}
                </button>
              </div>

              {/* 팩스 정보 */}
              <div className="glass-panel animate-slide-up delay-500" style={{ padding: '1.2rem 1.5rem', display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>📠</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, color: '#1e293b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{language === 'ko' ? '전자팩스' : 'E-FAX'}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.2rem' }}>051-980-6505</p>
                </div>
                <button onClick={() => handleCopy("051-980-6505", language === 'ko' ? "팩스" : "Fax")} className="btn-copy-small">
                  {language === 'ko' ? '복사' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          {/* 우측 폼 */}
          <div className="glass-panel contact-form-card animate-slide-up delay-600" style={{ padding: '3rem' }}>
            <h3 style={{ color: '#0f172a', marginBottom: '2rem', fontSize: '1.8rem' }}>{t('contact.formTitle')}</h3>
            <form style={formStyle} onSubmit={handleSubmit}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: '500', color: '#475569' }}>{t('contact.labelName')}</label>
                <input 
                  type="text" 
                  style={inputStyle} 
                  placeholder={t('contact.placeholderName')}
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: '500', color: '#475569' }}>{t('contact.labelEmail')}</label>
                <input 
                  type="email" 
                  style={inputStyle} 
                  placeholder={t('contact.placeholderEmail')}
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: '500', color: '#475569' }}>{t('contact.labelMessage')}</label>
                <textarea 
                  style={{ ...inputStyle, minHeight: '160px', resize: 'vertical' }} 
                  placeholder={t('contact.placeholderMessage')}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem', fontSize: '1.1rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }} disabled={isSubmitting}>
                {isSubmitting ? t('contact.submitting') : t('contact.submitBtn')}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .btn-copy-small {
          background: rgba(56, 189, 248, 0.1);
          border: none;
          border-radius: 8px;
          padding: 6px 12px;
          color: var(--primary-color);
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-copy-small:hover {
          background: var(--primary-color);
          color: #ffffff;
          transform: translateY(-2px);
        }
      `}} />
    </section>
  );
};

export default Contact;
