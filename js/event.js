export default class Event {
  static onClick(handler) {
    $('.deck').on('click', 'li', handler);
  }

  static offClick() {
    $('.deck').off('click', 'li');
  }

  static oneClick(startTimer) {
    $('.deck').one('click', 'li', startTimer);
  }

  static onRestart(init) {
    $('.restart').click(init);
  }
}
