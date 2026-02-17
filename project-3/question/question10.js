let arr = [1, 2, 3, 2, 4, 5, 1, 6, 3];

let unique = [];

for (let i = 0; i < arr.length; i++) {

    let isDuplicate = false;

    for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        unique.push(arr[i]);
    }
}
console.log(unique);