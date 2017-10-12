// This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;

// The constructor should accept two arguments: front and back.

// The constructed object should have a front property that contains the text on the front of the card.

// The constructed object should have a back property that contains the text on the back of the card.


var BasicCard = function (front, back) {
    this.front = front;
    this.back = back;
    // this.printBcard = function () {
    //     console.log ("Card front:  "+ this.front + "\nCard back: " + this.back)
    }


// var firstPresident = new BasicCard( "George ... was the first president of the United States.", "Washington" );

// var greatWorld = new BasicCard ("The ... War was the term used to describe World War I at the time of the war.", "Great")

// var lightbulb = new BasicCard ("Thomas ... is credited with the invention of the incandescent lightbulb.", "Edison");

// firstPresident.printBcard();
// greatWorld.printBcard();
// lightbulb.printBcard();

module.exports = BasicCard;


