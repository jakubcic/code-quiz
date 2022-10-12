var clearBtnEl = document.querySelector("#clearBtn");
var backBtnEl = document.querySelector("#backBtn");
var scoreListDisplay = document.querySelector("#scoreListDisplay");

// event listener for Clear Scores button
clearBtnEl.addEventListener("click", function () {
  localStorage.clear();
});

// retreive scoreList array from localStorage
var scoreList = localStorage.getItem("scoreList");
scoreList = JSON.parse(scoreList);

if (scoreList !== null) {
  console.log(scoreList);

  for (let i = 0; i < scoreList.length; i++) {
    var scoreListItem = document.createElement("li");
    scoreListItem.textContent = scoreList[i].initials + " " + scoreList[i].score;
    scoreListDisplay.appendChild(scoreListItem);
  }
}
// event listener for Go Back button (return to main page)
backBtnEl.addEventListener("click", function () {
  window.location.href = "index.html";
});