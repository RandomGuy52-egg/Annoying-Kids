const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const buttons = sidebar.querySelectorAll('button[data-target]');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Smooth scroll to section on sidebar button click
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      sidebar.classList.remove('active');
    }
  });
});

// Responsive scaling is handled by CSS media queries already
