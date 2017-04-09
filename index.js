// dependency for inquirer npm package
var inquirer = require("inquirer");

// dependency for reading and writing to files
var fs = require("fs");

// requiring the BasicCard module exported from basicCard.js
var BasicCard = require("./basicCard.js");
// requiring the ClozeCard module exported from clozeCard.js
var ClozeCard = require("./clozeCard.js");

//var newBasicCard = new BasicCard("Who was the first president of the United States?", "George Washington");
//var newClozeCard = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

var basicQuestions = [
				{
				front: "Who was the first president of the United States?", 
	 			 back: "George Washington"},
				{
				front: "Who was the second president of the United States?", 
	 			 back: "John Adams"},
				{
				front: "Who was the 1st previous president of the United States?", 
	 			 back: "Barack Obama"},
				{
				front: "Who is the current president of the United States?", 
	 			 back: "Donald Trump"}
	 			 ];

var clozeQuestions = [
				{
				fullText: "George Washington was the first president of the United States?", 
	 			   cloze: "George Washington"},
				{
				fullText: "John Adams was the second president of the United States?", 
	 			   cloze: "John Adams"},
	 			{
				fullText: "This is my sentence to test.", 
	 			   cloze: "oops"},
	 			{
				fullText: "Barack Obama was the 1st previous president of the United States?", 
	 			   cloze: "Barack Obama"},
				{
				fullText: "Donald Trump is the current president of the United States?", 
	 			   cloze: "Donald Trump"}
	 			 ];

// arrays used to contain all of our player objects
var cards = [];
var basicC = [];
var clozeC = [];
var style = "basic";

for (var i=0; i<basicQuestions.length; i++) {
//	console.log("Style in basic for loop: " + style);
	var newBasicCard = new BasicCard(basicQuestions[i].front, basicQuestions[i].back);
	pushCard(newBasicCard, style);
};

style = "cloze";

for (var i=0; i<clozeQuestions.length; i++) {
//	console.log("Style in Cloze for loop: " + style);
	var newClozeCard = new ClozeCard(clozeQuestions[i].fullText, clozeQuestions[i].cloze);
	pushCard(newClozeCard, style);
};

function pushCard(card, cardType) {
	if (cardType === "basic") {
//		cards.push(card);
		basicC.push(card);
//		console.log("added basic card: " + card);
		console.log("added basic card: " + JSON.stringify(card, null, 4));
	}
	else if	(cardType === "cloze") {
//		cards.push(card);
		clozeC.push(card);
//		console.log("added cloze card: " + card);
		console.log("added cloze card: " + JSON.stringify(card, null, 4));
	}
};

console.log("There are: " + basicC.length + " basiccards.");
console.log("There are: " + clozeC.length + " clozecards.");
//console.log("There are: " + cards.length + " total cards.");

for (var i = 0; i < basicC.length; i++) {
	basicC[i].printBasic();
//	TO DO writeToFile(card);
}

for (var i = 0; i < clozeC.length; i++) {
	clozeC[i].printCloze();
	clozeC[i].partialText();
//	TO DO writeToFile(card);
}
/*
function writeToFile(writeStuff) {
 // Creates and appends/prints to a file called "log.txt".
  console.log(writeStuff);
  fs.appendFile("log.txt", writeStuff, function(error) {

    // If write errors, log the error to the console.
    if (error) {
      return console.log("Error writing to the log.txt file", error);
    }
    // Otherwise, it will print: "log.txt was updated!"
    console.log("log.txt was updated.");

  });  // end of writeTxtFile
  return;
}; // end of writeLogAndConsole function
*/
// optional if using main.js
//module.exports = CardAdmin;  will need to set up this module in this js file