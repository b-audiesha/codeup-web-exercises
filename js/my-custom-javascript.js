/*$(document).ready(function() {
  $('li').css('font-size', '20px');
  $('p, h1, li').css('background-color', 'pink');
});
let contents = $('h1').html();
alert(contents);*/

/*Changes the h1 Background to Red*/
$('h1').click(function () {
  $(this).css({
    backgroundColor: 'red',
    transition: 'background .5s'
  })
});

(function () {
  let jqElements = $('p');
  let fontReset = ''

  function addClickEvents(elementsToBind) {
    let changePFont = function () {
      elementsToBind.css('font-size', fontReset);
      $(this).css("font-size", '18px');
    }
    elementsToBind.dblclick(changePFont);
  }

  addClickEvents(jqElements);
})();

(function () {
  let liObject = $('li');
  let handlerRedBGnd = function () {
    $(this).css({
      backgroundColor: 'red',
      transition: 'background .5s'
    })
  };
  let handlerNormalBGnd = function (e) {
    $(this).css('background-color', "black")
  }

  liObject.hover(handlerRedBGnd, handlerNormalBGnd);
})();

