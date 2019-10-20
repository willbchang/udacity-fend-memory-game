// https://api.jquery.com/jQuery.fn.extend/
jQuery.fn.extend({
  show: function () {
    this.addClass('open show');
  },
  hide: function () {
    this.removeClass('open show match');
  },
  pin: function () {
    this.addClass('match');
  },
  match: function (card) {
    // The second [0] gets the DOM Element from jQuery Object
    return this[0].isEqualNode(card[0]);
  },
  replace: function (card) {
    this.find('i').removeClass(this.find('i').attr('class'));
    this.find('i').addClass(card.find('i').attr('class'));
  }
});
