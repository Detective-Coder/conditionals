// Conditionals

// if (2 + 2 === 4) {
//   console.log("We can math.");
// } 

let myName = "Jordan";

// console.log(myName === "Aaron");

if (myName === "Aaron") {
  console.log("Where's the pizza?");
} else if (myName === "Jordan") {
  console.log("Hi Jordan");
} else {
  console.log("You should be Aaron.");
}

let isHungry = false;

if (isHungry) {
  console.log("You should go eat.");
}

let a = 2;
let b = 3;

if (a + b === 5) {
  console.log("You rock.");
}

let likesToTravel = true;

if (likesToTravel) {
  console.log("Bon voyage!");
} else {
  console.log("Enjoy your lunch.");
}

let favoriteFood = "tacos";

if (favoriteFood === "fried pickles" || favoriteFood === "pepperoni rolls") {
  console.log("Congratulations! You have excellent taste!");
} else {
  console.log("Clearly you have not tried fried pickles or pepperoni rolls.");
}

if (1 + 1 > 5) {
  console.log("True fact!");
} else {
  console.log("LIES!");
}

if (4 * 5 <= 20) {
  console.log("True fact!");
} else {
  console.log("LIES!");
}

if (6 - 2 >= 20) {
  console.log("True fact!");
} else {
  console.log("LIES!");
}

let likesDogs = true;

if (likesDogs) {
  console.log("You're a dog person!");
} else {
  console.log("You're a cat person!");
}

let birthYear = 1995;

if (birthYear >= 1973 && birthYear <= 1983) {
  console.log("You're part of Generation Jones!");
} else if (birthYear >= 1984 && birthYear <= 1994) {
  console.log("You're a Millenial!");
} else {
  console.log("We don't know.");
}

let personObject = {
  name: "Aaron Frankenfield",
  language: "English"
}

if (personObject.language === "English") {
  console.log(`Hello, ${personObject.name}!`);
} else if (personObject.language === "Spanish") {
  console.log(`Hola, ${personObject.name}!`);
} else if (personObject.language === "French") {
  console.log(`Bonjour, ${personObject.name}!`)
} else {
  console.log("I don't know your language.");
}



