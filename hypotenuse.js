const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const clearBtn = document.querySelector('#clear-btn');
const outputEl = document.querySelector("#output");
outputEl.style.display = 'none';

function calculateHypotenuse(){
    let side1 = Number(sides[0].value);
    let side2 = Number(sides[1].value);
    if( side1 > 0 && side2 > 0){
        const sumOfSquares = (side1**2) + (side2**2);
        const hypotenuseLength = Math.sqrt(sumOfSquares).toFixed(2);
        outputEl.style.display = 'block';
        outputEl.style.color = 'green';
        outputEl.innerText = "The length of hypotenuse is " + hypotenuseLength;
    }
    else {
        outputEl.style.display = 'block';
        outputEl.style.color = 'red';
        outputEl.innerText = "Please enter valid inputs";
    }
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);

clearBtn.addEventListener("click",()=>{ 
    sides[0].value = "";
    sides[1].value = "";
    outputEl.style.display = 'none';
});
