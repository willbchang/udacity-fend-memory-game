import "./card.js"
import { cards } from "./cards.js"
import * as star from "./star.js";

$(function () {
  cards().disorder();
  var pairing = [];
  var paired = [];
  var count = 0;

  $('.deck').on('click', 'li', function () {
    // avoid click matched and matching card
    if (paired.have($(this)) || pairing.have($(this))) return;

    if (pairing.length < 2) {
      pairing.push($(this));
      $(this).show();
    }

    if (pairing.length === 2) {
      matching(pairing);
      star.rate(count);
    }
  });

  $('.restart').click(function () {
    cards().hide();
    cards().disorder();
    pairing = [];
    paired = [];
    count = 0
    $('.moves').text(count);
    star.reset();
  });

  function matching(cards) {
    pairing = [];
    counter();
    cards[0].match(cards[1]) ? matched(cards) : unmatched(cards);
  }

  function matched(cards) {
    paired = paired.concat(cards);
    cards.pin();
  }

  function unmatched(cards) {
    setTimeout(() => cards.hide(), 1500);
  }

  function counter() {
    // avoid to count click while matching
    if (pairing.length === 0) {
      count += 1;
      $('.moves').text(count);
    }
  }
});
