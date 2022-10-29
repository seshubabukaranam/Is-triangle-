const quizForm = document.querySelector(".quiz-form");
const btnSubmitQuiz = document.querySelector("#btn-submit-quiz");
const outputMessageQuiz = document.querySelector("#output-message-quiz")

const correctAnswers = ["90°","Right Angled"];


btnSubmitQuiz.addEventListener("click",caluclateScore);

function caluclateScore(){
    
    var score = 0;
    var index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()){
     
        if(value === correctAnswers[index]){

            score=score+1;
         }
        index++;
    }
    outputMessageQuiz.innerText = "Your Score is " + score;
}