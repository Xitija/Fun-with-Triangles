const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#check-btn");
const outputEl = document.querySelector("#output");
const question = document.querySelectorAll(".question-container");

const correctAnswers = ["90","right angled","perimeter","3","180","scalenet"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if (value === correctAnswers[index]){
            score +=1 ;
            question[index].style.backgroundColor = "#a1ff41";

        }
        else {
            question[index].style.backgroundColor = "#fe4031";
        }
        index += 1;
    
        outputEl.innerText = "Your score is:" + score;
    }
}

submitAnswerBtn.addEventListener('click',calculateScore);