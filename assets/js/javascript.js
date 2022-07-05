var timerEl = document.querySelector(".timer");
var headerEl = document.querySelector("header");
var highScoreEl = document.querySelector(".high-score");
var quizHeaderEl = document.querySelector(".quiz-question");
var quizContentEl = document.querySelector("#quiz-content");
var defaultPageEl = document.querySelector("#default-page");
var startButtonEl = document.querySelector(".start-btn");
var questionTitleEl = document.querySelector(".leader");
var buttonOneEl = document.querySelector("#choice-1");
var buttonTwoEl = document.querySelector("#choice-2");
var buttonThreeEl = document.querySelector("#choice-3");
var buttonFourEl = document.querySelector("#choice-4");

var score = 0;
var questionIndex = 0;
var timeLeft = 60;
var currentQuestion = 0;
var timeInterval = "";
var timeOver = "You have run out of time!";

// Question array to pull from
var questionBank = [
    {
        question: "Arrays in JavaScript can be used to store ___.",
        choice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },
    {
        question: "Commonly used data types DO Not Include:",
        choice: ["strings", "booleans", "alerts", "numbers"],
        answer: "booleans", 
    },
    {
        question: "The condition in an if / else statement is enclosed with ___.",
        choice: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "curly brackets",
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choice: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "curly brackets",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log",
    },
];


// Using setInterval() method to call this function to be executed every 1000 milliseconds (every 1 second)
function countDown() {        
    timeInterval = setInterval(function() {
        if(timeLeft >= 1) {
            timerEl.textContent = "time remaining:  " + timeLeft;
            timeLeft -= 1;
        }
        else if (timeLeft === 0){
            timerEl.textContent = "";
            clearInterval(timeInterval);
            displayMessage();
            quizDone();
        }
        
        function displayMessage() {
            alert(timeOver);
        };
    }, 1000)
};

// intro goes away and changes screen to question array
function startQuiz() {
    defaultPageEl.classList.add("hide");
    quizContentEl.classList.remove("hide");
    displayQuestion();
};

// question comes up with 4 answer choices
function displayQuestion() {
    console.log(questionBank[questionIndex].question);
    questionTitleEl.textContent = questionBank[questionIndex].question;
    buttonOneEl.textContent = questionBank[questionIndex].choice[0];
    buttonTwoEl.textContent = questionBank[questionIndex].choice[1];
    buttonThreeEl.textContent = questionBank[questionIndex].choice[2];
    buttonFourEl.textContent = questionBank[questionIndex].choice[3];
}
function nextQuestion() {
    questionIndex++
    displayQuestion();
}

buttonOneEl.addEventListener("click", nextQuestion)


// if correct - correct shows up below, if incorrect - incorrect shows up and time is taken away from time remaining

// once questions are done, enter initials for highscore is shown with submit

// after submitting, highscore page is shown with the given initials clear highscore or go back button

// clear highscore removes all scores stored

// go back brings back to default/initial screen restarting the whole process

function stopCountdown() {
    clearInterval(timeInterval);
    timerEl.textContent = "Time is up!"
};

startButtonEl.addEventListener("click", function() { // callback
    countDown();
    startQuiz();
});

// Figure out how to pull from array to start quiz