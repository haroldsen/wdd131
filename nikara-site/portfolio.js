
const aboutMeContent = `
    <div class="block-item">
        <h3>ABOUT ME</h3>
        <img src="media/nature-large.jpg">
    </div>

    <div class="block-item">
        <h3>MY AMAZING HUBBY</h3>
        <img src="media/temple-marriage.jpg">
        <p>
            Isn't he just a cutie!?  He also has rippling muscles.
        </p>

    </div>

    <div class="block-item">
        <h3>MY RESUME</h3>
        <p>
            I won't blame you for wanting to hire me after reading about me and my husband, so I'll just put this resume right here ;)
        </p>
        <a href="media/pro-paradigm.pdf" target="_blank">Check it out!</a>
    </div>

    <div class="block-item">
        <h3>PROFESSIONAL PARADIGM</h3>
        <p>
            This document highlights four child development theorists and how they have influenced my own personal philosophies.
            I think it's important to know about these theorists because their theories have shaped the ways we view and treat children.
            When looking at this document, you will discover that I believe in the importance of knowing developmental stages, scaffolding learning, modeling behavior, and helping children develop healthy attachments.
        </p>
        <a href="media/pro-paradigm.pdf" target="_blank">Check it out!</a>
    </div>
`;

const personalEthicsContent = `
    <div class="block-item">
        <h3>CODE OF ETHICS</h3>
        <img src="media/ethics.jpg">
    </div>

    <div class="block-item">
        <h3>MY ETHICAL COMMITMENT</h3>
        <p>
            This document outlines my commitment to be ethical in my interactions with children, families, colleagues, and society.
            I believe ethical commitment is crucial because children are the future.  We cannot afford to mistreat or misdirect their potential.
            When reviewing this document, you will find that I value creating a legacy of integrity.
        </p>
        <a href="media/my-ethical-commitment.pdf" target="_blank">Check it out!</a>
    </div>
`;

const intentionalTeacherContent = `
    <div class="block-item">
        <h3>INTENTIONAL TEACHER</h3>
        <img src="media/thinker.jpg">
    </div>

    <div class="block-item">
        <h3>DEVELOPMENTALLY APPROPRIATE PRACTICE</h3>
        <p>
            This document outlines a principle of developmentally appropriate practice I value.  These principles were instituted by the NAEYC.
            It is important to be aware of DAP principles because these tools can be used to better understand children and how to help them learn effectively.
            While reviewing this document, you will find that I value fostering a child's sense of purpose and belonging by connecting their learning to their home and family life.
        </p>
        <a href="media/dap-paper.pdf" target="_blank">Check it out!</a>
    </div>

    <div class="block-item">
        <h3>HOME ASSESSMENT</h3>
        <p>
            A home assessment is an opportunity for a child development specialist to visit with a parent while observing a child's home interaction.  For this project, I had the opportunity to perform an assessment.
            Home assessments are valuable because they are an opportunity to lend support to parents in the home.
            From this document, you can observe that I value understanding the different aspects of a child's life that I may more effectively teach to their understanding and needs.
        </p>
        <a href="media/home-assessment.pdf" target="_blank">Check it out!</a>
    </div>

    <div class="block-item">
        <h3>SOLO LESSON PLAN</h3>
        <p>
            This document is a lesson plan that was used in the BYU-Idaho toddler labs.
            For me, lesson plans are important because they are an opportunity to provide structure and purpose to a child's learning.
            While planning lessons, I value teaching to the specific needs of children, including goal setting, and planning for all domains of development.
        </p>
        <a href="media/solo-plan.pdf" target="_blank">Check it out!</a>
    </div>
`;

const skilledCollaboratorContent = `
    <div class="block-item">
        <h3>TEAM LESSON PLAN</h3>
        <p>
            This is a lesson plan for the BYU-Idaho toddler labs done in collaboration with another teacher.
            Lesson planning as a team is important because fellow teachers may have additional insight into how best to help an individual child.
            I value the opportunities to work with others to create ideas as a team.
        </p>
        <a href="media/team-plan.pdf" target="_blank">Check it out!</a>
    </div>

    <div class="block-item">
        <h3>STAFF TRAINING PRESENTATION</h3>
        <p>
            This is a visual presentation used in a staff training simulation.
            Knowing how to conduct staff trainings is valuable because there is a notable difference in the performance of a unified staff.
            I enjoy opportunities to discuss the values that will shape the success of a working team.
        </p>
        <a href="media/staff-training-presentation.pdf" target="_blank">Check it out!</a>
    </div>
`;

const observationAndAssessmentContent = `

`;

const pageContent = document.getElementById('page-content');

function handleNav(e) {
    const clickedTab = e.target.innerHTML;
    if (clickedTab == 'About Me') {
        pageContent.innerHTML = aboutMeContent;
    } else if (clickedTab == 'Personal Ethics') {
        pageContent.innerHTML = personalEthicsContent;
    } else if (clickedTab == 'Intentional Teacher') {
        pageContent.innerHTML = intentionalTeacherContent;
    } else if (clickedTab == 'Skilled Collaborator') {
        pageContent.innerHTML = skilledCollaboratorContent;
    } else if (clickedTab == 'Observation and Assessment') {
        pageContent.innerHTML = observationAndAssessmentContent;
    }
};

document.addEventListener('click', handleNav);
