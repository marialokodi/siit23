/*
O functie "getDigits" care primeste un sir de caractere si returneaza cifrele din sirul respectiv
*/
function getDigits(x) {
  let digits = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] >= 0 && x[i] <= 9) {
      digits += x[i];
    }
  }
  return digits;
}

/*
O functie "getLetters" care primeste un sir de caractere si returneaza doar literele din sirul respectiv
*/

function getLetters(x) {
  let litere = "";
  for (let i = 0; i < x.length; i++) {
    if ((x[i] >= "a" && x[i] <= "z") || (x[i] >= "A" && x[i] <= "Z")) {
      litere += x[i];
    }
  }
  return litere;
}
/*
O functie "getFirst5Letters" care primeste un sir de caractere si returneaza primele 5 litere(daca exista)
*/
function getFirst5Letters(x) {
  let litere = "";
  for (let i = 0; 5 > litere.length; i++) {
    if ((x[i] >= "a" && x[i] <= "z") || (x[i] >= "A" && x[i] <= "Z")) {
      litere += x[i];
    }
  }
  return litere;
}

/*
O functie "concatenate" care primeste o lista de siruri de caractere si returneaza sirurile concatenate
*/
function concatenate(arr) {
  let sirConcatenat = "";
  for (let i = 0; i < arr.length; i++) {
    sirConcatenat += arr[i];
  }
  return sirConcatenat;
}

/*
O functie "getAllDigits" care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile
*/
function getAllDigits(arr) {
  let digits = "";
  for (let i = 0; i < arr.length; i++) {
    digits += getDigits(arr[i]);
  }
  return digits;
}

/*
O functie "invertAllStrings" care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate
*/
function inversa(str) {
  let strInversat = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strInversat = strInversat + str[i];
  }
  return strInversat;
}

function invertAllStrings(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = inversa(arr[i]);
  }
  return arr;
}

/*
Calculeaza factorialul unui numar ("factorial")
*/
function factorial(x) {
  let factorial = 1;
  for (let i = 1; i <= x; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

/*
Calculeaza cel mai mare divizor comun al 2 numere ("cmmdc")
*/
function cmmdc(x, y) {
  let divizor = 0;
  for (let i = 1; i <= x; i++) {
    if (x % i === 0 && y % i === 0) {
      divizor = i;
    }
  }
  return divizor;
}

/*
Calculeaza cel mai mic multiplu comun al 2 numere ("cmmmc")
*/

function cmmmc(x, y) {
  let small, big;
  if (x > y) {
    big = x;
    small = y;
  } else {
    big = y;
    small = x;
  }
  let cmmmc = big;
  while (cmmmc % small !== 0) {
    cmmmc += big;
  }
  return cmmmc;
}

/*
Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori")
*/
function divizori(x) {
  let divizor = [];
  for (let i = 2; i <= x / 2; i++) {
    if (x % i === 0) {
      divizor.push(i);
    }
  }
  return divizor;
}

/*
O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom")
*/

function inversNum(x) {
  let reversedNum = 0;
  let latsDigit = 0;
  for (let i = 0; x > 0; i++) {
    latsDigit = x % 10;
    reversedNum = reversedNum * 10 + latsDigit;
    x = Math.floor(x / 10);
  }
  return reversedNum;
}
function palindrom(x) {
  if (x === inversNum(x)) {
    return true;
  } else {
    return false;
  }
}

/*
O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru. ("sort")
*/
function sort(x) {
  let pare = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
      pare.push(x[i]);
    }
  }
  pare.sort((a, b) => a - b);
  return pare;
}

/*
O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru. ("sortAscDesc")
*/
function sortAscDesc(x) {
  let arrayImpare = x;
  let arrayPare = x;
  let impare = [];
  let pare = [];
  for (let i = 0; i < arrayImpare.length; i++) {
    if (arrayImpare[i] % 2 !== 0) {
      impare.push(arrayImpare[i]);
    }
  }
  impare.sort((a, b) => b - a);
  for (let i = 0; i < arrayPare.length; i++) {
    if (arrayPare[i] % 2 === 0) {
      pare.push(arrayPare[i]);
    }
  }
  pare.sort((a, b) => a - b);

  return pare.concat(impare);
}

/*
O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch")
*/
function binarySearch(arr, num) {
  arr.sort((a, b) => a - b);

  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    const middle = lower + Math.floor((upper - lower) / 2);

    if (num === arr[middle]) {
      return true;
    }
    if (num < arr[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return false;
}

/*
O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch")
*/

function countBinarySearch(arr, num) {
  if (arr.length === 0) {
    return 1;
  }

  arr.sort((a, b) => a - b);

  let lower = 0;
  let upper = arr.length - 1;
  const middle = Math.floor(upper / 2);

  if (num === arr[middle]) {
    return 1;
  } else if (num < arr[middle]) {
    let arr1 = arr.slice(lower, middle - 1);
    return 1 + countBinarySearch(arr1, num);
  } else {
    let arr1 = arr.slice(middle + 1, upper);
    return 1 + countBinarySearch(arr1, num);
  }
}
