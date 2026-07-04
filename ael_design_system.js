(function() {
  'use strict';

  const COLORS = [
    { name: 'Primary', hex: '#0074FF', var: '--primary' },
    { name: 'Primary Dark', hex: '#0052b3', var: '--primary-dark' },
    { name: 'Primary Light', hex: '#4d9bff', var: '--primary-light' },
    { name: 'Gold', hex: '#ffd700', var: '--gold' },
    { name: 'Success', hex: '#10b981', var: '--success' },
    { name: 'Warning', hex: '#f59e0b', var: '--warning' },
    { name: 'Danger', hex: '#ef4444', var: '--danger' },
    { name: 'BG Deep', hex: '#000000', var: '--bg-deep' },
    { name: 'BG Card', hex: 'rgba(5,12,24,.7)', var: '--bg-card' },
    { name: 'Text Primary', hex: '#eef2ff', var: '--text-primary' },
    { name: 'Text Secondary', hex: '#9ab3e6', var: '--text-secondary' },
    { name: 'Text Muted', hex: '#64748b', var: '--text-muted' },
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const DOM = {
      navLinks: document.getElementById('navLinks'),
      navToggle: document.getElementById('navToggle'),
      navbar: document.getElementById('navbar'),
      cursorGlow: document.getElementById('cursorGlow'),
      heroCta: document.getElementById('heroCta'),
      colorGrid: document.getElementById('colorGrid'),
    };

    // Navigation
    const navItems = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    const activateSection = (id) => {
      sections.forEach(s => s.classList.remove('active'));
      navItems.forEach(n => n.classList.remove('active'));
      const target = document.getElementById(id);
      if (target) target.classList.add('active');
      document.querySelector(`.nav-link[href="#${id}"]`)?.classList.add('active');
      if (DOM.navLinks) DOM.navLinks.classList.remove('open');
    };

    navItems.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        activateSection(link.getAttribute('href').slice(1));
      });
    });

    if (DOM.heroCta) {
      DOM.heroCta.addEventListener('click', e => {
        e.preventDefault();
        activateSection('components');
      });
    }

    const hash = location.hash.slice(1) || 'overview';
    activateSection(hash);

    // Component tabs
    const compTabs = document.querySelectorAll('.comp-tab');
    const compPanels = document.querySelectorAll('.component-panel');

    compTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        compTabs.forEach(t => t.classList.remove('active'));
        compPanels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('panel-' + tab.dataset.comp)?.classList.add('active');
      });
    });

    // Code tabs
    const codeTabs = document.querySelectorAll('.code-tab');
    const codePanels = document.querySelectorAll('.code-panel');

    codeTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        codeTabs.forEach(t => t.classList.remove('active'));
        codePanels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('code-' + tab.dataset.file)?.classList.add('active');
      });
    });

    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        let text = btn.dataset.code;
        if (text === '(full CSS)') {
          text = document.getElementById('cssCode')?.textContent || '';
        } else if (text === '(see template)' || text === '(see guide)') {
          const pre = btn.closest('.code-block');
          if (pre) text = pre.querySelector('code')?.textContent || text;
        }
        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
          }, 1800);
        }).catch(() => {
          btn.textContent = 'Error';
          setTimeout(() => btn.textContent = 'Copy', 1200);
        });
      });
    });

    // Color grid
    if (DOM.colorGrid) {
      DOM.colorGrid.innerHTML = COLORS.map(c => {
        const bg = c.var === '--bg-deep' ? '#0a0a0a' : c.hex;
        return `<div class="color-swatch glass">
          <div class="color-preview" style="background:${bg}"></div>
          <span class="color-name">${c.name}</span>
          <span class="color-hex">${c.hex}</span>
          <span class="color-var">${c.var}</span>
        </div>`;
      }).join('');
    }

    // Cursor glow
    document.addEventListener('mousemove', e => {
      if (DOM.cursorGlow) {
        DOM.cursorGlow.style.opacity = '1';
        DOM.cursorGlow.style.left = e.clientX + 'px';
        DOM.cursorGlow.style.top = e.clientY + 'px';
      }
    });
    document.addEventListener('mouseleave', () => {
      if (DOM.cursorGlow) DOM.cursorGlow.style.opacity = '0';
    });

    // Mobile nav
    if (DOM.navToggle) {
      DOM.navToggle.addEventListener('click', () => {
        DOM.navLinks?.classList.toggle('open');
      });
    }

    // Navbar scroll
    window.addEventListener('scroll', () => {
      if (DOM.navbar) DOM.navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  });
})();
