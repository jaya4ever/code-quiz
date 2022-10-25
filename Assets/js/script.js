

var startbtn = document.querySelector("#startTime");
var questionsBody = document.querySelector("#questionsBody");

var timer = document.getElementById('timer');
var container = document.querySelector("#container");

// TODO: Should I call this question or questions for group ?
var questionbutton = document.getElementById('questions');
var currentTime = document.querySelector('#currentTime');
var scores = document.getElementById('initialsContainer');
var highScorepage = document.getElementById('highscoreContainer');
var submitBtn = document.querySelector('#submit');
//var initialsForm = document.querySelector('#initalsForm');
var initials = document.getElementById('initials');//document.querySelector('#initials');
var initialsContainer = document.getElementById('initialsContainer');

var buttonA = document.getElementById('a');
var buttonB = document.getElementById('b');
var buttonC = document.getElementById('c');
var buttonD = document.getElementById('d');
var buttonHighScore = document.getElementById('highScoreBtn');

// Store the current correct right answer score
var currentScore = 0;
var currentQuestion = null;
var currentQuestionIndex = 0;

// Fade out the wrong / right answer.
var answerFadeOutTime;

// The questions to ask 
const questionsAndAnswers =
    [
        {
            question: 'How does a "for" loop start ?',
            optionA: "for(i = 0; i <= 5)",
            optionB: "for(i = 0; i <= 5; i++)",
            optionC: "for i = 1 to 5",
            optionD: "for(i<= 5; i++)",
            correctanswers: "b"
        },
        {
            question: 'How do you write a conditional statement for executing some statements only if "i" is NOT equal to 5??',
            optionA: "if(i!= 5)",
            optionB: "if =!5 then",
            optionC: "if(i <> 5)",
            optionD: "if<>5",

            correctanswers: "a"
        },

        {
            question: 'A named element in a JavaScript program that is used to store and retrieve data is a _____.',
            optionA: "Method",
            optionB: "assignment operator",
            optionC: "Variable",
            optionD: "string",

            correctanswers: "c"
        },
        
        {
            question: 'In JavaScript, which of the following is a logical operator?',
            optionA: "|",
            optionB: "&&",
            optionC: "%",
            optionD: "/",

            correctanswers: "b"
        }

        ];


// Change time here to reduce penalty
const wrongAnswerPenaltyInSeconds = 15; // 15 Seconds Penalty for Wrong Answers
const totalTimeForGame = 76;
const highScoreIndexInStorage = "highscores";

// Global variables to track time.
var timeInterval = 0;
var secondsLeft = totalTimeForGame;
var userScoreInSeconds = 0;
var allQuestionsAnswered = false;

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
    timer.textContent = "Time: " + totalTimeForGame;

    initialsContainer.hidden = true;

}


// Start the Application , ENTRY POINT.
function initializeQuiz() {
    currentScore = 0;
    currentQuestionIndex;
    secondsLeft = totalTimeForGame;
    userScoreInSeconds = 0;
    allQuestionsAnswered = false;


    // Show quiz Questions
    buttonA.hidden = false;
    buttonB.hidden = false;
    buttonC.hidden = false;
    buttonD.hidden = false;

    // Hide Initials
    //scores.hidden = true;
    //initialsForm.hidden = true;
    initialsContainer.hidden = true;


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

function saveInitialsToLocalStorage(usersInitials,scoreInSeconds)
{
    //Clear Storage.
    //localStorage.clear();

    var allHighScores = getHighScoresInStorageArray();

    console.log("ALL HIGH SCORES: " + allHighScores);

    var highScoreEntry = {name:usersInitials,score:scoreInSeconds};

    allHighScores.push(highScoreEntry);

    localStorage.setItem(highScoreIndexInStorage,JSON.stringify(allHighScores));

    // Test we are saving data
    dumpHighScoresInStorage();
}

function getHighScoresInStorageArray()
{
    var storedHighScores = localStorage.getItem(highScoreIndexInStorage);
    if (storedHighScores)
    {
        return(JSON.parse(storedHighScores));
    }
    else
    {
        return ([]);
    }
}

// Dump High Scores
function dumpHighScoresInStorage()
{
    console.log("HIGH SCORES: "+localStorage.getItem(highScoreIndexInStorage));

}

//   <div id=highscoreContainer><a href="HighScores">View High Scores</a></div>
       
//<button id="highScoreBtn" onclick="submitHighScore()" type="submit">Submit  </button>
       
function showHighScores()
{
    if (buttonHighScore.textContent === "Play Again")
    {
        buttonHighScore.textContent = "View High Scores";
        initializeApplication();
        startQuiz();
        return;
    }


    var allHighScores = getHighScoresInStorageArray();

    var allScores = "";

    for (i=0;i<allHighScores.length;i++)
    {
        var highScore = allHighScores[i];

        var entryForScore = "Entry("+i+"): " + highScore.name + " Score: "+highScore.score;

        console.log(entryForScore);
    
        allScores += entryForScore + "\n";
    
    }

    questionsBody.textContent = allScores; 

    buttonHighScore.textContent = "Play Again";

}


// Submit Action
function submitHighScore() {

    console.log("Click high scores");
    console.log(initials.value);
    saveInitialsToLocalStorage(initials.value,userScoreInSeconds);
    // Restart Quiz
    startQuiz();
}



// Check the Answer for the current Question
function checkAnswer(buttonId) {

    if (buttonId === currentQuestion.correctanswers) {

        currentScore++;
        //buttonD.textContent = "TEST";
        //document.getElementById(buttonId).textContent = "Right";
        currentTime.textContent = "Right !!!";
        if (currentQuestionIndex < questionsAndAnswers.length) {

            setupNextQuestion();
        }
        else {
            // USER FINISHED ALL QUESTIONS !!!
            // Record User Score and Kill Timer
            userScoreInSeconds = secondsLeft;
            secondsLeft = 0;
            currentTime.textContent = "You answered all questions in " + userScoreInSeconds + " seconds.";
            allQuestionsAnswered = true;
        }

    }
    else {

        //document.getElementById(buttonId).textContent = "Wrong"; 
        currentTime.textContent = "Wrong !!!";
        secondsLeft -= wrongAnswerPenaltyInSeconds;
    }

}

// Hide All buttons , and show Signature Page
// Reset Initials
function setupSignaturePage() {

    questionsBody.hidden = true;

    buttonA.hidden = true;
    buttonB.hidden = true;
    buttonC.hidden = true;
    buttonD.hidden = true;
    timer.hidden = true;
    //highScorepage.hidden = true;

    // Show Initials
    initialsContainer.hidden = false;


    //scores.hidden = false;

}

// Set the high score page 
function setupHighScorePage() {

    // Set Initial State for Buttons to Hidden
    buttonA.hidden = true;
    buttonB.hidden = true;
    buttonC.hidden = true;
    buttonD.hidden = true;

    scores.hidden = true;

}

// Get the next Question to Display
function nextQuestion() {
    // TODO: Randomize Questions ? (Not in User Story) 
    if (currentQuestionIndex < questionsAndAnswers.length)
    {
        return (questionsAndAnswers[currentQuestionIndex++]);
    }
}


function startQuiz() {


   

    // Set Initial State for Buttons to Hidden
    initializeQuiz();


     // Test 
     //setupSignaturePage();
     //return;


    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            secondsLeft--;
            if (!allQuestionsAnswered) timer.textContent = "Time:" + secondsLeft;
            //timer.style.display = "none";

            //timer.textContent = "Time:" + secondsLeft;

            console.log("Tick..\n");
            // Check Time , Check Question Count

            if (secondsLeft <= 0) {

                // User ran out of time.

                clearInterval(timeInterval);
                if (!allQuestionsAnswered) timer.textContent = "Times up";
                setupSignaturePage();
            }
            /*else if (currentQuestionIndex > questionsAndAnswers.length)
            {
                console.log("All Answered..\n");

                //console.log(currentQuestionIndex + "is " + questionsAndAnswers.length);
                // User answered all questions under time !!!

                clearInterval(timeInterval);
                currentTime.textContent = "You answered all questions in "+timeInterval+" seconds.";
                setupSignaturePage();
                //currentTime.textContent = "Times up";


            }*/



        }, 1000);

    }
}

