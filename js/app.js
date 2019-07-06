display();

var pairing = []; // an array to pair clicked cards
var paired = [];
var count = 0; // Call by counter()
var card; // current card, it's a jQuery element
// https://learn.jquery.com/events/event-delegation/#event-propagation
$('.deck').on('click', 'li', function () {
  card = $(this);
  open(card);
  push(card);

  if (pairing.length === 2) {
    isMatch(pairing[0], card) ? matched() : unmatched();
  }
});

function open(card) {
  // avoid open the third card while matching
  if (pairing.length <= 1) {
    card.addClass('open show');
  }
};

function push(card) {
  // avoid click same card twice
  if (!card.is(pairing[0])) {
    pairing.push(card);
  }
};

/**
 * Returns a boolean by compare two jQuery Object 
 * @param {jQuery Object} a 
 * @param {jQuery Object} b 
 * [0] gets the DOM Element from the jQuery Object
 */
function isMatch(a, b) {
  // [0] gets the DOM element from the jQuery object
  return a[0].isEqualNode(b[0]);
};

/*
 * Store matched cards to paired[] and reset pairing[];
 * the for loop is to avoid click matched cards
 * it will check whether the pairing cards are already paired.
 */
function matched() {
  for (const card of paired) {
    if (isMatch(card)) return pairing = [];
  }

  paired = paired.concat(pairing);
  pairing = [];
  counter();
}

/* 
 * hide unmatched cards and empty pairing[]
 * give time to memorize cards' position
 */
function unmatched() {
  setTimeout(() => {
    for (const card of pairing) {
      card.removeClass('open show');
    }
    pairing = [];
    counter();
  }, 1500);
}

/**
 * Count each pairing click, update the counter
 */
function counter() {
  count += 1;
  $('.moves').text(count);
}

// Get cards' classes and return as an array
function cards() {
  var cards = [];
  $('.card i').each(function() {
    cards.push($(this).attr('class'));
  });
  
  return cards;
}

/*
* Display the shuffled cards on the page
*   - shuffle the list of cards with "shuffle()"
*   - loop through each card and change its class with shuffled one.
*/

function display() {
  const shuffledCards = shuffle(cards());
  var index = 0;
  var oldClass;
  var newClass;
  
  $('.card i[class^="fa"]').each(function() {
    oldClass = $(this).attr('class');
    newClass = shuffledCards[index];
    $(this).removeClass(oldClass).addClass(newClass);
    index += 1;
  });
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
