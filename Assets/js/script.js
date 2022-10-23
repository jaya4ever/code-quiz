

var startbtn = document.querySelector("#startTime");
var questionsBody = document.querySelector("#questionsBody");

var timer = document.getElementById('timer');
var container = document.querySelector("#container");

// TODO: Should I call this question or questions for group ?
var questionbutton = document.getElementById('questions');
var currentTime = document.querySelector('#currentTime');
var scores = document.getElementById('intialsContainer');

var buttonA = document.getElementById('a');
var buttonB = document.getElementById('b');
var buttonC = document.getElementById('c');
var buttonD = document.getElementById('d');

// Store the current correct right answer score
var currentScore = 0;
var currentQuestion = null;
var currentQuestionIndex = 0;

// The questions to ask 
const questionsAndAnswers =
    [
        {
            question: 'What is the Capital of Illinois:',
            optionA: "Chicago",
            optionB: "Naperville",
            optionC: "Springfield",
            optionD: "Wheaton",

            correctanswers: "a"
        } /*,
        {
            question: 'What is the Capital of Texas:',
            optionA: "Houston",
            optionB: "Austin",
            optionC: "Nashville",
            optionD: "Wheaton",

            correctanswers: "b"
        },
        {
            question: 'What is the Capital of New York:',
            optionA: "Chicago",
            optionB: "Brooklyn",
            optionC: "NewYork",
            optionD: "Wheaton",

            correctanswers: "c"
        },
        {
            question: 'What is the Capital of India:',
            optionA: "Mumbai",
            optionB: "Calcutta",
            optionC: "Delhi",
            optionD: "Pune",

            correctanswers: "c"
        }*/
    ];

// Change time here to reduce penalty
const wrongAnswerPenaltyInSeconds = 15; // 15 Seconds Penalty for Wrong Answers

var timeInterval = 0;
var secondsLeft = 76;

startbtn.addEventListener("click", startQuiz);

// Call on the start of the application to setup the Quiz
function initializeApplication() {

    // Set Initial State for Buttons to Hidden
    buttonA.hidden = true;
    buttonB.hidden = true;
    buttonC.hidden = true;
    buttonD.hidden = true;

    // Hide Timer on Start
    timer.hidden = true;


}


// Start the Application , ENTRY POINT.
function initializeQuiz() {
    currentScore = 0;
    currentQuestionIndex;

    // Show quiz Questions
    buttonA.hidden = false;
    buttonB.hidden = false;
    buttonC.hidden = false;
    buttonD.hidden = false;

    // show timer
    timer.hidden = false;


    setupNextQuestion();

}

function setupNextQuestion() {
    // Get the initial question to ask
    currentQuestion = nextQuestion();

    // Re-use Information Text for Question
    questionsBody.textContent = currentQuestion.question;
    buttonA.textContent = currentQuestion.optionA;
    buttonB.textContent = currentQuestion.optionB;
    buttonC.textContent = currentQuestion.optionC;
    buttonD.textContent = currentQuestion.optionD;


}

// Check the Answer for the current Question
function checkAnswer(buttonId) {

    if (buttonId === currentQuestion.correctanswers)
    {

        currentScore++;
        //buttonD.textContent = "TEST";
        document.getElementById(buttonId).textContent = "Right";
        if (currentQuestionIndex < questionsAndAnswers.length) 
        {

            setupNextQuestion();
        }
    }
    else
    {

        document.getElementById(buttonId).textContent = "Wrong"; 
        secondsLeft -= wrongAnswerPenaltyInSeconds;
    }

}


// Hide All buttons , and show Signature Page
// Reset Initials
function setupSignaturePage() {


}

// Set the high score page 
function setupHighScorePage() {

// Set Initial State for Buttons to Hidden
buttonA.hidden = true;
buttonB.hidden = true;
buttonC.hidden = true;
buttonD.hidden = true;

}

// Get the next Question to Display
function nextQuestion() {
    // TODO: Randomize Questions ? (Not in User Story) 
    return (questionsAndAnswers[currentQuestionIndex++]);
}


function startQuiz() {

    // Set Initial State for Buttons to Hidden
    initializeQuiz();


    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time:" + secondsLeft;
            timer.style.display = "none";

            console.log("Tick..\n");
            // Check Time , Check Question Count

            if (secondsLeft <= 0) {

                // User ran out of time.

                clearInterval(timeInterval);
                currentTime.textContent = "Times up";
                setupSignaturePage();
            }
            else if (currentQuestionIndex > questionsAndAnswers.length)
            {
                console.log("All Answered..\n");

                //console.log(currentQuestionIndex + "is " + questionsAndAnswers.length);
                // User answered all questions under time !!!

                clearInterval(timeInterval);
                //currentTime.textContent = "You answered all questions in "+timeInterval+" seconds.";
                //setupSignaturePage();
                //currentTime.textContent = "Times up";


            }



        }, 1000);

    }
}



