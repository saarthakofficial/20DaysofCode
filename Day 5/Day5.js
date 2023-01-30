const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const timer = document.getElementById("timer");

let interval;
let seconds = 0;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(() => {
    seconds++;
    timer.textContent = seconds;
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopTimer() {
  clearInterval(interval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetTimer() {
  clearInterval(interval);
  seconds = 0;
  timer.textContent = seconds;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
