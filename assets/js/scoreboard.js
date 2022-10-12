var clearBtnEl = document.querySelector("#clearBtn");
var backBtnEl = document.querySelector("#backBtn");
var scoreListDisplay = document.querySelector("#scoreListDisplay");

// event listener for Clear Scores button
clearBtnEl.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// retreive scoreList array from localStorage
var scoreList = localStorage.getItem("scoreList");
scoreList = JSON.parse(scoreList);

if (scoreList !== null) {
  console.log(scoreList);
  // sort by highest score
  var sortedScoreList = scoreList.sort(
    (a, b) => Number(b.score) - Number(a.score));
  console.log("descending", scoreList);

  for (let i = 0; i < sortedScoreList.length; i++) {
    var scoreListItem = document.createElement("li");
    scoreListItem.textContent = sortedScoreList[i].initials + " - " + sortedScoreList[i].score;
    scoreListDisplay.appendChild(scoreListItem);
  }
}
// event listener for Go Back button (return to main page)
backBtnEl.addEventListener("click", function () {
  window.location.href = "index.html";
});