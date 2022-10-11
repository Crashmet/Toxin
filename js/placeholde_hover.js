let input = document.querySelectorAll('.input__text');


input.forEach(function(el){
  let placeholderName = el.placeholder;
  el.addEventListener('mouseover', () => {
    el.placeholder = 'This is pretty awesome'
  })

  el.addEventListener('mouseout', () => {
    el.placeholder = placeholderName;
  })
})

