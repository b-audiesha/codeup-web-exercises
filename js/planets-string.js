(function () {
  "use strict";



  let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
  /* let planetsArray;*/

  /**
   * TODO:
   * Convert planetsString to an array, and save it in a variable named
   * planetsArray.
   * console.log planetsArray to check your work
   */
  let planetsArray = planetsString.split('|');
  console.log(planetsArray);

  /**
   * TODO:
   * Create a string with <br> tags between each planet. console.log() your
   * results. Why might this be useful?
   *
   * BONUS:
   * Create another string that would display your planets in an undordered
   * list. You will need an opening AND closing <ul> tags around the entire
   * string, and <li> tags around each planet.
   */
  let planetString = planetsArray.join("<br>");
  console.log(planetString);

  let planetList = "<ul>"
  planetList += planetsArray.join("<li>");
  planetList += "<li></ul>"
  console.log(planetList);

  /*or*/

 /* let planetStr = planetsArray.join("<br>");
  console.log(planetStr);*/
  let htmlString = '<ul> <li>';
  htmlString += planetsArray.join('</li> <li>');
  htmlString += '</li> </ul>';
  console.log(htmlString);

  document.getElementById("demo").innerHTML = htmlString;

})();

