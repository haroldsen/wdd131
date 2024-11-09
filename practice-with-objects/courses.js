// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T"
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "TTh",
            instructor: "Sis A"
        }
    ],
    changeEnrollment: function(sectionNum, numToAdd) {
        for (let i = 0; i < this.sections.length; i ++) {
            if (this.sections[i].sectionNum == sectionNum) {
                this.sections[i].enrolled = this.sections[i].enrolled + numToAdd;
            }
        }
        renderSections(this.sections);
    }
};

function updateCourseAttributesInHTML(courseObj) {
    const courseName = document.getElementById("courseName");
    const courseCode = document.getElementById("courseCode");
    courseName.innerHTML = `${courseObj.name}`;
    courseCode.innerHTML = `${courseObj.code}`;
}

function renderSection(sectionObj) {
    const sectionsTable = document.getElementById("sections");
    const HTML = `
        <tr>
            <td>${sectionObj.sectionNum}</td>
            <td>${sectionObj.roomNum}</td>
            <td>${sectionObj.enrolled}</td>
            <td>${sectionObj.days}</td>
            <td>${sectionObj.instructor}</td>
        </tr>
    `;
    sectionsTable.insertAdjacentHTML("beforeend", HTML);
}

function renderSections(listOfSectionObj) {
    document.getElementById("sections").innerHTML = "";
    listOfSectionObj.map(renderSection);
}

updateCourseAttributesInHTML(aCourse);
renderSections(aCourse.sections);
document.getElementById("enrollStudent").addEventListener("click", aCourse.enrollStudent);
document.getElementById("dropStudent").addEventListener("click", aCourse.dropStudent);

function handleClick(e) {
    const triggeredElem = e.target;
    const sectionNumParam = document.getElementById("sectionNumber").value;
    if (triggeredElem.id === "enrollStudent") {
        aCourse.changeEnrollment(sectionNumParam, 1);
    }
    else if (triggeredElem.id === "dropStudent") {
        aCourse.changeEnrollment(sectionNumParam, -1);
    }
}

document.body.addEventListener("click", handleClick);
