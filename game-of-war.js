// GAME OF WAR CLASS
class GameOfWar {
  constructor() {
    this.deck = new Deck();
    this.player1 = new Player();
    this.player2 = new Player();
    this.splitDeck();
  }
  runGame() {
    let i = 0;

    while (
      this.player1.cards.length <= 52 ||
      this.player2.cards.length <= 52 ||
      this.player1.cards.length !== 0 ||
      this.player2.cards.length !== 0
    ) {
      if (this.player1.cards.length === 0) {
        return "PLAYER 2 WINS THE GAME OF WAR!!!!!";
      }

      if (this.player2.cards.length === 0) {
        return "PLAYER 1 WINS THE GAME OF WAR!!!!!";
      }

      i++;
      console.log("----------- round " + i + " -------------------");

      this.player1.draw();
      this.player2.draw();
      console.log(" P1 PLAYED : ", this.player1.field_cards);
      console.log(" ");
      console.log(" P2 PLAYED : ", this.player2.field_cards);
      console.log(" ");
      console.log("P1 DECK LENGTH: : " + this.player1.cards.length);
      console.log(" ");
      console.log("P2 DECK LENGTH: : " + this.player2.cards.length);
      console.log(" ");
      this.handleWinner();
    }
  }
  handleWinner() {
    let p1_feild = this.player1.field_cards;
    let p2_feild = this.player2.field_cards;
    if (
      p1_feild[p1_feild.length - 1].score > p2_feild[p2_feild.length - 1].score
    ) {
      console.log(" P1 WINS THIS ROUND!");
      console.log(" ");
      this.move_field_cards_to_winner(this.player1, this.player2);
    } else if (
      p2_feild[p2_feild.length - 1].score > p1_feild[p1_feild.length - 1].score
    ) {
      console.log(" P2 WINS WINS THIS ROUND!");
      console.log(" ");
      this.move_field_cards_to_winner(this.player2, this.player1);
    } else {
      console.log(" @@@@@@@@@@@@ LETS GO TO WARRRRRRRR ! @@@@@@@@@@@@@@@@@@@");
      console.log(" ");
      console.log(this.gotowar());
    }
  }

  move_field_cards_to_winner(winner, loser) {
    for (let i = 0; i < winner.field_cards.length; i++) {
      winner.cards.unshift(winner.field_cards[i]);
    }
    for (let i = 0; i < loser.field_cards.length; i++) {
      winner.cards.unshift(loser.field_cards[i]);
    }

    winner.field_cards = [];
    loser.field_cards = [];
  }
  gotowar() {
    if (this.player1.cards.length < 3) {
      console.log("player 1 loses ran out of cards");
      return "player 1 loses ran out of cards";
    }
    if (this.player2.cards.length < 3) {
      console.log("player 2 loses ran out of cards");
      return "player 2 loses ran out of cards";
    }

    this.player1.draw();
    this.player2.draw();
    this.player1.draw();
    this.player2.draw();
    this.player1.draw();
    this.player2.draw();
    console.log(" ------ p1 war cards: ", this.player1.field_cards);
    console.log(" ------ p2 war cards: ", this.player2.field_cards);
    this.handleWinner();
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
}

// PLAYER CLASS
class Player {
  constructor() {
    this.cards = [];
    this.field_cards = [];
  }
  draw() {
    return this.field_cards.push(this.cards.pop());
  }
}

// DECK CLASS
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

// CARD CLASS
class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

// NEW GAME
let game = new GameOfWar();
console.log(game.runGame());
