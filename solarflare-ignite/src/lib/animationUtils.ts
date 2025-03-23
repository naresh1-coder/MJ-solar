
/**
 * Utility functions for handling animations
 */

/**
 * Initializes or reinitializes the scroll animations
 * This should be called when a new page is loaded
 */
export const initializeScrollAnimations = () => {
  // First remove any existing 'animated' classes
  document.querySelectorAll('.animate-on-scroll.animated').forEach(el => {
    el.classList.remove('animated');
  });
  
  // Then set up a new intersection observer
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  // Allow a small delay for the DOM to update
  setTimeout(() => {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }, 50);
  
  return observer;
};
