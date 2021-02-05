'use strict';
$(document).ready(function () {
  function konami(fn) {
    let keysEntered = ""; /*empty string*/
    let konamiCode = "38384040373937396665"; /*the keycode string*/
    $(document).keyup(function (event) {
      keysEntered += event.keyCode; /*pushing to the array*/
      if (keysEntered.indexOf(konamiCode) !== -1)/*if keys entered matches the konami code then alert*/{
        fn();
        keysEntered = ""
      }
    });//29
  }
  $(document).ready(function () {
    konami(function () {
      alert(" Huzzah You NOW have 30 extra lives!");
      $('body').css('background-color', 'pink');
  

    });
  });//39
})();//23

/* everything in the head runs first and then everything after it renders.*/
