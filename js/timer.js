export default class Timer {
  static interval;
  // Update timer per second.
  static start() {
    let aDuration = 0;
    this.interval = setInterval(() => this.update(++aDuration), 1000);
  }

  static update(aDuration) {
    $('.timer').text(this.clock(aDuration));
  }

  static now() {
    return $('.timer').text();
  }

  static stop() {
    clearInterval(this.interval);
  }

  static reset() {
    this.stop();
    this.update(0);
  }


  // Convert Number to clock format.
  // https://stackoverflow.com/a/847196/9984029
  static clock(aDuration) {
    var date = new Date(aDuration * 1000);
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return minutes.substr(-2) + ' : ' + seconds.substr(-2);
  }
}
