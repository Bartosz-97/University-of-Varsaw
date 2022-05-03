const burger = document.querySelector('nav .burger');

burger.addEventListener('click', function() {
  burger.classList.toggle('change');
  burger.classList.toggle('active');
})