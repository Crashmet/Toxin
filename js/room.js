document.querySelectorAll('.js-rooms').forEach(function(el){
  let bedroom = 0;
  let beds = 0;
  let bathrooms = 0;

  el.addEventListener('click', function (e) {
    let input = e.target.parentElement.querySelector("input");
    if (e.target.classList.contains("js-btn-plus")) {
      input.setAttribute('value', (parseInt(input.getAttribute('value')) + 1).toString());

      if(e.target.parentElement.querySelector(".js-input-bedroom")){
        bedroom += 1;
      } else if (e.target.parentElement.querySelector(".js-input-beds")){
        beds += 1;
      } else if (e.target.parentElement.querySelector(".js-input-bathrooms")){
        bathrooms += 1;
      }

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

        if(e.target.parentElement.querySelector(".js-input-bedroom")){
          bedroom -= 1;
        } else if (e.target.parentElement.querySelector(".js-input-beds")){
          beds -= 1;
        } else if (e.target.parentElement.querySelector(".js-input-bathrooms")){
          bathrooms -= 1;
        }
      }
      if (input.value == 0){
        e.target.classList.add('value__btn_not-active');
      };
    };

    document.querySelectorAll('.js-rooms-value').forEach(function(el){
      el.textContent = `${bedroom} спальни, ${beds} кровати, ${bathrooms} ванн`;
      if (bedroom == 0 && beds == 00 && bathrooms == 0){
        el.textContent = `Спать не будем? :(`
      }
    })

  });
})
