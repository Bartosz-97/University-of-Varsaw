const logo = document.querySelector('nav .logo');
const spanBurger = [...document.querySelectorAll('nav .burger span')];


window.addEventListener('scroll', function() {
  if (window.scrollY > 580) {
    logo.classList.add('hidden-logo');
  } else {
    logo.classList.remove('hidden-logo');
  }
})

window.addEventListener('scroll', function() {
  if (window.scrollY > 620) {
    spanBurger.forEach((span) => {
      span.style.backgroundColor = 'red';
    })
  } else
  spanBurger.forEach((span) => {
    span.style.backgroundColor = '#FFF';
  })
})