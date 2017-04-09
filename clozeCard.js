// constructor function for creating ClozeCard objects
var ClozeCard = function(fullText, clozeDeletion) {
	// this if is the scope-safe version of our constructor (if forget to use new)
	if (!(this instanceof ClozeCard)) { 
		return new ClozeCard(fullText, clozeDeletion);
	}
	this.fullText = fullText,
	this.clozeDeletion = clozeDeletion
};

ClozeCard.prototype.partialText = function(fullText, clozeDeletion) {
	// logic for partial text
	// first see if clozeDeletion is contained within fullText
	if (this.fullText.indexOf(this.clozeDeletion) !== -1) {
		// is found within fullText
		var partialString = this.fullText.replace(this.clozeDeletion);
		//console.log("partialString" + partialString);
		//	the following replace the undefined (replaced above with '...')
		var	newpartialString = partialString.replace(/ *\b\S*?undefined\S*\b/g, ' ...');
		console.log("'" + newpartialString + "'");
		// saves the adjusted string to this.partialText  (Doesn't it?)
		return newpartialString;
	}
	else {
		// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
		var brokenCloze = ("***ERROR: " + this.fullText + " does not contain the clozeDeletion: " + this.clozeDeletion + " *****");
		console.log(brokenCloze);
		return;
	};
};

// creates the printCloze method and applies it to all ClozeCard objects
ClozeCard.prototype.printCloze = function() {
    console.log("\nFullText: " + this.fullText + " clozeDeletion: " + 
    	this.clozeDeletion);
};

// exporting the ClozeCard constructor which we will use in flashCard.js
module.exports = ClozeCard;