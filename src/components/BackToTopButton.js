import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleBackToTop = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleBackToTop);
    return () => {
      window.removeEventListener('scroll', toggleBackToTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a href='/Homepage' className={`back-to-top ${isVisible ? 'active' : ''}`} onClick={scrollToTop}>
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default BackToTopButton;
