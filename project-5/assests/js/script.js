let timer;
let timeLeft = 60;
let score = 0;


function startQuiz(){

let name = document.getElementById("username").value;

if(name === ""){
alert("Please enter your name");
return;
}

document.getElementById("displayName").innerText = name;

document.getElementById("welcome").style.display="none";
document.getElementById("countdownCard").style.display="block";

startCountdown();
}

function startCountdown(){

let count = 3;
document.getElementById("countNumber").innerText = count;

let interval = setInterval(()=>{

count--;

document.getElementById("countNumber").innerText = count;

if(count === 0){

clearInterval(interval);

setTimeout(()=>{

document.getElementById("countdownCard").style.display="none";
document.getElementById("quiz").style.display="block";

loadQuestion();
startTimer();

},1000);

}

},1000);

}

const questions = [

{
question: "What is the primary goal of sales?",
options: [
"To improve employee morale",
"To generate revenue",
"To increase website traffic",
"To test new CRMs"
],
answer: 1
},

{
question: "What does CRM stand for?",
options: [
"Customer Relationship Management",
"Company Revenue Model",
"Customer Revenue Management",
"Client Record Method"
],
answer: 0
},

{
question: "Which skill is most important for a salesperson?",
options: [
"Cooking",
"Communication",
"Driving",
"Drawing"
],
answer: 1
},

{
question: "What is a sales lead?",
options: [
"A potential customer",
"A company manager",
"A sales report",
"A product design"
],
answer: 0
},

{
question: "What helps in building long-term customer relationships?",
options: [
"Ignoring customer feedback",
"Providing good customer service",
"Increasing prices frequently",
"Avoiding communication"
],
answer: 1
},

{
question: "What is upselling?",
options: [
"Selling a cheaper product",
"Encouraging customers to buy a more expensive product",
"Returning a product",
"Ignoring customer needs"
],
answer: 1
},

{
question: "Which tool is commonly used to manage customer data?",
options: [
"CRM Software",
"Paint",
"Calculator",
"Video Player"
],
answer: 0
},

{
question: "What is the first step in the sales process?",
options: [
"Closing the sale",
"Finding potential customers",
"Sending invoices",
"Providing discounts"
],
answer: 1
},

{
question: "What does closing a sale mean?",
options: [
"Ending communication with the customer",
"Completing the purchase process",
"Canceling an order",
"Sending a product back"
],
answer: 1
},

{
question: "Why is understanding customer needs important?",
options: [
"To ignore their problems",
"To sell the right product",
"To increase complaints",
"To delay service"
],
answer: 1
}

];

let currentQuestion = 0;

function loadQuestion(){

let q = questions[currentQuestion];

document.getElementById("question").innerText = q.question;

let optionsHTML = "";

q.options.forEach((option,index)=>{

optionsHTML += `
<label class="option">
<input type="radio" name="quiz" value="${index}">
<span>${option}</span>
</label>
`;

});

document.getElementById("options").innerHTML = optionsHTML;

}



function nextQuestion(){

let selected = document.querySelector('input[name="quiz"]:checked');

if(!selected){
alert("Please select an answer");
return;
}

let answer = selected.value;

let options = document.querySelectorAll(".option");
let correctIndex = questions[currentQuestion].answer;

options[correctIndex].classList.add("correct");

if(answer == correctIndex){
score++;
}

setTimeout(()=>{

currentQuestion++;

if(currentQuestion < questions.length){
loadQuestion();
}else{
showResult();
}

},800);

}

function startTimer(){

timer = setInterval(()=>{

timeLeft--;

document.getElementById("time").innerHTML = timeLeft;

if(timeLeft <= 0){
clearInterval(timer);
alert("Time is up!");
}

},1000);

}

function goHome(){

document.getElementById("quiz").style.display="none";
document.getElementById("welcome").style.display="block";

clearInterval(timer);

timeLeft = 60;
document.getElementById("time").innerText = 60;

}

function showResult(){

document.getElementById("quiz").style.display="none";
document.getElementById("resultCard").style.display="block";

let name = document.getElementById("displayName").innerText;

document.getElementById("resultName").innerText = "Player : " + name;
document.getElementById("finalScore").innerText = score + " / " + questions.length;

let message = "";

if(score <= 3){
message = "Keep trying 👍";
}
else if(score <= 5){
message = "Average 🙂";
}
else if(score <= 7){
message = "Good Job 👏";
}
else if(score == 10){
message = "Excellent! Congratulations 🎉";
}
else{
message = "Very Good 👏";
}

document.getElementById("resultMessage").innerText = message;

clearInterval(timer);

document.getElementById("quiz").style.display="none";
document.getElementById("resultCard").style.display="block";

}

function restartQuiz(){

score = 0;
currentQuestion = 0;
timeLeft = 60;

clearInterval(timer);


document.getElementById("resultCard").style.display = "none";
document.getElementById("countdownCard").style.display = "block";
document.getElementById("quiz").style.display = "none";

document.getElementById("time").innerText = 60;

startCountdown();

}