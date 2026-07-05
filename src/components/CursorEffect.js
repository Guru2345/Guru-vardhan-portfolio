import React, { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursorDot.style.opacity = '0';
    };

    const handleMouseDown = () => {
      cursor.style.transform = `translate(-50%, -50%) scale(0.8)`;
      cursorDot.style.transform = `translate(-50%, -50%) scale(1.5)`;
    };

    const handleMouseUp = () => {
      cursor.style.transform = `translate(-50%, -50%) scale(1)`;
      cursorDot.style.transform = `translate(-50%, -50%) scale(1)`;
    };

    // Handle hover effects for interactive elements
    const handleElementHover = (e) => {
      const target = e.target;
      if (target.matches('a, button, input, textarea, select, [role="button"]')) {
        cursor.style.transform = `translate(-50%, -50%) scale(1.5)`;
        cursor.style.backgroundColor = 'rgba(59, 130, 246, 0.3)';
      }
    };

    const handleElementLeave = () => {
      cursor.style.transform = `translate(-50%, -50%) scale(1)`;
      cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseout', handleElementLeave);

    // Smooth cursor animation
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      // Instant dot movement
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;

      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleElementLeave);
    };
  }, []);

  // Hide on mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 pointer-events-none z-50 rounded-full border border-white/30 backdrop-blur-sm opacity-0 transition-all duration-200 ease-out"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed w-1 h-1 pointer-events-none z-50 rounded-full bg-white opacity-0 transition-all duration-100 ease-out"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CursorEffect;