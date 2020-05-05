//Array of Questions and Answers

var sportQuestions = [{

    question: "Which team broke their long 86 year curse in 2004 by winning the World Series in MLB?",
    optionA: 'Cleveland Indians',
    optionB: 'Atlanta Braves',
    optionC: 'Chicago Cubs',
    optionD: 'Boston Red Sox',
    correct: 'D',

},

{
    question: 'Who is the Winningiest coach in NFL history',
    optionA: 'Vince Lombardi',
    optionB: 'Bill Belichick',
    optionC: 'John Madden',
    optionD: 'Don Schula',
    correct: 'D',

},

{
    question: 'Which countrty has won the most FIFA World Cups?',
    optionA: 'Brazil',
    optionB: 'Germany',
    optionC: 'Italy',
    optionD: 'France',
    correct: 'A',
},

{             
    question: 'What NBA player has won the most championships?',
    optionA: 'Michael Jordan',
    optionB: 'Kobe Bryant',
    optionC: 'Bill Russell',
    optionD: 'Larry Bird',
    correct: 'C',
},

{
    question: 'Which WWE Superstar did Tyson Fury wrestle in 2019?',
    optionA: 'John Cena',
    optionB: 'The Rock',
    optionC: 'Braun Strowman',
    optionD: 'The Undertaker',
    correct: 'C',

}]

// Variable set to the length of the Questions Array. 
var nQuestions= jsQuestions.length;
// Global Time Interval Variable
var timerInterval
//Variable sets the Question Value to 0. Which represents the index in array
var questionValue = 0;
// Variable sets the Quiz Time to 60 seconds.
var timeRemaining = 60;
// Variable sets the initial score to 0 points.
var score = 0;
//Sets a constant to retrieve highscores in local storage. 
const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
// Sets a constant to the highest score on quiz of 5 points. 
const maxHighScore = 5;

// Stored Variables to retrieve ID's from document. 
var begin = document.querySelector("#start");
var timer = document.querySelector("#timer")
var quizQuestions = document.querySelector("#quiz-questions")
var questionNumber = document.querySelector("#question-number")
var currentQuestion = document.querySelector("#current-question");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var nextQuestion = document.querySelector("#newQuestion");
var finish = document.querySelector("#finish");
var submit = document.querySelector("#submit");
var initials = document.querySelector("#initials")
var hsform = document.querySelector("#hsform");
var myscore = document.querySelector("#score");

//Timer function to start on Start Button click event. 
function startTimer () {
    timerInterval = setInterval(function() {
        //Removes 1 second from time remaining. 
        timeRemaining--;
        timer.textContent= timeRemaining;
    
        //When clock equal to zero, stops the clock. 
        if(timeRemaining <= 0) {
            clearInterval(timerInterval)
            endQuiz()
        }
    
    }, 1000);
    // Call Function to Render Question when Start Button clicked.
    startQuestion()
}

function startQuestion (){
    questionNumber.textContent =("Question #" + (questionValue + 1));
    var uniqueQuestion = sportQuestions[questionValue].question
    currentQuestion.textContent =uniqueQuestion
 // Creates different choice selections for user //
    var selectA = sportQuestions[questionValue].optionA;
    choiceA.textContent =selectA;

    var selectB = sportQuestions[questionValue].optionB;
    choiceB.textContent =selectB;

    var selectC = sportQuestions[questionValue].optionC;
    choiceC.textContent =selectC;

    var selectD = sportQuestions[questionValue].optionD;
    choiceD.textContent =selectD;

}

function newQuestion () {
    var checked = document.queryselector('input[type=radio]:checked');
    var answer = checked.value 
    if (sportQuestions[questionValue].correct===answer) {

        score+=1;
        questionValue++;
    }
    else{
        questionValue ++;
        timeRemaining-=10;
        alert ("Wrong!");
    }

    startQuestion();

}




begin.addEventListener("click",startTimer);
nextQuestion.addEventListener("click", newQuestion);












































]


