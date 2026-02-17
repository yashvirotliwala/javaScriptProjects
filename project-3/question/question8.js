let arr = [10,3,7,20,9]

let sortArr = arr.sort((a,b) => a-b)

console.log("second smallest number : ",sortArr[1])
console.log("second largest number : ",sortArr[sortArr.length - 2])