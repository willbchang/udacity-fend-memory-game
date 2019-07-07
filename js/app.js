var pairing = []; // an array to pair clicked cards
var paired = []; // an array to store paired cards
var count = 0; // count move(click two different cards)
var card; // store current card, it's a jQuery element

// This could fix hosit problem for customize array.prototype
$(function () {
  init();

  // https://learn.jquery.com/events/event-delegation/#event-propagation
  $('.deck').on('click', 'li', function () {
    card = $(this);

    if (paired.has(card)) return; // avoid click matched card
    if (pairing.length < 2) {
      pairing.put(card);
      show(card);
    }

    if (pairing.length === 2) {
      matching(pairing);
    }
  });

  $('.restart').click(function () {
    init();
  });
});

function init() {
  hide(pairing);
  hide(paired);
  shuffleCards();
  pairing = [];
  paired = [];
  count = 0
  $('.moves').text(count);
}

/*
* Display the hide shuffled cards on the page
*   - shuffle the list of cards with "shuffle()"
*   - loop through each card and change its class with shuffled one.
*/
function shuffleCards() {
  const shuffledCards = cards().shuffle();
  var index = 0;
  var oldClass;
  var newClass;

  $('.card i[class^="fa"]').each(function () {
    oldClass = $(this).attr('class');
    newClass = shuffledCards[index];
    $(this).removeClass(oldClass).addClass(newClass);
    index += 1;
  });
}

/**
 * Get cards' classes from HTML
 * returns an array
 */
function cards() {
  var cards = [];
  $('.card i').each(function () {
    cards.push($(this).attr('class'));
  });

  return cards;
}

function show(card) {
  card.addClass('open show');
}

function hide(cards) {
  for (const card of cards) {
    card.removeClass('open show');
  }
}

/**
 * It matches two cards in array
 *  reset pairing
 *  count move
 * @param {Array} cards A copy of pairing[]
 */
function matching(cards) {
  pairing = [];
  counter();
  isMatch(cards[0], cards[1]) ? matched(cards) : unmatched(cards);
}

/**
 * Returns a boolean by compare two jQuery Object 
 * @param {jQuery Object} a 
 * @param {jQuery Object} b 
 * [0] gets the DOM Element from the jQuery Object
 */
function isMatch(a, b) {
  return a[0].isEqualNode(b[0]);
}

/**
 * Store matched cards to paired[] and reset pairing[];
 * the for loop is to avoid click matched cards
 * it will check whether the pairing cards are already paired.
 */
function matched(cards) {
  paired = paired.concat(cards);
}

/**
 * Hide unmatched cards and empty pairing[]
 * NOTICE: there is a time out
 *  pairing[] can't be empty in event listener
 *  otherwise card won't hide
 * give player sometime to memorize cards' position
 */
function unmatched(cards) {
  setTimeout(() => {
    hide(cards);
  }, 1500);
}

/**
 * Count each pairing click, update the counter
 */
function counter() {
  // avoid to count click while matching
  if (pairing.length === 0) {
    count += 1;
    $('.moves').text(count);
  }
}


// Shuffle function from https://stackoverflow.com/a/6274381/9984029
Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }

  return this;
};

/**
 * Check if a card is in paired[]
 * the first if avoid the empty paired[]
 * for loop check each item in paired[]
 *  array.includes() doesn't work here.
 * @param {jQuery Object} card 
 */
Array.prototype.has = function (card) {
  if (this.length === 0) return false;

  for (const pairedCard of this) {
    if (isMatch(pairedCard, card)) return true;
  }

  return false;
};

/** 
 * An array.push() method with if statement
 *  it avoids push the same card to pairing []
 *  which means click same card twice
 */
Array.prototype.put = function (card) {
  if (!card.is(this[0])) {
    this.push(card);
  }
};
