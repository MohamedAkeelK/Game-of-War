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
    this.shuffle().shuffle().shuffle();
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
}

// class GameOfWar extends Deck {
//   constructor() {
//     super();
//     this.p1 = new Player();
//     this.p2 = [...this.cards.slice(this.cards.length / 2)];
//     this.p1_field = [];
//     this.p2_field = [];
//   }
// }

class Player extends Deck {
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let newPos = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[newPos];
      this.cards[newPos] = temp;
    }
    return this;
  }
    splitDeck() {
    // let cards = this.cards;
    this.p1.push(...this.cards.slice(0, this.cards.length / 2));
    this.p2.push(...this.cards.slice(this.cards.length / 2));
    return this;
  }

  draw() {
    this.cards.pop(); // draw from top of deck
    return this;
  }
}

const newGame = new GameOfWar();
// newGame.setUp();
// console.log(newGame.p1.draw());
// console.log(newGame.p1);
// console.log(newGame.p2);

// console.log(newgame.cards);
// console.log(newgame.draw());
