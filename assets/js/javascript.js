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

var timer = 75;
var currentQuestion = 0;
var timeout;

var countDown = function () {
    if (timer > 0) {
        timer--;
        timerEl.textContent = timer;
        timeout = setTimeout(countDown, 1000);
    } else {
        clearTimeout(timeout);
    }
};

var setQuizHeader = function (content) {
    quizHeaderEl.innerHTML = content;
};

var setQuizContent = function (element) {
    quizContentEl.replaceChildren(element);
};

var quizContentHandler = function (event) {
    if (event.target.getAttribute("id") === "start") {
        countDown();
        buildQuestion(questionBankArray[currentQuestion]);
        return;
    } else if (event.target.getAttribute("id") === "back") {
        resetGame();
        return;
    }
}

var resetGame = function () {
    currentQuestion = 0;
    timer = 75;
    timerEl.textContent = timer;
    setQuizHeader("JavaScript Coding Quiz Challenge! Try to answer all the following questions within the time limit. There is a penalty if you answer incorrectly, so try to get them in one go!");
    startButtonEl = document.createElement("button");
    startButtonEl.textcontent = "Start Quiz";
    startButtonEl.className = "button";
    startButtonEl.setAttribute("id", "start");
    setQuizContent(startButtonEl);
};




resetGame();
highScoreEl.addEventListener("click", quizContentHandler);
quizContentEl.addEventListener("click", quizContentHandler);