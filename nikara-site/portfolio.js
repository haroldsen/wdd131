
const bioImgSrcs = [
    "media/grad-pic.jpg",
    "media/nature-large.jpg",
    "media/temple-marriage.jpg"
];

const bioTexts = [
    "I graduated from BYU-Idaho in July of 2025 with a degree in child development.",
    "I love nature!  I grew up in Kentucky where I spent a lot of time outdoors as a child.  I want to give children the same opportunities to learn from nature that I had.",
    "I married my husband, Christian, in May of 2023.  He's been my biggest supporter in my persuit of my professional goals."
];

let bioIndex = 0;

function cycleThroughBio(e) {
    let iterator = 0;
    console.log(e.target.innerHTML);
    if (e.target.innerHTML == '&lt;') {
        iterator = -1;
    } else if (e.target.innerHTML == '&gt;') {
        iterator = 1;
    }
    console.log(iterator);
    bioIndex = (bioIndex + iterator)
    if (bioIndex >= bioImgSrcs.length) {
        bioIndex = 0;
    }
    if (bioIndex < 0) {
        bioIndex = bioImgSrcs.length - 1;
    }
    console.log(bioIndex);
    document.getElementById('about-me-img').src = bioImgSrcs[bioIndex];
    document.getElementById('about-me-text').innerHTML = bioTexts[bioIndex];
}

document.getElementById('left').addEventListener('click', cycleThroughBio);
document.getElementById('right').addEventListener('click', cycleThroughBio);
