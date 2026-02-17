let sentence = "JavaScript is a programming language";

let words = sentence.split(" ");

let longestWord = words[0];

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}
 
console.log("Longest word is:", longestWord);
