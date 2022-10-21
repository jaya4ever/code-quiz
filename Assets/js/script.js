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

startbtn.addEventListener("click", startQuiz);
var questions=0;
var holdInterval = 0;
var secondsLeft = 76;

function startQuiz (){
    if(holdInterval === 0){
        holdInterval = setInterval(startQuiz)
            secondsLeft--;
            currentTime.textContent = "Time:" + secondsLeft;

        if(secondsLeft <=0){
            clearInterval(holdInterval);
            currentTime.textContent = "Times up";
        }
    }
    render(questions);
};
 
