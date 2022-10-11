document.querySelector('.js-dropdown-guest').addEventListener('click' ,function(e) {
  e.preventDefault();
  document.querySelector('.js-guest').classList.toggle('visible')
  document.querySelector('.js-dropdown-guest').classList.toggle('open')
})

document.querySelector('.js-dropdown-rooms').addEventListener('click' ,function() {
  document.querySelector('.js-rooms').classList.toggle('visible')
  document.querySelector('.js-dropdown-rooms').classList.toggle('open')
})

document.querySelector('.js-dropdown-checkbox').addEventListener('click' ,function() {
  document.querySelector('.js-checkbox').classList.toggle('visible-checkbox')
  document.querySelector('.js-dropdown-checkbox').classList.toggle('open')
})

document.querySelector('.js-dropdown-date-range').addEventListener('click' ,function() {
  document.querySelector('.input-date__datepicker').classList.toggle('visible');
  document.querySelector('.input-date-dropdown').classList.toggle('visible');
})

