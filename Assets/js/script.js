var startbtn = document.querySelector("#startTime");
var questionsBody = document.querySelector("#questionsBody");
var container = document.querySelector("#container");
var currentTime = document.querySelector('#currentTime');


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
var questions = 0;
var timeInterval = 0;
var secondsLeft = 76;

startbtn.addEventListener("click", startQuiz);
function startQuiz() {
    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time:" + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(timeInterval);
                currentTime.textContent = "Times up";
            }
        }, 1000);
        render(questions);
    }
}

