(function () {
  "use strict";

  let planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
  ];

  /**
   * TODO:
   * Read each console log below, and write some javascript code to perform
   * the step that it describes
   */

  console.log('Adding "The Sun" to the beginning of the planets array.');
  planets.unshift("The Sun")
  console.log(planets);

  console.log('Adding "Pluto" to the end of the planets array.');
  planets.push('Pluto');
  console.log(planets);

  console.log('Removing "The Sun" from the beginning of the planets array.');
  planets.shift();
  console.log(planets);

  console.log('Removing "Pluto" from the end of the planets array.');
  planets.pop();
  console.log(planets);

  console.log('Finding and logging the index of "Earth" in the planets array.');
  console.log(planets.indexOf('Earth'));

  /*or*/

  console.log("The Index of Earth is : " + planets.indexOf('Earth'));

  console.log("Reversing the order of the planets array.");
  planets.reverse();
  console.log(planets);

  console.log("Sorting the planets array.");
  planets.sort()
  console.log(planets);

  /*An array can be sorted by calling the sort method. The sort method, by default,
  will convert items in the array to their string equivalent and order them based on that value.*/
})();
