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
    let clonedCards = this.cards.map(card => card.clone());
    const shuffledCards = this.shuffle(clonedCards);
    this.cards.map((card, i) => card.replace(shuffledCards[i]));
  }

  static reset() {
    this.hide(this.cards);
    this.disorder();
  }

  // https://stackoverflow.com/a/6274381/9984029
  static shuffle = function (cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }
}
