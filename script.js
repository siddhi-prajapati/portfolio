// AOS scroll animation init
AOS.init({
  duration: 1000,
  once: true,
});

// Simple contact form submit alert
// document.getElementById("contact-form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   alert("Thank you for contacting! I’ll get back to you soon.");
//   this.reset();
// });


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

