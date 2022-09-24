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

class GameOfWar {
  constructor() {
    this.winner = "";
    this.playerOneDeck = [];
    this.playerTwoDeck = [];
    this.gameSetup();
  }
  gameSetup() {
    const deck = new Deck();
    let cards = deck.cards;
    this.playerOneDeck.push(...cards.slice(0, cards.length / 2));
    this.playerTwoDeck.push(...cards.slice(cards.length / 2));
  }
  playerOneDeckDraw() {
    return this.playerOneDeck.pop();
  }
  playerTwoDeckDraw() {
    return this.playerTwoDeck.pop();
  }
}

let newGame = new GameOfWar();

while (newGame.playerOneDeck.length > 0) {
  let card1 = newGame.playerOneDeckDraw();
  let card2 = newGame.playerTwoDeckDraw();
  if (card1.score > card2.score) {
    console.log("player 1 wins!");
  } else if (card2.score > card1.score) {
    console.log("player 2 wins!");
  } else {
    console.log("Lets Go to War!");
    newGame.playerOneDeckDraw();
    newGame.playerOneDeckDraw();
    newGame.playerOneDeckDraw();
    let final1 = newGame.playerOneDeckDraw().Card.score;
    final2 = newGame.playerTwoDeckDraw();
    final2 = newGame.playerTwoDeckDraw();
    final2 = newGame.playerTwoDeckDraw();
    let final2 = newGame.playerTwoDeckDraw().Card.score;

    // console.log(final1, "final1");
    if (final1.score > final2.score) {
      console.log("player 1 wins war cards!");
    } else if (final1.score > final2.score) {
      console.log("player 2 wins war cards!");
    } else {
      return "tie Again";
    }
  }
}
