$(document).ready(function () {
  // button for search
  $("submitForcast").click(function () {
    return getForcast();
  });

});

function getForcast() {
  let city = $('#city').val();
  let days = $('#days').val();
// make sure that value is indeed a value and not empty else throw an error.
//     Call Ajax
//   if (city != '' && days != '') {

    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/onecall?&=" + city + "&units=imperial" + "&cnt=" + days +
        "&APPID=OPEN_WEATHER_APPID",
      type: "GET",
      dateType: "jsonp",
      success: function (data) {
        let table = ""
        // start at 0 and loop thru all days (4)
        for (let i = 0; i < data.list.length; i++) {
          table += '<tr>';
          table+= '<td>' + data.list[i].weather[0].icon + '</td>';
          table+= '<td>' + data.list[i].weather[0].main + '</td>';
          table+= '<td>' + data.list[i].weather[0].description + '</td>';
          table += '</tr>';
        }},})}
$('').html(table);
$('#city').val('');
$('#days').val('');
