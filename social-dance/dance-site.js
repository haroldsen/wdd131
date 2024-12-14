
// 1. It should show some level of organization: at a minimum it should have more than one function (note that the file is organized in such a way that each page has
//     its own function designed to handle the dynamic elements of that page).
// 2. It should include DOM interaction: select an element (see line 115), modify it (see line 124), and listen for and react to events (see line 128).
// 3. It should show examples of conditional branching (see lines 9, 12, 16, and 19).
// 4. Each of the following should be used: Objects (see line 75), ES Modules (see line 7), Arrays (see line 98 of dances.mjs) and array method usage (see line 108).

import dances from './dances.mjs';

if (document.title === "C-Swing | Home") {
    console.log("HOME PAGE");
}
else if (document.title === "C-Swing | Tempo Finder") {
    console.log("TEMPO FINDER");
    tempoFinderPage();
}
else if (document.title === "C-Swing | Practice Videos") {
    console.log("PRACTICE VIDEOS");
}
else if (document.title === "C-Swing | Practice Music") {
    console.log("PRACTICE MUSIC");
    practiceMusicPage();
}

function tempoFinderPage() {
    const tempoSelector = document.querySelector("select");
    const spaceBar = document.getElementById("space-bar-container");
    const findTempoSection = document.getElementById("find-tempo-section");
    const displayTempoSection = document.getElementById("display-tempo-section");
    const tempoResultHeader = document.getElementById("tempo-result-header");

    function addButtonSVG() {
        const tempoButtonContainer = document.getElementById("space-bar-container");
        tempoButtonContainer.innerHTML = `
        <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 990.65 895">
            <defs>
                <style>
                .cls-1 {
                    fill: #ff7373;
                }
    
                .cls-2 {
                    fill: #994545;
                }
    
                .cls-3 {
                    fill: #ccc;
                }
                </style>
            </defs>
            <g id="Layer_1-2" data-name="Layer_1">
                <ellipse class="cls-3" cx="495.32" cy="485" rx="495.32" ry="410"/>
                <ellipse class="cls-2" cx="497.88" cy="451" rx="447" ry="370"/>
                <ellipse class="cls-1" cx="497.88" cy="370" rx="447" ry="370"/>
            </g>
        </svg>`;
    }
    
    addButtonSVG();

    function focusOnButton(event) {
        if (event.key === ' ') {
            spaceBar.focus();
        }
    }

    document.body.addEventListener("keypress", focusOnButton);

    let tempo = 0;

    let timeStamps = [];
    let timeDiff = 0;

    function handleSpaceClick() {
        // spaceBar.setAttribute("src", "button-down.svg");
        const now = new Date();
        timeStamps.push(now.getTime());
        timeDiff = timeStamps[timeStamps.length - 1] - timeStamps[0];
        // console.log(timeDiff);
        if (timeDiff > 20000) {
            tempo = (((timeStamps.length - 1) / timeDiff) * 60000).toFixed(2);
            updateDanceResultTable();
            findTempoSection.classList.toggle("hide");
            displayTempoSection.classList.toggle("hide");
            if (tempoSelector.value == "MPM") {
                tempoResultHeader.innerHTML = `This song is ${tempo} measures per minute!`;
            }
            else {
                tempoResultHeader.innerHTML = `This song is ${tempo} beats per minute!`;
            }
        }
    }

    spaceBar.addEventListener("click", handleSpaceClick);

    const danceTable = document.getElementById("dance-result-table");

    function updateDanceResultTable() {
        danceTable.innerHTML = `
            <tr id="result-table-header">
                <th>Dance</th>
                <th>Result</th>
                <th>Low</th>
                <th>High</th>
                <th>Speed To</th>
                <th>Stretch To</th>
            </tr>`

        dances.sort((a, b) => a.getDistanceToPerfectTempo(tempo, tempoSelector.value) - b.getDistanceToPerfectTempo(tempo, tempoSelector.value));

        for (let i = 0; i < dances.length; i ++) {
            danceTable.insertAdjacentHTML('beforeend', dances[i].getHTML(tempo, tempoSelector.value));
        }
    }

    const clickCounter = document.getElementById("click-counter");

    function updateClickCounterOnKey(event) {
        if (event.key === ' ') {
            clickCounter.innerHTML = `Click Count: ${timeStamps.length}`;
        }
    }

    function updateClickCounterOnClick() {
        clickCounter.innerHTML = `Click Count: ${timeStamps.length}`;
    }

    spaceBar.addEventListener("keypress", updateClickCounterOnKey);
    spaceBar.addEventListener("click", updateClickCounterOnClick);

    function changeTempoMeasurement() {
        const instructionsP = document.getElementById("tempo-instructions");
        timeStamps.length = 0;

        if (tempoSelector.value == "MPM") {
            instructionsP.innerHTML = "Begin pressing the button below for each measure.";
        }
        else {
            instructionsP.innerHTML = "Begin pressing the button below for each beat.";
        }
        clickCounter.innerHTML = "Click Count: 0";
    }

    tempoSelector.addEventListener('change', changeTempoMeasurement);

    const resetTempoFinderButtons = document.getElementsByClassName("reset-tempo-finder");

    function resetTempoFinder() {
        timeStamps.length = 0;
        if (findTempoSection.classList.contains("hide")) {
            findTempoSection.classList.toggle("hide");
            displayTempoSection.classList.toggle("hide");
        }
        clickCounter.innerHTML = "Click Count: 0";
    }

    for (let i = 0; i < resetTempoFinderButtons.length; i ++) {
        resetTempoFinderButtons[i].addEventListener("click", resetTempoFinder);
    }
}

function practiceMusicPage() {
    class PracticeSong {
        _name;
        _imgSrc;
        _imgAlt;
    
        constructor(name, imgSrc, imgAlt) {
            this._name = name;
            this._imgSrc = imgSrc;
            this._imgAlt = imgAlt;
        }
    
        toHTML() {
            return `
                <div class="songContainer">
                    <img src="${this._imgSrc}" alt="${this._imgAlt}" draggable="false">
                    <p>${this._name.replaceAll(" ", "&nbsp;")}</p>
                    <button class="green-button">Download</button>
                </div>
            `;
        }
    }

    let practiceSongs = [
        new PracticeSong("FOXTROT ONLY", "images/foxtrot.svg", "an image"),
        new PracticeSong("SWING ONLY", "images/swing.svg", "an image"),
        new PracticeSong("CHA CHA ONLY", "images/cha cha.svg", "an image"),
        new PracticeSong("WALTZ ONLY", "images/waltz.svg", "an image"),
        new PracticeSong("FOXTROT ONLY", "images/foxtrot.svg", "an image"),
        new PracticeSong("SWING ONLY", "images/swing.svg", "an image"),
        new PracticeSong("CHA CHA ONLY", "images/cha cha.svg", "an image"),
        new PracticeSong("WALTZ ONLY", "images/waltz.svg", "an image")
    ];

    const songResultsUl = document.getElementById("songResults");

    for (let i = 0; i < practiceSongs.length; i ++) {
        songResultsUl.insertAdjacentHTML("beforeend", `<li>${practiceSongs[i].toHTML()}</li>`);
    }
}

document.getElementById
