
let beatCount = 0;
let timeStamps = [];
let timeDiff = 0;

function goToResults() {
    document.getElementById('find-tempo-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'flex';
}

function goToTempoFind() {
    beatCount = 0;
    timeStamps = [];
    timeDiff = 0;
    updateBeatCount();
    document.getElementById('find-tempo-section').style.display = 'flex';
    document.getElementById('results-section').style.display = 'none';
}

function updateBeatCount() {
    document.getElementById('beat-count').innerHTML = beatCount;
}

function handleTempoClick() {
    beatCount ++;
    updateBeatCount();
    const now = new Date();
    timeStamps.push(now.getTime());
    timeDiff = timeStamps[timeStamps.length - 1] - timeStamps[0];
    if (timeDiff > 1000) {
        tempo = (((timeStamps.length - 1) / timeDiff) * 60000).toFixed(2);
        // updateDanceResultTable();
        // update bpm text
        goToResults();
    }
}

function reset() {
    beatCount = 0;
    timeStamps = [];
    timeDiff = 0;
    updateBeatCount();
    goToTempoFind();
}

updateBeatCount();

document.getElementById('reset-button').addEventListener('click', reset);
document.getElementById('tempo-clicker').addEventListener('click', handleTempoClick);
// document.getElementById('tempo-clicker').addEventListener('click', goToResults);
document.getElementById('find-another-tempo-button').addEventListener('click', goToTempoFind);
