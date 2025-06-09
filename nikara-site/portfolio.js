
const aboutMeContent = `
    <div class="block-item">
        <h3>ABOUT ME</h3>
        <img src="media/nature-large.jpg">
    </div>

    <div class="block-item">
        <h3>MY AMAZING HUBBY</h3>
        <img src="media/temple-marriage.jpg">
    </div>

    <div class="block-item">
        <h3>PROFESSIONAL PARADIGM</h3>
        <p>My name is Nikara Haroldsen and I study child development! Feel free to check out some of my projects by exploring the navigation section above.</p>
        <a href="media/pro-paradigm.pdf" target="_blank">Check it out!</a>
    </div>
`;

const personalEthicsContent = `
    <div class="block-item">
        <h3>CODE OF ETHICS</h3>
        <img src="media/ethics.jpg">
    </div>
`;

const intentionalTeacherContent = `
    <div class="block-item">
        <h3>INTENTIONAL TEACHER</h3>
        <img src="media/thinker.jpg">
    </div>

    <div class="block-item">
        <h3>DAP PAPER</h3>
        <p>My name is Nikara Haroldsen and I study child development! Feel free to check out some of my projects by exploring the navigation section above.</p>
        <a href="media/dap-paper.pdf" target="_blank">Check it out!</a>
    </div>

    <div class="block-item">
        <h3>HOME ASSESSMENT</h3>
        <p>My name is Nikara Haroldsen and I study child development! Feel free to check out some of my projects by exploring the navigation section above.</p>
        <a href="media/home-assessment.pdf" target="_blank">Check it out!</a>
    </div>

    <div class="block-item">
        <h3>SOLO PLAN</h3>
        <p>My name is Nikara Haroldsen and I study child development! Feel free to check out some of my projects by exploring the navigation section above.</p>
        <a href="media/solo-plan.pdf" target="_blank">Check it out!</a>
    </div>
`;

const skilledCollaboratorContent = `
    <div class="block-item">
        <h3>TEAM PLAN</h3>
        <p>My name is Nikara Haroldsen and I study child development! Feel free to check out some of my projects by exploring the navigation section above.</p>
        <a href="media/team-plan.pdf" target="_blank">Check it out!</a>
    </div>

    <div class="block-item">
        <h3>STAFF TRAINING PRESENTATION</h3>
        <p>My name is Nikara Haroldsen and I study child development! Feel free to check out some of my projects by exploring the navigation section above.</p>
        <a href="media/staff-training-presentation.pdf" target="_blank">Check it out!</a>
    </div>
`;

const observationAndAssessmentContent = `
    <div class="block-item">
        <h3>MY ETHICAL COMMITMENT</h3>
        <p>My name is Nikara Haroldsen and I study child development! Feel free to check out some of my projects by exploring the navigation section above.</p>
        <a href="media/my-ethical-commitment.pdf" target="_blank">Check it out!</a>
    </div>
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
