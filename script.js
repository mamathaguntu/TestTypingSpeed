// @author mamathaguntu
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

function spellCheck() {
  let enteredTxt = testArea.nodeValue;
  console.log(enteredTxt);
}
function start() {
  let enteredTxtLen = testArea.nodeValue.length;
  console.log(enteredTxtLen);
}
function reset() {
  console.log("reset button has been pressed");
}
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);

resetButton.addEventListener("click", reset, false);