
import registerFunctions from "./Template.js";

document.getElementById("add").addEventListener("click", () => {
    registerFunctions.addParticipant();
});
document.getElementById("registrationForm").addEventListener("submit", (event) => {
    registerFunctions.submitForm(event);
});
