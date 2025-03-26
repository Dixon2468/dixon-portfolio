document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.getElementById("nav-links");

    // Toggle the menu when the hamburger is clicked
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked (optional)
    document.querySelectorAll("#nav-links li a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});

function toggleMenu() {
    let navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}