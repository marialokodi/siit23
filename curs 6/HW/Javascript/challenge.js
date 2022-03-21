/*using nested loop for generate the following pattern
0 1 0 1

1 0 1 0

0 1 0 1

1 0 1 0*/

function pattern() {
  for (let i = 0; i < 4; i++) {
    for (let i = 0; i < 4; i++) {
      if (i % 2 === 0) {
        console.log(0);
      } else {
        console.log(1);
      }
    }
    /*    for (let i = 0; i < 4; i++) {
      if (i % 2 === 0) {
        return 1;
      } else {
        return 0;
      }
    }
    for (let i = 0; i < 4; i++) {
      if (i % 2 === 0) {
        return 0;
      } else {
        return 1;
      }
    }
    for (let i = 0; i < 4; i++) {
      if (i % 2 === 0) {
        return 1;
      } else {
        return 0;
      }
    }*/
  }
}
console.log(pattern());
