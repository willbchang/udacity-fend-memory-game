export default class Event {
  static onClick(handler) {
    $('.deck').on('click', 'li', handler);
  }
  
  static onRestart(init) {
    $('.restart').click(init);
  }
}
