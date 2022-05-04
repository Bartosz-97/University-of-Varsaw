const logo = document.querySelector('nav .logo');
const spanBurger = [...document.querySelectorAll('nav .burger span')];


window.addEventListener('scroll', function() {
  if (window.scrollY > 520) {
    logo.classList.add('hidden-logo');
  } else {
    logo.classList.remove('hidden-logo');
  }
})

window.addEventListener('scroll', function() {
  if (window.scrollY > 520) {
    spanBurger.forEach((span) => {
      span.style.backgroundColor = '#000';
    })
  } else
  spanBurger.forEach((span) => {
    span.style.backgroundColor = '#FFF';
  })
})