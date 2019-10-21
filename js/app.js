import "./card.js"
import { cards } from "./cards.js"
import * as star from "./star.js";
import * as counter from "./counter.js"

$(function () {
  cards().disorder();
  var pairing = [];

  onClick(handler);
  onRestart(init);

  function onClick(handler) {
    $('.deck').on('click', 'li', handler);
  }

  function onRestart(init) {
    $('.restart').click(init);
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

  function init() {
    cards().hide();
    cards().disorder();
    pairing = [];
    counter.reset();
    star.reset();
  }
});
