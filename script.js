(function () {
  'use strict';

  // ---- Mobile menu toggle ----
  var menuBtn = document.getElementById('mobileMenuBtn');
  var closeBtn = document.getElementById('closeMobileMenu');
  var menu = document.getElementById('mobileMenu');

  function openMenu() {
    menu.classList.add('active');
    menu.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    menu.classList.remove('active');
    menu.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
  if (menuBtn && closeBtn && menu) {
    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // ---- Scroll progress bar ----
  var progressBar = document.getElementById('progressBar');
  function updateProgress() {
    if (!progressBar) return;
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var pct = height > 0 ? (scrollTop / height) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // ---- Floating particles (DOM-created, no innerHTML) ----
  var particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    var PARTICLE_COUNT = 25;
    for (var i = 0; i < PARTICLE_COUNT; i++) {
      var p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.top = Math.random() * 100 + 'vh';
      p.style.animationDelay = (Math.random() * 20) + 's';
      p.style.animationDuration = (15 + Math.random() * 10) + 's';
      particlesContainer.appendChild(p);
    }
  }

  // ---- Fade-in sections on scroll into view ----
  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(function (el) { observer.observe(el); });
  }

  // ---- Contact info: assembled at runtime instead of sitting as plain text/mailto in the HTML ----
  // Note: this deters casual scraping/bots scanning raw HTML but is not a substitute for real
  // protection (e.g. a contact form) if spam becomes a problem.
  var emailUser = 'moktanchhiring07';
  var emailDomain = 'gmail.com';
  var emailLink = document.getElementById('emailLink');
  if (emailLink) {
    emailLink.setAttribute('href', 'mailto:' + emailUser + '@' + emailDomain);
  }

  var phoneDigits = ['0452', '658', '002'];
  var phoneEl = document.getElementById('phoneNumber');
  if (phoneEl) {
    phoneEl.textContent = phoneDigits.join(' ');
  }

  // ---- Footer year ----
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
