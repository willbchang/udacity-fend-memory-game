export default class Timer {
  static interval
  static start() {
    let duration = 0
    this.interval = setInterval(() => this.update(++duration), 1000)
  }

  static update(duration) {
    $('.timer').text(this.clock(duration))
  }

  static now() {
    return $('.timer').text()
  }

  static stop() {
    clearInterval(this.interval)
  }

  static reset() {
    this.stop()
    this.update(0)
  }

  // Convert Number to clock format.
  // https://stackoverflow.com/a/847196/9984029
  static clock(duration) {
    const date = new Date(duration * 1000)
    const minutes = "0" + date.getMinutes()
    const seconds = "0" + date.getSeconds()
    return minutes.substr(-2) + ' : ' + seconds.substr(-2)
  }
}
