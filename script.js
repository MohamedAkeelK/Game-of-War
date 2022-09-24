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
    return this.cardsInPlay.current_p1;
  }
  playerTwoDeckDraw() {
    this.cardsInPlay.current_p2.push(this.playerTwoDeck.pop());
    return this.cardsInPlay.current_p2;
  }
  clearCurrentCards() {
    console.log("clearing");
    this.cardsInPlay.current_p1 = [];
    this.cardsInPlay.current_p2 = [];
    return "cleared";
  }

  checkEven() {
    if (
      this.cardsInPlay.current_p1[this.cardsInPlay.current_p1.length - 1]
        .score ===
      this.cardsInPlay.current_p2[this.cardsInPlay.current_p2.length - 1].score
    ) {
      return true;
    } else {
      return false;
    }
  }

  compareWinner() {
    // console.log(
    //   this.cardsInPlay.current_p1[this.cardsInPlay.current_p1.length - 1].score,
    //   "HERERERERERERERERERERERERERERERERER"
    // );
    //  if player 1 last card score is higher, set card1 and card2 = to the last current card in play
    //  push all cards into player 1 discard pile.
    //  reset cardsInPlay to an empty array.
    //  return winner as string.
    if (
      this.cardsInPlay.current_p1[this.cardsInPlay.current_p1.length - 1]
        .score >
      this.cardsInPlay.current_p2[this.cardsInPlay.current_p2.length - 1].score
    ) {
      console.log("HitTTTTTTTTTTTTTT !!!!!!!");
      this.discard.discard_p1.push(
        this.cardsInPlay.current_p1,
        this.cardsInPlay.current_p2
      );
      this.winner = "player1";
      this.cardsInPlay.current_p1 = [];
      this.cardsInPlay.current_p2 = [];
      return this.winner;
      //  if player 2 last card score is higher, set card1 and card2 = to the last current card in play
      //  push all cards into player 1 discard pile.
      //  reset cardsInPlay to an empty array.
      //  return winner as string.
    } else if (
      this.cardsInPlay.current_p1[this.cardsInPlay.current_p1.length - 1]
        .score >
      this.cardsInPlay.current_p2[this.cardsInPlay.current_p2.length - 1].score
    ) {
      console.log("Hpunchhhhhhhhh !!!!!!!");
      this.discard.discard_p2.push(
        this.cardsInPlay.current_p1,
        this.cardsInPlay.current_p2
      );
      this.cardsInPlay.current_p1 = [];
      this.cardsInPlay.current_p2 = [];
      this.winner = "player2";
      return this.winner;
    } else {
      // return this.checkWinner();
      console.log("Lets Go to War!");
      for (let i = 0; i < 4; i++) {
        this.playerOneDeckDraw();
        this.playerTwoDeckDraw();
      }
      return this.compareWinner();
    }
  }
  checkWinner() {
    //   if (this.checkEven()) {
    //     console.log("Lets Go to War!");
    //     for (let i = 0; i < 4; i++) {
    //       this.playerOneDeckDraw();
    //       this.playerTwoDeckDraw();
    //     }
    //     return this.compareWinner();
    //   } else {
    //     return this.compareWinner();
    //   }
    // }
    return this.compareWinner();
  }
}

const newGame = new GameOfWar();
console.log(newGame.playerOneDeck);
console.log(newGame.playerTwoDeck);

// while (newGame.playerOneDeck.length > 0 && newGame.playerTwoDeck.length > 0) {
//   newGame.playerOneDeckDraw();
//   newGame.playerTwoDeckDraw();
//   newGame.checkWinner();
//   newGame.clearCurrentCards();
// }

// console.log(newGame.playerOneDeck);
// console.log(newGame.playerTwoDeck);

// console.log(newGame);

console.log("/n ------------------ CYCLE 1 ------------------------ /n");

console.log("p1-draw-card", newGame.playerOneDeckDraw());
console.log("p2-draw-card", newGame.playerTwoDeckDraw());
console.log("cards in playyyyyyy ", newGame.cardsInPlay);

console.log("CHECKING WINNER: ", newGame.compareWinner());
console.log("DISCARD : ", newGame.discard);

console.log("cards in playyyyyyy ", newGame.cardsInPlay);

// console.log("/n ------------------ CYCLE 2 ------------------------ /n");

// console.log("p1-draw-card", newGame.playerOneDeckDraw());
// console.log("p2-draw-card", newGame.playerTwoDeckDraw());
// console.log("cards in playyyyyyy ", newGame.cardsInPlay);
// console.log("CHECKING WINNER: ", newGame.checkWinner());
// console.log("DISCARD : ", newGame.discard);

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
