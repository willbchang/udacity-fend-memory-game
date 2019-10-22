import "./card.js"
import Cards from "./cards.js"
import * as star from "./star.js";
import * as counter from "./counter.js"
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
    counter.increase();
    star.rate(counter.count());
  }

  function init() {
    Cards.hide();
    Cards.disorder();
    counter.reset();
    star.reset();
  }
});
