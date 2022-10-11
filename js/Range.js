const slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [5000, 10000],
  connect: true,
  step: 1000,
  range: {
    min: [0],
    max: [15000]
  }
});

let input0 = document.querySelector('.js-range-from');
let input1 = document.querySelector('.js-range-to');
let inputs = [input0, input1];

slider.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = Math.round(values[handle]);
  // если мы крутим первую полоску(handle0), то значение (values), меняется у нулевого, матх раунд нужен чтоб убрвать видимые нули
});

const setRangeSlider = (i, value) => {
  let arr = [null, null];
  arr[i] = value;

  slider.noUiSlider.set(arr);
};

inputs.forEach((el, index) => {
  el.addEventListener('change', (e) => {
    setRangeSlider(index, e.currentTarget.value);
  });
});
