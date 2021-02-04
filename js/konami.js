(function () {
  'use strict';
  $().ready(function () {
    function konami(fn) {
      let keysEntered = ""; /*empty string*/
      let konamiCode = "38384040373937396665"; /*the keycode string*/
      $(document).keyup(function (event) {
        keysEntered += event.keyCode; /*pushing to the array*/
        console.log(keysEntered); /*console log the keys up*/
        /*   keysEntered.splice(-keysEntered - 1, keysEntered.length);*/ /*comparing it to a konamiCode string*/
        if (keysEntered.indexOf(konamiCode) !== -1)/*if keys entered matches the konami code then alert*/{
          fn();
          keysEntered = ""
        }
      });//29
    }
    $(document).ready(function () {
      konami(function () {
        alert(" Huzzah You NOW have 30 extra lives!");
      });
    });//39
  });//25
})();//23
