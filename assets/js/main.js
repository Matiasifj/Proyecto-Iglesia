'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const menu = document.getElementById('menu');
  const openMenuLink = document.querySelector('header nav a[href="#menu"]');

  // Remove preload class after window load
  window.addEventListener('load', () => {
    setTimeout(() => body.classList.remove('is-preload'), 100);
  });

  // Create close link inside menu
  const closeLink = document.createElement('a');
  closeLink.href = '#menu';
  closeLink.className = 'close';
  closeLink.textContent = 'Cerrar';
  menu.appendChild(closeLink);

  const hideMenu = () => body.classList.remove('is-menu-visible');
  const showMenu = () => body.classList.add('is-menu-visible');
  const toggleMenu = () => body.classList.toggle('is-menu-visible');

  openMenuLink.addEventListener('click', (e) => {
    e.preventDefault();
    showMenu();
  });

  closeLink.addEventListener('click', (e) => {
    e.preventDefault();
    hideMenu();
  });

  // Hide menu when clicking outside
  body.addEventListener('click', (e) => {
    if (body.classList.contains('is-menu-visible') && !menu.contains(e.target) && e.target !== openMenuLink) {
      hideMenu();
    }
  });

  // Hide menu with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideMenu();
    }
  });
});
