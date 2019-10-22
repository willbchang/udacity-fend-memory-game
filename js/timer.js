export default class Timer {
  static duration = 100;
  static ticktock;
  static start(offClick) {
    let aDuration = this.duration;
    this.ticktock = setInterval(() => {
      aDuration !== 0 ? this.update(--aDuration) : (this.stop(), offClick());
    }, 1000);
  }

  static update(aDuration) {
    $('.timer').text(this.clock(aDuration));
  }

  static stop() {
    clearInterval(this.ticktock);
  }

  static reset() {
    this.stop();
    this.update(this.duration);
  }

  // https://stackoverflow.com/a/847196/9984029
  static clock(aDuration) {
    var date = new Date(aDuration * 1000);
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return minutes.substr(-2) + ' : ' + seconds.substr(-2);
  }
}
