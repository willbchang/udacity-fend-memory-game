import "./card.js"
import Cards from "./cards.js"
import Counter from "./counter.js"
import Event from "./event.js"
import Timer from "./timer.js"
import Star from "./star.js"

$(function () {
  initGame()

  function initGame() {
    Cards.disorder()
    Timer.reset()
    Event.oneClick(startTimer)
    Event.onClick(matchCards)
    Event.onRestart(restartGame)
  }

  function startTimer() {
    Timer.start()
  }

  function matchCards() {
    if (Cards.opened().length > 1) return
    $(this).open()
    if (Cards.opened().length === 2) updateGame()
    if (Cards.matched().length === 16) endGame()
  }

  function updateGame() {
    Cards.matching()
    Counter.increase()
    Star.rate(Counter.count())
  }

  function endGame() {
    Timer.stop()
    Event.offClick()
    summaryGame()
  }

  function summaryGame() {
    const message = `  You used ${Timer.now()},\
    had ${Counter.count()} moves,\
    got ${Star.count()} star(s).\n
    Would you like to restart the game?`
    setTimeout(() => {
      if (confirm(message)) reset()
    }, 2000)
  }

  function restartGame() {
    Cards.reset()
    Counter.reset()
    Star.reset()
    Timer.reset()
    Event.oneClick(startTimer)
    Event.onClick(matchCards)
  }
})
