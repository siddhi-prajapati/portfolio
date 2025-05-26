const toggleBtn = document.getElementById('toggleTheme');
    toggleBtn?.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      toggleBtn.textContent = document.body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
    });

//  contact form
  const contactForm = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default
    
    // Submit via JS
    const formData = new FormData(contactForm);
    fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        contactForm.reset();
        successMsg.classList.remove("d-none");
      } else {
        alert("Form submission failed. Try again.");
      }
    }).catch(error => {
      alert("Something went wrong.");
    });
  });

