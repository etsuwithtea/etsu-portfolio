// Browser compatibility fixes for navbar visibility
document.addEventListener('DOMContentLoaded', function() {
  // Force navbar visibility on older browsers
  const forceNavbarVisibility = () => {
    const navElements = document.querySelectorAll('nav ul, nav ul li');
    navElements.forEach(element => {
      element.style.display = element.tagName === 'UL' ? 'flex' : 'block';
      element.style.opacity = '1';
      element.style.visibility = 'visible';
    });
  };

  // Check if browser is Edge Legacy
  const isEdgeLegacy = /Edge\/\d+/.test(navigator.userAgent);
  const isOldIE = /MSIE|Trident/.test(navigator.userAgent);
  
  if (isEdgeLegacy || isOldIE) {
    // Apply immediate fixes for older browsers
    forceNavbarVisibility();
    
    // Apply fixes after a short delay to ensure DOM is ready
    setTimeout(forceNavbarVisibility, 100);
    setTimeout(forceNavbarVisibility, 500);
    
    // Add specific CSS for Edge Legacy
    const style = document.createElement('style');
    style.textContent = `
      nav ul {
        display: flex !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      nav ul li {
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      .backdrop-blur-md {
        background: rgba(255, 255, 255, 0.95) !important;
      }
      .dark .backdrop-blur-md {
        background: rgba(39, 39, 42, 0.9) !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Additional check every second for the first 5 seconds
  let checkCount = 0;
  const intervalCheck = setInterval(() => {
    forceNavbarVisibility();
    checkCount++;
    if (checkCount >= 5) {
      clearInterval(intervalCheck);
    }
  }, 1000);
});