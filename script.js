
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("result").textContent =
        "Thank you for contacting TechNova!";

    form.reset();
});
