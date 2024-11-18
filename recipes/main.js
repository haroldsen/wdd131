import recipes from './recipes.mjs';

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

function getRandomRecipeIndex() {
    return Math.floor(Math.random() * recipes.length);
}

function renderAllRecipes() {
    const recipesSection = document.getElementById("recipesSection");
    recipesSection.innerHTML = "";
    for (let i = 0; i < recipes.length; i ++) {
        recipesSection.insertAdjacentHTML("beforeend", recipes[i].toHTML());
    }
}

function renderRecipeList(recipeList) {
    const recipesSection = document.getElementById("recipesSection");
    recipesSection.innerHTML = "";
    for (let i = 0; i < recipeList.length; i ++) {
        recipesSection.insertAdjacentHTML("beforeend", recipeList[i].toHTML());
    }
}

function renderRandomRecipe() {
    const recipesSection = document.getElementById("recipesSection");
    recipesSection.innerHTML = recipes[getRandomRecipeIndex()].toHTML();
}

function getAndRenderSearchResults(e) {
    e.preventDefault();
    let searchVal = document.getElementById("searchInput").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.includes(searchVal) || recipe.description.includes(searchVal) || recipe.tags.find((item) => item.toLowerCase().includes(searchVal)) || recipe.recipeIngredient.find((ingredient) => ingredient.toLowerCase().includes(searchVal)));
    filteredRecipes.sort((a, b) => a.name - b.name);
    if (searchVal === "") {
        
    }
    else {
        renderRecipeList(filteredRecipes);
    }
    if (filteredRecipes.length < 1) {
        const recipesSection = document.getElementById("recipesSection");
        recipesSection.innerHTML = `<h2 id="noResultsMessage">No results were found with the value "${searchVal}".</h2>`;
    }
}

function removeExtraSpacing() {
    const searchInput = document.getElementById("searchInput");
    const trimmed = searchInput.value.replace(/\s+/g, ' ').trim();
    searchInput.value = trimmed;
}

function init() {
    renderRandomRecipe();
    document.getElementById("searchInput").addEventListener("change", removeExtraSpacing);
document.getElementById("searchButton").addEventListener("click", getAndRenderSearchResults);
}

init();
