import "./card.js"
import Cards from "./cards.js"
import Star from "./star.js";
import Counter from "./counter.js"
import * as event from "./event.js";

$(function () {
  init();
  event.onClick(handler);
  event.onRestart(init);

  function handler() {
    if ($(this).isShowed()) return;
    if (Cards.opening().length > 1) return;
    $(this).open();
    if (Cards.opening().length === 2) pair();
  }

  function pair() {
    Cards.matching();
    Counter.increase();
    Star.rate(Counter.count());
  }

  function init() {
    Cards.hide();
    Cards.disorder();
    Counter.reset();
    Star.reset();
  }
});
