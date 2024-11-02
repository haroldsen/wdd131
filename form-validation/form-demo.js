// form-demo.js
function validateForm(event) {
  const theForm = event.target;

  const errors = [];
  let isValid = true;

  if (theForm.fullName.value != "Bob") {
    isValid = false;
    errors.push(`Only people named "Bob" can submit the form.`);
  }
  if (theForm.paymentMethod.value === "Credit Card") {
    if (theForm.cardInput.value !== "1234123412341234") {
      isValid = false;
      errors.push("The provided credit card is not valid.");
    }
  }
  console.log(`name: ${theForm.fullName.value} number: ${theForm.cardInput.value}`);

  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}
  
const paymentMethod = document.getElementById("payment-method");

function togglePaymentDetails(e) {
  const theForm = document.getElementById("checkoutForm");
  const creditCardContainer = document.getElementById("card-container");
  const paypalContainer = document.getElementById("paypal-container");
  const paypalInput = document.getElementById("paypal");
  const cardInput = document.getElementById("card-number");

  if (paymentMethod.value == "Credit Card") {
      paypalContainer.classList.add("hide");
      creditCardContainer.classList.remove("hide");
      paypalInput.required = false;
      cardInput.required = true;
  }
  else if (paymentMethod.value == "PayPal") {
      paypalContainer.classList.remove("hide");
      creditCardContainer.classList.add("hide");
      paypalInput.required = true;
      cardInput.required = false;
  }
  else {
    paypalContainer.classList.add("hide");
    creditCardContainer.classList.add("hide");
    paypalInput.required = false;
    cardInput.required = false;
  }
}
  
  // helper function to display our errors.
function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}
// attach a change event handler to the paymentMethod input
paymentMethod.addEventListener("change", togglePaymentDetails);
// attach a submit event handler to the form
document.addEventListener("submit", validateForm);