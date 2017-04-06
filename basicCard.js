// dependency for inquirer npm package
var inquirer = require("inquirer");

var basic = require("./basic.json");

var score = 0;

function BasicCard (front, back) {
  this.front = front;
  this.back = back;
  };

var onlyPresident = new BasicCard("Andrew ... was the only U.S. President who paid off the entire national debt.", "Jackson");

// Create a "Prompt" with a series of questions.
inquirer.prompt([

  // Here we create a basic text prompt.
  {
    type: "input",
    message: "Andrew ... was the only U.S. President who paid off the entire national debt.",
    name: "name"
  },

  // Here we ask the user to confirm.
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true

  }

// Once we are done with all the questions... "then" we do stuff with the answers
// In this case, we store all of the answers into a "user" object that inquirer makes for us.
]).then(function(answer) {


  // If we log that user as a JSON, we can see how it looks.
  console.log(JSON.stringify(answer, null, 2));

  // If the user confirms, we displays the user's name and pokemon from the answers.
  if (answer === onlyPresident.back) {
      score++;
      console.log("That is correct!");
    }
    else {
      score--;
      console.log("The correct answer is " + onlyPresident.back);
    }

});


var brotherlyLove = new BasicCard("The Declaration of Independence was signed in the city of ... on July 4, 1776.", "Philadelphia");

// // Create a "Prompt" with a series of questions.
// inquirer.prompt([

//   // Here we create a basic text prompt.
//   {
//     type: "input",
//     message: "The Declaration of Independence was signed in the city of ... on July 4, 1776.", "Philadelphia",
//     name: "name"
//   },

//   // Here we ask the user to confirm.
//   {
//     type: "confirm",
//     message: "Are you sure:",
//     name: "confirm",
//     default: true

//   }

// // Once we are done with all the questions... "then" we do stuff with the answers
// // In this case, we store all of the answers into a "user" object that inquirer makes for us.
// ]).then(function(answer) {


//   // If we log that user as a JSON, we can see how it looks.
//   console.log(JSON.stringify(answer, null, 2));

//   // If the user confirms, we displays the user's name and pokemon from the answers.
//   if (answer === brotherlyLove.back) {
//       score++;
//       console.log("That is correct!");
//     }
//     else {
//       score--;
//       console.log("The correct answer is " + brotherlyLove.back);
//     }

// });

var iknowmyRights = new BasicCard("The Bill of ... are the first ten Amendments of the U.S. Constitution.", "Rights");

// // Create a "Prompt" with a series of questions.
// inquirer.prompt([

//   // Here we create a basic text prompt.
//   {
//     type: "input",
//     message: "The Bill of ... are the first ten Amendments of the U.S. Constitution.", "Rights",
//     name: "name"
//   },

//   // Here we ask the user to confirm.
//   {
//     type: "confirm",
//     message: "Are you sure:",
//     name: "confirm",
//     default: true

//   }

// // Once we are done with all the questions... "then" we do stuff with the answers
// // In this case, we store all of the answers into a "user" object that inquirer makes for us.
// ]).then(function(answer) {


//   // If we log that user as a JSON, we can see how it looks.
//   console.log(JSON.stringify(answer, null, 2));

//   // If the user confirms, we displays the user's name and pokemon from the answers.
//   if (answer === iknowmyRights.back) {
//       score++;
//       console.log("That is correct!");
//     }
//     else {
//       score--;
//       console.log("The correct answer is " + iknowmyRights.back);
//     }

// });