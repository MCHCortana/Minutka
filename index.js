'use strict';
console.log('funguju!');

const alarmElement = document.querySelector('.alarm');
const formElement = document.querySelector('.controls');
const displayMin = document.querySelector('.alarm__minutes');
const display = document.querySelector('.alarm__seconds');

const alarmRingFull = (e) => {
  e.preventDefault();

  const timeSet = document.querySelector('.time-input').value;
  if (!timeSet) {
    alert('not a valid time');
    location.reload();
  }
  displayMin.textContent = timeSet.toString().padStart(2, 'O');
  display.textContent = '00';

  let minutes = timeSet;
  console.log(minutes);
  let intervalTime = timeSet * 60;
  let seconds = 60;
  const intervalTimer = setInterval(() => {
    intervalTime--;
    if (intervalTime % 60 > 0) {
      seconds--;
      display.textContent = seconds.toString().padStart(2, 'O');
    } else {
      minutes--;
      console.log(minutes);
      seconds = 60;
      displayMin.textContent = minutes.toString().padStart(2, 'O');
    }
    if (intervalTime === 0) {
      display.textContent = '00';
      displayMin.textContent = '00';
      clearInterval(intervalTimer);
      alarmElement.classList.add('alarm--ring');
    }
  }, 1000);
};

formElement.addEventListener('submit', alarmRingFull);
