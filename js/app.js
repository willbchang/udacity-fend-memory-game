import "./card.js"
import Cards from "./cards.js"
import Star from "./star.js";
import Counter from "./counter.js"
import Event from "./event.js";
import Timer from "./timer.js";

$(function () {
  Cards.disorder();
  Event.oneClick(startTimer);
  Event.onClick(matchCards);
  Event.onRestart(init);

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

  function init() {
    Cards.hide();
    Cards.disorder();
    Counter.reset();
    Star.reset();
    Timer.reset();
    Event.oneClick(startTimer);
    Event.onClick(matchCards);
  }
});
