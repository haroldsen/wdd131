
const nav = document.getElementsByTagName('nav')[0];
const tabHeader = document.getElementById('tab-header');
const imgContainer = document.getElementById('img-container');
const smallQuoteBlock = document.getElementById('small-quote');
const largeQuoteBlock = document.getElementById('large-quote');

function updatePage(headerP, smallQuoteP, imgSrcP, imgAltP, largeQuoteP) {
    tabHeader.innerHTML = headerP;
    smallQuoteBlock.innerHTML = smallQuoteP;
    imgContainer.innerHTML = `<img class="tab-image" src="${imgSrcP}" alt="${imgAltP}">`;
    largeQuoteBlock.innerHTML = largeQuoteP;
}

function handleNavClick(e) {
    const clickedTab = e.target.innerHTML.replace(/<br\s*\/?>/gi, ' ');
    if (clickedTab == 'Disciples of Jesus Christ') {
        updatePage(
            "Disciples of Jesus Christ",
            "We believe in Jesus Christ as the Son of God and strive to follow Him.",
            "media/disciples-large.jpg",
            "a picture",
            `“In this special and sacred and set apart place, you and I have access to unparalleled spiritual resources that can assist us in developing and deepening our devotion as disciples of the Lord Jesus Christ. That is the primary and most important reason for the existence of Brigham Young University-Idaho and for its sponsorship by and affiliation with The Church of Jesus Christ of Latter-day Saints.” (Elder David A. Bednar)`    
        );
    } else if (clickedTab == 'Sound Thinkers') {
        updatePage(
            "Sound Thinkers",
            "We frame and solve problems using creative and critical thinking.",
            "img src",
            "a picture",
            `“A problem arises, its dimensions are studied out, a question is asked, and with sufficient faith, God leads us to answers ... God does not simply hand down information. He expects us to figure things out through prayerful searching and sound thinking.” (Gospel Topics – “Revelation”)`    
        );
    } else if (clickedTab == 'Effective Communicators') {
        updatePage(
            "Effective Communicators",
            "We develop and express ideas that are purposeful, organized, and clear.",
            "media/communicators-large.jpg",
            "a picture",
            `“True disciples of Jesus Christ seek to follow His example in the ways they communicate. Their communications, both verbal and nonverbal, are to be kind, compassionate, and helpful, reflecting a love for Heavenly Father’s children and an understanding that all people are brothers and sisters.” (Gospel Topics – “Communication”)`
        );
    } else if (clickedTab == 'Skilled Collaborators') {
        updatePage(
            "Skilled Collaborators",
            "We work effectively with others to accomplish a shared vision.",
            "media/collaborators-large.jpg",
            "a picture",
            `“You will never be alone. In this world we work together to accomplish things. We marry and have companions. We have children. We have associates in the Church. We work with others in our daily pursuits. . . Keep faith with your associates. You can help them, and they can help you. The Almighty has designed that we work together, that we assist one another, that we bless one another in our association.” (Gordon B. Hinckley)`
        );
    } else if (clickedTab == 'Developmental Practitioners') {
        updatePage(
            "Developmental Practitioners",
            "We implement appropriate, research-based practices that foster children's development in multiple domains.",
            "media/practitioners-large.jpg",
            "a picture",
            `“Jesus Christ sees people deeply. He sees individuals, their needs, and who they can become. Where others saw fishermen, sinners, or publicans, Jesus saw disciples; where others saw a man possessed by devils, Jesus looked past the outward distress, acknowledged the man, and healed him. Even in our busy lives, we can follow the example of Jesus and see individuals—their needs, their faith, their struggle, and who they can become.” (Michelle D. Craig)`
        );
    } else if (clickedTab == 'Relationship Builders') {
        updatePage(
            "Relationship Builders",
            "We use a strengths-based approach, valuing the positive qualities of children, families, and communities.",
            "media/relationships-large.jpg",
            "a picture",
            `“May we always remember that each spirit child of God is coming to earth on his or her own personal journey. May we welcome them, safeguard them, and always love them. As you receive these precious children in the Savior’s name and help them in their eternal journey, I promise you that the Lord will bless you and shower His love and approval upon you.” (Neil L. Andersen)`
            );
    } else if (clickedTab == 'Intentional Teachers') {
        updatePage(
            "Intentional Teachers",
            "We incorporate multiple instructional methods, focusing on practical, first-hand learning.",
            "media/teachers-large.jpg",
            "a picture",
            `“What trials will our children face? Like Joseph Smith, our children can find the courage to 'do whatever is necessary.' When we are intentional about holding them and teaching them of Heavenly Father’s plan through prayer and scriptures, they will come to know where they came from, why they are here, and where they are going.” (Rosemary M. Wixom)`
        );
    } else if (clickedTab == 'Citizen Professionals') {
        updatePage(
            "Citizen Professionals",
            "We adopt and follow guidelines of ethical behavior as we serve children, families, colleagues, and society.",
            "",
            "a picture",
            `“The members of our Church throughout the world accept and try to live by ethical principles reflected in our Articles of Faith. I quote part of it: 'We believe in being honest, true, chaste, benevolent ... and in doing good to all men. ... If there is anything virtuous, lovely, or of good report or praiseworthy, we seek after these things.'” (Dieter F. Uchtdorf)`
        );
    } else if (clickedTab == 'Nature Enthusiasts') {
        updatePage(
            "Nature Enthusiasts",
            "We help children connect to the natural world physically, cognitively, emotionally, socially, and spiritually.",
            "media/nature-large.jpg",
            "a picture",
            `“To truly reverence the Creator, we must appreciate His creations. We need to plan to take time to observe the marvels of nature. Today, we can easily become surrounded by brick buildings and asphalt surfaces that shelter us from real life around us. Plan to share with your family the miracle of buds changing to fragrant blossoms. Take time to sit on a hillside and feel the tranquility of the evening when the sun casts its last golden glow over the horizon. … All the marvels of nature are glimpses of His divine power and expressions of His love.” (M. Russell Ballard)`
        );
    } else if (clickedTab == 'Joyful Learners') {
        updatePage(
            "Joyful Learners",
            "We follow our passions and seek joy in our studies, displaying creativity and integrity.",
            "media/learners-large.jpg",
            "a picture",
            `“Isn’t it remarkable to think that your very spirits are fashioned by an endlessly creative and eternally compassionate God? Think about it—your spirit body is a masterpiece, created with a beauty, function, and capacity beyond imagination. But to what end were we created? We were created with the express purpose and potential of experiencing a fulness of joy. Our birthright—and the purpose of our great voyage on this earth—is to seek and experience eternal happiness. One of the ways we find this is by creating things.” (Dieter F. Uchtdorf)`
        );
    }

    else if (clickedTab == 'Team Plan 1') {
        updatePage(
            "Skilled Collaborators",
            "We work effectively with others to accomplish a shared vision.",
            "media/collaboratorsTeamLessonPlan1.jpg",
            "a picture",
            ''
        );
    }
}

nav.addEventListener('click', handleNavClick);
