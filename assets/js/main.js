const box = document.querySelector('.box');

const upButton = document.querySelector('#up');
const downButton = document.querySelector('#down');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const upleftButton = document.querySelector('#up-left');
const uprightButton = document.querySelector('#up-right');
const downleftButton = document.querySelector('#down-left');
const downrightButton = document.querySelector('#down-right');
const resetButton = document.querySelector('#reset');

let boxWidth = 600;
let boxHeight = 600;
let ballWidth = 60;
let ballHeight = 60;
let step = 10;
up.addEventListener('click', () => {
    ball.style.top = parseInt(ball.style.top) - stepLength + 'px';
  });
  
  down.addEventListener('click', () => {
    ball.style.top = parseInt(ball.style.top) + stepLength + 'px';
  });
  
  left.addEventListener('click', () => {
    ball.style.left = parseInt(ball.style.left) - stepLength + 'px';
  });
  
  right.addEventListener('click', () => {
    ball.style.left = parseInt(ball.style.left) + stepLength + 'px';
  });