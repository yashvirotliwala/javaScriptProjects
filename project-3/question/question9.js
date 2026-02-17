let arr = [2, 4, 7, 9, 11, 15, 17, 20, 23];

for (let i = 0; i < arr.length; i++) {

    let num = arr[i];
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(num);
    }
}