var timerEl = document.querySelector(".timer");
var headerEl = document.querySelector("header");
var highScoreEl = document.querySelector(".high-score");
var quizHeaderEl = document.querySelector(".quiz-question");
var quizContentEl = document.querySelector(".quiz-content");

var questionBankArray = [
    {
        question: "Arrays in JavaScript can be used to store ___.",
        choice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: 4,
    },
    {
        question: "Commonly used data types DO Not Include:",
        choice: ["strings", "booleans", "alerts", "numbers"],
        answer: 2 
    },
    {
        question: "The condition in an if / else statement is enclosed with ___.",
        choice: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: 2
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choice: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: 4
    },
]