export default class Star {
  static rate(count) {
    count <= 12 ? this.remain(3) :
      count <= 16 ? this.remain(2) : this.remain(1)
  }

  static remain(nth) {
    $('.fa-star').eq(nth).removeClass('fa').addClass('far')
  }

  static reset() {
    $('.fa-star').removeClass('far').addClass('fa')
  }

  static count() {
    return $('.fa.fa-star').length
  }
}
