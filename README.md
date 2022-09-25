# Game-of-War

Game of war card game

run `node game-of-war.js` to start game.

## how it works

Two players evenly split a shuffled deck of 52 standard playing cards. Each stack is facedown, and players cannot look at the cards in their stack or rearrange them. The objective of the game is to play until one player has all 52 cards in their stack.

Players take turns playing the top card from their stacks. Whoever's card is a higher value puts both cards at the bottom of their stack.

If there is a tie, then it's War! Each player adds three cards of their stack face down. Each player reveals their fourth card. Whoever wins that reveal takes all of the cards! If there is another tie the process repeats until there is a winner.

### my game setup

Card class
` class Card { constructor(suit, rank, score) { this.suit = suit; this.rank = rank; this.score = score; } }`

Player class

```
class Player {
constructor() {
this.cards = [];
this.field_cards = [];
}
draw() {
return this.field_cards.push(this.cards.pop());
}
}
```

Deck class

```
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
let newPos = Math.floor(Math.random() \* (i + 1));
let temp = this.cards[i];
this.cards[i] = this.cards[newPos];
this.cards[newPos] = temp;
}
return this;
}
}
```
