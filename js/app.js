import "./card.js"
import { cards } from "./cards.js"
import * as star from "./star.js";
import * as counter from "./counter.js"
import * as event from "./event.js";

$(function () {
  let pairing;
  init();
  event.onClick(handler);
  event.onRestart(init);

  function handler() {
    // avoid click opened and matched card
    if ($(this).showed()) return;

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
