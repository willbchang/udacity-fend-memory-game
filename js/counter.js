function update(move) {
  $('.moves').text(move);
}

function increase() {
  update(count() + 1);
}

function count() {
  return parseInt($('.moves').text());
}

function reset() {
  update(0);
}

export { increase, count, reset };
