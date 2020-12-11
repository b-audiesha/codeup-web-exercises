"use strict";

alert("Welcome To My Website!");
let  userInput = prompt("What is your favorite color?");
let message = "Awesome! I love " + userInput + "!" + " That is my favorite color too!"
alert (message);
// or alert("Awesome! I love " + userInput + "!" + " That is my favorite color too!")


// let moviePrice = parseInt(prompt("What is the daily rental rate for this movie"));
let littleMermaidDays = prompt("How many days did you rent Little Mermaid?");
let brotherBearDays = prompt("How many days did you rent Brother Bear?");
let herculesDays = prompt("How many days did you rent Hercules?");
let moviePrice = 3;
let charges = moviePrice*littleMermaidDays + moviePrice*brotherBearDays + moviePrice*herculesDays;
alert("You owe $"+ charges + " for rental charges ($3 per movie per day).");

const googleRate = 400;
const amazonRate = 380;
const facebookRate = 350;
let googleHours = prompt("How many hours did you work for Google?");
let amazonHours = prompt("How many hours did you work for Amazon?");
let facebookHours = prompt("How many hours did you work for Facebook?");
let totalPay = googleRate*googleHours +
  amazonRate*amazonHours + facebookRate*facebookHours;
alert("You made $"+totalPay+ " this week.");

let isClassOpen = confirm("Is there room in the class?");
let isScheduleOpen = confirm("Does this class work with your schedule?");
alert("You may register: " + (isClassOpen && isScheduleOpen));

let numberItemsPurchased = parseInt(prompt("How many items did you purchase?"));
let isOfferExpired = confirm("Press OK if the offer is not expired.");
let isPremiumMember = confirm("Press OK if you are a premium member");
alert("Offer Applied: " + (isOfferExpired && (numberItemsPurchased > 2 || isPremiumMember)));
