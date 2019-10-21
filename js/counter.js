function update(num) {
  $('.moves').text(num);
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
