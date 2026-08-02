document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  function showError(fieldId, message) {
    const errorEl = document.getElementById(fieldId + "-error");
    errorEl.textContent = message;
  }

  function clearError(fieldId) {
    const errorEl = document.getElementById(fieldId + "-error");
    errorEl.textContent = "";
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name === "") {
      showError("name", "Name is required");
      isValid = false;
    } else {
      clearError("name");
    }
    if (email == "" || !validateEmail(email)){
      showError("email", "Valid email required");
      isValid = false;
    } else {
      clearError("email");
    }
    if (message.length < 20){
      showError("message", "Message is not long enough");
      isValid = false;
    } else {
      clearError("message");
    }
    if (isValid) {
      form.innerHTML = "<p>Thanks! Your message has been sent.</p>";
    }
  });

  ["name", "email", "message"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", function () {
      clearError(id);
    });
  });
});