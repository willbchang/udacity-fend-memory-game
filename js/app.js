import "./card.js"
import { cards } from "./cards.js"
import * as star from "./star.js";
import * as counter from "./counter.js"

$(function () {
  cards().disorder();
  var pairing = [];

  onClick(handler);

  $('.restart').click(function () {
    cards().hide();
    cards().disorder();
    pairing = [];
    counter.reset();
    star.reset();
  });

  function onClick(handler) {
    $('.deck').on('click', 'li', handler);
  }

  function handler() {
    // avoid click opened and matched card
    if ($(this).hasClass('open')) return;

    $(this).show();
    pairing.push($(this));

    if (pairing.length === 2) {
      pairing.match();
      pairing = [];
      counter.increase();
      star.rate(counter.count());
    }
  }
});
