import "./card.js"
import { cards } from "./cards.js"
import * as star from "./star.js";
import * as counter from "./counter.js"
import * as event from "./event.js";

$(function () {
  init();
  event.onClick(handler);
  event.onRestart(init);

  function handler() {
    // avoid click opened and matched card
    if ($(this).isShowed()) return;
    if (cards().opening().length > 1) return;
    $(this).show();
    if (cards().opening().length !== 2) return;
    pair();
  }

  function pair() {
    cards().opening().matching();
    counter.increase();
    star.rate(counter.count());
  }

  function init() {
    cards().hide();
    cards().disorder();
    counter.reset();
    star.reset();
  }
});
