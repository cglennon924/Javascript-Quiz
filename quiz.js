//Array of Questions and Answers

var sportQuestions = [{

    question: "Which team broke their long 86 year curse in 2004 by winning the World Series in MLB?",
    options: ['Cleveland Indians',
        'Atlanta Braves',
        'Chicago Cubs',
        'Boston Red Sox'],
    correct: 'Boston Red Sox',

},

{
    question: 'Who is the Winningiest coach in NFL history',
    options: ['Vince Lombardi',
        'Bill Belichick',
        'John Madden',
        'Don Schula'],
    correct: 'Don Schula',

},

{
    question: 'Which countrty has won the most FIFA World Cups?',
    options: ['Brazil',
        'Germany',
        'Italy',
        'France'],
    correct: 'Brazil',
},

{
    question: 'What NBA player has won the most championships?',
    options: ['Michael Jordan',
        'Kobe Bryant',
        'Bill Russell',
        'Larry Bird'],
    correct: 'Bill Russell',
},

{
    question: 'Which WWE Superstar did Tyson Fury wrestle in 2019?',
    options: ['John Cena',
        'The Rock',
        'Braun Strowman',
        'The Undertaker'],
    correct: 'Braun Strowman',

}]

// Variable set to the length of the Questions Array. 
var nQuestions = sportQuestions.length;
// Global Time Interval Variable
var timerInterval
//Variable sets the Question Value to 0. Which represents the index in array
var questionValue = 0;
// Variable sets the Quiz Time to 60 seconds.
var timeRemaining = 60;
// Variable sets the initial score to 0 points.
var score = 0;
//Sets a constant to retrieve highscores in local storage. 
var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
// Sets a constant to the highest score on quiz of 5 points. 
var maxHighScore = 5;

// Stored Variables to retrieve ID's from document. 
var begin = document.querySelector("#start");
var timer = document.querySelector("#timer");
var quizQuestions = document.querySelector("#quiz-questions");
var questionNumber = document.querySelector("#question-number");
var currentQuestion = document.querySelector("#current-question");
 var buttonArea = document.querySelector("#buttonArray");
// var choiceB = document.querySelector("#B");
// var choiceC = document.querySelector("#C");
// var choiceD = document.querySelector("#D");
var nextQuestion = document.querySelector("#newQuestion");
var finish = document.querySelector("#finish");
var submit = document.querySelector("#submit");
var initials = document.querySelector("#initials");
var hsform = document.querySelector("#hsform");
var myscore = document.querySelector("#score");

//Timer function to start on Start Button click event. 
function startTimer() {
    timerInterval = setInterval(function () {
        //Removes 1 second from time remaining. 
        timeRemaining--;
        timer.textContent = timeRemaining;

        //When clock equal to zero, stops the clock. 
        if (timeRemaining <= 0) {
            clearInterval(timerInterval)
            endQuiz()
        }

    }, 1000);
    // Call Function to Render Question when Start Button clicked.
    startQuestion()
}





function startQuestion() {
    questionNumber.textContent = ("Question #" + (questionValue + 1));
    currentQuestion.textContent = sportQuestions[questionValue].question
    document.querySelector("#startArea").setAttribute('class','d-none')
    // Creates different choice selections for user //
    // var selectA = sportQuestions[questionValue].optionA;
    // choiceA.textContent =selectA;

    // var selectB = sportQuestions[questionValue].optionB;
    // choiceB.textContent =selectB;

    // var selectC = sportQuestions[questionValue].optionC;
    // choiceC.textContent =selectC;

    // var selectD = sportQuestions[questionValue].optionD;
    // choiceD.textContent =selectD;
    buttonArea.innerHTML=""
    for (let i = 0; i < sportQuestions[questionValue].options.length; i++) {
        var currentAnswer = sportQuestions[questionValue].options[i]
        var newDiv = document.createElement("div")
        var newButton = document.createElement("button")
        newButton.textContent = currentAnswer
        newButton.onclick = function(){
            newQuestion(i)
        }
        newButton.setAttribute("class", "nxt-btn")
        newDiv.appendChild(newButton)
        buttonArea.appendChild(newDiv)
    }

    //Changes Quiz Questions CSS to Visible.
   // quizQuestions.setAttribute("style", "visibility: visible");
    //Changes Start Button CSS to Hidden. 
   // start.setAttribute("style", "visibility: hidden");
    //Changes Next Question Button CSS to Visible.
   // nextQuestion.setAttribute("style", "visibility: visible");

    // When Question Number is equal to 4 the Next Question Button is Hidden and Finish Button is Visible.
    // if (questionValue === nQuestions - 1) {
    //     finish.setAttribute("style", "visibility: visible");
    //     nextQuestion.setAttribute("style", "visibility: hidden")
    // }


}

function newQuestion(guess) {
    console.log(guess)
    // var checked = document.querySelector("input[type=radio]:checked");
    // var answer = checked.value
    if (sportQuestions[questionValue].correct !== sportQuestions[questionValue].options[guess]) {
        timeRemaining -= 10
    }
    
    questionValue++
    if(questionValue !== sportQuestions.length){
        startQuestion();
    }
    else{
       finishQuiz()
    }

}

function finishQuiz() {
    document.querySelector('#hsform').classList.remove('d-none')
    buttonArea.setAttribute('class', 'd-none')
    clearInterval(timerInterval);
    // Ensures that last question answered is scored when user clicks the finish button
    // var checkedOption = document.querySelector('input[type=radio]:checked');
    // var answer = checkedOption.value
    // if (sportQuestions[questionValue].correct == answer) {
    //     score += 1;
    //     questionValue++;
    //     alert("That was correct!");
    // }

    // Returns the Users Quiz Score
    myscore.textContent = ("Congradulations you got " + timeRemaining + " seconds!");
    //Sets the Highscore User Input CSS to Visible
    hsform.setAttribute("style", "visibility: visible");
    //Sets the Quiz Questions CSS to Hidden
    quizQuestions.setAttribute("style", "visibility: hidden");
    //Sets the Timer CSS to Hidden
    timer.setAttribute("style", "visibility: hidden");
    //Sets the New Question Button CSS to Hidden
    nextQuestion.setAttribute("style", "visibility: hidden");
    //Sets the Finish Button CSS to Hidden
    finish.setAttribute("style", "visibility: hidden");


};

function endQuiz() {
     

    clearInterval(timerInterval);
    //Tells user final score//
    myscore.textContent = ("Congrats! You got " + "out of 5");
    //Sets the Highscore User Input CSS to Visible
    hsform.setAttribute("style", "visibility: visible");
    //Sets the Quiz Questions CSS to Hidden
    quizQuestions.setAttribute("style", "visibility: hidden");
    //Sets the Timer CSS to Hidden
    timer.setAttribute("style", "visibility: hidden");
    //Sets the New Question Button CSS to Hidden
    nextQuestion.setAttribute("style", "visibility: hidden");
    //Sets the Finish Button CSS to Hidden
    finish.setAttribute("style", "visibility: hidden");


}

function addToHighscore(event) {
    //Prevents Page from Refreshing on click. 
    event.preventDefault();
    //Stores Userscore as a object
    var userPoints = {
        points: score,
        name: initials.value
    };
    // Pushes Userscore to local storage
    highScores.push(userPoints);
    //Stores the Highscores from Highest to Lowest. 
    highScores.sort((a, b) => b.points - a.points);
    //Stores only the top 5 Highest Scores. 
    highScores.splice(5);

    //Stores Highscores in Local Storage
    localStorage.setItem("highscores", JSON.stringify(highScores));
    window.location.assign("highscore.html");
};

//Starts the initial timer
begin.addEventListener("click", startTimer);
//Signals user is ready for next question prompt
//nextQuestion.addEventListener("click", newQuestion);
//Finish Event Listener to call Finish Quiz Function. 
//finish.addEventListener("click", finishQuiz);
//Submit Event Listenter to call Add To Leaderboard Function. 
submit.addEventListener("click", addToHighscore);













































