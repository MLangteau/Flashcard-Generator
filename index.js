// dependency for inquirer npm package
var inquirer = require("inquirer");

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
console.log("style: " + style);

for (var i=0; i<basicQuestions.length; i++) {
	console.log("Style in basic for loop: " + style);
	var newBasicCard = new BasicCard(basicQuestions[i].front, basicQuestions[i].back);
	//    "Who was the first president of the United States?", "George Washington");
	pushCard(newBasicCard, style);
};
/*
var secondPresident = new BasicCard(
    "Who was the second president of the United States?", "John Adams");
pushCard(secondPresident, style);
var previousPresident = new BasicCard(
    "Who was the 1st previous president of the United States?", "Barack Obama");
pushCard(previousPresident, style);
var currentPresident = new BasicCard(
    "Who is the current president of the United States?", "Donald Trump");
pushCard(currentPresident, style);
*/
style = "cloze";
for (var i=0; i<clozeQuestions.length; i++) {
	console.log("Style in Cloze for loop: " + style);
	var newClozeCard = new ClozeCard(clozeQuestions[i].fullText, clozeQuestions[i].cloze);
	//    "Who was the first president of the United States?", "George Washington");
	pushCard(newClozeCard, style);
};
/*
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
*/
function pushCard(card, cardType) {
	if (cardType === "basic") {
		cards.push(card);
		basicC.push(card);
		console.log("added basic card: " + card);
		console.log(JSON.stringify(card, null, 4));
	}
	else if	(cardType === "cloze") {
		cards.push(card);
		clozeC.push(card);
		console.log("added cloze card: " + card);
		console.log(JSON.stringify(card, null, 4));
	}

	console.log("There are: " + basicC.length + " basiccards.");
	console.log("There are: " + clozeC.length + " clozecards.");
	console.log("There are: " + cards.length + " total cards.")

};
//for (var i = 0; i < clozeC.length; i++) {
//      console.log("There are: " + clozeC.length + " clozecards.");
//};

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