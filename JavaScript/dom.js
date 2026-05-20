
const button = document.getElementById("themeButton");

// gespeichertes Theme prüfen
if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");
    button.textContent = "☀️";

} else {

    button.textContent = "🌙";

}

// Light Mode im Hintergrund vorbereiten
window.addEventListener("load", function () {

    if (!document.body.classList.contains("light-mode")) {

        document.body.classList.add("light-mode");

        requestAnimationFrame(() => {

            document.body.classList.remove("light-mode");

        });

    }

});

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