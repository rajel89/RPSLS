let prompt = require('prompt-sync')();
const Game = require('./game');

const gameModeOptions = {
    A: 'multiplayer',
    B: 'ai'
}

console.log('------------ Select Game Mode ------------')
console.log("")

while (1) {
    const selectedGameMode = prompt("A: multiplayer\nB: ai\nC: exit\n");
    if (selectedGameMode === 'A' || selectedGameMode === 'B' || selectedGameMode === 'C') {
        if (selectedGameMode === 'C') {
            console.log('------------ Game Terminated ------------\n')
            break;
        } else {
            const newGame = new Game(gameModeOptions[selectedGameMode]);
            break;
        }
    }
}

