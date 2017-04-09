// constructor function for creating ClozeCard objects
var ClozeCard = function(fullText, clozeDeletion) {
	this.fullText = fullText;
	this.clozeDeletion = clozeDeletion;

	this.partialText = function(fullText, clozeDeletion) {
		// TODO implement logic for partial text
		// first see if clozeDeletion is contained within fullText
		if (this.fullText.indexOf(this.clozeDeletion) !== -1) {
			// is found within fullText
			var partialStringer = this.fullText.replace(this.clozeDeletion);
			console.log("partialStringer" + partialStringer);
			//	the following replace the undefined (replaced above with '...')
			var	newPartialStringer = partialStringer.replace(/ *\b\S*?undefined\S*\b/g, ' ...');
			console.log("newpartialStringer: " + newpartialStringer);
			return newPartialStringer;
		}
		else {
			// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
			var brokenCloze = ("This full text: " + this.fullText + " does not contain the cloze: " + this.clozeDeletion);
			throw error(brokenCloze);
			//console.log(brokenCloze);
			return;
		}
	}
};

// creates the printInfo method and applies it to all ClozeCard objects
ClozeCard.prototype.printInfo = function() {
    console.log("fullText: " + this.fullText + " clozeDeletion: " + this.clozeDeletion + " partialText: " + this.partialText);
};

  // prints out a different card
//  this.printClose = function() {
//      console.log("fullText: " + this.fullText + " clozeDeletion: " + this.clozeDeletion+ " partialText: " + this.partialText);
// };

// exporting the ClozeCard constructor which we will use in flashCard.js
module.exports = ClozeCard;