document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const cards = document.querySelectorAll(".card");

    // Theme Toggle Function
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
    });

    // Scroll Animation
    function revealCards() {
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (cardPosition < screenPosition) {
                card.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealCards);
    revealCards(); // Initial check
});