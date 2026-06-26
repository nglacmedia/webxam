/* ══════════════════════════════════════════════════════
   INFINITY COMMUNITY — SHARED JS
   ══════════════════════════════════════════════════════ */

/* ── Starfield ──────────────────────────────────────── */
function buildStars(count = 90) {
  const sf = document.getElementById('starfield');
  if (!sf) return;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 3.5 + 1;
    s.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--dur:${(Math.random()*3+2).toFixed(1)}s;--delay:${(Math.random()*4).toFixed(1)}s;--op:${(Math.random()*0.5+0.4).toFixed(2)};`;
    sf.appendChild(s);
  }
}

/* ── Hamburger ──────────────────────────────────────── */
function initNav() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
  // Mark active link
  const path = location.pathname.split('/').pop() || 'trang-chu.html';
  links.querySelectorAll('a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

/* ── Scroll Reveal ──────────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── Back To Top ────────────────────────────────────── */
function initBackTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Toast ──────────────────────────────────────────── */
function showToast(msg, duration = 2800) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), duration);
}

/* ── Init All ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildStars();
  initNav();
  initReveal();
  initBackTop();
});
