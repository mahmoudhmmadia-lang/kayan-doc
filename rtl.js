// Force the whole site into Arabic right-to-left mode
function applyRtl() {
  document.documentElement.setAttribute('dir', 'rtl');
  document.documentElement.setAttribute('lang', 'ar');
}

applyRtl();
window.addEventListener('mintlify:navigate', applyRtl);
