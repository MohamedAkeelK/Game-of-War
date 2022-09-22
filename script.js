// CARD CLASS
class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

// DECK CLASS
class Deck {
  constructor(cards) {
    this.cards = [];
    this.createDeck();
    this.shuffle();
    this.shuffle();
  }
  createDeck() {
    let suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    let ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], j + 2));
      }
    }
    return this.cards;
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let newPos = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[newPos];
      this.cards[newPos] = temp;
    }
    return this.cards;
  }

  draw() {
    return this.cards.pop(); // draw from top of deck
  }
}
