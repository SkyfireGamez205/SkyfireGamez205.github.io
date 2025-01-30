    alert(`At this moment the site is unstable, The top buttons wont work but for now this is what I got.`);
const buttons = [
    { name: "About Me", link: "#" },
    { name: "Projects", link: "#" },
    { name: "Theater", link: "/theater/" },
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

function navigate(section) {
    alert(`You tried going to ${section}. This link has not been implemented yet, Check back soon.`);
}

window.onload = getRandomButton;
