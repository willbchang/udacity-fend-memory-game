// Extend jQuery object for dot access.
// https://api.jquery.com/jQuery.fn.extend
jQuery.fn.extend({
  open: function () {
    this.addClass('open show')
  },
  hide: function () {
    this.removeClass('open show match')
  },
  match: function () {
    this.addClass('match')
  },
  showed: function () {
    return this.hasClass('show')
  },
  matched: function () {
    return this.hasClass('match')
  },
  isMatched: function (card) {
    // [0] gets the DOM element from a jQuery object.
    return this[0].isEqualNode(card[0])
  },
  // Replace card's icon
  replace: function (card) {
    this.find('i').replaceWith(card.find('i'))
  }
})
