export function scrollToSection(id) {
  const el = typeof document !== 'undefined' ? document.getElementById(id) : null
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
