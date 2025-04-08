document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("contact-email").value;
    const telephone = document.getElementById("contact-telephone").value;
    const message = document.getElementById("contact-message").value;

    // Базова валідація
    let valid = true;

    if (!email.includes("@") || message.length < 5) {
      valid = false;
    }

    if (!valid) {
      alert("Please fill all fields correctly.");
    }

    // Тут можна додати відправку через Fetch API або Email.js
    // Або показати повідомлення про успіх

    alert(
      `Thank you for your message! I'll respond to ${email} as soon as possible.`
    );
    form.reset();
  });
});
