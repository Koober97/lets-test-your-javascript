var timerEl = document.querySelector(".timer");
var headerEl = document.querySelector("header");
var highScoreEl = document.querySelector(".high-score");
var quizHeaderEl = document.querySelector(".quiz-question");
var quizContentEl = document.querySelector(".quiz-content");
var startBtn = document.querySelector("start");

var score = 0;
var questionIndex = 0;
var timeLeft = 60;
var currentQuestion = 0;
var timeOver = "You have run out of time!";


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
]

start.Btn.addEventListener("click", function() {
    countDown();
    startQuiz(questionIndex);
});





startGame();
resetGame();
highScoreEl.addEventListener("click", quizContentHandler);
quizContentEl.addEventListener("click", quizContentHandler);