var gameNumberEl = document.getElementById("game-number");
  var gameContainerEl = document.getElementById("game-container");
  var rockBtnEl = document.getElementById("rock");
  var paperBtnEl = document.getElementById("paper");
  var scissorBtnEl = document.getElementById("scissors");
  var computerChooseEl = document.getElementById("computer-choose");
  var roundResultEl = document.getElementById("round-result");
  var userPointsEl = document.getElementById("user-points");
  var computerPointsEl = document.getElementById("computer-points");
  var roundsLeftEl = document.getElementById("rounds-left");
  var gameResultEl = document.getElementById("game-result");
 

  const ROCK = 0;
  const PAPER = 1;
  const SCISSORS = 2;
 

  function playGame() {
  userPoints = 0;
  userPointsEl.innerText = 0;
  computerPoints = 0;
  computerPointsEl.innerText = 0;
 

  roundsLeft = parseInt(gameNumberEl.value, 10);
  if (roundsLeft < 0) {
  alert("Number of turns cannot be -ve");
  } else {
  roundsLeftEl.innerText = roundsLeft;
  gameContainerEl.style.display = "block";