// constructor function for creating basicard objects
// front will be the question similar to:
// ("Who was the first president of the United States?")
// back is the answer similar to:
// ("George Washington")
var BasicCard = function (front, back) {
    // this if is the scope-safe version of our constructor (if forget to use new)
    if (!(this instanceof BasicCard)) { 
      return new BasicCard(front, back);
    }
      this.front = front,
      this.back = back
}

// creates the printBasic method and applies it to all BasicCard objects
BasicCard.prototype.printBasic = function() {
    console.log("\nFront: " + this.front + " \nBack: " + this.back);
};

// exporting the BasicCard constructor.  flashcard.js will require it.
module.exports = BasicCard;