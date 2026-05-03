import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const AboutSubPage = () => {
  const { sub } = useParams();
  const { language } = useLanguage();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 1024;

  const getContent = () => {
    switch (sub) {
      case 'greetings':
        return { title: language === 'ko' ? '인사말' : 'Greetings' };
      case 'history':
        return { title: language === 'ko' ? '사업연혁' : 'Company History' };
      case 'certifications':
        return { title: language === 'ko' ? '자격현황' : 'Certifications' };
      case 'performance':
        return { title: language === 'ko' ? '실적' : 'Performance' };
      case 'location':
        return { title: language === 'ko' ? '찾아오는 길' : 'Location' };
      default:
        return { title: language === 'ko' ? '회사소개' : 'About Us' };
    }
  };

  const { title } = getContent();

  const renderContent = () => {
    switch (sub) {
      case 'greetings':
        return (
          <div className="animate-slide-up" style={{ textAlign: 'left', maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-color)' }}>{title}</h2>
            <div style={{ lineHeight: '1.8', color: 'var(--text-main)', fontSize: '1.1rem' }}>
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>World's NO.1</h3>
                <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary-color)', letterSpacing: '2px' }}>
                  SECURITY / SYSTEM / INTEGRATION
                </p>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>
                1996년 법인으로 설립되어 디지털 통합 보안시스템 및 ID Card System에 관한 Total Solution을 설계, 개발, 시공, 시운전 및 운영 교육까지 일괄 책임 공급하는 통합 시스템 구축 전문업체입니다. 설립초기 삼성전자 및 삼성 SDS 협력업체로 Controller 독자 개발과 삼성 그룹 내의 전체 그룹사를 대상으로 시스템을 납품 관리해 왔으며, 근접식 카드시스템 및 생체인식 시스템등을 관공서에 초과근무시스템으로 납품하면서 정부의 예산 절감에 기여하여 좋은 반응을 얻어 왔습니다.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                또한 일반 기업체, 연구소, 고급화 아파트 등에 보안시스템의 컨설팅 및 시공, 유지 관리를 해 왔습니다. <br />
                이런 여러 경험들은 타사와 비교할 수 없는 당사만의 노하우로 최근 다양화 되어지고 있는 고객의 기술적 요구 사항들에 대한 대처 능력을 보여주는 것이라 하겠습니다.
              </p>
              <p style={{ marginBottom: '1.5rem', marginTop: '2.5rem' }}>
                최근 보안시스템에 관련된 many 업체들이 생겨나고 있습니다. 이러한 현상은 소비자들의 다양한 선택권을 준다는 점에서 긍정적으로 평가 될 수 있으나 실질적으로 업체들의 부담은 늘어날 수 밖에 없는 것이 현실입니다. <br />
                이러한 상황은 가격대비 제품의 질을 낮추는 결과를 초래하였고, 시스템의 안정성은 보장하기 어렵게 되었습니다. 
              </p>
              <p style={{ marginBottom: '1.5rem', fontWeight: '600', color: 'var(--secondary-color)', fontSize: '1.2rem' }}>
                "그러나 보안 시스템의 생명은 안정성이라 할 수 있습니다."
              </p>
              <p style={{ marginBottom: '2rem' }}>
                이에 당사는 탁월한 제품 선정능력과 전문성을 근거로 고객사에 보다 안정화된 시스템을 공급하고자 최선의 노력을 기울여 왔으며, 또한 다년간 쌓아온 경험들을 바탕으로 최고의 서비스를 제공하고자 노력해 왔습니다. 앞으로도 이러한 노력은 계속 될 것이며, 항상 고객의 생각보다 앞선 기술력으로 고객의 요구에 대처할 것을 약속드립니다.
              </p>
              <p style={{ fontWeight: '700', fontSize: '1.3rem', marginTop: '3rem' }}>감사합니다.</p>
            </div>
          </div>
        );
      case 'history':
        return (
          <div className="animate-slide-up" style={{ textAlign: 'left', maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--primary-color)' }}>{title}</h2>
            <div style={{ position: 'relative', borderLeft: '2px solid rgba(56, 189, 248, 0.3)', paddingLeft: '2rem', marginLeft: '1rem' }}>
              {[
                { year: '2020', items: ['육군과학화 출입체계 통합 유지보수 용역 (24개 부대)', '한국중부발전 세종발전본부 차량번호 인식시스템 납품 시공', '통신판매업 신고'] },
                { year: '2019', items: ['대솔오시스 예당 신축공장 보안시스템 납품 시공', '한국중부발전 서울건설본부 통합사무동 출입보안시스템 납품 시공', '한국서부발전 평백발전본부 출입통제 주제어장치 등 납품 및 시운전'] },
                { year: '2018', items: ['육군 대대급 비밀합동보관소 출입관리시스템 납품 시공', '한국수자원난방공사 크리티칼 포인트 유지보수 용역'] },
                { year: '2017', items: ['보안용카메라, 영상감시장치 직접생산 증명 확인', '육군과학화 출입체계 통합 유지보수 용역 (10개 부대)', '대솔오시스 사옥 신축 정보통신 공사', '육군 연대급 비밀합동보관소 출입관리시스템 납품 시공', '거제동 센텀아파트 주차 및 무인택배 시스템 납품 및 시공'] },
                { year: '2016', items: ['소프트웨어유지 및 지원서비스 직접생산 증명 확인', '패키지소프트웨어 개발 및 도입서비스 직접생산 증명 확인', '정보시스템 개발 서비스 직접생산 증명 확인', '정보시스템 유지관리 서비스 직접생산 증명 확인', '본점 소재지 이전 및 지점 폐업', '국방과학연구소 본청외 6개 사업장 출입통제시스템시공', '일산서구 청소년 수련관 건립 통신 공사', 'Door Control Unit(DCU-200V2) 개발'] },
                { year: '2015', items: ['한국서부발전 태안 신축 사옥 출입통제시스템 납품 및 시공', 'Access Control Unit(MagiccomIII) 개발', '출입통제시스템 직접생산 증명 확인', '공장등록'] },
                { year: '2014', items: ['경포현대호텔 직원용 기숙사 리모델링 통신공사'] },
                { year: '2013', items: ['고려소재 출입/근태/지게차출입 관리시스템 납품 시공', '국방과학연구소 해미시험장 출입통제 및 CCTV시스템 납품 시공', '세화공업 원자재 관리시스템 납품 시공', '인천공항 탑승교 승강기 관리 서버 유지보수 용역'] },
                { year: '2012', items: ['양덕여자중학교 정보통신 공사', 'Door Control Unit(DCU-200S) 개발'] },
                { year: '2011', items: ['르노삼성자동차 본사 사옥 신축 RF Card 시스템 납품 시공', '대저고등학교 정보통신 공사'] },
                { year: '2010', items: ['노키아 TMC ESD관리용 SW 개발 용역'] },
                { year: '2009', items: ['RFID 단말기를 활용한 각종 응용시스템 개발', '한국과학기술원 동물실험동 크린룸 Inter Lock 시스템 납품 시공', '영상후반작업시설 차량 출입통제관리시스템 납품 시공', '한화 갤러리아 VIP라운지 고객관리시스템 유지보수 용역'] },
                { year: '2008', items: ['한국서부발전 주관 RFID 자재관리시스템 통합', '서버 구축 및 하위 시스템 시공', '중소기업청 주관 국책 개발 과제 수행 (RFID단말기, 임베디드 범용 보드 개발)', '나노종합팹센터 크린룸 출입 관리 통합 시스템 개발 납품', '노키아TMC 제전복, 제전화 관리시스템 및 KIOSK 개발 납품', 'RF Card Reader(CS-30R), Door Control Unit(DCU-200) 개발'] },
                { year: '2007', items: ['자본금 증자', '부산시 남구청 선불카드시스템 통합 서버 구축 및 하위 시스템 납품', '무선 통신 단말기 개발', 'Door Control Unit(DCU-100 V2) 개발'] },
                { year: '2006', items: ['벤처기업인증 (기술신용보증기금 신기술기업)', '기업부설연구소 설립', '소프트웨어사업자 신고', '한국과학기술원 신축 기숙사 전등 전열 제어 시스템 개발 납품', '무인택배솔루션, 범용Contoller외 RFID 관련 제품 개발 및 판매', 'RF Card Reader(CS-20R), Access Control Unit(MagiccomII), Door Control Unit(DCU-100) 개발'] },
                { year: '2005', items: ['국방과학연구소 (대전외 5개 지역) 사원증 시스템 통합 서버 구축 및 하위 시스템 납품 및 H/W, S/W 유지보수', '철도공사 주관 KTX e-Ticket 시범사업', '영수증 출력기와 좌석 확인기 개발 납품 시공 및 유지보수 (KTX 25개 역사)'] },
                { year: '2004', items: ['행정자치부 주관 전자공무원증 시스템 통합 서버 및 하위 시스템 유지보수 용역'] },
                { year: '2002', items: ['정보통신공사업 등록', '삼성 그룹 신규 사원증 시스템 통합 서버 구축과 하위 시스템 납품 시공 및 H/W, S/W 유지보수', '캄보디아 프놈펜 시청 전산실 전산시스템 구축'] },
                { year: '2001', items: ['한올시스템㈜ 흡수 합병', '에스원㈜ 협력업체 등록'] },
                { year: '2000', items: ['주식회사 조은시스템 서울 지점 설립'] },
                { year: '1998', items: ['삼성SDS㈜ 협력업체 등록', '삼성SDS㈜ 우수 협력업체 인증', '관공서 행망용 PC보안 장비 납품 및 H/W, S/W 유지보수'] },
                { year: '1997', items: ['중앙청사, 과천청사 외 46개 부처 초과근무시스템 납품 시공 및 H/W, S/W 유지보수'] },
                { year: '1996', items: ['주식회사 조은시스템 설립', '삼성전자㈜ 협력업체 등록', '삼성 그룹(전체 사업장 대상)사원증 시스템 통합 서버 구축과 하위 시스템 납품 및 H/W, S/W 유지보수'] }
              ].map((group, idx) => (
                <div key={idx} style={{ marginBottom: '3rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-2.55rem', top: '0.3rem', width: '1rem', height: '1rem', backgroundColor: 'var(--primary-color)', borderRadius: '50%', border: '4px solid #ffffff', boxShadow: '0 0 0 2px rgba(56, 189, 248, 0.2)' }}></div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--secondary-color)', marginBottom: '1rem' }}>{group.year}</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.6rem', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--primary-color)', marginRight: '0.8rem' }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'performance':
        return (
          <div className="animate-slide-up" style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-color)' }}>{title}</h2>
            <div className="glass-panel" style={{ padding: isMobile ? '0.5rem' : '1rem', overflowX: 'auto', borderRadius: '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? '0.8rem' : '0.95rem', tableLayout: 'fixed' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', borderBottom: '2px solid var(--primary-color)' }}>
                    <th style={{ padding: isMobile ? '0.6rem' : '1.2rem', textAlign: 'left', fontWeight: '700', color: 'var(--secondary-color)', width: '25%' }}>발주처</th>
                    <th style={{ padding: isMobile ? '0.6rem' : '1.2rem', textAlign: 'left', fontWeight: '700', color: 'var(--secondary-color)', width: '50%' }}>사업내용</th>
                    <th style={{ padding: isMobile ? '0.6rem' : '1.2rem', textAlign: 'left', fontWeight: '700', color: 'var(--secondary-color)', width: '25%' }}>지역</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { client: '한국과학기술원', content: '학생증 발급관리, 출입관리, 기숙사 관리시스템 통합 서버 구축 및 유지보수', region: '서울, 대전' },
                    { client: '국방과학연구소', content: '사원증 발급 시스템, 출입관리시스템 구축 및 유지보수', region: '대전, 안흥, 진영, 전곡, 진해, 해미' },
                    { client: '한화갤러리아', content: '갤러리아 백화점 VIP 고객 관리시스템 구축 및 유지보수', region: '서울,수원,천안,대전,진주' },
                    { client: '르노삼성자동차', content: 'RF CARD 시스템 통합 서버 구축 및 유지보수 용역 (발급관리, 출입관리, 통근버스관리, 식수관리, 주차관제, CCTV, 스피드게이트 시스템 구축)', region: '서울, 부산, 기흥, 함안' },
                    { client: '노키아', content: '정전기 방지, 발급관리, 출입관리, 식수관리시스템용 통합 서버 구축 및 유지보수', region: '마산' },
                    { client: '환경부', content: '지문인식시스템 구축 및 유지보수 (환경부외 산하기관 9개 지역)', region: '과천 외 9개 지역' },
                    { client: '한국서부발전', content: 'RFID를 이용한 자재관리시스템 납품 및 시공', region: '서울, 인천, 태안, 평택' },
                    { client: '한국남부발전', content: 'RFID를 이용한 자재관리시스템 납품 및 시공', region: '영월, 군산, 하동, 제주' },
                    { client: '철도공사', content: 'KTX E-Ticket 사업 영수증 출력기, 좌석 확인기 개발 납품 및 시공', region: '주요 25개 역사' },
                    { client: '행정자치부', content: '전자 공무원증 사업 통합 서버 및 하위 시스템 납품 및 유지보수 용역', region: '서울' },
                    { client: 'LG화학', content: 'RF CARD 시스템 서버 및 하위 시스템 납품 시공', region: '대전' },
                    { client: 'LG생활건강', content: 'RF CARD 시스템 서버 및 하위 시스템 납품 시공', region: '대전' },
                    { client: 'HSD엔진', content: 'RF CARD 시스템 서버 및 하위 시스템 납품 시공', region: '창원' },
                    { client: '부산시 남구청', content: 'RF CARD 시스템 서버 및 하위 시스템 납품 시공 (선불카드 시스템)', region: '부산' },
                    { client: '서울시 금천구청', content: 'RF CARD 시스템 서버 및 하위 시스템 납품 시공 (발급관리, 출입관리, 주차관제, CCTV)', region: '서울' },
                    { client: '나노종합팹센터', content: 'RF CARD 시스템 서버 및 하위 시스템 납품 시공 (발급관리, 출입관리, 크린룸, 스피드게이트)', region: '대전' },
                    { client: '한국항공우주산업', content: '한국항공우주산업 RF CARD 시스템 통합 서버 구축 및 하위 시스템 유지보수 (도난방지시스템 외)', region: '서울, 사천' },
                    { client: '경기도청', content: '초과근무시스템 구축 및 유지보수', region: '경기' },
                    { client: '농촌진흥청', content: '초과근무관리시스템 구축 및 유지보수 (6개 산하기관)', region: '경기' },
                    { client: '안산시청', content: '초과근무시스템 구축 및 유지보수', region: '경기' },
                    { client: '서울시청', content: '본청 외 산하기관 초과근무시스템 구축 및 유지보수', region: '서울' },
                    { client: '국가기록원', content: '초과근무시스템 구축 및 유지보수', region: '서울, 대전, 부산' },
                    { client: '국립민속박물관', content: '초과근무관리시스템 구축 및 유지보수', region: '서울' },
                    { client: '국립중앙박물관', content: '초과근무관리시스템 구축 및 유지보수', region: '서울' },
                    { client: '수원시청', content: '수원시 정보시스템 통합유지보수', region: '경기' },
                    { client: '안산시청', content: '초과근무관리시스템 구축 및 서버 유지보수', region: '경기' },
                    { client: '부산시 교육청', content: '대저고등학교, 양덕중학교 정보통신 공사', region: '부산' },
                    { client: '삼성전자', content: '삼성 그룹 금융 소그룹 IC CARD 시스템 구축 및 유지보수 (삼성생명, 삼성카드, 삼성증권, 삼성화재)', region: '서울' },
                    { client: '충북경찰청', content: 'RF CARD 시스템 통합 서버 및 하위 시스템 시공 및 유지보수', region: '청주' },
                    { client: '교보생명', content: '콜센터 RF CARD 시스템 및 하위 시스템 시공 및 유지보수', region: '서울, 대구' },
                    { client: '금호타이어', content: '기술연구소 RF CARD 시스템 통합 서버 및 하위 시스템 시공 및 유지보수', region: '전라도 광주' },
                    { client: '삼성중공업', content: 'IC CARD 시스템 통합 서버 및 하위 시스템 시공 및 유지보수', region: '거제, 산청' },
                    { client: '삼성코닝정밀유리', content: 'IC CARD 시스템 통합 서버 및 하위 시스템 시공 및 유지보수', region: '구미' },
                    { client: '삼성SDI', content: 'IC CARD 시스템 통합 서버 및 하위 시스템 시공 및 유지보수', region: '천안, 양산' },
                    { client: '경기중소기업센터', content: 'RF CARD 시스템 구축 및 유지보수', region: '경기' },
                    { client: '삼성네트웍센터', content: 'IC CARD 시스템 통합 서버 구축 및 하위 시스템 유지보수', region: '과천, 구미' },
                    { client: '삼성SDS', content: '타워팰리스 2차, 3차 RF CARD 시스템 통합 서버 및 하위 시스템 시공 및 유지보수 (무인택배시스템외)', region: '서울' },
                    { client: '삼성SDS', content: '부산 BEXCO IC CARD 시스템 구축', region: '부산' }
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', transition: 'background-color 0.2s' }}>
                      <td style={{ padding: isMobile ? '0.6rem' : '1rem 1.2rem', fontWeight: '600', verticalAlign: 'top', wordBreak: 'keep-all' }}>{row.client}</td>
                      <td style={{ padding: isMobile ? '0.6rem' : '1rem 1.2rem', color: 'var(--text-main)', verticalAlign: 'top' }}>{row.content}</td>
                      <td style={{ padding: isMobile ? '0.6rem' : '1rem 1.2rem', color: 'var(--text-muted)', verticalAlign: 'top', wordBreak: 'keep-all' }}>{row.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'location':
        return (
          <div className="animate-slide-up" style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', padding: '0 1rem', width: '100%' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-color)' }}>{title}</h2>
            
            {/* 구글 지도 영역 (안양 신송프라자) */}
            <div className="glass-panel" style={{ padding: '1rem', borderRadius: '24px', overflow: 'hidden', marginBottom: '3rem', height: isMobile ? '300px' : '450px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.369743662704!2d126.96110281250475!3d37.40473467196437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5e2542e05c83%3A0x756b1438e5adca85!2z6rK96riw64-EIOyViOyWkeyLnCDrj5nslYjqtawg6rSA7JWF64yA66GcMzU567KI6ri4IDEwLTE4!5e0!3m2!1sko!2skr!4v1777805182174!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '16px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="조은시스템 위치"
              ></iframe>
            </div>

            {/* 상세 정보 영역 */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem' }}>
              <div className="glass-panel" style={{ padding: '2rem', borderRadius: '20px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary-color)' }}>📍</span> {language === 'ko' ? '주소 안내' : 'Address'}
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-main)', marginBottom: '1rem' }}>
                  {language === 'ko' 
                    ? '경기도 안양시 동안구 관악대로 359번길 10-18 신송프라자 307호'
                    : 'Unit 307, Sinsong Plaza, 10-18 Gwanak-daero 359beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea'}
                </p>
                <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem' }}>
                  <div style={{ marginBottom: '0.8rem', display: 'flex', gap: '1rem' }}>
                    <span style={{ fontWeight: '700', color: 'var(--secondary-color)', width: '60px' }}>TEL</span>
                    <span style={{ color: 'var(--text-main)' }}>031-479-6500</span>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontWeight: '700', color: 'var(--secondary-color)', width: '60px' }}>FAX</span>
                    <span style={{ color: 'var(--text-main)' }}>051-980-6505 (전자팩스)</span>
                  </div>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '2rem', borderRadius: '20px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary-color)' }}>🚇</span> {language === 'ko' ? '교통편 안내' : 'Transportation'}
                </h3>
                <div style={{ lineHeight: '1.8', color: 'var(--text-main)' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>
                      {language === 'ko' ? '대중교통 (지하철)' : 'Subway'}
                    </strong>
                    {language === 'ko' 
                      ? '4호선 인덕원역 4번 출구에서 버스 이용 (관양중학교 방면)'
                      : 'Take a bus from Indeogwon Station (Line 4), Exit 4 (towards Gwanyang Middle School)'}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-color)', display: 'block', marginBottom: '0.3rem' }}>
                      {language === 'ko' ? '자가용 이용 시' : 'By Car'}
                    </strong>
                    {language === 'ko' 
                      ? '안양 관양동 방면 관악대로를 따라 신송프라자 진입'
                      : 'Enter Sinsong Plaza along Gwanak-daero towards Gwanyang-dong, Anyang'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="container animate-fade-in" style={{ textAlign: 'center' }}>
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '2rem' }}>{title}</h2>
            <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-main)' }}>
              <p>{language === 'ko' ? '내용을 준비 중입니다.' : 'Coming soon.'}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <section key={sub} style={{ padding: '8rem 0', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {renderContent()}
    </section>
  );
};

export default AboutSubPage;
