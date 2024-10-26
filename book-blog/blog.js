class article {
    _id;
    _title;
    _date;
    _description;
    _imgSrc;
    _imgAlt;
    _ages;
    _genre;
    _stars;

    constructor(id, title, date, description, imgSrc, imgAlt, ages, genre, stars) {
        this._id = id;
        this._title = title;
        this._date = date;
        this._description = description;
        this._imgSrc = imgSrc;
        this._imgAlt = imgAlt;
        this._ages = ages;
        this._genre = genre;
        this._stars = stars;
    }

    toHTML() {
        const HTML = `
            <li>
                <article class="book">
                    <div class="book-details">
                        <p class="date">${this._date}</p>
                        <p class="ages">${this._ages}</p>
                        <p class="genre">${this._genre}</p>
                        <p class="stars">${this._stars}</p>
                    </div>
                    <h2 class="title">${this._title}</h2>
                    <img class="cover" src="${this._imgSrc}", alt="${this._imgAlt}">
                    <p class="description">${this._description}</p>
                </article>
            </li>
        `;
        return HTML;
    }
}

const articles = [
    new article(1, 'Septimus Heap Book One: Magyk', 'July 5, 2022', 'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.', 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg', 'Book cover for Septimus Heap 1', '10-14', 'Fantasy', '⭐⭐⭐⭐'),
    new article(2, 'Magnus Chase Book One: Sword of Summer', 'December 12, 2021', 'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.', 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300', 'Book cover for Magnus Chase 1', '12-16', 'Fantasy', '⭐⭐⭐⭐'),
    new article(3, "Belgariad Book One: Pawn of Prophecy", "Feb 12, 2022", `A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his "Aunt Pol" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.`, "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg", "Book cover for Pawn of Prophecy", "12-16", "Fantasy", "⭐⭐⭐⭐⭐")
]

const bookResultContainer = document.getElementById("book-results");
function updateBookResults() {
    bookResultContainer.innerHTML = "";
    var HTMLList = [];
    for (var i = 0; i < articles.length; i ++) {
        HTMLList.push(articles[i].toHTML());
    }
    bookResultContainer.innerHTML = HTMLList.join('');
}

updateBookResults();

const filterButton = document.getElementById("filter-button");
const filterPanel = document.getElementById("filter-panel");
function toggleFilterPanel() {
    filterPanel.classList.toggle("hide");
}

filterButton.addEventListener("click", toggleFilterPanel);

const descriptionBlocks = document.querySelectorAll(".book-details");

window.addEventListener("resize", handleResize);

function handleResize() {
    let x1 = 500;
    let y1 = 6;
    let x2 = 1900;
    let y2 = 20;
    let slope = (y2 - y1) / (x2 - x1);
    let b = y2 - (x2 * slope);
    for (let i = 0; i < descriptionBlocks.length; i ++) {
        console.log(descriptionBlocks[i]);
        descriptionBlocks[i].style.fontSize = `${((slope * window.innerWidth) + b)}px`;
    }
}

handleResize();

// function linearResize(x1, y1, x2, y2) {
//     let slope = (y2 - y1) / (x2 - x1);
//     let b = y2 - (x2 * slope);
//     for (let i = 0; i < descriptionBlocks.length; i ++) {
//         console.log(descriptionBlocks[i]);
//         descriptionBlocks[i].style.fontSize = `${((slope * window.innerWidth) + b)}px`;
//     }
// }