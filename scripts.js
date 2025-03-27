function toggleMenu() {
    let navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}

        document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(item => item.classList.remove("active")); // Remove active class from all
            this.classList.add("active"); // Add active class to clicked link
        });
    });
});