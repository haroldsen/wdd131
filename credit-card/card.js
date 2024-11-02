const labels = document.getElementsByTagName("label");
const total = document.getElementById("total");
const chip = document.getElementById("card-image");
const inputs = document.getElementsByTagName("input");

function updateSizes() {
    const fontSize = window.innerWidth / 40;
    // console.log(labels);
    for (let i = 0; i < labels.length; i ++) {
        labels[i].style.fontSize = `${fontSize}px`;
    }
    total.style.fontSize = `${fontSize}px`;
    chip.style.height = `${fontSize * 3}px`;
    for (let i = 0; i < labels.length; i ++) {
        inputs[i].style.fontSize = `${fontSize / 2}px`;
    }
}

updateSizes();
window.addEventListener("resize", updateSizes);
