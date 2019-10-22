export default class Event {
  static onClick(handler) {
    $('.deck').on('click', 'li', handler);
  }

  static offClick() {
    $('.deck').off('click', 'li');
  }
  
  static onRestart(init) {
    $('.restart').click(init);
  }
}
