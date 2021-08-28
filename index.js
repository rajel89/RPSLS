const prompt = require('prompt-sync')();
const Game = require('./game');

const gameModeOptions = {
    A: 'multiplayer',
    B: 'ai'
}

console.log('------------ Select Game Mode ------------\n')


while (1) {
    const selectedGameMode = prompt("A: multiplayer\nB: ai\nC: exit\n");
    if (selectedGameMode === 'A' || selectedGameMode === 'B' || selectedGameMode === 'C') {
        console.log("\n--------------------------------------\n");
        if (selectedGameMode === 'C') {
            console.log('------------ Game Terminated ------------\n')
            break;
        } else {
            const newGame = new Game(gameModeOptions[selectedGameMode]);
            break;
        }
        
    }
}

