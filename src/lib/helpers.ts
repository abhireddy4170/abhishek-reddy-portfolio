
// Animation observer for scroll animations
export const setupScrollAnimation = () => {
  const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animateOnScrollElements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animateOnScrollElements.forEach((element) => {
    observer.observe(element);
  });
  
  return () => {
    animateOnScrollElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
};
