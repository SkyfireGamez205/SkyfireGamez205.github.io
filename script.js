﻿const buttons = [
    { name: "About Me", link: "/aboutme" },
    { name: "Projects", link: "" },
    { name: "Theater", link: "" },
    { name: "YouTube", link: "https://www.youtube.com/@SkyfireGamez" },
    { name: "Discord", link: "https://discord.gg/P45gJeAJjF" }
];

function getRandomButton() {
    const randomIndex = Math.floor(Math.random() * buttons.length);
    const button = buttons[randomIndex];

    const randomButton = document.getElementById("randomButton");
    randomButton.textContent = button.name;
    randomButton.onclick = () => window.location.href = button.link;
}
