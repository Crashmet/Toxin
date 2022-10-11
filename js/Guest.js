document.querySelector('.js-guest').addEventListener('click', function (e) {
  e.preventDefault()

  let input = e.target.parentElement.querySelector("input");
  let guestValue = 0;

  if (e.target.classList.contains("js-btn-plus")) {
    input.setAttribute('value', (parseInt(input.getAttribute('value')) + 1).toString());

    if (input.value > 0){
      e.target.parentElement.querySelector(".js-btn-minus").classList.remove('value__btn_not-active');
    }
    if (input.value == 0){
      e.target.parentElement.querySelector(".js-btn-minus").classList.add('value__btn_not-active');
    };

  } else if (e.target.classList.contains("js-btn-minus")) {
    if (input.value > 0){
      input.setAttribute('value', (parseInt(input.getAttribute('value')) - 1).toString());
      e.target.classList.remove('value__btn_not-active');
    }
    if (input.value == 0){
      e.target.classList.add('value__btn_not-active');
    };
  };


  let arrValue = document.querySelectorAll('.guest__value');

  for (let values of arrValue){
    if(values.value > 0){
      document.querySelector('#js-clear').classList.remove('btn__text_not-active');
      break;
      }else {
        document.querySelector('.js-clear').classList.add('btn__text_not-active');
      }
  };

  if (e.target.classList.contains("js-clear")){
    e.target.classList.add('btn__text_not-active');
    for (let values of arrValue){
      if(values.value > 0){
        values.setAttribute('value', (parseInt(values.getAttribute('value')) * 0).toString());
      }
      if (values.value == 0) {
        values.parentElement.querySelector(".js-btn-minus").classList.add('value__btn_not-active');
      }
    }
    guestValue = 0;
    document.querySelectorAll('.js-guest-value').forEach(function(el){
      el.textContent = 'Сколько гостей?';
    })
  };

  if (e.target.classList.contains("js-apply")){
    for (let values of arrValue){
      if(values.value > 0){
        guestValue += Number(values.value);
      }
    };
    document.querySelectorAll('.js-guest-value').forEach(function(el){
      if (guestValue == 1){
        el.textContent = guestValue + ' ' + 'гость';
      } else if (guestValue > 4){
        el.textContent = guestValue + ' ' + 'гостей';
      } else
      {
        el.textContent = guestValue + ' ' + 'гостя';
      }

    })
  };
});





