import "./card.js"
import Cards from "./cards.js"
import Star from "./star.js";
import Counter from "./counter.js"
import Event from "./event.js";
import Timer from "./timer.js";

$(function () {
  init();
  
  function init() {
    Cards.disorder();
    Timer.reset();
    Event.oneClick(startTimer);
    Event.onClick(matchCards);
    Event.onRestart(reset);
  }

  function startTimer() {
    Timer.start(Event.offClick);
  }

  function matchCards() {
    if (Cards.opening().length > 1) return;
    $(this).open();
    if (Cards.opening().length === 2) matching();
  }

  function matching() {
    Cards.matching();
    Counter.increase();
    Star.rate(Counter.count());
  }

  function reset() {
    Cards.reset();
    Counter.reset();
    Star.reset();
    Timer.reset();
    Event.oneClick(startTimer);
    Event.onClick(matchCards);
  }
});
