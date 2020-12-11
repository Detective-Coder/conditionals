// Conditionals

// if (2 + 2 === 4) {
//   console.log("We can math.");
// } 

let myName = "Jordan";

// console.log(myName === "Aaron");

// if (myName === "Aaron") {
//   console.log("Where's the pizza?");
// } else if (myName === "Jordan") {
//   console.log("Hi Jordan");
// } else {
//   console.log("You should be Aaron.");
// }

// let isHungry = false;

// if (isHungry) {
//   console.log("You should go eat.");
// }

let a = 2;
let b = 3;

// if (a + b === 5) {
//   console.log("You rock.");
// }

let likesToTravel = true;

// if (likesToTravel) {
//   console.log("Bon voyage!");
// } else {
//   console.log("Enjoy your lunch.");
// }

let favoriteFood = "tacos";

// if (favoriteFood === "fried pickles" || favoriteFood === "pepperoni rolls") {
//   console.log("Congratulations! You have excellent taste!");
// } else {
//   console.log("Clearly you have not tried fried pickles or pepperoni rolls.");
// }

// if (1 + 1 > 5) {
//   console.log("True fact!");
// } else {
//   console.log("LIES!");
// }

// if (4 * 5 <= 20) {
//   console.log("True fact!");
// } else {
//   console.log("LIES!");
// }

// if (6 - 2 >= 20) {
//   console.log("True fact!");
// } else {
//   console.log("LIES!");
// }

let likesDogs = true;

// if (likesDogs) {
//   console.log("You're a dog person!");
// } else {
//   console.log("You're a cat person!");
// }

let birthYear = 1995;

// if (birthYear >= 1973 && birthYear <= 1983) {
//   console.log("You're part of Generation Jones!");
// } else if (birthYear >= 1984 && birthYear <= 1994) {
//   console.log("You're a Millenial!");
// } else {
//   console.log("We don't know.");
// }

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

let time = "5:20 PM";
let isHungry = false;

if (time === "7:30 AM" && isHungry === true) {
  console.log("Time for breakfast!");
} else if (time === "12:00 PM" && isHungry === true) {
  console.log("Time for lunch!");
} else if (time === "7:00 PM" || time === "8:00 PM" && isHungry === true) {
  console.log("Time for dinner!");
} else if (isHungry === true) {
  console.log("Time for a snack!");
} else {
  console.log("Have a cookie anyway!");
}

let grade = 100;

if (grade >= 0 && grade <= 69) {
  console.log("You got an F");
} else if (grade >= 70 && grade <= 76) {
  console.log("You got a D");
} else if (grade >= 77 && grade <= 84) {
  console.log("You got a C");
} else if (grade >= 85 && grade <= 92) {
  console.log("You got a B"); 
} else if (grade >= 93 && grade <= 100) {
  console.log("You got an A");
} else {
  console.log("We don't know what you got.");
}

let weatherForecast = [
  {
   day: "Friday",
   temperature: {
     high: 96,
     low: 19
   },
   conditions: "sunny",
   astronomy: {
     sunrise: "7:43 AM",
     sunset: "5:09 PM"
   }
  },
  {
   day: "Saturday",
   temperature: {
     high: 96,
     low: 19
    },
   conditions: "cloudy",
   astronomy: {
     sunrise: "7:44 AM",
     sunset: "5:08 PM"
   }
  },
  {
   day: "Sunday",
   temperature: {
     high: 96,
     low: 19
    },
   conditions: "chance of rain",
   astronomy: {
     sunrise: "7:45 AM",
     sunset: "5:07 PM"
   }
  }
 ]

 // If all the high temperatures in the three day forecast are above 85, log, "It's going to be hot as heck all week!" to the console.
 // If all of the high temperatures in the three day forecast are below 40, log "It's going to be cold as heck all week!" to the console.
 if (weatherForecast[0].temperature.high > 85 && weatherForecast[1].temperature.high > 85 && weatherForecast[2].temperature.high > 85) {
   console.log("It's going to be hot as heck all week!");
 } else if (weatherForecast[0].temperature.high < 40 && weatherForecast[1].temperature.high < 40 && weatherForecast[2].temperature.high < 40) {
  console.log("It's going to be cold as heck all week!");
 }
 // If any of the low temperatures are below 20, log a sentence about the specific day. (Example: "Wednesday will be cold as heck!")
//  if (weatherForecast[0].temperature.low < 20) {
//     console.log(`${weatherForecast[0].day} will be cold as heck!`);
//  }

for (let i = 0; i < weatherForecast.length; i++) {
  if (weatherForecast[i].temperature.low < 20) {
    console.log(`${weatherForecast[i].day} will be cold as heck!`);
  }
}

// If any of the high temperatures are above 95, log a sentence about the specific day. (Example: "Thursday will be hot as heck!")

for (let i = 0; i < weatherForecast.length; i++) {
  if (weatherForecast[i].temperature.high > 95) {
    console.log(`${weatherForecast[i].day} will be hot as heck!`);
  }
}