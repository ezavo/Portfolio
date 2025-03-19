document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const cards = document.querySelectorAll(".card");

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
    });

    function toggleCards() {
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (cardPosition < screenPosition) { card.classList.add("visible"); card.classList.remove("hidden"); } 
            else { card.classList.add("hidden"); card.classList.remove("visible"); }
        });
    }

    window.addEventListener("scroll", toggleCards);
    toggleCards();
});