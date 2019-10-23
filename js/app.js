import "./card.js"
import Cards from "./cards.js"
import Counter from "./counter.js"
import Event from "./event.js";
import Timer from "./timer.js";
import Star from "./star.js";

$(function () {
  initGame();

  function initGame() {
    Cards.disorder();
    Timer.reset();
    Event.oneClick(startTimer);
    Event.onClick(matchCards);
    Event.onRestart(restartGame);
  }

  function startTimer() {
    Timer.start();
  }

  function matchCards() {
    if (Cards.opened().length > 1) return;
    $(this).open();
    if (Cards.opened().length === 2) updateGame();
    if (Cards.matched().length === 16) endGame();
  }

  function updateGame() {
    Cards.matching();
    Counter.increase();
    Star.rate(Counter.count());
  }

  function endGame() {
    Timer.stop();
    Event.offClick();
  }

  function restartGame() {
    Cards.reset();
    Counter.reset();
    Star.reset();
    Timer.reset();
    Event.oneClick(startTimer);
    Event.onClick(matchCards);
  }
});
