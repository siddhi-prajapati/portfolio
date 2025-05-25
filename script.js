const toggleBtn = document.getElementById('toggleTheme');
    toggleBtn?.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      toggleBtn.textContent = document.body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
    });