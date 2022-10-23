

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



var questionsAndAnswers =
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

// Call on the start of the application to setup the Quiz
function initializeApplication()
{

// Set Initial State for Buttons to Hidden
buttonA.hidden = true;
buttonB.hidden = true;
buttonC.hidden = true;
buttonD.hidden = true;



}


// Start the Quiz 
function initializeQuiz()
{
    buttonA.hidden = false;
    buttonB.hidden = false;
    buttonC.hidden = false;
    buttonD.hidden = false;
    
}

// Hide All buttons , and show Signature Page
// Reset Initials
function setupSignaturePage()
{


}

// Set the high score page 
function setupHighScorePage()
{

}

// Get the next Question to Display
function nextQuestion()  
{ 

}


function startQuiz() {

    // Set Initial State for Buttons to Hidden
    initializeQuiz();


    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time:" + secondsLeft;
            timer.style.display = "none";

            // Check Time , Check Question Count

            if (secondsLeft <= 0) {
                clearInterval(timeInterval);
                currentTime.textContent = "Times up";
                setupSignaturePage();
            }
        }, 1000);

    }
}


