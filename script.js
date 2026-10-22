const menuBtn = document.getElementById("menu-btn");
const mainMenu = document.getElementById("main-menu");
const overlay = document.getElementById("menu-overlay");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
    mainMenu.classList.toggle("hidden");
    mainMenu.classList.toggle("flex");
    overlay.classList.toggle("hidden");

    menuIcon.innerHTML = mainMenu.classList.contains("hidden") ? "☰" : "&#8593;";
    menuIcon.classList.toggle("rotate-90");
});