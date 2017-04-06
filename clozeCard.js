// dependency for inquirer npm package
var inquirer = require("inquirer");

var basic = require("./cloze.json");

function ClozeCard (cloze, partial, fullText) {
  this.cloze = cloze;
  this.partial = partial;
  this.fullText = fullText;
  };

var onlyPresidentCloze = new ClozeCard("Andrew Jackson was the only U.S. President who paid off the entire national debt.", "Jackson");

console.log(onlyPresidentCloze.cloze);

console.log(onlyPresidentCloze.partial); 

console.log(onlyPresidentCloze.fullText);

var brotherlyLoveCloze = new ClozeCard("The Declaration of Independence was signed in the city of Philadelphia on July 4, 1776.", "Philadelphia");

console.log(brotherlyLoveCloze.cloze);

console.log(brotherlyLoveCloze.partial);

console.log(brotherlyLoveCloze.fullText);

var iknowmyRights = new ClozeCard("The Bill of Rights are the first ten Amendments of the U.S. Constitution.", "Rights");

console.log(onlyPresidentCloze.cloze);

console.log(iknowmyRightsCloze.partial);

console.log(iknowmyRightsCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze("This doesn't work", "oops");