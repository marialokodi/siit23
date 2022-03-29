let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let textArea = document.querySelector("#longText");
let firstNameInputs = "[]";

function submit() {
  firstNameInputs.push(firstName.value);
  console.log(firstNameInputs);
}
