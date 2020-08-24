// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
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
var questionTextEl = document.getElementById("question-title")


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
    if (time === 0) {
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
  console.log(event.target.textContent);
  console.log(currentQuestion.answer);
    // play "right" sound effect

    // add 10 points to user score
    userScore += 10;
    console.log(userScore);

  } else {
      // penalize time
      time = time - 10;
  
      // display new time on page
      timerEl.textContent = time;
  
      // play "wrong" sound effect

  };  
  // flash right/wrong feedback on page for half a second

  // move to next question
  currentQuestionIndex++;
  // check if we've run out of questions
  if (currentQuestionIndex > questions.length - 1) {
    quizEnd();
  } else {
    getQuestion();
  }
};

function quizEnd() {
  // stop timer
  time = 0;
  clearInterval(timer);

  // show end screen

  // show final score

  // hide questions section
}

function clockTick() {
  // update time

  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
    // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
