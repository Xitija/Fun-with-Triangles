const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#check-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90","right angled","perimeter","3","180","scalenet"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if (value === correctAnswers[index]){
            score +=1 ;
        }
        index += 1;
    
        outputEl.innerText = "Your score is:" + score;
    }
}

submitAnswerBtn.addEventListener('click',calculateScore);