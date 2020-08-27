// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 10;
var timerId;
var currentQuestion;
var userScore = 0;
var timer;


// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var startScreenEl = document.getElementById("start-screen");
var questionTextEl = document.getElementById("question-title");
var endScreenEl = document.getElementById("end-screen");
var finalScoreEl = document.getElementById("final-score");
var initialsEl = document.getElementById("initials");

var highScores;

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  startScreenEl.className = "hide";
  // un-hide questions section
  questionsEl.className = "start";
  // start timer
  var timer = setInterval(function() {
    time--;
  // show starting time
    timerEl.textContent = time;
    if (time <= 0) {
      clearInterval(timer);
      quizEnd();
    }
  }, 1000);
  getQuestion();
};  

function getQuestion() {
  // get current question object from array
  currentQuestion = questions[currentQuestionIndex];
  
  // update title with current question
  questionTextEl.textContent = currentQuestion.title;
  
  // clear out any old question choices
  choicesEl.innerHTML = "";
  // loop over choices
  for (var i=0; i<currentQuestion.choices.length; i++) {
    // create new button for each choice
    var choice = document.createElement("button");
    choice.className = currentQuestion.choices[i];
    choice.textContent = currentQuestion.choices[i];

    // attach click event listener to each choice
    choice.onclick = questionClick;

    // display on the page;
    choicesEl.appendChild(choice);
  };
};

function questionClick() {
  event.stopPropagation();
  
  // check if user guessed right
  if (event.target.textContent === currentQuestion.answer) {
  
    // play "right" sound effect
    // add 10 points to user score
    userScore += 10;
    // sfxRight.play();
    choicesEl.innerHTML = "<h1>CORRECT</h1>";
    choicesEl.style.color = "green";

  } else {
      // penalize time
      time = time - 10;
  
      // display new time on page
      // play "wrong" sound effect
      // sfxWrong.play();
      choicesEl.innerHTML = "<h1>WRONG</h1>";
      choicesEl.style.color = "red";

  };  
  // flash right/wrong feedback on page for half a second
  // move to next question
  currentQuestionIndex++;
  // check if we've run out of questions
  if (currentQuestionIndex > questions.length - 1) {
    setTimeout(quizEnd, 500);
  } else {
    setTimeout(getQuestion, 500);
  }
};

function quizEnd() {
  // stop timer
  // clearInterval(timer);
  timerEl.textContent = 0;

  // show final score
  finalScoreEl.textContent = userScore;

  // hide questions section
  questionsEl.className = "hide";

  // show end screen  
  endScreenEl.className = "start";
};

// function clockTick() {
//   // update time

//   // check if user ran out of time
// }

function saveHighscore() {
  // get value of input box
  var userInitials = initialsEl.value;
    
  // make sure value wasn't empty
  if (userInitials === "") {
    alert("Enter your initials, stupid.");
  }

    // get saved scores from localstorage, or if not any, set to empty array
  highScores = JSON.parse(localStorage.getItem("High Scores"));

  if (highScores == null) {
    highScores = [];
  }

    // format new score object for current user
    var user = {
      Initials: userInitials,
      Score: userScore,
    } 

    // save to localstorage
    highScores.push(user);

    localStorage.setItem("High Scores", JSON.stringify(highScores));

    // redirect to next page
    window.location.href = "./highscores.html";

    printHighscores();
}

function checkForEnter(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
  saveHighscore();
  };
};

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
