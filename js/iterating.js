(function () {
  "use strict";

  /**
   * TODO:
   * Create an array of 4 people's names and store it in a variable called
   * 'names'.
   */
  let names = ['Audi', 'Kyle', 'Austin', 'Dallas'];
  /**
   * TODO:
   * Create a log statement that will log the number of elements in the names
   * array.
   */
  console.log(names.length);
  /**
   * TODO:
   * Create log statements that will print each of the names individually by
   * accessing each element's index.
   */
  console.log(names[0]);
  console.log(names[1]);
  console.log(names[2]);
  console.log(names[3]);
  /**
   * TODO:
   * Write some code that uses a for loop to log every item in the names
   * array.
   */

  let i;
  for (i = 0; i < names.length; i++) {
    console.log('The name at index :' + i + ' is: ' + names[i]);
  }
  /*or*/
  for (let i = 0; i < names.length; i++) {
    console.log('The name at index :' + i + ' is: ' + names[i]);
  }
  /* or*/
  for (let i = 0; i < names.length; i++) console.log(names[i]);



  /**
   * TODO:
   * Refactor your above code to use a `forEach` loop
   */

  console.log('the names in the name array are: ')
  names.forEach(function (name) {
    console.log('\t' + name);
  })


  /**
   * TODO:
   * Create the following three functions, each will accept an array and
   * return an an element from it
   * - first: returns the first item in the array
   * - second: returns the second item in the array
   * - last: returns the last item in the array
   *
   * Example:
   *  > first([1, 2, 3, 4, 5]) // returns 1
   *  > second([1, 2, 3, 4, 5]) // returns 2
   *  > last([1, 2, 3, 4, 5]) // return 5
   */
  let numbers = [1, 2, 3, 4, 5];

  let first = function (arr) {
    return arr [0];
  }
  let second = function (arr) {
    return arr [1];
  }
  let last = function (arr) {
    return arr[arr.length - 1];
  }
  console.log(first(numbers));
  console.log(second(numbers));
  console.log(last(numbers));

  /*or*/

  function fst(arr) {
    return arr[0];
  }

  function two(arr) {
    return arr[1];
  }

  function lst(arr) {
    return arr.length[-1];
  }
  console.log(fst(numbers));
  console.log(two(numbers));
  console.log(lst(numbers));



})();
