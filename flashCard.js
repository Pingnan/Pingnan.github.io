document.getElementById("problem").addEventListener("mousedown", showAnswer);
document.getElementById("answer").addEventListener("mouseout", showProblem);

function showAnswer() {
  document.getElementById("problem").style.display = "none";
  document.getElementById("answer").style.display = "block";
}

function showProblem() {
  document.getElementById("problem").style.display = "block";
  document.getElementById("answer").style.display = "none";
}
