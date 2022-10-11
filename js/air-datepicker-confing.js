new AirDatepicker('.js-datepicker-date-range', {
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: ' - ',
  dateFormat(date) {
    return date.toLocaleString('ru', {
      day: '2-digit',
      month: 'short'
    });
  },
  navTitles: {
    days: '<h2>MMMM yyyy</h2>'
  },
  buttons: [
    {
      content: 'Очистить',
      className: 'js-clear',
      onClick(dp) {
        dp.clear();
        document.querySelector('.js-clear').classList.remove('js-clear_active');
      }
    },
    {
      content: 'Применить',
      className: 'js-apply',
      onClick() {
        document.querySelector('.js-datepicker-date-range').classList.remove('visible');
        document.querySelector('.js-datepicker-date-range').previousElementSibling.classList.remove('visible');
        document.querySelector('.js-datepicker-date-range').parentElement.classList.remove('visible');
      }
    }
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector('.js-clear').classList.add('js-clear_active');
    }
    document.querySelector('.js-dropdown-date-range').previousElementSibling.value = document.querySelector('.js-dropdown-date-range').value;
  },

  altField: document.querySelector('.js-dropdown-date-range'),
  altFieldDateFormat: 'dd.MM.yyyy',
});



new AirDatepicker('.js-datepicker-date-before', {
  minDate: new Date(),
  position: 'bottom right',
  navTitles: {
    days: '<h2>MMMM yyyy</h2>'
  },
  buttons: [
    {
      content: 'Очистить',
      className: 'js-clear',
      onClick(dp) {
        dp.clear();
        document.querySelector('.js-clear').classList.remove('js-clear_active');
      }
    },
    {
      content: 'Применить',
      className: 'js-apply',
      onClick() {
        document.querySelector('.js-datepicker-date-before').classList.remove('visible');
        document.querySelector('.js-datepicker-date-before').previousElementSibling.classList.remove('visible');
        document.querySelector('.js-datepicker-date-before').parentElement.classList.remove('visible');
      }
    }
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector('.js-clear').classList.add('js-clear_active');
    }
    document.querySelector('.js-datepicker-date-before').previousElementSibling.value = document.querySelector('.js-datepicker-date-before').value;
  },

  altField: document.querySelector('.js-dropdown-date-before'),
  altFieldDateFormat: 'dd.MM.yyyy',
});


new AirDatepicker('.js-datepicker-date-after', {
  minDate: new Date(),
  position: 'bottom right',
  navTitles: {
    days: '<h2>MMMM yyyy</h2>'
  },
  buttons: [
    {
      content: 'Очистить',
      className: 'js-clear',
      onClick(dp) {
        dp.clear();
        document.querySelector('.js-clear').classList.remove('js-clear_active');
      }
    },
    {
      content: 'Применить',
      className: 'js-apply',
      onClick() {
        document.querySelector('.js-datepicker-date-after').classList.remove('visible');
        document.querySelector('.js-datepicker-date-after').previousElementSibling.classList.remove('visible');
        document.querySelector('.js-datepicker-date-after').parentElement.classList.remove('visible');
      }
    }
  ],
  onSelect({ date }) {
    if (date) {
      document.querySelector('.js-clear').classList.add('js-clear_active');
    }
    document.querySelector('.js-datepicker-date-after').previousElementSibling.value = document.querySelector('.js-datepicker-date-after').value;
  },

  altField: document.querySelector('.js-dropdown-date-after'),
  altFieldDateFormat: 'dd.MM.yyyy'
});



document.querySelectorAll('.js-clear').forEach((clear) =>{
  clear.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

document.querySelectorAll('.js-apply').forEach((apply) =>{
  apply.addEventListener('click', function (e) {
    e.preventDefault();
  });
});


document.querySelector('.js-dropdown-date-before').addEventListener('click' ,function() {
  document.querySelector('.js-datepicker-date-before').classList.toggle('visible');
  document.querySelector('.filter-date-dropdown_before').classList.toggle('visible');
  document.querySelector('.js-datepicker-date-after').classList.remove('visible');
  document.querySelector('.filter-date-dropdown_after').classList.remove('visible');
})

document.querySelector('.js-dropdown-date-after').addEventListener('click' ,function() {
  document.querySelector('.js-datepicker-date-after').classList.toggle('visible');
  document.querySelector('.filter-date-dropdown_after').classList.toggle('visible');
  document.querySelector('.js-datepicker-date-before').classList.remove('visible');
  document.querySelector('.filter-date-dropdown_before').classList.remove('visible');
})
