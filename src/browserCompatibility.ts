// Browser compatibility fixes for navbar visibility
document.addEventListener('DOMContentLoaded', () => {
  const forceNavbarVisibility = () => {
    const navElements = document.querySelectorAll<HTMLElement>('nav ul, nav ul li')

    navElements.forEach((element) => {
      element.style.display = element.tagName === 'UL' ? 'flex' : 'block'
      element.style.opacity = '1'
      element.style.visibility = 'visible'
    })
  }

  const userAgent = navigator.userAgent
  const isEdgeLegacy = /Edge\/\d+/.test(userAgent)
  const isOldIE =
    /MSIE/.test(userAgent) ||
    /Trident/.test(userAgent)

  if (isEdgeLegacy || isOldIE) {
    forceNavbarVisibility()
    window.setTimeout(forceNavbarVisibility, 100)
    window.setTimeout(forceNavbarVisibility, 500)

    const style = document.createElement('style')
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
    `
    document.head.appendChild(style)
  }

  let checkCount = 0
  const intervalCheck = window.setInterval(() => {
    forceNavbarVisibility()
    checkCount += 1

    if (checkCount >= 5) {
      window.clearInterval(intervalCheck)
    }
  }, 1000)
})
