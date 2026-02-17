let str1 = "eat"
let str2 = "tea"

if(str1.length != str2.length){
    console.log("it is not anagrams...")
} else{
    let sortStr1 = str1.split("").sort().join('')
    let sortStr2 = str2.split("").sort().join('')

    if(sortStr1  == sortStr2){
        console.log("it is anagrams...")
    } else{
        console.log("it is not anagrams...")
    }
}