const SCROLL_PREVIEW_DISTANCE = 400;

export function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  const startTop = Math.max(targetTop - SCROLL_PREVIEW_DISTANCE, 0);

  root.style.scrollBehavior = 'auto';
  window.scrollTo({ top: startTop, left: 0, behavior: 'auto' });
  window.history.pushState(null, '', `#${sectionId}`);

  window.requestAnimationFrame(() => {
    window.scrollTo({ top: targetTop, left: 0, behavior: 'smooth' });
    root.style.scrollBehavior = previousScrollBehavior;
  });
}
