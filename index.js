// dependency for inquirer npm package
var inquirer = require("inquirer");

// requiring the BasicCard module exported from basicCard.js
var BasicCard = require("./basicCard.js");
// requiring the ClozeCard module exported from clozeCard.js
var ClozeCard = require("./clozeCard.js");

//var newBasicCard = new BasicCard("Who was the first president of the United States?", "George Washington");
//var newClozeCard = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

//var questions = [{front: "", back:""}]

// arrays used to contain all of our player objects
var cards = basicC = closeC = [];

var style = "basic";
console.log("style: " + style);

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
pushCard(firstPresident, style);

var secondPresident = new BasicCard(
    "Who was the second president of the United States?", "John Adams");
pushCard(secondPresident, style);
var previousPresident = new BasicCard(
    "Who was the 1st previous president of the United States?", "Barack Obama");
pushCard(previousPresident, style);
var currentPresident = new BasicCard(
    "Who is the current president of the United States?", "Donald Trump");
pushCard(currentPresident, style);

style = "cloze";
var firstPresidentCloze = new ClozeCard(
	"George Washington was the first president of the United States.", "George Washington");
pushCard(currentPresident, style);
var secondPresidentCloze = new ClozeCard(
	"John Adams was the second president of the United States.", "John Adams");
pushCard(currentPresident, style);
var previousPresidentCloze = new ClozeCard(
	"Barack Obama was the 1st previous president of the United States.", "Barack Obama");
pushCard(currentPresident, style);
var currentPresidentCloze = new ClozeCard(
	"Donald Trump is the current president of the United States.", "Donald Trump");
pushCard(currentPresident, style);

function pushCard(card, cardType) {
	if (cardType = "basic") {
		cards.push();
		basicC.push();
	}
	else if	(cardType === "cloze") {
		cards.push();
		clozeC.push();
	}
};
for (var i = 0; i < cards.length; i++) {
      closeC[i].printInfo();
};

// "Who was the first president of the United States?"
//console.log(firstPresident.front); 

// "George Washington"
//console.log(firstPresident.back); 

// "George Washington"
//console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
//console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
//console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
//var brokenCloze("This doesn't work", "oops");