
function getGradesFrom(elementId) {
    const gradeInput = document.getElementById(elementId);
    const grades = gradeInput.value.split(',');
    const formattedGrades = grades.map(grade => grade.toUpperCase().trim());
    return formattedGrades;
}

function letterToPointVal(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    } else if (grade === "C") {
        points = 2;
    } else if (grade === "D") {
        points = 1;
    }
    console.log(`Converted ${grade} to ${points}.`);
    return points;
}

function calculateGpa(grades) {
    let total = 0;
    for (let i = 0; i < grades.length; i ++) {
        total += letterToPointVal(grades[i]);
    }
    gpa = total / grades.length;
    console.log(`Total Points: ${total} Number of Assignments: ${grades.length}`);
    return gpa.toFixed(2);
}

function updateGpaBox(gpa, elementId) {
    const displayBox = document.getElementById(elementId);
    displayBox.innerHTML = gpa;
}

function clickHandler() {
    const grades = getGradesFrom("grades");
    const gpa = calculateGpa(grades);
    updateGpaBox(gpa, "output");
}

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", clickHandler);
