// creating a logic for the registration form of IEC
document.getElementById('iecForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    const form = e.target;
    let isValid = true;

    // Clear all error messages
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.style.display = 'none');

    // Loop through required fields
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        const error = field.parentElement.querySelector('.error-message');
        error.textContent = `${field.previousElementSibling.textContent.replace('*', '').trim()} is required`;
        error.style.display = 'block';
        isValid = false;
      }
    });

    // Simple PAN validation
    const panField = form.querySelector('#pan');
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (panField.value && !panRegex.test(panField.value.toUpperCase())) {
      const error = panField.parentElement.querySelector('.error-message');
      error.textContent = 'Enter a valid PAN number (e.g. ABCDE1234F)';
      error.style.display = 'block';
      isValid = false;
    }

    // Simple Aadhar validation
    const aadharField = form.querySelector('#aadhar');
    if (aadharField.value && !/^\d{12}$/.test(aadharField.value)) {
      const error = aadharField.parentElement.querySelector('.error-message');
      error.textContent = 'Enter a valid 12-digit Aadhar number';
      error.style.display = 'block';
      isValid = false;
    }

    if (isValid) {
      alert('Registration form submitted successfully!');
      form.reset(); // Optional: Reset the form after success
    }
});
