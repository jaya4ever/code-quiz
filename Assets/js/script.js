

var startbtn = document.querySelector("#startTime");
var questionsBody = document.querySelector("#questionsBody");
var timer = document.getElementById('timer');
var container = document.querySelector("#container");
var questionbutton = document.getElementById('questions');
var currentTime = document.querySelector('#currentTime');
var scores = document.getElementById('intialsContainer');
var buttonA = document.getElementById('a');
var buttonB = document.getElementById('b');
var buttonC = document.getElementById('c');
var buttonD = document.getElementById('d');



var questions_answers =
    [
        {
            question: 'What is the Capital of Illinois:',
            optionA: "Chicago",
            optionB: "Naperville",
            optionC: "Springfield",
            optionD: "Wheaton",

            correctanswers: "Chicago"
        },
        {
            question: 'What is the Capital of Texas:',
            optionA: "Houston",
            optionB: "Austin",
            optionC: "Nashville",
            optionD: "Wheaton",

            correctanswers: "Austin?"
        },
        {
            question: 'What is the Capital of New York:',
            optionA: "Chicago",
            optionB: "Brooklyn",
            optionC: "NewYork",
            optionD: "Wheaton",

            correctanswers: "New York"
        },
        {
            question: 'What is the Capital of India:',
            optionA: "Mumbai",
            optionB: "Calcutta",
            optionC: "Delhi",
            optionD: "Pune",

            correctanswers: "New Delhi"
        }
    ];

var timeInterval = 0;
var secondsLeft = 76;

startbtn.addEventListener("click", startQuiz);

function myFunction()
{
// Set Initial State for Buttons to Hidden
buttonA.hidden = true;
buttonB.hidden = true;
buttonC.hidden = true;
buttonD.hidden = true;

}

function startQuiz() {

    // Set Initial State for Buttons to Hidden
buttonA.hidden = false;
buttonB.hidden = false;
buttonC.hidden = false;
buttonD.hidden = false;



    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time:" + secondsLeft;
            timer.style.display = "none";


            if (secondsLeft <= 0) {
                clearInterval(timeInterval);
                currentTime.textContent = "Times up";
            }
        }, 1000);

    }
}


