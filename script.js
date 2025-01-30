    alert(`At this moment the site is unstable, The top buttons wont work but for now this is what I got.`);
const buttons = [
    { name: "About Me", link: "#" },
    { name: "Projects", link: "#" },
    { name: "Theater", link: "https://skyfiregamez205.github.io/theater/" },
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

}

window.onload = getRandomButton;
