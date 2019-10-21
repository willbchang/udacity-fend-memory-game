import { count } from "./counter.js";

function rate() {
  count() <= 12 ? remain(3) : count() <= 16 ? remain(2) : remain(1)
}

function remain(nth) {
  $('.fa-star').eq(nth).removeClass('fa').addClass('far')
}

function reset() {
  $('.fa-star').removeClass('far').addClass('fa')
}

export { rate, reset };
