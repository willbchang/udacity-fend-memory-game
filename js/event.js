export default class Event {
  static onClick(matchCards) {
    $('.deck').on('click', 'li', matchCards)
  }

  static offClick() {
    $('.deck').off('click', 'li')
  }

  static oneClick(startTimer) {
    $('.deck').one('click', 'li', startTimer)
  }

  static onRestart(reset) {
    $('.restart').click(reset)
  }
}
