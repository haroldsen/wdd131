handleResize();

const menuButton = document.getElementById("menu-button");

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize);

function viewerTemplate(imgPath, altText) {
    return `<div id="viewer">
        <button id="close-viewer">X</button>
        <img src="${imgPath}" alt="${altText}">
    </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;
    const imgParts = clickedElement.getAttribute("src").split("-");
    const newImgName = imgParts[0] + "-full.jpeg";
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImgName, "The small image... but bigger!"));
    const viewerExit = document.getElementById("close-viewer");
    viewerExit.addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = document.getElementById("viewer");
    viewer.remove();
}

const gallery = document.getElementById("gallery");

gallery.addEventListener("click", viewHandler);