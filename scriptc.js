function sendToWhatsApp(event) {
    event.preventDefault(); // Stops the form from reloading the page

    let name = document.getElementById("name").value.trim();
    let message = document.getElementById("message").value.trim();
    let phoneNumber = "256707667448"; // Replace with your actual WhatsApp number

    if (name === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    let whatsappURL = `https://wa.me/${phoneNumber}?text=Hello, my name is ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank"); // Opens WhatsApp in a new tab
}