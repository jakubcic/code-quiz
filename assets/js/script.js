// declare variables. need start button element, timer element,
// main question section element, question list element
var startBtn = document.querySelector("#startBtn");
var timer = document.querySelector("#timer");
var questionSection = document.querySelector("#questionSection");
var questionList = document.querySelector("#questionList");

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