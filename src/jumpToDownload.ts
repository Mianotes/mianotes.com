export function jumpToDownload() {
  const target = document.getElementById('docs');
  if (!target) return;

  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = 'auto';
  target.scrollIntoView();
  window.history.pushState(null, '', '#docs');
  root.style.scrollBehavior = previousScrollBehavior;
}
