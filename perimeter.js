const sideInputs = document.querySelectorAll('.side-input');
const checkBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');
const output = document.querySelector('#output');
output.style.display = 'none';

function calculatePerimeter() {
    var a = Number(sideInputs[0].value);
    var b = Number(sideInputs[1].value);
    var c = Number(sideInputs[2].value);
    if(a > 0 && b > 0 && c > 0) {
        if((a+b)>c && (b+c)>a && (a+c)>b){
            const perimeter = a+b+c;
            output.style.display = 'block';
            output.style.color = 'green';
            output.innerText  = "Perimeter of Triangle: " + perimeter;
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

checkBtn.addEventListener("click",calculatePerimeter);

clearBtn.addEventListener("click",()=>{
    sideInputs[0].value = "";
    sideInputs[1].value = "";
    sideInputs[2].value = "";
    output.style.display = 'none';

});
