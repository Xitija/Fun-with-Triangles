const inputOptions = document.querySelectorAll('input[type="radio"]');
const inputBlock = document.querySelectorAll(".input-block");
const bnhInputs = document.querySelectorAll('.bnh-input');
const sideInputs = document.querySelectorAll('.side-input');
const checkBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');
const output = document.querySelector('#output');
var flag = false;
output.style.display = 'none';
inputOptions[0].checked = true;

inputBlock[0].style.display = 'block';
inputBlock[1].style.display = 'none';

inputOptions.forEach((elem) => {
    elem.addEventListener("change", function(event) {
      output.style.display = 'none';
      item = event.target.value;
      if (item === "sides"){
        inputBlock[0].style.display = 'none';
        inputBlock[1].style.display = 'block';
        flag = true;
      } else if (item === "bnh") {
        inputBlock[1].style.display = 'none';
        inputBlock[0].style.display = 'block';
        flag = false;
      }
    });
});

function calculateAreaWithBnH() {
    var base = Number(bnhInputs[0].value);
    var height = Number(bnhInputs[1].value);
    if (base > 0 && height >0) {
        const area1 = (base*height)/2;
        output.style.display = 'block';
        output.style.color = 'green';
        output.innerText  = "Area of Triangle: " + area1;
    }
    else {
        output.style.display = 'block';
        output.style.color = 'red';
        output.innerText  = "Invalid Input! All inputs should be greater than zero";
    }
}

function calculateAreaWithSides() {
    var a = Number(sideInputs[0].value);
    var b = Number(sideInputs[1].value);
    var c = Number(sideInputs[2].value);
    if(a > 0 && b > 0 && c > 0) {
        if((a+b)>c && (b+c)>a && (a+c)>b){
            const s=(a+b+c)/2;
            const area2 = Math.sqrt(s*(s-a)*(s-b)*(s-c));
            output.style.display = 'block';
            output.style.color = 'green';
            output.innerText  = "Area of Triangle: " + area2;
        } else {
            output.style.display = 'block';
            output.style.color = 'red';
            output.innerText  = "The sides do not form a triangle .";
        }
    } else {
        output.style.display = 'block';
        output.style.color = 'red';
        output.innerHTML  = "Invalid Input! All sides should be greater than zero";
        return 0;
    }
}

function calculateArea(){
    if (flag === false){
        calculateAreaWithBnH();
    }
    else if (flag === true) {
        calculateAreaWithSides();
    }
}

checkBtn.addEventListener("click",calculateArea);

clearBtn.addEventListener("click",()=>{
    bnhInputs[0].value = "";
    bnhInputs[1].value = "";
    sideInputs[0].value = "";
    sideInputs[1].value = "";
    sideInputs[2].value = "";
    output.style.display = 'none';

});