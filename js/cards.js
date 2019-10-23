export default class Cards {
  static cards = $.map($('.card'), card => $(card));
  static hide(cards) {
    cards.map(card => card.hide());
  }
  
  static match() {
    this.opening().map(card => card.match());
  }

  static matched() {
    return this.cards.filter(card => card.isMatched());
  }
  
  static showed() {
    return this.cards.filter(card => card.isShowed());
  }
  
  static opening() {
    return this.showed().filter(card => !card.isMatched());
  }
  
  static matching() {
    this.opening()[0].matching(this.opening()[1]) ?
      this.match() : setTimeout(() => this.hide(this.opening()), 1500);
  }
  
  static disorder() {
    const shuffledCards = this.cards.map(card => card.clone()).shuffle();
    this.cards.map((card, i) => card.replace(shuffledCards[i]));
  }

  static reset() {
    this.hide(this.cards);
    this.disorder();
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
