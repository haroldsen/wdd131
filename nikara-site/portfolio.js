
class SubPage {
    constructor(titleP, imgSrcP, imgAltP, imgScaleP, lMarginP, tMarginP) {
        this.title = titleP;
        this.imgSrc = imgSrcP;
        this.imgAlt = imgAltP;
        this.imgScale = imgScaleP;
        this.lMargin = lMarginP;
        this.tMargin = tMarginP;
    }

    toHTML() {
        return `
            <div id="subsection-img-block">
                <img src="${this.imgSrc}" alt="${this.imgAlt}" draggable="false" style="width: ${this.imgScale}%; margin-top: ${this.tMargin}%; margin-left: ${this.lMargin}%;">
            </div>
        `;
    }

    getButton() {
        return `<button>${this.title}</button>`;
    }
}

class Page {
    constructor(titleP, descriptionP, imgSrcP, imgAltP, quoteP, imageScaleP, lMarginP, tMarginP, subpageListP) {
        this.title = titleP;
        this.description = descriptionP;
        this.imgSrc = imgSrcP;
        this.imgAlt = imgAltP;
        this.quote = quoteP;
        this.imageScale = imageScaleP;
        this.lMargin = lMarginP;
        this.tMargin = tMarginP;
        this.subpageList = subpageListP;
    }

    toHTML() {
        return `
            <h1>${this.title}</h1>
            <h2>${this.description}</h2>
            <div id="section-img-block">
                <img src="${this.imgSrc}" alt="${this.imgAlt}" draggable="false" style="width: ${this.imageScale}%; margin-top: ${this.tMargin}%; margin-left: ${this.lMargin}%;">
            </div>
            <h3>${this.quote}</h3>
        `;
    }
}

const pages = [
    new Page(
        "Disciples of Jesus Christ",
        "We believe in Jesus Christ as the Son of God and strive to follow Him.",
        "media/disciples-large.jpg",
        "a picture",
        `“In this special and sacred and set apart place, you and I have access to unparalleled spiritual resources that can assist us in developing and deepening our devotion as disciples of the Lord Jesus Christ. That is the primary and most important reason for the existence of Brigham Young University-Idaho and for its sponsorship by and affiliation with The Church of Jesus Christ of Latter-day Saints.” (Elder David A. Bednar)`,
        140,
        10,
        -15
    ),
    new Page(
        "Sound Thinkers",
        "We frame and solve problems using creative and critical thinking.",
        "img src",
        "a picture",
        `“A problem arises, its dimensions are studied out, a question is asked, and with sufficient faith, God leads us to answers ... God does not simply hand down information. He expects us to figure things out through prayerful searching and sound thinking.” (Gospel Topics – “Revelation”)`,
        140,
        10,
        -15
    ),
    new Page(
        "Effective Communicators",
        "We develop and express ideas that are purposeful, organized, and clear.",
        "media/communicators-large.jpg",
        "a picture",
        `“True disciples of Jesus Christ seek to follow His example in the ways they communicate. Their communications, both verbal and nonverbal, are to be kind, compassionate, and helpful, reflecting a love for Heavenly Father’s children and an understanding that all people are brothers and sisters.” (Gospel Topics – “Communication”)`,
        100,
        0,
        0
    ),
    new Page(
        "Skilled Collaborators",
        "We work effectively with others to accomplish a shared vision.",
        "media/collaborators-large.jpg",
        "a picture",
        `“You will never be alone. In this world we work together to accomplish things. We marry and have companions. We have children. We have associates in the Church. We work with others in our daily pursuits. . . Keep faith with your associates. You can help them, and they can help you. The Almighty has designed that we work together, that we assist one another, that we bless one another in our association.” (Gordon B. Hinckley)`,
        100,
        0,
        0,
        [
            new SubPage("Team Lesson Plan 1", "media/collaboratorsTeamLessonPlan1.jpg", "a doc", 150, 45, 0)
        ]
    ),
    new Page(
        "Developmental Practitioners",
        "We implement appropriate, research-based practices that foster children's development in multiple domains.",
        "media/practitioners-large.jpg",
        "a picture",
        `“Jesus Christ sees people deeply. He sees individuals, their needs, and who they can become. Where others saw fishermen, sinners, or publicans, Jesus saw disciples; where others saw a man possessed by devils, Jesus looked past the outward distress, acknowledged the man, and healed him. Even in our busy lives, we can follow the example of Jesus and see individuals—their needs, their faith, their struggle, and who they can become.” (Michelle D. Craig)`,
        100,
        0,
        0
    ),
    new Page(
        "Relationship Builders",
        "We use a strengths-based approach, valuing the positive qualities of children, families, and communities.",
        "media/relationships-large.jpg",
        "a picture",
        `“May we always remember that each spirit child of God is coming to earth on his or her own personal journey. May we welcome them, safeguard them, and always love them. As you receive these precious children in the Savior’s name and help them in their eternal journey, I promise you that the Lord will bless you and shower His love and approval upon you.” (Neil L. Andersen)`,
        130,
        4,
        -5
    ),
    new Page(
        "Intentional Teachers",
        "We incorporate multiple instructional methods, focusing on practical, first-hand learning.",
        "media/teachers-large.jpg",
        "a picture",
        `“What trials will our children face? Like Joseph Smith, our children can find the courage to 'do whatever is necessary.' When we are intentional about holding them and teaching them of Heavenly Father’s plan through prayer and scriptures, they will come to know where they came from, why they are here, and where they are going.” (Rosemary M. Wixom)`,
        125,
        -5,
        -10,
        [
            new SubPage("Individual Lesson Plan 1", "media/teacherIndividualLessonPlan1.jpg", "a doc", 150, 45, 0)
        ]
    ),
    new Page(
        "Citizen Professionals",
        "We adopt and follow guidelines of ethical behavior as we serve children, families, colleagues, and society.",
        "",
        "a picture",
        `“The members of our Church throughout the world accept and try to live by ethical principles reflected in our Articles of Faith. I quote part of it: 'We believe in being honest, true, chaste, benevolent ... and in doing good to all men. ... If there is anything virtuous, lovely, or of good report or praiseworthy, we seek after these things.'” (Dieter F. Uchtdorf)`,
        100,
        0,
        0,
        [
            new SubPage("Code of Ethics", "media/professionals-large.jpg", "an image", 100, 0, 0)
        ]
    ),
    new Page(
        "Nature Enthusiasts",
        "We help children connect to the natural world physically, cognitively, emotionally, socially, and spiritually.",
        "media/nature-large.jpg",
        "a picture",
        `“To truly reverence the Creator, we must appreciate His creations. We need to plan to take time to observe the marvels of nature. Today, we can easily become surrounded by brick buildings and asphalt surfaces that shelter us from real life around us. Plan to share with your family the miracle of buds changing to fragrant blossoms. Take time to sit on a hillside and feel the tranquility of the evening when the sun casts its last golden glow over the horizon. … All the marvels of nature are glimpses of His divine power and expressions of His love.” (M. Russell Ballard)`,
        125,
        0,
        5
    ),
    new Page(
        "Joyful Learners",
        "We follow our passions and seek joy in our studies, displaying creativity and integrity.",
        "media/learners-large.jpg",
        "a picture",
        `“Isn’t it remarkable to think that your very spirits are fashioned by an endlessly creative and eternally compassionate God? Think about it—your spirit body is a masterpiece, created with a beauty, function, and capacity beyond imagination. But to what end were we created? We were created with the express purpose and potential of experiencing a fulness of joy. Our birthright—and the purpose of our great voyage on this earth—is to seek and experience eternal happiness. One of the ways we find this is by creating things.” (Dieter F. Uchtdorf)`,
        125,
        -15,
        30
    )
];

let currentPage = "Disciples of Jesus Christ";
let currentSubPage = "";

function populatePage() {
    for (let i = 0; i < pages.length; i ++) {
        if (pages[i].title == currentPage) {
            document.getElementById("page-content").innerHTML = pages[i].toHTML();

            document.getElementById("subpage-selector").innerHTML = `<button id="close-submenu-button">Close Menu</button>`;
            document.getElementById("subpage-selector").style.display = "none";
            document.getElementById("open-submenu-button").style.display = "none";
            document.getElementById("subpage-content").innerHTML = '';

            if (typeof pages[i].subpageList !== 'undefined' && pages[i].subpageList.length > 0) {
                let buttons = '';
                buttons = pages[i].subpageList.map(subpage => subpage.getButton()).join(", ");
                document.getElementById("subpage-selector").innerHTML = `<button id="close-submenu-button">Close Menu</button>`;
                document.getElementById("subpage-selector").insertAdjacentHTML("beforeend", buttons);
                document.getElementById("subpage-selector").style.display = "none";
                document.getElementById("open-submenu-button").style.display = "flex";
            }
        }
    }
}

function openMenu() {
    document.getElementById("page-selector").style.display = "flex";
    document.getElementById("open-menu-button").style.display = "none";
}

function closeMenu() {
    document.getElementById("page-selector").style.display = "none";
    document.getElementById("open-menu-button").style.display = "inline";
}

function setCurrentPage(e) {
    if (e.target.innerHTML != "Close Menu") {
        currentPage = e.target.innerHTML;
        currentSubPage = '';
        populatePage();
        closeMenu();
    }
}

function populateSubPage() {
    for (let i = 0; i < pages.length; i ++) {
        if (pages[i].title == currentPage) {
            for (let ii = 0; ii < pages[i].subpageList.length; ii ++) {
                if (pages[i].subpageList[ii].title == currentSubPage) {
                    document.getElementById("subpage-content").innerHTML = pages[i].subpageList[ii].toHTML();
                    document.getElementById("subpage-content").style.display = "flex";
                }
            }
        }
    }
}

function openSubMenu() {
    document.getElementById("subpage-selector").style.display = "flex";
    document.getElementById("open-submenu-button").style.display = "none";
}

function closeSubMenu() {
    document.getElementById("subpage-selector").style.display = "none";
    document.getElementById("open-submenu-button").style.display = "inline";
}

function setCurrentSubPage(e) {
    if (e.target.innerHTML != "Close Menu") {
        currentSubPage = e.target.innerHTML;
        populateSubPage();
        closeSubMenu();
    }
}

function manageMenus(e) {
    if (e.target.innerHTML == "Close Menu") {
        if (e.target.id == "close-menu-button") {
            document.getElementById("page-selector").style.display = "none";
            document.getElementById("open-menu-button").style.display = "inline";
        } else if (e.target.id == "close-submenu-button") {
            document.getElementById("subpage-selector").style.display = "none";
            document.getElementById("open-submenu-button").style.display = "inline";
        }
    }
    if (e.target.innerHTML == "Open Menu") {
        if (e.target.id == "open-menu-button") {
            document.getElementById("page-selector").style.display = "flex";
            document.getElementById("open-menu-button").style.display = "none";
        } else if (e.target.id == "open-submenu-button") {
            document.getElementById("subpage-selector").style.display = "flex";
            document.getElementById("open-submenu-button").style.display = "none";
        }
    }
}

populatePage();

document.getElementById("page-selector").addEventListener("click", setCurrentPage);
document.getElementById("subpage-selector").addEventListener("click", setCurrentSubPage);

document.body.addEventListener("click", manageMenus);
