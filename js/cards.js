export default class Cards {
  constructor() {
    this.cards = $.map($('.card'), card => $(card));
  }
  hide(aCards) {
    aCards.map(card => card.hide());
  }
  disorder() {
    const x = this.cards.map(card => card.clone()).shuffle();
    this.cards.map((card, i) => card.replace(x[i]));
  }
  match() {
    this.opening().map(card => card.match());
  }
  showed() {
    return this.cards.filter(card => card.isShowed());
  }
  opening() {
    return this.showed().filter(card => !card.isMatched());
  }
  matching() {
    this.opening()[0].matching(this.opening()[1]) ?
      this.match() : setTimeout(() => this.hide(this.opening()), 1500);
  }
}

// Shuffle function from https://stackoverflow.com/a/6274381/9984029
Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }

  return this;
};
