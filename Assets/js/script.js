var startbtn = document.querySelector("#startTime");
var questionsBody = document.querySelector("#questionsBody");
var container = document.querySelector("#container");

var questions_answers =
    [
        {
            question: 'What is the Capital of Illinois:',
            answers: ["Chicago", "Naperville", "SpringField", "Wheaton"],
            correctanswers: "Chicago"
        },

        {
            question: 'What is the Capital of Texas:',
            answers: ["Houston", "Austin", "Nashville", "Wheaton"],
            correctanswers: "Austin?"
        },

        {
            question: 'What is the Capital of New York:',
            answers: ["Chicago", "Brooklyn", "New York", "Wheaton"],
            correctanswers: "New York"
        },

        {
            question: 'What is the Capital of India:',
            answers: ["Mumbai", "Calcutta", "Delhi", "Pune"],
            correctanswers: "New Delhi"
        }
    ];

startbtn.addEventListener("click", startQuiz);