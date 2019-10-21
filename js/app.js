import "./card.js"
import { cards } from "./cards.js"
import * as star from "./star.js";
import * as counter from "./counter.js"

$(function () {
  cards().disorder();
  var pairing = [];

  $('.deck').on('click', 'li', function () {
    if ($(this).hasClass('open')) return;

    $(this).show();
    pairing.push($(this));

    if (pairing.length === 2) {
      pairing.match();
      pairing = [];
      counter.increase();
      star.rate();
    }
  });

  $('.restart').click(function () {
    cards().hide();
    cards().disorder();
    pairing = [];
    counter.reset();
    star.reset();
  });
});
