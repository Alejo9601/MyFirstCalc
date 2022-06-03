function clickBtn(e) {
  if (!e) e = window.event; //if event wasnt created on microsoft navigators, i create it
  const dsp = document.getElementById("display"); //display that show's results

  /*Little note: this code can be improved by using an array storing each label of the buttons on it 
      respecting the position of the numbers on a calculator. 
      For Exaple:
                Button1 can be stored at position 0, then you can code a loop comparing if(e.target.id == [0...n])
                    changing or appending the value 1 for position 0, or 2 for position 1. And so on...
    */
  switch (e.target.id) {
    case "button1":
      dsp.value = dsp.value + 1;
      break;
    case "button2":
      dsp.value = dsp.value + 2;
      break;
    case "button3":
      dsp.value = dsp.value + 3;
      break;
    case "button4":
      dsp.value = dsp.value + 4;
      break;
    case "button5":
      dsp.value = dsp.value + 5;
      break;
    case "button6":
      dsp.value = dsp.value + 6;
      break;
    case "button7":
      dsp.value = dsp.value + 7;
      break;
    case "button8":
      dsp.value = dsp.value + 8;
      break;
    case "button9":
      dsp.value = dsp.value + 9;
      break;
    case "button0":
      dsp.value = dsp.value + 0;
      break;
    case "additionButton":
      dsp.value = dsp.value + " + ";
      break;
    case "substractionButton":
      dsp.value = dsp.value + " - ";
      break;
    case "divisionButton":
      dsp.value = dsp.value + " / ";
      break;
    case "multiplicationButton":
      dsp.value = dsp.value + " * ";
      break;
    case "dotButton":
      dsp.value = dsp.value + ".";
      break;
    case "resultButton":
      dsp.value = result(dsp.value);
      break;
  }
}

//Creating listeners for the buttons
const btn1 = document
  .getElementById("button1")
  .addEventListener("click", clickBtn);
const btn2 = document
  .getElementById("button2")
  .addEventListener("click", clickBtn);
const btn3 = document
  .getElementById("button3")
  .addEventListener("click", clickBtn);
const btn4 = document
  .getElementById("button4")
  .addEventListener("click", clickBtn);
const btn5 = document
  .getElementById("button5")
  .addEventListener("click", clickBtn);
const btn6 = document
  .getElementById("button6")
  .addEventListener("click", clickBtn);
const btn7 = document
  .getElementById("button7")
  .addEventListener("click", clickBtn);
const btn8 = document
  .getElementById("button8")
  .addEventListener("click", clickBtn);
const btn9 = document
  .getElementById("button9")
  .addEventListener("click", clickBtn);
const btn0 = document
  .getElementById("button0")
  .addEventListener("click", clickBtn);
const btnAdd = document
  .getElementById("additionButton")
  .addEventListener("click", clickBtn);
const btnSubs = document
  .getElementById("substractionButton")
  .addEventListener("click", clickBtn);
const btnDiv = document
  .getElementById("divisionButton")
  .addEventListener("click", clickBtn);
const btnMult = document
  .getElementById("multiplicationButton")
  .addEventListener("click", clickBtn);
const btnDot = document
  .getElementById("dotButton")
  .addEventListener("click", clickBtn);
const btnResult = document
  .getElementById("resultButton")
  .addEventListener("click", clickBtn);

function result(op) {
  const arrayVal = op.split(" ");
  const num1 = parseInt(arrayVal[0]); //contains the first number
  const num2 = parseInt(arrayVal[2]); //contains the second number
  const operator = arrayVal[1]; //contains the operator
  switch (operator) {
    case "+":
      return addition(num1, num2);
    case "-":
      return substraction(num1, num2);
    case "/":
      return division(num1, num2);
    case "*":
      return multiplication(num1, num2);
  }
}

function addition(n1, n2) {
  return n1 + n2;
}
function substraction(n1, n2) {
  return n1 - n2;
}
function division(n1, n2) {
  return n1 / n2;
}
function multiplication(n1, n2) {
  return n1 * n2;
}
