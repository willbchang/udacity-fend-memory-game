// Shuffle function from https://stackoverflow.com/a/6274381/9984029
Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }

  return this;
};

Array.prototype.shuffled = function name() {
  const faCards = this.shuffle();
  $('.card i[class^="fa"]').each(function (index) {
    $(this).removeClass($(this).attr('class')).addClass(faCards[index]);
  });
}

/**
 * Check whether current card is in cards array
 * it will return false when cards array is empty 
 * for loop will check each card in cards array
 *  array.includes() doesn't work here.
 * @param {jQuery Object} card 
 */
Array.prototype.have = function (card) {
  return this.reduce((b, c) => b || [c, card].match(), false);
};

Array.prototype.hide = function () {
  this.map(card => card.hide());
}

Array.prototype.pin = function () {
  this.map(card => card.pin());
}

Array.prototype.match = function () {
  // The second [0] gets the DOM Element from jQuery Object
  return this[0][0].isEqualNode(this[1][0]);
}
