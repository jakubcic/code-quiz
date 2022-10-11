// declare variables. need start button element, timer element,
// main question section element, question list element
var startBtn = document.querySelector("#startBtn");
var timer = document.querySelector("#timer");
var questionSection = document.querySelector("#questionSection");
var questionList = document.querySelector("#questionList");

// questions array will contain an object for each question of the quiz
// where the question, possible answers, and the true answer are held
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts"
  },
  {
    question: "The condition in an if /else statement is enclosed within _____.",
    options: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    answer: "3. parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: "4. all of the above"
  },
  {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the console is _____.",
    options: ["1. JavaScript", "2. terminal", "3. print", "4. console.log"],
    answer: "4. console.log"
  }
]

// start a time interval when the startBtn is clicked
// and display the quiz questions
startBtn.addEventListener("click", function (){
  let timeInterval = 0;
  let timeLeft = 75;
  if (timeInterval === 0){
    timeInterval = setInterval(function (){
      timeLeft--;
      timer.textContent = "Time: " + timeLeft;

      if (timeLeft === 0) {
        clearInterval(timeInterval);
        timer.textContent = "You're out of time!";
      }
    }, 1000);
  }
  // call a function to display questions
})