// declare variables. need start button element, timer element,
// main question section element, question list element
var startBtnEl = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var questionSectionEl = document.querySelector("#questionSection");
var questionListEl = document.querySelector("#questionList");

var timeInterval = 0;
var timeLeft = 75;
var correctAnswersCount = 0

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

// start a time interval when the startBtnEl is clicked
// and display the quiz questions
startBtnEl.addEventListener("click", function (){

  if (timeInterval === 0){
    timeInterval = setInterval(function (){
      timeLeft--;
      timerEl.textContent = "Time: " + timeLeft;

      if (timeLeft === 0) {
        clearInterval(timeInterval);
        timerEl.textContent = "You're out of time!";
      }
    }, 1000);
  }
  // call a function to display questions
  displayQuestion(questionIndex)
})

// need to track which question we're on
var questionIndex = 0;

// need a function to display questions to user
function displayQuestion(questionIndex){
  // clear the screen
  questionSectionEl.innerHTML = "";
  questionListEl.innerHTML = "";
  startBtnEl.style.visibility = "hidden";
var questionHeading = document.createElement("h1");
  // loop through each question
  for (let i = 0; i < questions.length; i++) {
    var currentQuestion = questions[questionIndex].question;
    var currentOptions = questions[questionIndex].options;
    questionHeading.textContent = currentQuestion;
    questionSectionEl.appendChild(questionHeading);
  }

  // loop through each option for the currentQuestion
  // and display in a list
  for (let j = 0; j < currentOptions.length; j++) {
    var listItem = document.createElement("li");
    listItem.textContent = currentOptions[j];
    questionSectionEl.appendChild(questionListEl);
    questionListEl.appendChild(listItem);
    // add event listener to each option and call a function 
    //to check the users choice versus
    // the actual answer (questions[questionIndex].answer])
    listItem.addEventListener("click", (checkAnswer));
  }
}

// track user score. Score will be equal to the timeLeft
// minus a time penalty for incorrect answers
//var score = timeLeft
//var penalty = 10

function checkAnswer(event){
  var clickTarget = event.target;
  var penalty = 10;
  // check if we clicked on a list item
  if (clickTarget.matches("li")) {
    

    var displayMessageEl = document.createElement("div");
    displayMessageEl.setAttribute("id", "displayMessage");

    // correct answer
    var correctAnswer = questions[questionIndex].answer;

    if (clickTarget.textContent == correctAnswer){
      correctAnswersCount++;
      console.log(correctAnswersCount);
      displayMessageEl.textContent = "Correct!";
    } else {
      // incorrect answer 
      timeLeft = timeLeft - penalty;
      displayMessageEl.textContent = "Incorrect!";
    }
  }
  // iterate the questionIndex
  questionIndex++;

  // if we reach the end of the questions (compare question index
  // to the length of the questions array) then compelte the quiz
  if (questionIndex == questions.length){
    displayMessageEl.textContent = "You answered " + correctAnswersCount + "/" + questions.length + " questions correctly.";
    quizComplete();
  } else {
    displayQuestion(questionIndex);
  }
  questionSectionEl.appendChild(displayMessageEl)
}

function quizComplete(){
  questionSectionEl.innerHTML = "";

  var scoreHeading = document.createElement("h1");
  scoreHeading.setAttribute("id", "scoreHeading");
  scoreHeading.textContent = "All done!"
  questionSectionEl.appendChild(scoreHeading);

  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");
  questionSectionEl.appendChild(createP);

  if (timeLeft >= 0) {
    clearInterval(timeInterval);
    createP.textContent = "Your final score is: " + timeLeft;
  }

  var inputLabel = document.createElement("label");
  inputLabel.setAttribute("for", "initials");
  inputLabel.textContent = "Enter your initials: ";

  questionSectionEl.appendChild(inputLabel);

  var initialsInput = document.createElement("input");
  initialsInput.setAttribute("type", "text");
  initialsInput.setAttribute("id", "initials");
  initialsInput.textContent = "";

  questionSectionEl.appendChild(initialsInput);

  var submission = document.createElement("button");
  submission.setAttribute("type", "submit");
  submission.setAttribute("class", "buttonStyles");
  submission.setAttribute("id", "submit");
  submission.textContent = "Submit";
  questionSectionEl.appendChild(submission);

  // event listener for initial input/submission
  submission.addEventListener("click", function(){
  
    var initials = initialsInput.value;

    // object to store user initials and score
    var userScore = {
      initials: initials,
      score: timeLeft
    }
    // create array of scores to store in localStorage
    var scoreList = localStorage.getItem("scoreList");
    if (scoreList === null) {
      scoreList = [];
    } else {
      // if scoreList already exists, grab the scoreList
      scoreList = JSON.parse(scoreList);
      console.log(scoreList);
    }
    // add newest score to scoreList array
    scoreList.push(userScore);
    console.log(scoreList);
    // 
    var newScore = JSON.stringify(scoreList);
    localStorage.setItem("scoreList", newScore);
    // load the scoreboard
    window.location.href = "scoreboard.html"

    }
  );
}
