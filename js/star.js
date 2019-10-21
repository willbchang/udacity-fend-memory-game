function rate(count) {
  count <= 12 ? dim(3) : count <= 16 ? dim(2) : dim(1);
}

function dim(nth) {
  $('.fa-star').eq(nth).removeClass('fa').addClass('far')
}

function reset() {
  $('.fa-star').removeClass('far').addClass('fa')
}

export { rate, reset };
