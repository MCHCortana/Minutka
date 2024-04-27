'use strict';
console.log('funguju!');

const alarmElement = document.querySelector('.alarm');

const alarmRing = () => {
  alarmElement.classList.add('alarm--ring');
  document.querySelector('audio').play();
  document.querySelector('audio').play();
  document.querySelector('audio').play();
};

alarmElement.addEventListener('click', alarmRing);
