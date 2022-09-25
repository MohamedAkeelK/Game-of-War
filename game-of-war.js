class GameOfWar {
  constructor() {
    this.deck = new Deck();
    this.player1 = new Player();
    this.player2 = new Player();
    this.isWinner = false;
    this.winner = "";
    this.round = 0;
    this.splitDeck();
  }
  runGame() {
    let i = 0;
    while (this.player1.cards != 52 || this.player2 != 52) {
      if (this.player1.cards.length === 52) {
        console.log("PLAYER 1 WINS !!!! PLAYER 2 SUCKS! HAHAHAHAHA");
        return "PLAYER 1 WINSSSSS";
      }

      if (this.player2.cards.length === 52) {
        console.log("PLAYER 2 WINS !!!! PLAYER 1 SUCKS! HAHAHAHAHA");
        return "PLAYER 2 WINSSSSS";
      }
      i++;
      console.log("----------- round " + i + " -------------------");

      // if (this.player1.cards.length === ) {
      //   return "Player Two wins!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
      // }

      // if (this.player2.cards.length === 0) {
      //   return "Player One wins!!!!";
      // }
      this.player1.draw();
      this.player2.draw();
      console.log(
        " P1 FIELD CARDS : ",
        this.player1.field_cards,
        "p1fl: " + this.player1.field_cards.length,
        "p1cl: " + this.player1.cards.length
      );
      console.log(
        " P2 FIELD CARDS : ",
        this.player2.field_cards,
        "p2fl: " + this.player2.field_cards.length,
        "p2cl: " + this.player2.cards.length
      );

      this.handleWinner();

      console.log(" P1 FIELD CARDS : ", this.player1.field_cards);
      console.log(" P2 FIELD CARDS : ", this.player2.field_cards);
      console.log("p1cl: ", this.player1.cards.length);
      console.log("p2cl: ", this.player2.cards.length);
    }
  }
  handleWinner() {
    let p1_feild = this.player1.field_cards;
    let p2_feild = this.player2.field_cards;
    if (
      p1_feild[p1_feild.length - 1].score > p2_feild[p2_feild.length - 1].score
    ) {
      console.log(" P1 WINS");
      this.move_field_cards_to_winner(this.player1, this.player2);
    } else if (
      p2_feild[p2_feild.length - 1].score > p1_feild[p1_feild.length - 1].score
    ) {
      console.log(" P2 WINS");
      this.move_field_cards_to_winner(this.player2, this.player1);
    } else {
      console.log("EVEn ---^^^^^^^^^^^^^^^^^Y%$Y%^$%^$%^^^^^^^^^^^^");

      this.gotowar();
    }
  }

  move_field_cards_to_winner(winner, loser) {
    console.log("winning card: ", winner.field_cards);
    console.log("loser cards: ", loser.field_cards);

    console.log("moving feild cards to winners cards.");
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
    console.log(" LETS GO TO WARRRRRRRR !@$@#$@$%#$%%^@$%^@#$^$%^@$%@#$");
    // this.player1.draw();
    // this.player2.draw();
    this.player1.draw();
    this.player2.draw();
    this.player1.draw();
    this.player2.draw();
    this.handleWinner();

    // this.player1.draw();
    // this.player1.draw();
    // this.player1.draw();
    // this.player2.draw();
    // this.player2.draw();
    // this.player2.draw();
    // this.handleWinner();
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
    return this.field_cards.push(this.cards.pop()); // draw from top of deck
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
game.runGame();
