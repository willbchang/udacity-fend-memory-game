export default class Event {
  static onClick(matchCards) {
    $('.deck').on('click', 'li', matchCards);
  }

  static offClick() {
    $('.deck').off('click', 'li');
  }

  static oneClick(ticktock) {
    $('.deck').one('click', 'li', ticktock);
  }

  static onRestart(reset) {
    $('.restart').click(reset);
  }
}
