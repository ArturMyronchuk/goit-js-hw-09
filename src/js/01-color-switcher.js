let intervalId = null;
let isColorChanging = false;

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

function startColorChange() {
  if (isColorChanging) {
    return;
  }
  isColorChanging = true;
  intervalId = setInterval(changeBackgroundColor, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopColorChange() {
  clearInterval(intervalId);
  isColorChanging = false;
  startButton.disabled = false;
  stopButton.disabled = true;
}

function changeBackgroundColor() {
  const body = document.body;
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
