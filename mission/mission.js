const themeSelector = document.querySelector("select");

function changeTheme() {

    const body = document.querySelector("body");
    const logo = document.querySelector(".logo");

    if (themeSelector.value == "dark") {
        body.setAttribute("class", "dark");
        logo.setAttribute("src", "byui-logo_white.png");
    }
    else {
        body.removeAttribute("class");
        logo.setAttribute("src", "byui-logo_blue.webp");
    }

}

themeSelector.addEventListener('change', changeTheme);
