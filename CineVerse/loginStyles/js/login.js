function logIn(event) {
    event.preventDefault();
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    if (user === "jokin" && password === "CineVerse2025") {
        window.location.href = "index.html";
    } else {
        alert("Erabiltzailea edo pasahitza ez da zuzena. Saiatu berriro.");
    }
}