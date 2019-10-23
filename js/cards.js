// For single card's dot functions please check card.js
export default class Cards {
  static cards = $.map($('.card'), card => $(card));
  // Change cards status to hide.
  static hide(cards) {
    cards.map(card => card.hide());
  }
  
  // Change cards status to match.
  static match(cards) {
    cards.map(card => card.match());
  }

  // Get matched cards.
  static matched() {
    return this.cards.filter(card => card.isMatched());
  }
  
  // Get showed cards -- opened or matched.
  static showed() {
    return this.cards.filter(card => card.isShowed());
  }
  
  // Get opened cards -- opened but not matched.
  static opening() {
    return this.showed().filter(card => !card.isMatched());
  }
  
  // Check if two cards is matched, then match or hide them. 
  static matching() {
    this.opening()[0].matching(this.opening()[1]) ?
      this.match(this.opening()) : setTimeout(() => this.hide(this.opening()), 1500);
  }
  
  // Shuffle cards with deep copy because this.cards is immutable.
  // https://api.jquery.com/clone/
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
