// constructor function for creating basicard objects
// front will be the question similar to:
// ("Who was the first president of the United States?")
// back is the answer similar to:
// ("George Washington")
var BasicCard = function (front, back) {
  this.front = front,
  this.back = back
}
  // prints out a different card
  this.printable = function() {
      console.log("front: " + this.front + " back: " + this.back);
  };

// exporting the BasicCard constructor.  flashcard.js will require it.
module.exports = BasicCard;