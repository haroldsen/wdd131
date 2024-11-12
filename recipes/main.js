import recipes from './recipes.mjs';

const recipesSection = document.getElementById("recipesSection");
for (let i = 0; i < recipes.length; i ++) {
    recipesSection.insertAdjacentHTML("beforeend", recipes[i].toHTML());
}

function handleResize() {
    const elements = document.querySelectorAll("h2, p, li");
    let fontSize = (window.innerWidth / 40) * 0.9;
    if (window.innerWidth > 1000) {
        fontSize = (1000 / 40) * 0.9;
    }
    else if (window.innerWidth < 500) {
        fontSize = (window.innerWidth / 40) * 2;
    }
    for (let i = 0; i < elements.length; i ++) {
        elements[i].style.fontSize = `${fontSize}px`;
    }
}

window.addEventListener("resize", handleResize);
