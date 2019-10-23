export default class Counter {
  static update(move) {
    $('.moves').text(move)
  }

  static increase() {
    this.update(this.count() + 1)
  }

  static count() {
    return parseInt($('.moves').text())
  }

  static reset() {
    this.update(0)
  }
}
