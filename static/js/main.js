const burger = document.querySelector('nav .burger');
const h1 = document.querySelector('header .slider');
const blueH1 = document.querySelector('header .slider-blue');

const leftArrow = document.querySelector('header .fa-arrow-left');
const rightArrow = document.querySelector('header .fa-arrow-right');

const slideList = [{
  text1: 'Będziesz uczyć się z ciekawością.',
  text2: 'Obiecujemy',
},
{
  text1: 'Jesteśmy najlepszą uczelnią',
  text2: 'w Polsce.',
},
{
  text1: 'U nas spełnisz swoje',
  text2: 'Marzenia.',
}]

let active = 0;
const time = 5000;

let arrow = true;

const burgerActive = () => {
  burger.classList.toggle('change');
  burger.classList.toggle('active');
}

burger.addEventListener('click', burgerActive);


const changeSlide = () => {
 active++;
 if (active === slideList.length) {
   active = 0;
 }
 h1.textContent = slideList[active].text1;
 blueH1.textContent = slideList[active].text2;
}
let indexInterval = setInterval(changeSlide, time);

const manualSlideLeft = () => {
  if (arrow) {
    clearInterval(indexInterval);
    active --;
    if (active < 0) {
      active = slideList.length -1;
    }
  }
  h1.textContent = slideList[active].text1;
  blueH1.textContent = slideList[active].text2;
}

const manualSlideRight = () => {
  if (arrow) {
    clearInterval(indexInterval);
    active ++;
    if (active === slideList.length) {
      active = 0;
    }
  }
  h1.textContent = slideList[active].text1;
  blueH1.textContent = slideList[active].text2;
}

const popBtn = document.querySelector('.popup-btn button');
const modalWrap = document.querySelector('.modal-wrap');
const popClose = document.querySelector('.hide');
const nav = document.querySelector('nav');

const popup = () => {
  modalWrap.classList.add('active');
  nav.classList.add('nav-hide');
}

const closePopup = () => {
  modalWrap.classList.remove('active');
  nav.classList.remove('nav-hide');
}

leftArrow.addEventListener('click', manualSlideLeft);
rightArrow.addEventListener('click', manualSlideRight);
popBtn.addEventListener('click', popup);
popClose.addEventListener('click', closePopup);