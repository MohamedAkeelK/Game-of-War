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
    this.playerOneDeck = [];
    this.playerTwoDeck = [];
    this.cardsInPlay = {
      current_p1: [],
      current_p2: [],
    };
    this.discard = {
      discard_p1: [],
      discard_p2: [],
    };
    this.gameSetup();
  }
  gameSetup() {
    const deck = new Deck();
    let cards = deck.cards;
    this.playerOneDeck.push(...cards.slice(0, cards.length / 2));
    this.playerTwoDeck.push(...cards.slice(cards.length / 2));
  }
  playerOneDeckDraw() {
    this.cardsInPlay.current_p1.push(this.playerOneDeck.pop());
    return;
  }
  playerTwoDeckDraw() {
    this.cardsInPlay.current_p2.push(this.playerTwoDeck.pop());
    return;
  }
  checkWinner() {
    if (
      this.cardsInPlay.current_p1[0].score >
      this.cardsInPlay.current_p2[0].score
    ) {
      let card1 = this.cardsInPlay.current_p1[0];
      let card2 = this.cardsInPlay.current_p2[0];
      this.discard.discard_p1.push(card1, card2);
      this.cardsInPlay.current_p1 = [];
      this.cardsInPlay.current_p2 = [];
      console.log("player 1 wins");
    } else {
      let card1 = this.cardsInPlay.current_p1[0];
      let card2 = this.cardsInPlay.current_p2[0];
      this.discard.discard_p2.push(card1, card2);
      this.cardsInPlay.current_p1 = [];
      this.cardsInPlay.current_p2 = [];
      console.log("player 2 wins");
    }
  }
}

const newGame = new GameOfWar();

// console.log(newGame);

console.log("/n ------------------ CYCLE 1 ------------------------ /n");

console.log("p1-draw-card", newGame.playerOneDeckDraw());
console.log("p2-draw-card", newGame.playerTwoDeckDraw());
console.log("cards in playyyyyyy ", newGame.cardsInPlay);

console.log("CHECKING WINNER: ", newGame.checkWinner());
console.log("DISCARD : ", newGame.discard);

console.log("cards in playyyyyyy ", newGame.cardsInPlay);

console.log("/n ------------------ CYCLE 2 ------------------------ /n");

console.log("p1-draw-card", newGame.playerOneDeckDraw());
console.log("p2-draw-card", newGame.playerTwoDeckDraw());
console.log("cards in playyyyyyy ", newGame.cardsInPlay);
console.log("CHECKING WINNER: ", newGame.checkWinner());
console.log("DISCARD : ", newGame.discard);

// console.log("p1-draw-card", newGame.playerOneDeckDraw());
// console.log("p2-draw-card", newGame.playerTwoDeckDraw());
// console.log("p1-draw-card", newGame.playerOneDeckDraw());
// console.log("p2-draw-card", newGame.playerTwoDeckDraw());
// console.log("p1-draw-card", newGame.playerOneDeckDraw());
// console.log("p2-draw-card", newGame.playerTwoDeckDraw());
// console.log("cardsInPlayEEEEE : ", newGame.cardsInPlay);
// console.log("CHECKING WINNER: ", newGame.checkWinner());
// console.log("p1-draw-card", newGame.playerOneDeckDraw());
// console.log("p2-draw-card", newGame.playerTwoDeckDraw());
// console.log("CHECKING WINNER: ", newGame.checkWinner());

// console.log("DISCARD : ", newGame.discard);
