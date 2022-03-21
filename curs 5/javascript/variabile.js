let t; //are valoare undefined, cand nu am asignat nimic
let t2 = null; //daca vrei sa aiba ceva o valoare care sa nu te deranjeze ii dai null, inseamna lipsa valorii
let numara = 1;
let numarCuVirgula = 1.5;
let sirDeCaractere = "Ana Are mere"; /*String*/
let sirDeCaractere2 = "Ana Are mere !!!";
let boolTrue = true;
let boolFalse = false;

//comentariu de sfarsit de linie
/* 
comentariu pe mai multe linii
*/
numar = 1 + 2;
numar = numar * 2;
numarCuVirgula = 1 + 2 * 3 - 7;
numar *= 2; //inseamna numar = numar * 2;
numar += 2; //inseamna numar = numar + 2;
numar -= 2; //inseamna numar = numar - 2;
numar /= 2; //inseamna numar = numar / 2;
numar++; //inseamna numar = numar + 1;
numar--; //inseamna numar = numar - 1;
numar = numar % 2; // inseamna restul impartirii;
numar = numar ** 3; //la puterea 3;
numar = Math.pow(numar, 3); //la puterea 3;

//sir de caractere (string)
let sir = "A" + "B"; //un nou sir de caractere "AB", concatenare
sir += "Mergeee";

let nuFaceAsta = 3 + "A"; //3A
let nuFaceAsta2 = 2 + 3 + "A"; //5A
let nuFaceAsta3 = B + 2 + 3 + "A"; //B23A
let nuFaceAsta4 = B + (2 + 3) + "A"; //B5A

//boolean
//true(1) si false(0)

//!true => false
//!false => true

//AND && inmultire
let x = true && false;

//OR || adunare
let y = true || false;

if (conditie) {
  //in cazul in care conditia este adevarata
} else {
  //in cazul in care conditia este falsa
}

//===================================

let ghiciNumarul = 5;
let numarIncercari = 3;
let xx = "5";

let yy = xx + ghiciNumarul;

if (ghiciNumarul === 6) {
  numarIncercari--;
} else {
  alert("Bravo ai ghicit");
}

//egalitate === (strict)
//diferit !== (strict)
//mai mare >
//mai mic >
//mai mare sau egal <=
//mai mic sau egal >=
// negare !

('ana are "3" mere'); //ana are "3" mere
/*
5.5===5.5
5.6!==5.7
5.0===5
*/

if (ghiciNumarul % 3 === 2) {
  alert("Numarul " + ghiciNumarul + " este par");
} else if (ghiciNumarul % 3 === 1) {
  alert("Numarul " + ghiciNumarul + " este par");
} else {
  alert(`Numarul ${ghiciNumarul} este impar`);
}

if (true) x = 5; //nu e correct fara acolade {}

//creare de bucatie de cod reutilizabile cu functii
function clatite(parametrii) {
  //instructiunile care vreau sa le execut in functie
  //sparg oua
  //pun faina
  //le bat
  //le prajesc
  //deobicei o functie returneaza o valoare

  return clatita; //ne e la fel ca si numele functiei, poti dar nu e recomandat
}

function par(nr) {
  let rezultat;
  if (nr % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

function par(nr) {
  let rezultat;
  if (nr % 2 === 0) {
    rezultat = "par";
  } else {
    rezultat = "impar";
  }
  return rezultat;
}

let u = par(5);

//functiile ne ajuta la refolosirea unui bloc de cod, un set de instructiuni
//functiunile care nu returneaza nimic sunt proceduri in alte limbi
//in js daca a functie nu returneaza nimic atunci returneaza undefined
