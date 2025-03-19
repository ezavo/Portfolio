// Dark/Light Mode Toggle Functionality
const themeToggleButton = document.getElementById("theme-toggle");

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.classList.toggle("dark-mode", savedTheme === "dark");
}

// Toggle the theme
themeToggleButton.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.body.classList.toggle("dark-mode", newTheme === "dark");
    localStorage.setItem("theme", newTheme); // Save the user's theme preference
});

// Project Card Hover Effect (Optional)
const projectCards = document.querySelectorAll('.card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});