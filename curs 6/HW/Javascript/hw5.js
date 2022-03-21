//compute how many times a certain element appears in an array
function hasDuplicates(x) {
  let sumDuplicates = 0;

  for (let i = 1; i <= x.length; i++) {
    for (let j = 0; j <= x.length; j++) {
      if (i != j) {
        if (x[i] === x[j]) {
          sumDuplicates = sumDuplicates + x[i];
        }
      }
    }
  }
  return sumDuplicates;
}

console.log(hasDuplicates([4, 1, 8, 1, 11]));
console.log(hasDuplicates([4, 5, 11]));
