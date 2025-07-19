const themes = ["white-blue", "white-green"];
const picked = themes[Math.floor(Math.random() * themes.length)];
document.documentElement.classList.add(picked);
