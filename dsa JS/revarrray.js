
let array1 = [1, 2, 3, 4, 5];
let reversedArray1 = array.reverse();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]


let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]


let array2 = [1, 2, 3, 4, 5];

for (let i = 0; i < Math.floor(array2.length / 2); i++) {
  let temp = array2[i];
  array2[i] = array2[array2.length - 1 - i];
  array2[array2.length - 1 - i] = temp;
}

console.log(array); // Output: [5, 4, 3, 2, 1]