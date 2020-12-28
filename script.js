// @author mamathaguntu
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0, 0, 0, 0]; //min, sec , hundredth sec, thousandth sec

function startTimer() {
  let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2];
  theTimer.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor((timer[3] / 100) / 60); //get minutes
  timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60)); //track the value of min, to reset this to 0, when it reaches 60
  timer[2] = Math.floor((timer[3] - (timer[1] * 100)) - (timer[0] * 6000));
}

function stopTimer() {
  if (originText.value === testArea.value) {

  }
}

function spellCheck() {
  let enteredTxt = testArea.value;

  console.log(enteredTxt);
}

function start() {
  let enteredTxtLen = testArea.value.length;
  //start the timer
  if (enteredTxtLen === 0) {
    setInterval(startTimer, 10)
  }
  console.log(enteredTxtLen);
}

function reset() {
  console.log("reset button has been pressed");
}
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);