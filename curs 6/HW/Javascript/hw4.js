//compute the maximum of the elements of an array and display it in the console
function max(x) {
  let max = x[0];

  for (let i = 1; i <= x.length; i++) {
    if (x[i] > max) max = x[i];
  }

  return max;
}

console.log(max([4, 5, 8, 1, 11]));
console.log(max([4, 5, 11]));
console.log(max([1, 2, 3, 4]));
