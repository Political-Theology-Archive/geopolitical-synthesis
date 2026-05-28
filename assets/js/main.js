/* ═══════════════════════════════════════════════════════════════════
   POLITICAL THEOLOGY ARCHIVE — main.js
   Micro-animations · Scroll Fades · Nav Toggle
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── SCROLL-TRIGGERED FADE-IN ── */
  const fades = document.querySelectorAll('.pta-fade');

  if ('IntersectionObserver' in window && fades.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    fades.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show all immediately
    fades.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ── MOBILE NAV TOGGLE ── */
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));

      // Animate hamburger → X
      var spans = toggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(6px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-6px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        var spans = toggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    // Close on nav link click
    navLinks.querySelectorAll('.pta-nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── NAV SCROLL SHADOW ── */
  var nav = document.querySelector('.pta-nav');
  if (nav) {
    var scrolled = false;
    window.addEventListener('scroll', function () {
      var shouldScroll = window.scrollY > 20;
      if (shouldScroll !== scrolled) {
        scrolled = shouldScroll;
        nav.style.boxShadow = scrolled
          ? '0 4px 32px rgba(0,0,0,0.5)'
          : '';
        nav.style.borderBottomColor = scrolled
          ? 'rgba(255,255,255,0.1)'
          : '';
      }
    }, { passive: true });
  }

  /* ── BENTO CARD MICRO-TILT (subtle, desktop only) ── */
  if (window.matchMedia('(min-width: 768px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.pta-card[href], .pta-book-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var cx = rect.left + rect.width  / 2;
        var cy = rect.top  + rect.height / 2;
        var dx = (e.clientX - cx) / (rect.width  / 2);
        var dy = (e.clientY - cy) / (rect.height / 2);
        card.style.transform = 'translateY(-4px) rotateX(' + (-dy * 2.5) + 'deg) rotateY(' + (dx * 2.5) + 'deg)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.32s ease, border-color 0.32s ease';
      });

      card.addEventListener('mouseenter', function () {
        card.style.transition = 'transform 0.15s ease, box-shadow 0.32s ease, border-color 0.32s ease';
      });
    });
  }

})();
