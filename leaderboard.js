//Stores ID from document as a variable
var highScoreList = document.querySelector("#highScoreList");
//Retrieved highscores from local storage as a variable. 
var highScores= JSON.parse(localStorage.getItem("highscores")) || [];


//For Loop to generate a ordered list of highscores. 
for (var i = 0; i < highScores.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = highScores[i].name + "  " +highScores[i].points;
    highScoreList.append(listItem);
};