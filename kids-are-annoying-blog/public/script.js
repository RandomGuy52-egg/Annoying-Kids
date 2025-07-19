// Grab elements
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const buttons = sidebar.querySelectorAll('button[data-target]');

// Toggle sidebar open/close
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Smooth scroll to section on sidebar button click
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      // Scroll smoothly
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close sidebar after click
      sidebar.classList.remove('active');
    }
  });
});
