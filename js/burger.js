document.querySelector('#burger').addEventListener('click' ,function() {
  document.querySelector('#menu').classList.toggle('header-menu-active');
  document.querySelector('#burger').classList.toggle('burger-active');
});

document.querySelector('#none_menu').addEventListener('click' ,function() {
 document.querySelector('#menu').classList.toggle('header-menu-active');
 document.querySelector('#burger').classList.toggle('burger-active');
})
