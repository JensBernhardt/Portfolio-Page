
const button = document.getElementById("themeButton");

// Theme nur für diese Browser-Sitzung merken
if (sessionStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");
    button.textContent = "☀️";

} else {

    document.body.classList.remove("light-mode");
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

        sessionStorage.setItem("theme", "light");
        button.textContent = "☀️";

    } else {

        sessionStorage.setItem("theme", "dark");
        button.textContent = "🌙";

    }

};