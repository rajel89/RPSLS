var prompt = require('prompt-sync')();
const Human = require('./human');
const AI = require('./ai');

class Game {

    constructor(gameMode) {

        this.options = {
            A: "Rock",
            B: "Scissor",
            C: "Paper",
            D: "Lizard",
            E: "Spock"
        }
        this.aiOptions = {
            1: 'A',
            2: 'B',
            3: 'C',
            4: 'D',
            5: 'E'
        }
        this.gameMode = gameMode;
        if (gameMode === 'multiplayer') {
            this.playerOne = new Human('One');
            this.playerTwo = new Human('Two');
            this.gameLoopForMultiPlayer();
        } else {
            this.playerOne = new Human('One');
            this.playerTwo = new AI('Two');
            this.gameLoopForAI();
        }
    }

    gameLoopForAI() {
        while (1) {
            console.log("Player One's score: " + this.playerOne.getScore());
            console.log("AI score: " + this.playerTwo.getScore());
            console.log("--------------------------------------");

            let playerOneInput = null;
            while (1) {
               
               
                console.log("\nPlayer One's turn\n   ")
                
                playerOneInput = prompt("\nA: Rock\nB: Scissor\nC: Paper\nD: Lizard\nE: Spock", { echo: '' });
                if (playerOneInput === 'A' || playerOneInput === 'B' || playerOneInput === 'C'|| playerOneInput === 'D'|| playerOneInput === 'E') {
                    break;
                }
                console.log("Choose weapon available");
                
            }
            
            let AIInput = this.getAIInput();
            if (this.options[playerOneInput] !== this.options[AIInput]) {
                console.log("\nPlayer One selected: " + this.options[playerOneInput]);
                console.log("AI selected: " + this.options[AIInput],"\n");
                let turnWinner = this.checkTurnWinner(playerOneInput, AIInput);
                this.assignScore(turnWinner);
                let hasWon = this.checkWinner();
                if (hasWon) {
                    console.log("\nGame Over...");
                    console.log("--------------------------------------");
                    return;
                }
            }
        }
    }

    getAIInput() {
        let num = Math.floor(Math.random() * 6) + 1;
        return this.aiOptions[num];
    }

    gameLoopForMultiPlayer() {
        while (1) {
            console.log("Player One's score: " + this.playerOne.getScore());
            console.log("Player Two's score: " + this.playerTwo.getScore());

            let playerOneInput = null;
            let playerTwoInput = null;
            while (1) {
                console.log("\n--------------------------------------");
                console.log("Player One's turn\n   ")
                playerOneInput = prompt("A: Rock\nB: Scissor\nC: Paper\nD: Lizard\nE: Spock", { echo: '' });
                if (playerOneInput === 'A' || playerOneInput === 'B' || playerOneInput === 'C'|| playerOneInput === 'D'|| playerOneInput === 'E') {
                    break;
                }
                console.log("Please choose the available options only");
            }
            while (1) {
                console.log("\n--------------------------------------");
                console.log("Player Two's turn \n   ")
                playerTwoInput = prompt("A: Rock\nB: Scissor\nC: Paper\nD: Lizard\nE: Spock", { echo: '' });
                if (playerTwoInput === 'A' || playerTwoInput === 'B' || playerTwoInput === 'C' || playerTwoInput === 'D'|| playerTwoInput === 'E') {
                    break;
                }
                console.log("Please choose the available options only");
            }

            if (this.options[playerOneInput] !== this.options[playerTwoInput]) {
                console.log("\nPlayer One selected: " + this.options[playerOneInput]);
                console.log("Player Two selected: " + this.options[playerTwoInput],"\n");
                let turnWinner = this.checkTurnWinner(playerOneInput, playerTwoInput);
                this.assignScore(turnWinner);
                let hasWon = this.checkWinner();
                if (hasWon) {
                    console.log("\nGame Over...");
                    console.log("--------------------------------------");
                    return;
                }
            }
        }
    }

    assignScore(player) {
        if (player == 'One') {
            this.playerOne.increaseScore();
            
        } else {
            this.playerTwo.increaseScore();
            if (this.gameMode === 'multiplayer') {
            } else {
                console.log("AI scored  " +this.playerTwo.getScore());
            }

        }

    }

    checkWinner() {

        if (this.playerOne.getScore() === 3) {
            console.log("\nPlayer One won with a score of " + this.playerOne.getScore());
            return true;
        } else if (this.playerTwo.getScore() === 3) {
            if (this.gameMode === 'multiplayer') {
                console.log("\nPlayer Two won with a score of " + this.playerTwo.getScore());
            } else {
                console.log("\nAI won");
            }
            return true;
        }
        return false;
    }

    checkTurnWinner(playerOneInput, playerTwoInput) {
        if (this.options[playerOneInput] === 'Rock' && this.options[playerTwoInput] === 'Scissor') {
            return 'One'
        }
        if (this.options[playerOneInput] === 'Scissor' && this.options[playerTwoInput] === 'Paper') {
            return 'One'
        }
        if (playerOneInput === 'Paper' && playerTwoInput === 'Rock') {
            return 'One'
        }
        if (playerOneInput === 'Paper' && playerTwoInput === 'Spock') {
            return 'One'
        }
        if (playerOneInput === 'Lizard' && playerTwoInput === 'Paper') {
            return 'One'
        }
        if (playerOneInput === 'Spock' && playerTwoInput === 'Rock') {
            return 'One'
        }
        return 'Two';
    }

}

module.exports = Game;