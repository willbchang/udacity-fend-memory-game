import "./card.js"
import "./cards.js"
import * as score from "./scoreboard.js";

var pairing = []; // an array to pair clicked cards
var paired = []; // an array to store paired cards
var count = 0; // count move(click two different cards)
var card; // store current card, it's a jQuery element

// This could fix hosit problem for customize array.prototype
$(function () {
  cards().disorder();

  // https://learn.jquery.com/events/event-delegation/#event-propagation
  $('.deck').on('click', 'li', function () {
    card = $(this);

    // avoid click matched and matching card
    if (paired.have(card) || pairing.have(card)) return;

    if (pairing.length < 2) {
      pairing.push(card);
      card.show();
    }

    if (pairing.length === 2) {
      matching(pairing);
      score.rate(count);
    }
  });

  $('.restart').click(function () {
    cards().hide();
    cards().disorder();
    pairing = [];
    paired = [];
    count = 0
    $('.moves').text(count);
    score.reset();
  });
});

/**
 * Get cards' classes from HTML
 * returns an array
 */
function cards() {
  return $.map($('.card'), card => $(card));
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
  cards[0].match(cards[1]) ? matched(cards) : unmatched(cards);

  /**
   * Store matched cards to paired[] and reset pairing[];
   * the for loop is to avoid click matched cards
   * it will check whether the pairing cards are already paired.
   */
  function matched(cards) {
    paired = paired.concat(cards);
    cards.pin();
  }

  /**
   * Hide unmatched cards and empty pairing[]
   * NOTICE: there is a time out
   *  pairing[] can't be empty in event listener
   *  otherwise card won't hide
   * give player sometime to memorize cards' position
   */
  function unmatched(cards) {
    setTimeout(() => cards.hide(), 1500);
  }
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
