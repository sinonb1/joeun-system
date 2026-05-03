import React, { useEffect, useRef } from 'react';

const CIRCLE_COUNT = 8; // 원의 개수를 늘려서 화면을 채움

const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    let animationFrameId;
    const container = containerRef.current;
    
    const circles = [];
    
    // 원 생성 및 초기화
    for (let i = 0; i < CIRCLE_COUNT; i++) {
      const el = document.createElement('div');
      
      // 크기를 80px에서 700px까지 다양하게 설정
      const size = Math.random() * 620 + 80; 
      
      el.style.position = 'absolute';
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.borderRadius = '50%';
      el.style.background = 'rgba(56, 189, 248, 0.1)';
      // 크기에 비례하여 자연스러운 블러 효과 적용 (최소 50px로 늘려서 더 흐리게)
      el.style.filter = `blur(${Math.max(50, size * 0.15)}px)`; 
      el.style.willChange = 'transform';
      
      container.appendChild(el);
      
      // 너무 느리게 움직이지 않도록 최소 속도 보정
      let vx = (Math.random() - 0.5) * 8;
      let vy = (Math.random() - 0.5) * 8;
      if (Math.abs(vx) < 1.5) vx = vx < 0 ? -2 : 2;
      if (Math.abs(vy) < 1.5) vy = vy < 0 ? -2 : 2;

      circles.push({
        el,
        size,
        x: Math.random() * (container.offsetWidth - size),
        y: Math.random() * (container.offsetHeight - size),
        vx,
        vy,
      });
    }

    const animate = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      // 1. 위치 업데이트 및 벽 충돌 (끼임 방지 로직 적용)
      for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];
        circle.x += circle.vx;
        circle.y += circle.vy;

        // 화면 밖으로 나가는 방향일 때만 속도를 뒤집어서 무한 튕김 버그 방지
        if (circle.x <= 0 && circle.vx < 0) {
          circle.vx *= -1;
        } else if (circle.x + circle.size >= width && circle.vx > 0) {
          circle.vx *= -1;
        }

        if (circle.y <= 0 && circle.vy < 0) {
          circle.vy *= -1;
        } else if (circle.y + circle.size >= height && circle.vy > 0) {
          circle.vy *= -1;
        }
      }

      // 2. 실제 DOM 화면 업데이트 (원들끼리 서로 통과하도록 충돌 로직 삭제)
      for (let i = 0; i < circles.length; i++) {
        circles[i].el.style.transform = `translate3d(${circles[i].x}px, ${circles[i].y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
         containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="hero-bg-animated" 
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}
    />
  );
};

export default AnimatedBackground;
