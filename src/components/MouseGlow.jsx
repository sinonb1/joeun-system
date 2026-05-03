import React, { useEffect, useRef } from 'react';

// 따라다니는 잔상의 개수
const TRAIL_COUNT = 6;

const MouseGlow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const trailElements = [];
    const positions = Array(TRAIL_COUNT).fill({ x: -1000, y: -1000 });
    let mouseX = -1000;
    let mouseY = -1000;
    let isVisible = false;
    let requestRef;

    // DOM 요소를 직접 생성하여 React 렌더링을 우회 (최고 성능 보장)
    for (let i = 0; i < TRAIL_COUNT; i++) {
      const el = document.createElement('div');
      
      // 꼬리로 갈수록 크기와 투명도가 작아지도록 비율 계산
      const ratio = 1 - (i * 0.15); 
      const size = 500 * ratio; 
      const targetOpacity = 0.5 * ratio; // 색감을 연하게 (최대 0.5)
      
      el.style.position = 'fixed';
      el.style.top = '0';
      el.style.left = '0';
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.borderRadius = '50%';
      el.style.pointerEvents = 'none';
      el.style.zIndex = -1;
      el.style.willChange = 'transform, opacity';
      
      // 연하고 부드러운 무지개 색상
      el.style.background = 'conic-gradient(from 0deg, rgba(255, 120, 120, 0.5), rgba(255, 180, 80, 0.5), rgba(120, 255, 120, 0.5), rgba(80, 180, 255, 0.5), rgba(180, 120, 255, 0.5), rgba(255, 120, 120, 0.5))';
      el.style.maskImage = 'radial-gradient(circle, black 0%, transparent 60%)';
      el.style.WebkitMaskImage = 'radial-gradient(circle, black 0%, transparent 60%)';
      el.style.filter = `blur(${40 - i * 5}px)`;
      
      el.style.opacity = '0'; // 초기에는 보이지 않음
      el.style.transition = 'opacity 0.4s ease-out'; // 스르륵 나타나고 사라지는 효과
      
      el.dataset.targetOpacity = targetOpacity;
      
      containerRef.current.appendChild(el);
      trailElements.push(el);
      
      positions[i] = { x: -1000, y: -1000 };
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        // 마우스가 들어오면 목표 투명도로 복귀
        trailElements.forEach(el => el.style.opacity = el.dataset.targetOpacity);
      }
    };
    
    const handleMouseLeave = () => {
      isVisible = false;
      // 화면 밖으로 나가면 서서히 사라짐
      trailElements.forEach(el => el.style.opacity = '0');
    };
    
    const handleMouseEnter = (e) => {
      isVisible = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
      trailElements.forEach(el => el.style.opacity = el.dataset.targetOpacity);
    };

    const animate = () => {
      // 0번(선두)은 마우스를 부드럽게 따라감
      positions[0].x += (mouseX - positions[0].x) * 0.15;
      positions[0].y += (mouseY - positions[0].y) * 0.15;
      
      // 1번부터는 바로 앞의 요소를 따라가면서 꼬리(잔상) 효과 생성
      for (let i = 1; i < TRAIL_COUNT; i++) {
        positions[i].x += (positions[i-1].x - positions[i].x) * 0.3;
        positions[i].y += (positions[i-1].y - positions[i].y) * 0.3;
      }

      // 실제 위치 적용
      for (let i = 0; i < TRAIL_COUNT; i++) {
        trailElements[i].style.transform = `translate3d(${positions[i].x}px, ${positions[i].y}px, 0) translate(-50%, -50%)`;
      }
      
      requestRef = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    requestRef = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(requestRef);
      if (containerRef.current) {
        containerRef.current.innerHTML = ''; // 언마운트 시 클린업
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default MouseGlow;
