// Shuffle function from https://stackoverflow.com/a/6274381/9984029
Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }

  return this;
};

/**
 * Check whether current card is in cards array
 * it will return false when cards array is empty 
 * for loop will check each card in cards array
 *  array.includes() doesn't work here.
 * @param {jQuery Object} card 
 */
Array.prototype.has = function (card) {
  for (const pairedCard of this) {
    if (pairedCard[0].isEqualNode(card[0])) return true;
  }
  return false;
};
