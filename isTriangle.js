const inputOptions = document.querySelectorAll('input[type="radio"]');
const inputBlock = document.querySelectorAll(".input-block");
const angleInputs = document.querySelectorAll('.angle-input');
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
      } else if (item === "angles") {
        inputBlock[1].style.display = 'none';
        inputBlock[0].style.display = 'block';
        flag = false;
      }
    });
});

function calculateSumOfAngles(angle1 , angle2 , angle3){

    if(angle1 > 0 && angle2 > 0 && angle3 > 0)
        return angle1+angle2+angle3;
    else  {
        output.style.display = 'block';
        output.style.color = 'red';
        output.innerHTML  = "Invalid Input! All angles should be greater than zero";
        return 0;
    }
}

function isTriangleByAngles(){
    const sumOfAngles = calculateSumOfAngles(Number(angleInputs[0].value),Number(angleInputs[1].value),Number(angleInputs[2].value));
    if (sumOfAngles === 180) {
        output.style.display = 'block';
        output.style.color = 'green';
        output.innerText  = "Yay , The angles form a triangle";
    } else if (sumOfAngles === 0){
        return;
    }
    else {
        output.style.display = 'block';
        output.style.color = 'red';
        output.innerText  = "Sum of Angles ="+sumOfAngles + "\n The angles do not form a triangle.\n The angles form a triangle if their sum is equal to 180.";
    }
}

function isTriangleBySides() {
    var a = Number(sideInputs[0].value);
    var b = Number(sideInputs[1].value);
    var c = Number(sideInputs[2].value);
    console.log (a , b, c);
    if(a > 0 && b > 0 && c > 0) {
        if((a+b)>c && (b+c)>a && (a+c)>b){
            output.style.display = 'block';
            output.style.color = 'green';
            output.innerText  = "Yay , The sides form a triangle";
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

function isTriangle(){
    console.log(flag)
    if (flag === false){
        isTriangleByAngles();
    }
    else if (flag === true) {
        isTriangleBySides();
    }
}

checkBtn.addEventListener("click",isTriangle);

clearBtn.addEventListener("click",()=>{
    angleInputs[0].value = "";
    angleInputs[1].value = "";
    angleInputs[2].value = "";
    sideInputs[0].value = "";
    sideInputs[1].value = "";
    sideInputs[2].value = "";
    output.style.display = 'none';

});