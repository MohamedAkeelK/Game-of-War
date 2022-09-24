class GameOfWar {
  constructor() {
    this.deck = new Deck();
    this.player1 = new Player();
    this.player2 = new Player();
    this.splitDeck();
  }
  splitDeck() {
    // let cards = this.cards;
    this.player1.cards.push(
      ...this.deck.cards.slice(0, this.deck.cards.length / 2)
    );
    this.player2.cards.push(
      ...this.deck.cards.slice(this.deck.cards.length / 2)
    );
    return this;
  }
}

class Player {
  constructor() {
    this.cards = [];
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
    this.shuffle().shuffle();
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
    return this;
  }
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let newPos = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[newPos];
      this.cards[newPos] = temp;
    }
    return this;
  }
}

class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

let game = new GameOfWar();
console.log(game.deck);
console.log(game.player1);
console.log(game.player2);

// let mydeck = new Deck();

// console.log(mydeck.createDeck());
// console.log(mydeck.createDeck());
