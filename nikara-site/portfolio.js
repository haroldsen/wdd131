
class Page {
    constructor(titleP, descriptionP, imgSrcP, imgAltP, quoteP, pTextP, imageScaleP, lMarginP, tMarginP) {
        this.title = titleP;
        this.description = descriptionP;
        this.imgSrc = imgSrcP;
        this.imgAlt = imgAltP;
        this.quote = quoteP;
        this.pText = pTextP;
        this.imageScale = imageScaleP;
        this.lMargin = lMarginP;
        this.tMargin = tMarginP;
    }

    toHTML() {
        return `
            <h1>${this.title}</h1>
            <h2>${this.description}</h2>
            <div id="section-img-block">
                <img src="${this.imgSrc}" alt="${this.imgAlt}" draggable="false" style="width: ${this.imageScale}%; margin-top: ${this.tMargin}%; margin-left: ${this.lMargin}%;">
            </div>
            <h3>${this.quote}</h3>
            <p>${this.pText}</p>
        `;
    }
}

const pages = [
    new Page(
        "Disciples of Jesus Christ",
        "We believe in Jesus Christ as the Son of God and strive to follow Him.",
        "media/disciples-large.jpg",
        "a picture",
        `“In this special and sacred and set apart place, you and I have access to unparalleled spiritual resources that can assist us in developing and deepening our devotion as disciples of the Lord Jesus Christ. That is the primary and most important reason for the existence of Brigham Young University-Idaho and for its sponsorship by and affiliation with The Church of Jesus Christ of Latter-day Saints.”<br>- Elder David A. Bednar -`,
        "text",
        140,
        10,
        -15
    ),
    new Page(
        "Sound Thinkers",
        "We believe in Jesus Christ as the Son of God and strive to follow Him.",
        "",
        "a picture",
        `“In this special and sacred and set apart place, you and I have access to unparalleled spiritual resources that can assist us in developing and deepening our devotion as disciples of the Lord Jesus Christ. That is the primary and most important reason for the existence of Brigham Young University-Idaho and for its sponsorship by and affiliation with The Church of Jesus Christ of Latter-day Saints.”<br>- Elder David A. Bednar -`,
        "text",
        140,
        10,
        -15
    ),
    new Page(
        "Effective Communicators",
        "We believe in Jesus Christ as the Son of God and strive to follow Him.",
        "media/communicators-large.jpg",
        "a picture",
        `“In this special and sacred and set apart place, you and I have access to unparalleled spiritual resources that can assist us in developing and deepening our devotion as disciples of the Lord Jesus Christ. That is the primary and most important reason for the existence of Brigham Young University-Idaho and for its sponsorship by and affiliation with The Church of Jesus Christ of Latter-day Saints.”<br>- Elder David A. Bednar -`,
        "text",
        100,
        0,
        0
    ),
    new Page(
        "Skilled Collaborators",
        "We believe in Jesus Christ as the Son of God and strive to follow Him.",
        "media/collaborators-large.jpg",
        "a picture",
        `“In this special and sacred and set apart place, you and I have access to unparalleled spiritual resources that can assist us in developing and deepening our devotion as disciples of the Lord Jesus Christ. That is the primary and most important reason for the existence of Brigham Young University-Idaho and for its sponsorship by and affiliation with The Church of Jesus Christ of Latter-day Saints.”<br>- Elder David A. Bednar -`,
        "text",
        100,
        0,
        0
    ),
    new Page(
        "Developmental Practitioners",
        "We believe in Jesus Christ as the Son of God and strive to follow Him.",
        "media/practitioners-large.jpg",
        "a picture",
        `“In this special and sacred and set apart place, you and I have access to unparalleled spiritual resources that can assist us in developing and deepening our devotion as disciples of the Lord Jesus Christ. That is the primary and most important reason for the existence of Brigham Young University-Idaho and for its sponsorship by and affiliation with The Church of Jesus Christ of Latter-day Saints.”<br>- Elder David A. Bednar -`,
        "text",
        100,
        0,
        0
    ),
    new Page(
        "Relationship Builders",
        "We believe in Jesus Christ as the Son of God and strive to follow Him.",
        "media/relationships-large.jpg",
        "a picture",
        `“In this special and sacred and set apart place, you and I have access to unparalleled spiritual resources that can assist us in developing and deepening our devotion as disciples of the Lord Jesus Christ. That is the primary and most important reason for the existence of Brigham Young University-Idaho and for its sponsorship by and affiliation with The Church of Jesus Christ of Latter-day Saints.”<br>- Elder David A. Bednar -`,
        "text",
        130,
        4,
        -5
    ),
    new Page(
        "Intentional Teachers",
        "We believe in Jesus Christ as the Son of God and strive to follow Him.",
        "media/teachers-large.jpg",
        "a picture",
        `“In this special and sacred and set apart place, you and I have access to unparalleled spiritual resources that can assist us in developing and deepening our devotion as disciples of the Lord Jesus Christ. That is the primary and most important reason for the existence of Brigham Young University-Idaho and for its sponsorship by and affiliation with The Church of Jesus Christ of Latter-day Saints.”<br>- Elder David A. Bednar -`,
        "text",
        125,
        -5,
        -10
    ),
    new Page(
        "Citizen Professionals",
        "We believe in Jesus Christ as the Son of God and strive to follow Him.",
        "",
        "a picture",
        `“In this special and sacred and set apart place, you and I have access to unparalleled spiritual resources that can assist us in developing and deepening our devotion as disciples of the Lord Jesus Christ. That is the primary and most important reason for the existence of Brigham Young University-Idaho and for its sponsorship by and affiliation with The Church of Jesus Christ of Latter-day Saints.”<br>- Elder David A. Bednar -`,
        "text",
        130,
        4,
        -5
    ),
    new Page(
        "Nature Enthusiasts",
        "We believe in Jesus Christ as the Son of God and strive to follow Him.",
        "media/nature-large.jpg",
        "a picture",
        `“In this special and sacred and set apart place, you and I have access to unparalleled spiritual resources that can assist us in developing and deepening our devotion as disciples of the Lord Jesus Christ. That is the primary and most important reason for the existence of Brigham Young University-Idaho and for its sponsorship by and affiliation with The Church of Jesus Christ of Latter-day Saints.”<br>- Elder David A. Bednar -`,
        "text",
        125,
        0,
        5
    ),
    new Page(
        "Joyful Learners",
        "We believe in Jesus Christ as the Son of God and strive to follow Him.",
        "media/learners-large.jpg",
        "a picture",
        `“In this special and sacred and set apart place, you and I have access to unparalleled spiritual resources that can assist us in developing and deepening our devotion as disciples of the Lord Jesus Christ. That is the primary and most important reason for the existence of Brigham Young University-Idaho and for its sponsorship by and affiliation with The Church of Jesus Christ of Latter-day Saints.”<br>- Elder David A. Bednar -`,
        "text",
        125,
        -15,
        30
    )
];

function handlePageChange() {
    const currentPage = document.getElementById("page-selector").value;
    for (let i = 0; i < pages.length; i ++) {
        if (pages[i].title == currentPage) {
            document.getElementsByTagName("main")[0].innerHTML = pages[i].toHTML();
        }
    }
}

handlePageChange();
document.getElementById("page-selector").addEventListener("change", handlePageChange);
