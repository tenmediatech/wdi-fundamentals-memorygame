/* console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
*/



// var cardOne = cards[0];

// cardsInPlay.push(cardOne);

//console.log('User flipped ' + cardsInPlay);

//var cardTwo = cards[1];

//cardsInPlay.push(cardTwo);

//console.log('value of cardInPlay array is ' + cardsInPlay);

//console.log('User flipped ' + cardsInPlay);



// functions

/* var flipCard = function(cardId) {
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		// if (cardOne === cardTwo) 
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again");
	}
}; */

// Card Game with the use of Object Starts:-

var cardId = 0;
//var cards = ['queen', 'queen', 'king', 'king'];
var cards = [

	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},

	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	},
];



// Card Game with the use of Object Ends:-

var cardsInPlay = [];


var checkForMatch = function(){
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
} else {
var checkForMatch = function() {
	if (cardsInPlay.length == 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
}
};

var flipCard = function() {
	var cardId = this.getAttribut('data-id');
	this.scr = console.log(cards[cardId].cardImage);
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	console.log("User flipped " + cards[cardId].rank);
	}
	else {
	console.log("User flipped " + cards[cardId].rank);
	}

	checkForMatch();
};

//flipCard(cards[cardId] = 0);

//flipCard(cards[cardId] = 2);

cardInplay.push(cards[cardId].rank);

var createBoard =function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addElementListener('click', flipCard);
		document.getElementsById('game-board').appendChild(cardElement);
	}
}

//console.log(card[cardId].cardImage);
//console.log(card[cardId].suit);

createBoard();








