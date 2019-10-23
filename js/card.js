jQuery.fn.extend({
  open: function () {
    this.addClass('open show');
  },
  hide: function () {
    this.removeClass('open show match');
  },
  match: function () {
    this.addClass('match');
  },
  isShowed: function () {
    return this.hasClass('show');
  },
  isMatched: function () {
    return this.hasClass('match')
  },
  matching: function (card) {
    // [0] gets the DOM element from a jQuery object.
    return this[0].isEqualNode(card[0]);
  },
  replace: function (card) {
    this.find('i').replaceWith(card.find('i'));
  }
});
