//compute the sum of the elements of an array and display it in the console
function suma(x) {
  let sumaNum = x[0];
  for (let i = 1; i <= x.length; i++) {
    sumaNum = sumaNum + x[i];
  }
  return sumaNum;
}

console.log(suma([1, 2, 3, 4, 5]));
console.log(suma([1, 4, 5]));
console.log(suma([1, 1, 1]));
