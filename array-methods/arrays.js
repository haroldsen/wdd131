
const steps = ["one", "two", "three"];
console.log(`steps: ${steps}`);

function toLi(step) {
    return `<li>${step}</li>`;
}
const stepsHtml = steps.map(toLi);
console.log(`stepsHtml: ${stepsHtml}`);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

const letterGrades = ['A', 'B', 'A'];
console.log(`letterGrades: ${letterGrades}`);
function letterToPointVal(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gradePoints = letterGrades.map(letterToPointVal);
console.log(`gradePoints: ${gradePoints}`);

const totalPoints = gradePoints.reduce(function (total, item) {
    return total + item;
});
const gpa = (totalPoints / gradePoints.length).toFixed(3);
console.log(`gpa: ${gpa}`);

const words =  ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
console.log(`words: ${words}`);
const shortWords = words.filter(function(word) {
    return word.length < 6;
})
console.log(`shortWords: ${shortWords}`);

const nums = [12, 34, 21, 54];
const luckyNum = 21;
console.log(`indexOfLuckyNumber: ${nums.indexOf(luckyNum)}`);
