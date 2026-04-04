

const button = document.getElementById("themeButton");

// gespeichertes Theme prüfen
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    button.textContent = "☀️";
} else {
    button.textContent = "🌙";
}

// Button-Klick
button.onclick = function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        localStorage.setItem("theme", "light");
        button.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "dark");
        button.textContent = "🌙";

    }

};