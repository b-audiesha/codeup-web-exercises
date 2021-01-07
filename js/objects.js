(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person;
    person = {
      firstName: "Audiesha",
      lastName: "Brattin",
    };
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
      console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers;
    shoppers = [
      {name: 'Cameron', amount: 180},
      {name: 'Ryan', amount: 250},
      {name: 'George', amount: 320}
    ];
    console.log(shoppers[0]);
    console.log(shoppers[1]);
    console.log(shoppers[2]);

    shoppers.forEach(function (shoppers) {
      if (shoppers.amount > 200) {
        console.log("Congrats! " + shoppers.name + "," + " you scored a sweet 12% discount ")
        console.log("Your total today is " + "$" + shoppers.amount + ". " + "After your discount,your total will be" + " " + "$" + (shoppers.amount - (.12 * 10) + "!"));
      } else {
        console.log("Oooo! Bummer" + " " + shoppers.name + "," + " Looks like your going to have to drop some more dough, you only spent" + " " + "$" + shoppers.amount + ", " + "You need to spend " + "$" + (200 - shoppers.amount) + " more dollars to qualify for your discount !");
      }
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books;
    books = [
      {
        title: 'Where The Crawdads Sing',
        author: {
          firstName: 'Delia',
          lastName: 'Owens',
        }
      },
      {
        title: 'Lovecraft Country',
        author: {
          firstName: 'Matt',
          lastName: 'Ruff',
        }
      },
      {
        title: 'The Misadventures of Awkward Black Girl',
        author: {
          firstName: 'Issa',
          lastName: 'Rae',
        }
      },
      {
        title: 'Untamed',
        author: {
          firstName: 'Glen',
          lastName: 'Doyle',
        }
      },
      {
        title: 'How to Win Friends and Influence People',
        author: {
          firstName: 'Dale',
          lastName: 'Carnegie',
        }
      },
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (books, index) {
      console.log("Book Title: " + books.title + "\n " + "\t" + "Author:" + books.author.firstName + " " + books.author.lastName + "\n " + "\t" + "Book #:" + (index + 1));
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    let createBook = function (title, authorFirstName, authorLastName) {
      let book = {}
      book.title = title;
      book.author = {}
      book.author.firstName = authorFirstName;
      book.author.lastName = authorLastName;
      return book
    }

    let showBookInfo = function (book, index) {
      console.log("Book Title:" + book.title);
      console.log("Author:" + book.author.firstName + " " + book.author.lastName);
      console.log("Book #:" + (index + 1));
    }

    let newBook = [];
    newBook.push(createBook("How to Tell If Your Cat Is Plotting To Kill You", "The", "Oatmeal"));

    newBook.forEach(showBookInfo);
  }
)();
