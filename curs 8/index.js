function par(nr) {
  let rezultat;
  if (nr % 2 === 0) {
    rezultat = "par";
  } else {
    rezultat = "impar";
  }
  return rezultat;
}

function clickMe() {
  let input1 = document.querySelector("#numar1");
  let input2 = document.querySelector("#numar2");
  let numar1 = Number(input1.value);
  let numar2 = Number(input2.value);
  if (isNaN(numar1) || numar1 < 30 || numar1 > 250) {
    input1.classList.add("error");
  } else {
    input1.classList.remove("error");
  }
  if (isNaN(numar2) || numar2 < 1 || numar2 > 2.2) {
    input2.classList.add("error");
  } else {
    input2.classList.remove("error");
  }

  /* if (isNaN(numar1)) {
    //utilizatorul nu a scris ce trebuie in prima casuta
    input1.classList.add("error");
  } else {
    input1.classList.remove("error");
  }
  if (isNaN(numar2)) {
    //utilizatorul nu a scris ce trebuie in prima casuta
    input2.classList.add("error");
  } else {
    input2.classList.remove("error");
     let maxNum = maxim(numar1, numar2);
  let div = document.querySelector("#result");
  div.innerHTML = `Dintre ${numar1} si ${numar2}, <b>${maxNum}</b> este mai mare`;
  }*/
  let BMI = BMICalculator(numar1, numar2);
  let div = document.querySelector("#result");
  div.innerHTML = `Omul cu greutatea ${numar1} kg si inaltimea ${numar2} m, este <b>${BMI}</b>`;
}

function maxim(numar1, numar2) {
  if (numar1 > numar2) {
    return numar1;
  }
  return numar2;
}

function BMICalculator(greutate, inaltime) {
  let bmi;
  bmi = greutate / (inaltime * inaltime);
  let tip;
  if (bmi < 20) {
    tip = "subponderal";
  } else if (bmi < 25) {
    tip = "normal";
  } else if (bmi < 30) {
    tip = "supraponderal";
  } else if (bmi < 40) {
    tip = "obez";
  } else {
    tip = "bolnav";
  }
  return `${tip}`;
}
