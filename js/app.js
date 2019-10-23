import "./card.js"
import Cards from "./cards.js"
import Counter from "./counter.js"
import Event from "./event.js";
import Timer from "./timer.js";
import Star from "./star.js";

$(function () {
  init();

  function init() {
    Cards.disorder();
    Timer.reset();
    Event.oneClick(ticktock);
    Event.onClick(matchCards);
    Event.onRestart(reset);
  }

  function ticktock() {
    Timer.ticktock(endGame);
  }

  function matchCards() {
    if (Cards.opened().length > 1) return;
    $(this).open();
    if (Cards.opened().length === 2) matching();
    if (Cards.matched().length === 16) endGame();
  }

  function matching() {
    Cards.matching();
    Counter.increase();
    Star.rate(Counter.count());
  }

  function endGame() {
    Timer.stop();
    Event.offClick();
  }

  function reset() {
    Cards.reset();
    Counter.reset();
    Star.reset();
    Timer.reset();
    Event.oneClick(ticktock);
    Event.onClick(matchCards);
  }
});
