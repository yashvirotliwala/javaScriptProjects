let arr = [1, 2, 3, 4, 5, 6];

let k = 2;

k = k % arr.length;

let firstPart = arr.slice(0, k);
let secondPart = arr.slice(k);

let rotatedArray = secondPart.concat(firstPart);

console.log("Rotated Array:", rotatedArray);
