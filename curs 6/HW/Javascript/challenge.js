/*using nested loop for generate the following pattern
0 1 0 1

1 0 1 0

0 1 0 1

1 0 1 0*/

function pattern1() {
  let str = "";
  let p = 0;
  for (let i = 0; i < 16; i++) {
    str += p;
    if (i % 4 === 3) {
      str += "\n";
      p = (p + 1) % 2;
    }
    p = (p + 1) % 2;
  }
  return str;
}

function pattern2() {
  let str = "";
  let p = 0;
  for (let i = 0; i < 16; i++) {
    str += p;
    if (i % 4 === 3) {
      str += "\n";
    } else {
      p = (p + 1) % 2;
    }
  }
  return str;
}
console.log(pattern1());
console.log(pattern2());
