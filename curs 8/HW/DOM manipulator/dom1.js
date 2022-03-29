function validateFirstName(input) {
  let valid = input.value.length >= 3;
  showError(input, valid);
}
function validateLastName(input) {
  let valid = input.value.length >= 3;
  showError(input, valid);
}

function showError(input, valid) {
  if (valid) {
    input.classList.remove("error");
  } else {
    input.classList.add("error");
  }
}

function valideazaFormular(event) {
  event.preventDefault();

  let firstname = document.querySelector("[name = 'firstname']");
  let lastname = document.querySelector("[name = 'lastname']");
  let message = document.querySelector("[name = 'description']");
  let contacting = document.querySelector("span");
  let container1 = document.querySelector("#container1");

  firstname.onchange();
  lastname.onchange();

  // valideazaPrenume(firstname);
  // valideazaNume(lastname);

  let gender = document.querySelector("[name = 'gender']:checked");
  if (gender === null) {
    //atunci nu e bifat genderul
    let allGender = document.querySelectorAll("[name = 'gender']");
    for (let radio of allGender) {
      radio.classList.add("error");
    }
  }
  if (firstname !== null && lastname !== 0 && gender !== 0) {
    container1.classList.remove("hidden");
    contacting.innerHTML = firstname.value;
    let person = {
      firstName: firstname.value,
      lastName: lastname.value,
      gender: gender.value,
      message: message.value,
    };
    console.log(person);
  }
}

function cancel() {
  container1.classList.add("hidden");
}
