let str = "nayan"


let reversedStr = str.split("").reverse().join("")
console.log(reversedStr)

if(str == reversedStr){
    console.log("it is palindrome....")
} else{
    console.log("it is not palindrome....")
}