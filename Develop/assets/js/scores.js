var highScoresEl = document.querySelector("#highscores");
var clearBtnEl = document.querySelector("#clear");


function printHighscores() {
  highScoresEl.innerHTML = "";
  // either get scores from localstorage or set to empty array
  highScores = JSON.parse(localStorage.getItem("High Scores"));
  console.log(highScores)
  // (optional) sort highscores by score property in descending order

  // for each score
  for (var i = 0; i < highScores.length; i++) {
    // create li tag for each high score
    var li = document.createElement("li");
    li.textContent = (highScores[i].Initials + ": " + highScores[i].Score);
    // display on page
    highScoresEl.appendChild(li);

  };
};

function clearHighscores() {
  highScoresEl.innerHTML = "";
  localStorage.removeItem("High Scores");
}

window.onload = printHighscores;

// attache clear event to clear score button
clearBtnEl.onclick = (clearHighscores);
// run printhighscore when page loads
