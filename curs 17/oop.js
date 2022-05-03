class Premiu {
  constructor(nume, an) {
    this.nume = nume;
    this.an = an;
  }
}
class Actor {
  constructor(nume, varsta, premiu) {
    this.nume = nume;
    this.varsta = varsta;
    this.premii = premiu;
  }
}
class Film {
  constructor(an_aparitie, nume, actor) {
    this.nume = nume;
    this.an_aparitie = an_aparitie;
    this.Actor = actor;
  }
}
class Studio {
  constructor(nume, film) {
    this.nume = nume;
    this.filme = film;
  }
}

let oscar1990 = new Premiu("oscar", 1990);
let oscar2000 = new Premiu("oscar", 2000);
let oscar2010 = new Premiu("oscar", 2010);
let oscar2018 = new Premiu("oscar", 2018);

let actorOscar1990 = new Actor("actor cu 2 oscaruri", 35, [
  oscar1990,
  oscar2000,
]);
let actorOscar2010 = new Actor("actor cu oscar din 2000", 55, [oscar2010]);
let actorOscar2018 = new Actor("actor cu oscar din 2018", 23, [oscar2018]);
let actorFaraPremii01 = new Actor("actor fara oscar 01", 33, []);
let actorFaraPremii02 = new Actor("actor fara oscar 02", 60, []);
let actorFaraPremii03 = new Actor("actor fara oscar 02", 20, []);

let film1 = new Film(1990, "film cu actori de oscar", [
  actorOscar1990,
  actorFaraPremii01,
]);
let film2 = new Film(2010, "film cu actori fara premii2", [
  actorFaraPremii01,
  actorFaraPremii02,
  actorFaraPremii03,
]);
let film3 = new Film(2010, "film cu actori fara premii3", [
  actorFaraPremii01,
  actorFaraPremii02,
  actorFaraPremii03,
]);
let film4 = new Film(2018, "film cu actori de oscar", [
  actorOscar2010,
  actorOscar2018,
  actorFaraPremii02,
]);
let film5 = new Film(2018, "film cu actori fara premii5", [
  actorFaraPremii02,
  actorFaraPremii03,
]);

let studio1 = new Studio("MGM", [film1, film2]);
let studio2 = new Studio("Disney", [film3, film4, film5]);

let studioDatabase = [studio1, studio2];

console.log("1");
for (let i = 0; i < studioDatabase.length; i++) {
  if (studioDatabase[i].filme.length > 2) {
    console.log(studioDatabase[i].nume);
  }
}

console.log("2");
for (let i = 0; i < studioDatabase.length; i++) {
  for (let k = 0; k < studioDatabase[i].filme.length; k++) {
    for (elem of studioDatabase[i].filme) {
      for (let j = 0; j < elem.Actor.length; j++) {
        if (elem.Actor[j].nume === "actor cu 2 oscaruri")
          console.log(studioDatabase[i].nume);
      }
    }
  }
}

console.log("3");
for (let i = 0; i < studioDatabase.length; i++) {
  for (elem of studioDatabase[i].filme) {
    for (let j = 0; j < elem.Actor.length; j++) {
      if (elem.Actor[j].varsta > 50) {
        console.log(elem.nume);
        break;
      }
    }
  }
}

console.log("4");
let numeActori = [];
let arrFilme = [film1, film2, film3, film4, film4];
for (filmElem of arrFilme) {
  for (actorElem of filmElem.Actor) {
    if (actorElem.premii.length > 0) {
    }
  }
}
console.log(numeActori);
