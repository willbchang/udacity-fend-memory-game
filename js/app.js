import "./card.js"
import { cards } from "./cards.js"
import * as star from "./star.js";

$(function () {
  cards().disorder();
  var pairing = [];
  var count = 0;

  $('.deck').on('click', 'li', function () {
    if ($(this).hasClass('open')) return;

    $(this).show();
    pairing.push($(this));

    if (pairing.length === 2) {
      pairing.match();
      pairing = [];
      counter();
      star.rate(count);
    }
  });

  $('.restart').click(function () {
    cards().hide();
    cards().disorder();
    pairing = [];
    count = 0
    $('.moves').text(count);
    star.reset();
  });

  function counter() {
    count += 1;
    $('.moves').text(count);
  }
});
