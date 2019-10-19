// https://api.jquery.com/jQuery.fn.extend/
jQuery.fn.extend({
  show: function () {
    this.addClass('open show');
  },
  hide: function () {
    this.removeClass('open show match');
  }
});
