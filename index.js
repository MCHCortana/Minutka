'use strict';
console.log('funguju!');

const alarmElement = document.querySelector('.alarm');

const alarmRingFull = () => {
  alarmElement.classList.add('alarm--ring');
};

alarmElement.addEventListener('click', alarmRing);
