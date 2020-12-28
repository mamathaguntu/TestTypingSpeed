// @author mamathaguntu
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const errorCount = document.querySelector(".errorCt");

var diffTextVal = ["This is a typing test !", "Can you read this in any order ?", "Try to beat your own score !", "Have fun ! happy Typing !!",
  "Do you think this acts as a typing practice ?", "I loVE holiDays!!", "LoVing weather todaY !", "Happy New yEAR!", "Thank you for this !"];
var timer = [0, 0, 0, 0]; //min, sec , hundredth sec, thousandth sec
var timeInterval;
var timerOn = false;
var errorCt = 0;

originText.innerHTML = diffTextVal[Math.ceil(Math.random() * 8)];

function startTimer() {
  let currentTime = leadingZeros(timer[0]) + ":" + leadingZeros(timer[1]) + ":" + leadingZeros(timer[2]);
  theTimer.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor((timer[3] / 100) / 60); //get minutes
  timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60)); //track the value of min, to reset this to 0, when it reaches 60
  timer[2] = Math.floor((timer[3] - (timer[1] * 100)) - (timer[0] * 6000));
}

// add leading zeros to the timer value for values less than 9
function leadingZeros(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}

function spellCheck() {
  let enteredTxt = testArea.value;

  //check if the entered text matches the original text

  let checkString = originText.innerHTML.substr(0, enteredTxt.length);

  if (enteredTxt == originText.innerHTML) {
    testWrapper.style.borderColor = 'green';
    timerOn = false;
    testArea.disabled = true;
    clearInterval(timeInterval);
  } else {
    if (enteredTxt == checkString) {
      testWrapper.style.borderColor = 'blue';
    } else {
      errorCt++;
      errorCount.innerHTML = errorCt;
      testWrapper.style.borderColor = 'red';
    }
  }
  console.log(enteredTxt);
}

function start() {

  console.log(originText.innerHTML);
  let enteredTxtLen = testArea.value.length;
  //start the timer
  if (enteredTxtLen === 0 && !timerOn) {
    timerOn = true;
    timeInterval = setInterval(startTimer, 10)
  }
  console.log(enteredTxtLen);
}

function reset() {
  originText.innerHTML = diffTextVal[Math.ceil(Math.random() * 8)];
  console.log("reset button has been pressed");
  clearInterval(timeInterval);
  timeInterval = null;
  timer = [0, 0, 0, 0];
  timerOn = false;
  theTimer.innerHTML = "00:00:00";
  testArea.value = "";
  testArea.disabled = false;
  testWrapper.style.borderColor = "grey";
}
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);