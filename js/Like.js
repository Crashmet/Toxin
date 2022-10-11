
// let countDisplay = document.querySelector('.js-like-counter')
// let incButton = document.querySelector('.js-like-input')
// const startCount = parseInt(countDisplay.textContent);

// function incCount() {
//   let currentCount = parseInt(countDisplay.textContent);
//   if(currentCount === startCount){
//     countDisplay.textContent = currentCount +1 ;
//   }else{
//     countDisplay.textContent = currentCount -1 ;
//   }
// };

// incButton.addEventListener('click', incCount);

document.querySelectorAll('.js-like').forEach(function(el){

  el.addEventListener('click', function (e) {

    let input = e.target.parentElement.querySelector("input");
    let countDisplay = e.target.parentElement.querySelector(".js-like-counter")
    let currentCount = parseInt(countDisplay.textContent);

    if (e.target.classList.contains("js-like-counter")) {
      if(input.checked === true){
        input.checked = false;
        currentCount -= 1;
        countDisplay.textContent = currentCount;
      }else if (input.checked == false) {
        input.checked = true;
        currentCount += 1;
        countDisplay.textContent = currentCount;
      }
    }

  });
})
