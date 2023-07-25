const display = document.querySelector("#display");
const answerDisplay = document.querySelector("#answer"); // Reference to the answer div
const buttons = document.querySelectorAll("button");
const calculator = document.querySelector(".calculator");
const calculatorToggleBtn = document.querySelector("#calculatorToggleBtn");

buttons.forEach(function (item) {
    item.onclick = handleClick;
});

let isCalculatorOn = true;

function handleClick() {

  if (!isCalculatorOn) return;
    if (this.id == "clear") {
        display.innerText = "";
    } else if (this.id == "backspace") {
        let string = display.innerText.toString();
        display.innerText = string.substr(5, string.length - 1);
    } else if (this.id == "equal") {    ////////////////////////////////////to be fixed
        if (display.innerText.includes("%")) {
            const parts = display.innerText.split("%");
            const dividend = parseFloat(parts[0]);
            const divisor = parseFloat(parts[1]);
            display.innerText = dividend % divisor;
        } else if (display.innerText.includes("^")) {
            //TODO implement the function evaluate power
            const parts = display.innerText.split("^");
            const base = parseFloat(parts[0]);
            const exponent = parseFloat(parts[1]);
             display.innerText = Math.pow(base,exponent);
        } else {
            const result = eval(display.innerText);
            display.innerText =   result;
           // answerDisplay.innerText =  result; // Display the answer with '='
        }
    } else if (display.innerText == "" && this.id == "equal") {
        display.innerText = "Empty!";
        setTimeout(function () {
            display.innerText = "";
        }, 2000);
    } else {
        display.innerText += this.id;
    }
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = toggleTheme;

function toggleTheme() {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
}

//on and off button
calculatorToggleBtn.onclick = toggleCalculator;
//const calculatorToggleOnOff = document.querySelector(".display-screen");


function toggleCalculator() {

  isCalculatorOn = !isCalculatorOn; // Toggle the calculator state

  if (!isCalculatorOn) {
    display.innerText = "OFF"; // Display "OFF" when calculator is turned off
    answerDisplay.innerText = ""; // Clear the answer display
  } else {
    display.innerText = ""; // Clear the display when calculator is turned on again
  }

 calculatorToggleBtn.classList.toggle("active");
  
}

//const onOff = document.getElementById('calculatorToggleBtn')


