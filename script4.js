class GameOfWar {
  constructor() {
    this.deck = new Deck();
    this.player1 = new Player();
    this.player2 = new Player();
    this.isWinner = false;
    this.splitDeck();
  }
  splitDeck() {
    this.player1.cards.push(
      ...this.deck.cards.slice(0, this.deck.cards.length / 2)
    );
    this.player2.cards.push(
      ...this.deck.cards.slice(this.deck.cards.length / 2)
    );
    return this;
  }
  runGame() {
    let i = 1;
    while (
      this.player1.cards.length != 0 &&
      this.player2.cards.length != 0 &&
      !this.isWinner
    ) {
      console.log(i);
      i++;
      this.player1.draw();
      this.player2.draw();
      this.checkWinner();
    }
  }
  checkWinner() {
    let p1_lastCard =
      this.player1.field_cards[this.player1.field_cards.length - 1];
    let p2_lastCard =
      this.player2.field_cards[this.player2.field_cards.length - 1];
    if (p1_lastCard.score > p2_lastCard.score) {
      console.log("p1 wins");
    } else if (p2_lastCard.score > p1_lastCard.score) {
      console.log("p2 wins");
    } else {
      console.log("CARDS ARE EVEN");
    }
  }
}

class Player {
  constructor() {
    this.cards = [];
    this.field_cards = [];
  }
  draw() {
    return this.field_cards.push(this.cards.pop()); // draw from top of deck
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
game.runGame();
