import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 부드러운 효과 대신 즉시 최상단으로 이동하여 사용자 혼동을 방지
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
